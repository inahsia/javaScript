import Razorpay from 'razorpay'
const id=process.env.RAZORPAY_KEY_ID
const secret=process.env.RAZORPAY_KEY_SECRET
const razorpay=new Razorpay({
  key_id:id,
  key_secret:secret
});

export const createOrderPayment=async(amount)=>{
  const options={
    amount:amount*100,
    currency:"INR",
    receipt:`receipt_${Date.now()}`

  }

const order=await razorpay.orders.create(options);
return order;
}
