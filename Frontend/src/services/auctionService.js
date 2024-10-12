// Frontend/src/services/auctionService.js
import axios from 'axios';

const API_URL = 'http://localhost:5064/api/auctions';

export const createAuction = async (auction) => {
    const response = await axios.post(API_URL, auction);
    return response.data;
};

export const getAuctions = async (id) => {
    const url = id ? `${API_URL}/${id}` : API_URL;
    const response = await axios.get(url);
    return response.data;
};