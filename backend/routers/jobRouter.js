import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Job from '../models/jobModel.js';
import { isAdmin, isAuth } from '../utils.js';

const jobRouter = express.Router();

jobRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const jobs = await Job.find({});
    res.send(jobs);
  })
);

jobRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await Job.remove({}); 
    //add the above line to avoid repeated data, but it is a security hole
    const createdJobs = await Job.insertMany(data.jobs);
    res.send({ createdJobs });
  })
);

jobRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id);
    if (job) {
      res.send(job);
    } else {
      res.status(404).send({ message: 'Job Not Found' });
    }
  })
);

jobRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const job = new Job({
      name: 'SAMPLE' + Date.now(),
      position: 'Software engineer',
      vacancy : 0,
      salary: 0,
      count_applicants: 0,
      description: 'Work for us',
    });
    const createdJob = await job.save();
    res.send({ message: 'Job Created', job: createdJob });
  })
);
jobRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (job) {
      job.name = req.body.name;
      job.position = req.body.position;
      job.vacancy = req.body.vacancy;
      job.salary = req.body.salary;
      job.description = req.body.description;
      const updatedJob = await job.save();
      res.send({ message: 'Job Updated', job: updatedJob });
    } else {
      res.status(404).send({ message: 'Job Not Found' });
    }
  })
);

jobRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id);
    if (job) {
      const deleteJob = await job.remove();
      res.send({ message: 'job Deleted', job: deleteJob });
    } else {
      res.status(404).send({ message: 'job Not Found' });
    }
  })
);

export default jobRouter;