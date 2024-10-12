// src/components/CreateAuctionForm.tsx

import React, { useState } from "react";
import { Auction, createAuction } from "@/services/auctionService";

const CreateAuctionForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const auction: Auction = {
      title,
      description,
      startingPrice: parseFloat(startingPrice),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={startingPrice}
        onChange={(e) => setStartingPrice(e.target.value)}
        placeholder="Starting Price"
        required
      />
      <input
        type="datetime-local"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <button type="submit">Create Auction</button>
    </form>
  );
};

export default CreateAuctionForm;
