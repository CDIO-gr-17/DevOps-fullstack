// src/views/PaymentPage/PaymentPage.tsx

import React, { useState } from 'react';
import './PaymentPage.css';
import { useNavigate } from 'react-router-dom';

interface PaymentPageProps {
  totalAmount: number;
  itemTitle: string;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ totalAmount, itemTitle }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock payment processing - add Stripe code here
    if (paymentDetails.cardNumber && paymentDetails.expiryDate && paymentDetails.cvv) {
      setPaymentStatus('Payment successful!');
      //  add a confirmation page if needed- remember to add as well in Routes.tsx
      setTimeout(() => {
        navigate('/confirmation'); 
      }, 2000);
    } else {
      setPaymentStatus('Payment failed. Please fill in all details.');
    }
  };

  return (
    <div className="payment-page">
      <h1 className="title">Payment for {itemTitle}</h1>
      <p className="total-amount">Total Amount: ${totalAmount.toFixed(2)}</p>

      <form className="payment-form" onSubmit={handlePayment}>
        <h3>Enter your payment details</h3>
        <div className="input-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            required
            placeholder="1234 5678 9123 4567"
          />
        </div>
        <div className="input-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handleInputChange}
            required
            placeholder="MM/YY"
          />
        </div>
        <div className="input-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
            required
            placeholder="123"
          />
        </div>
        <button type="submit" className="cta-button">Confirm Payment</button>
      </form>

      {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
    </div>
  );
};

export default PaymentPage;
