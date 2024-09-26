import React from 'react';
import { useNavigate } from 'react-router-dom';

interface WinnerPageProps {
  winnerName: string;
  itemTitle: string;
  auctionEndDate: string;
}

const WinnerPage: React.FC<WinnerPageProps> = ({ winnerName, itemTitle, auctionEndDate }) => {
  const navigate = useNavigate();
  const handleNavigateToPayment = () => {
    navigate('/paymentpage');
  };

  return (
    <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-gray-100 p-8 min-h-screen font-sans overflow-hidden">


      <img 
        src="/products/product3.jpg" 
        alt="Winner Celebration" 
        className="mb-6 w-2/3 max-w-md rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105" 
      />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center shadow-sm">
        Congratulations, {winnerName}!
      </h1>
      
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg mb-6 text-center">
        <p className="text-lg text-gray-700 mb-4">
          Your auction for <strong>{itemTitle}</strong> has been successfully processed.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          All that's left now is the delivery of your purchase.
        </p>
        <p className="text-lg text-gray-700">
          Auction Ended on: <strong>{auctionEndDate}</strong>
        </p>
      </div>
      
      <button
        className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg shadow-md hover:bg-indigo-700 hover:shadow-xl transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        onClick={handleNavigateToPayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default WinnerPage;
