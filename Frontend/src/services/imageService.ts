import axios from "axios";
import { CreatedAuctionResponse } from "./auctionService";

const API_URL_BASE = import.meta.env.VITE_API_URL;

export const API_URL = API_URL_BASE + "image";

export const uploadImage = async (file: File, auctionWare: CreatedAuctionResponse ): Promise<void> => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("itemId", auctionWare.itemId.toString());
  
    try {
      const response = await axios.post(API_URL, formData);
  
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

// Function to get an image by ID
export const getImage = async (itemId: number): Promise<Blob> => {
  try {
    const response = await axios.get(`${API_URL}/${itemId}`, {
      responseType: 'blob' // Important to specify the response type as 'blob'
    });
    return response.data as Blob;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
};

// Function to get an image by auctionware ID
export const getAuctionWareImage = async (itemId: number): Promise<Blob> => {
  try {
    const response = await axios.get(`${API_URL}/auctionwareimage/${itemId}`, {
      responseType: 'blob' // Important to specify the response type as 'blob'
    });
    return response.data as Blob;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
};