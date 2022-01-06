import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        position: { type: String, required: true },
        vacancy: { type: Number, required: true },
        salary: { type: Number, required: true },
        count_applicants: { type: Number, required: true},
        description: { type: String },
        job: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Job',
          required: true,
        },
      },
    ],
    applicationdetails: {
      Id: {type: String},
      Email: {type: String},
      Name: { type: String /*required: true*/ },
      Phone: {type: String},
      College: { type: String },
      Degree: { type: String },
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;