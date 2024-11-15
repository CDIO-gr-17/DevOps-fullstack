// Frontend/src/services/auctionService.js
import axios from "axios";

export interface AuctionWare {
  itemId?: number;
  itemName: string;
  description: string;
  minimumPrice: number;
  currentPrice: number;
  auctionStart: Date;
  auctionEnd: Date;
  sellerId: number;
  highestBidderId: number;
  buyerId: number;
  auctionStatus: string;
}

export interface CreatedAuction extends AuctionWare {
  id: number;
}

const API_URL = "http://51.120.6.166/api/auctionwares";

export const createAuction = async (auction: AuctionWare) => {
  const response = await axios.post(API_URL, auction);
  return response.data;
};

export const getAuctions = async (id?: number) => {
  const url = id ? `${API_URL}/${id}` : API_URL;
  const response = await axios.get(url);
  return response.data;
};
