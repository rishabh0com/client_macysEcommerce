import axios from 'axios';

// const url = process.env.API_URL;
// console.log("url", url)
//
// All prduct and product find b         y query 
export const findAllProducts = async (query) => {
    try {
        console.log("product controller all")
        const res = await axios.get(`http://localhost:8080/products?${query}`, { withCredentials: true });
        console.log("product controller all")
        return await res.data
    } catch (error) {
        console.log("Error", error);
    }
};

// this is for product page only
export const findProductById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/products/${id}`, { withCredentials: true })
        console.log("product controller id is caled")
        return await res.data;
    } catch (error) {
        console.log("Error", error);
    }
}