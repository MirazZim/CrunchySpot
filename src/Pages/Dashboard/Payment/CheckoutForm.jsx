import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useState }from 'react'

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements  = useElements();
     const [error , setError] = useState(null);
     const [success , setSuccess] = useState(null);

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
      <button className='btn my-4 btn-primary rounded-full border-0 w-full md:w-auto px-8 py-4' type="submit" disabled={!stripe}>
        Pay
      </button>
      {error && <p className='text-red-500'>{error}</p>}
      {success && <p className='text-green-500'>{success}</p>}

    </form>
  )
}

export default CheckoutForm