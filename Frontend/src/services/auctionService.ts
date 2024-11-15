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

export const getAuction = async (id: number) => {
  const url = id ? `${API_URL}/${id}` : API_URL;
  const response = await axios.get(url);
  return response.data;
};

interface GetAuctionsResponse {
  items: AuctionWare[];
  totalItems: number;
}

export const getAuctions = async (
  search: string,
  page: number,
  pageSize: number = 20
): Promise<GetAuctionsResponse> => {
  try {
    const response = await axios.get<AuctionWare[]>(API_URL, {
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
    if (!Array.isArray(response.data)) {
      throw new Error("Invalid response structure");
    }

    return {
      items: response.data,
      totalItems: response.data.length, // Adjust this if the backend provides totalItems
    };
  } catch (error) {
    console.error("Error fetching auctions:", error);
    throw error;
  }
};
