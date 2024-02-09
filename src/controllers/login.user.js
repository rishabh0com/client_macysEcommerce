import axios from "axios";
export const userLogin = async (details)=>{
    try {
        // const res = await axios.po('http://localhost:8080/users/login',{
        //     method: 'POST',
        //     headers: {
        //         "set-cookie": "SameSite=None; Secure",
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(details),
        // },{
        //     credentials : 'include'
        // })
        // const resData = await res.json()
        // console.log(resData)
        console.log("in detail",details)
        const res = await axios.post('http://localhost:8080/users/login',details,{
            withCredentials: true
        })
        const resData = await res;
        console.log(resData)
        return resData;
        
    } 
    catch (error) {
        console.log("login Error",error)
    }
}


