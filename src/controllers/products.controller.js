
export const findAllProducts = async () => {
    try {
        const res = await fetch("http://localhost:8080/products");
        const resData = await res.json();
        console.log(resData)
        return resData;
    } catch (error) {
        console.log("Error", error);
    }
};