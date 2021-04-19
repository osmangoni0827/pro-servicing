import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './PaymentFrom.css';
const PaymentFrom = ({formdata}) => {
  const stripe = useStripe();
  const elements = useElements();
  const{name,email,orderTitle}=formdata
  const [AllData,setAllData]=useState({});
  console.log(AllData);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      return;
    }

 
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      const NewData={...AllData}
        NewData.paymentId=paymentMethod.id;
        NewData.name=name;
        NewData.email=email;
        NewData.orderTitle=orderTitle
      setAllData(NewData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default PaymentFrom;