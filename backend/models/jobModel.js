import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true},
    //image: { type: String, required: true },
    position: { type: String, required: true },
    vacancy: { type: Number, required: true },
    salary: { type: Number, required: true },
    count_applicants: { type: Number, required: true},
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Job = mongoose.model('Job', jobSchema);

export default Job;