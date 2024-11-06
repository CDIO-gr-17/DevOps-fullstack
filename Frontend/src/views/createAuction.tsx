// src/components/CreateAuctionForm.tsx

import { AuctionWare, createAuction } from "@/services/auctionService";
import React, { useState } from "react";

const CreateAuctionForm: React.FC = () => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [minimumPrice, setMinimumPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [auctionStart, setAuctionStart] = useState("");
  const [auctionEnd, setAuctionEnd] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [highestBidderId, setHighestBidderId] = useState("");
  const [buyerId, setBuyerId] = useState("");
  const [auctionStatus, setAuctionStatus] = useState("Open");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const auction: AuctionWare = {
      ItemName: itemName,
      Description: description,
      MinimumPrice: parseFloat(minimumPrice),
      CurrentPrice: parseFloat(currentPrice),
      AuctionStart: new Date(auctionStart),
      AuctionEnd: new Date(auctionEnd),
      SellerId: parseInt(sellerId),
      HighestBidderId: parseInt(highestBidderId),
      BuyerId: parseInt(buyerId),
      AuctionStatus: auctionStatus as "Open" | "Closed" | "Sold",
    };
    try {
      const createdAuction = await createAuction(auction);
      console.log("Created Auction:", createdAuction);
      // Handle the created auction as needed, e.g., navigate to the auction details page
    } catch (error) {
      console.error("Error creating auction:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="itemName"
          className="block text-sm font-medium text-gray-700"
        >
          Item Name
        </label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Item Name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Description"
          required
        />
      </div>
      <div>
        <label
          htmlFor="minimumPrice"
          className="block text-sm font-medium text-gray-700"
        >
          Minimum Price
        </label>
        <input
          type="number"
          id="minimumPrice"
          value={minimumPrice}
          onChange={(e) => setMinimumPrice(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Minimum Price"
          required
        />
      </div>
      <div>
        <label
          htmlFor="currentPrice"
          className="block text-sm font-medium text-gray-700"
        >
          Current Price
        </label>
        <input
          type="number"
          id="currentPrice"
          value={currentPrice}
          onChange={(e) => setCurrentPrice(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Current Price"
          required
        />
      </div>
      <div>
        <label
          htmlFor="auctionStart"
          className="block text-sm font-medium text-gray-700"
        >
          Auction Start
        </label>
        <input
          type="datetime-local"
          id="auctionStart"
          value={auctionStart}
          onChange={(e) => setAuctionStart(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="auctionEnd"
          className="block text-sm font-medium text-gray-700"
        >
          Auction End
        </label>
        <input
          type="datetime-local"
          id="auctionEnd"
          value={auctionEnd}
          onChange={(e) => setAuctionEnd(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="sellerId"
          className="block text-sm font-medium text-gray-700"
        >
          Seller ID
        </label>
        <input
          type="number"
          id="sellerId"
          value={sellerId}
          onChange={(e) => setSellerId(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Seller ID"
          required
        />
      </div>
      <div>
        <label
          htmlFor="highestBidderId"
          className="block text-sm font-medium text-gray-700"
        >
          Highest Bidder ID
        </label>
        <input
          type="number"
          id="highestBidderId"
          value={highestBidderId}
          onChange={(e) => setHighestBidderId(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Highest Bidder ID"
          required
        />
      </div>
      <div>
        <label
          htmlFor="buyerId"
          className="block text-sm font-medium text-gray-700"
        >
          Buyer ID
        </label>
        <input
          type="number"
          id="buyerId"
          value={buyerId}
          onChange={(e) => setBuyerId(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Buyer ID"
          required
        />
      </div>
      <div>
        <label
          htmlFor="auctionStatus"
          className="block text-sm font-medium text-gray-700"
        >
          Auction Status
        </label>
        <select
          id="auctionStatus"
          value={auctionStatus}
          onChange={(e) => setAuctionStatus(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        >
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="Sold">Sold</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Auction
      </button>
    </form>
  );
};

export default CreateAuctionForm;
