import axios from "axios";
const api = import.meta.env.VITE_API_URL;


export const register = async (inputDetails) => {
    try {
        const res = await axios.post(`${api}/users/register`, inputDetails, { withCredentials: true });
        const resData = await res;
        console.log("in register controller", resData);
        return resData.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            console.log("register Error", error);
        }
    }
}