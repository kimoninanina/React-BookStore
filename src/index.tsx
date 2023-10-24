import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51O4qrlG8eWC9JxGGIU0Bf25THz9tfx249OTe0tGzFswRY3SZCOdM4LLyuXc2UNnsgkmPTEOUkptfortcK3iblpwJ00jbNZC8FK');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
</BrowserRouter>
);

