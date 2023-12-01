import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import Swal from "sweetalert2";


const CheakOutForm = () => {
    const [error,setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
  
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (!stripe || !elements) {
           
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
            console.log('error', error);
            setError(error.message);
          } else {
            console.log('PaymentMethod', paymentMethod);
            setError('');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "SuccessFull",
                showConfirmButton: false,
                timer: 1500
              });
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
      <button className="btn btn-small btn-primary" type="submit" disabled={!stripe}>
        Pay
      </button>
            <p className="text-red-700">{error}</p>
        </form>
    );
};

export default CheakOutForm;