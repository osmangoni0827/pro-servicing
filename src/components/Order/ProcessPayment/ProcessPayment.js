import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentFrom from '../PaymentFrom/PaymentFrom';

  //Strip Api
const stripePromise = loadStripe(
'	pk_test_51IeMHCDxOVqYVf88Vca9XqWPlZtT7mHNsNvR5w46YemHApUUgOqLSNitfzyRQYSm3IBwUcMtDCsIWEzT4S6XclbD00FewspEPl'
);

const ProcessPayment = ({formdata}) => {
  return (
    <Elements stripe={stripePromise}>
     <PaymentFrom formdata={formdata}></PaymentFrom>
    </Elements>
  );
};

export default ProcessPayment;