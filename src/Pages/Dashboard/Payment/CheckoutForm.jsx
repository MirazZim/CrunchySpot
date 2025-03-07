import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useContext, useEffect, useState }from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import UseCart from '../../../Hooks/UseCart';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements  = useElements();
     const [error , setError] = useState();
     const [transactionId, setTransectioId] = useState('');
     const [success , setSuccess] = useState();
     const [axiosSecure] = useAxiosSecure();
     const [cart, refetch] = UseCart();
     const navigate = useNavigate();
     const {user} = useContext(AuthContext);
     const totalPrice = cart.reduce((total, item) => total + item.price, 0);

     const [clientSecret, setClientSecret] = useState('');

     useEffect( () => {
        if(totalPrice > 0){
          axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })  
        }
     },[axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }

          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('payment error', error);
            setError(error.message)
          } else {
            console.log('Payment Method', paymentMethod);
            setError(null)
            setSuccess('Payment Method Successfully done !')
          }

          //confirm payment
          const {error : confirmError, paymentIntent} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'anonymous',
                  email: user?.email || 'anonymous',
                },
              },    
            },
          );

          if (confirmError) {
            console.log('payment error', confirmError);
            setError(confirmError.message)
          } else {
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded') {
                //TODO: 
                console.log('transaction id', paymentIntent.id);
                setTransectioId(paymentIntent.id);
                setSuccess('Payment Method Successfully done !')

              //now  save the payment in the database
              const payment = {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous',
                transactionId: paymentIntent.id,
                amount: totalPrice,
                cartIds: cart.map(item => item._id),
                menuItemIds: cart.map(item => item.foodId),
                status: 'pending',
                date: new Date() //utc date convert.  use moment js
              }

             const res = await axiosSecure.post('/payments', payment)
             console.log('payment saved',res)
             refetch();
             if(res.data?.paymentResult.insertedId){
              Swal.fire({
                title: "Payment Done!",
                text: "Your payment has been processed.",
                icon: "success"
            });
            navigate('/dashboard/paymentHistory');
                
             }


            }
            setError(null)
            setSuccess('Payment Method Successfully done !')
          }

    }
  return (
    <form onSubmit={handleSubmit}>
        <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn my-4 btn-primary rounded-full border-0 w-full md:w-auto px-8 py-4' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {error && <p className='text-red-500'>{error}</p>}
      {success && <p className='text-green-500'>{success}</p>}
      {transactionId && <p className='text-blue-500'>Transaction ID: {transactionId}</p>}

    </form>
  )
}

export default CheckoutForm