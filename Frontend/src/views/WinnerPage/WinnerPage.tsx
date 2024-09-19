import React from 'react';
import './WinnerPage.css';
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
    <div className="winner-page">
      <h1 className="title">Congratulations, {winnerName}!</h1>
      <div className="confirmation-message">
        <p>Your auction for <strong>{itemTitle}</strong> has been successfully processed.</p>
        <p>All that's left now is the delivery of your purchase.</p>
        <p>Auction Ended on: {auctionEndDate}</p>
      </div>
      <button className="cta-button" onClick={handleNavigateToPayment}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default WinnerPage;