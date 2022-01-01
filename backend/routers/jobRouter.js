import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Job from '../models/jobModel.js';

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

export default jobRouter;