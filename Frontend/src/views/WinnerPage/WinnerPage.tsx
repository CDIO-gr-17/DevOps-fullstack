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
    <div className="flex flex-col justify-center items-center bg-gray-100 p-8 min-h-screen font-sans">
      <img src="/hardCoded pic 1.jpg" alt="Winner Celebration" className="mb-6 w-2/3 max-w-md rounded-lg shadow-lg" />
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Congratulations, {winnerName}!</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mb-6 text-center">
        <p className="text-lg text-gray-700 mb-4">Your auction for <strong>{itemTitle}</strong> has been successfully processed.</p>
        <p className="text-lg text-gray-700 mb-4">All that's left now is the delivery of your purchase.</p>
        <p className="text-lg text-gray-700">Auction Ended on: <strong>{auctionEndDate}</strong></p>
      </div>
      
      <button
        className="bg-indigo-600 text-white py-2 px-4 rounded-md text-lg hover:bg-indigo-700"
        onClick={handleNavigateToPayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default WinnerPage;
