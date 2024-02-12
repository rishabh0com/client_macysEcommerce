import axios from "axios";
const api = import.meta.env.VITE_API_URL;


export const userLogin = async (details) => {
    // const {setUserDetail } = useContext(UserContext);
    
    try {
        console.log("in detail", details)
        const res = await axios.post(`${api}/users/login`, details, {
            withCredentials: true
        })
        const resData = await res;
        console.log("in login controller", resData)
        if (resData.data.success) {
            const { firstName, lastName, email, _id } = resData.data.data;
            console.log(resData.data.data)
            localStorage.setItem("userInfo", JSON.stringify({ firstName, lastName, email, userId: _id }));
            localStorage.setItem("access", true);
        }

        return resData.data;

    }
    catch (error) {
        
        if (error.response) {
            return error.response.data;
        } else {
            console.log("login Error", error)

        }
    }finally{
        

    }
}


