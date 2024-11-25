import axios from "axios";
import { API_URL_BASE } from "./auctionService";

const API_URL = API_URL_BASE + "customers";
export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
  accountType: string;
}
export interface Createdcustomer extends Customer {
  id: number;
}

export const createCustomer = async (customer: Customer) => {
  try {
    const response = await axios.post(API_URL, customer, {
      timeout: 10000,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCustomers = async (id?: number) => {
  const url = id ? `${API_URL}/${id}` : API_URL;
  const response = await axios.get(url);
  return response.data;
};
