// Frontend/src/services/auctionService.js
import axios from "axios";

const API_URL_BASE = import.meta.env.VITE_API_URL;

export const API_URL = API_URL_BASE + "auctionwares";

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
interface GetAuctionsResponse {
  items: AuctionWare[];
  totalItems: number;
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

export const getAuctions = async (
  search: string = "",
  page: number = 1,
  pageSize: number = 20
): Promise<GetAuctionsResponse> => {
  try {
    const response = await axios.get<{
      totalItems: number;
      auctions: AuctionWare[];
    }>(API_URL, {
      params: {
        search,
        page,
        pageSize,
      },
    });

    // Ensure the response data has the expected structure
    if (
      !response.data ||
      !Array.isArray(response.data.auctions) ||
      typeof response.data.totalItems !== "number"
    ) {
      console.error("Invalid response structure:", response.data);
      throw new Error("Invalid response structure");
    }

    return {
      items: response.data.auctions,
      totalItems: response.data.totalItems,
    };
  } catch (error) {
    console.error("Error fetching auctions:", error);
    throw error;
  }
};
