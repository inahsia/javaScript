import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true
  }
});

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  items: [orderItemSchema],

  totalAmount: {
    type: Number,
    required: true
  },

  paymentId: {
    type: String
  },

  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },

  orderStatus: {
    type: String,
    enum: ['placed', 'shipped', 'delivered', 'cancelled'],
    default: 'placed'
  }

}, { timestamps: true });

export default mongoose.model('Order', orderSchema);