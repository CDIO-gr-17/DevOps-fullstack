// Frontend/src/services/auctionService.js
import axios from "axios";

export interface AuctionWare {
  ItemName: string;
  Description: string;
  MinimumPrice: number;
  CurrentPrice: number;
  AuctionStart: Date;
  AuctionEnd: Date;
  SellerId: number;
  HighestBidderId: number;
  BuyerId: number;
  AuctionStatus: string;
}

export interface CreatedAuction extends AuctionWare {
  id: number;
}

const API_URL = "http://51.120.6.166:8080/api/auctionwares";

export const createAuction = async (auction: AuctionWare) => {
  const response = await axios.post(API_URL, auction);
  return response.data;
};

export const getAuctions = async (id: number) => {
  const url = id ? `${API_URL}/${id}` : API_URL;
  const response = await axios.get(url);
  return response.data;
};
