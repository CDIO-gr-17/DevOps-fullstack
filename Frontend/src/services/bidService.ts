import { API_URL_BASE } from "./auctionService";
import axios from "axios";

const API_URL = API_URL_BASE + "bid";

export interface Bid {
  bidId?: number;
  itemId: number;
  bidderId: number; // Ensure this matches the server-side model
  bidAmount: number; // Ensure this matches the server-side model
  bidTime?: string;
}
export interface SendingBid {
  itemId: number;
  costumerId: number;
  amount: number;
}
interface CreatedBidResponse {
  bidId: number;
}

export const getBids = async (itemId: number): Promise<Bid[]> => {
  try {
    const response = await axios.get(`${API_URL}/item/${itemId}`);
    return response.data as Bid[];
  } catch (error) {
    console.error("Error fetching bids:", error);
    throw error;
  }
};

export const createBid = async (bid: Bid, token: string): Promise<CreatedBidResponse> => {
  try {
    const response = await axios.post(`${API_URL}/private-scoped`, bid, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Bid created successfully");
    return response.data as CreatedBidResponse;
  } catch (error) {
    console.error("Error creating bid:", error);
    throw error;
  }
};
