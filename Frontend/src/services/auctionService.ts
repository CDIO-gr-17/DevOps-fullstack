// Frontend/src/services/auctionService.js
import axios from "axios";

export const API_URL_BASE = import.meta.env.VITE_API_URL;

const API_URL = API_URL_BASE + "auctionwares";

export interface NewAuctionWare {
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

export interface AuctionWare {
  itemId: number;
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

export interface CreatedAuction extends NewAuctionWare {
  id: number;
}

export interface CreatedAuctionResponse {
  itemId: number;
}

export const createAuction = async (
  auction: NewAuctionWare,
  token: string
): Promise<CreatedAuctionResponse> => {
  const response = await axios.post<CreatedAuctionResponse>(`${API_URL}/private-scoped`, auction, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const getAuction = async (id?: number): Promise<AuctionWare> => {
  const url = id ? `${API_URL}/${id}` : API_URL;
  const response = await axios.get<AuctionWare>(url);
  return response.data;
};

export const getAuctions = async (
  search: string = "",
  page: number = 1,
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

    const totalItems = response.data.length;

    // Ensure the response data has the expected structure
    if (!response.data || !Array.isArray(response.data)) {
      console.error("Invalid response structure:", response.data);
      throw new Error("Invalid response structure");
    }

    return {
      items: response.data,
      totalItems: totalItems,
    };
  } catch (error) {
    console.error("Error fetching auctions:", error);
    throw error;
  }
};
