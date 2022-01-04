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
        description: { type: String, required: true },
        job: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Job',
          required: true,
        },
      },
    ],
    applicationDetails: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;