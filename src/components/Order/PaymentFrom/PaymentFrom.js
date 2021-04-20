import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentFrom.css';
const PaymentFrom = ({ formdata }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { name, email, orderTitle, price } = formdata

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {

      const NewData = {}
      NewData.paymentId = paymentMethod.id;
      NewData.name = name;
      NewData.email = email;
      NewData.orderTitle = orderTitle;
      NewData.price = price;
      NewData.state = 'Pending'
      console.log(NewData);
      saveAllData(NewData);
    }
  };

  const saveAllData = (data) => {
    fetch('http://localhost:4500/addOrder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Your Order Successfully Done')
        }
      })
  }
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