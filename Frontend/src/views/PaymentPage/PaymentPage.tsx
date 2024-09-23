import React, { useState } from 'react';
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

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleDeliveryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryDetails({
      ...deliveryDetails,
      [name]: value,
    });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock payment processing - add Stripe code here
    if (paymentDetails.cardNumber && paymentDetails.expiryDate && paymentDetails.cvv) {
      setPaymentStatus('Payment successful!');
      // Add a confirmation page if needed - remember to add as well in Routes.tsx
      setTimeout(() => {
        navigate('/confirmation'); 
      }, 2000);
    } else {
      setPaymentStatus('Payment failed. Please fill in all details.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Checkout for {itemTitle}: Delivery & Payment</h1>
      <p className="text-xl text-indigo-600 mb-6">Total Amount: ${totalAmount.toFixed(2)}</p>

      {/* Delivery Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mb-6">
        <h3 className="text-xl font-semibold mb-4 text-black">Enter your delivery information</h3>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={deliveryDetails.name}
            onChange={handleDeliveryInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Jakob Vikingsen"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={deliveryDetails.address}
            onChange={handleDeliveryInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Blegstræde 12"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={deliveryDetails.city}
            onChange={handleDeliveryInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Holbæk"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={deliveryDetails.postalCode}
            onChange={handleDeliveryInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="2620"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={deliveryDetails.country}
            onChange={handleDeliveryInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Denmark"
          />
        </div>
      </div>

      {/* Payment Details Section*/}
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg" onSubmit={handlePayment}>
        <h3 className="text-xl font-semibold mb-4 text-black">Enter your payment details</h3>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handlePaymentInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="1234 5678 9123 4567"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handlePaymentInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handlePaymentInputChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="123"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Confirm Payment
        </button>
      </form>

      {paymentStatus && <p className="mt-4 text-lg text-green-600">{paymentStatus}</p>}
    </div>
  );
};

export default PaymentPage;
