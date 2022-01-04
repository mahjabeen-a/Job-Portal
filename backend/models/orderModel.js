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
      fullName: { type: String /*required: true*/ },
      address: { type: String },
      city: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;