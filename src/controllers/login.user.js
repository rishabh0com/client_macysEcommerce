import axios from "axios";
const api = import.meta.env.VITE_API_URL;

export const tokens = JSON.parse(localStorage.getItem("tokens"));

export const userLogin = async (details) => {
  // const {setUserDetail } = useContext(UserContext);

  try {
    console.log("in detail", details);
    const res = await axios.post(`${api}/users/login`, details, {
      withCredentials: true,
    });
    const resData = await res;
    console.log("in login controller", resData);
    if (resData.data.success) {
      const { firstName, lastName, email, _id } = resData.data.data.user;
      //   console.log(resData.data.data);
      console.log("Log In Data : ", resData.data.data);
      const { accessToken, refreshToken } = resData.data.data;
      localStorage.setItem(
        "tokens",
        JSON.stringify({ accessToken, refreshToken })
      );
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ firstName, lastName, email, userId: _id })
      );
      localStorage.setItem("access", true);
    }

    return resData.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      console.log("login Error", error);
    }
  } finally {
  }
};
