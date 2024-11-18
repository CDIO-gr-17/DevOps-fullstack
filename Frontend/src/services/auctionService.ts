// Frontend/src/services/auctionService.js
import axios from "axios";

const API_URL_BASE = import.meta.env.VITE_API_URL;

export const API_URL = API_URL_BASE + "auctionwares";
console.log("API_URL:", API_URL);

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
interface GetAuctionsResponse {
  items: AuctionWare[];
  totalItems: number;
}

export const createAuction = async (auction: AuctionWare) => {
  const response = await axios.post(API_URL, auction);
  return response.data;
};

export const getAuction = async (id: number) => {
  const url = id ? `${API_URL}/${id}` : API_URL;
  const response = await axios.get(url);
  return response.data;
};

export const getAuctions = async (
  search: string = "",
  page: number = 1,
  pageSize: number = 20
): Promise<GetAuctionsResponse> => {
  console.log("API:" + API_URL);
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

    // Log the entire response object for debugging
    console.log("Full API response:", response);

    // Log the response data for debugging
    console.log("API response data:", response.data);

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
