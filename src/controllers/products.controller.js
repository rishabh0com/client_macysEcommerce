import axios from "axios";
import { tokens } from "./login.user";
const api = import.meta.env.VITE_API_URL;

// All prduct and product find by query
export const findAllProducts = async (query) => {
  try {
    // console.log("product controller all")
    const res = await axios.get(`${api}/products?${query}`, {
      withCredentials: true,
    });
    console.log("product controller all");
    console.log(res.data);
    return await res.data;
  } catch (error) {
    console.log("Error", error);
  } finally {
  }
};

// this is for product page only
export const findProductById = async (id) => {
  const { accessToken, refreshToken } = JSON.parse(
    localStorage.getItem("tokens")
  );

  try {
    const res = await axios.get(`${api}/products/${id}`, {
      withCredentials: true,
      headers: { Authorization: `${accessToken},${refreshToken}` },
    });
    console.log("product controller id is caled");
    return await res.data;
  } catch (error) {
    console.log("Error", error);
  } finally {
  }
};
