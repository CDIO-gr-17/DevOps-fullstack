// Frontend/src/services/auctionService.js
import axios from "axios";

export interface NewAuctionWare {
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

export interface AuctionWare {
  itemId: number;
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

export interface CreatedAuction extends NewAuctionWare {
  id: number;
}

export interface CreatedAuctionResponse {
  itemId: number;
}

const API_URL = "http://localhost:8080/api/auctionwares";

export const createAuction = async (auction: NewAuctionWare): Promise<CreatedAuctionResponse> => {
  const response = await axios.post<CreatedAuctionResponse>(API_URL, auction);
  return response.data;
};

export const getAuctions = async (id?: number): Promise<AuctionWare[]> => {
  const url = id ? `${API_URL}/${id}` : API_URL;
  const response = await axios.get<AuctionWare[]>(url);
  return response.data;
};
