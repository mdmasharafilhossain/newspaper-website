import axios from "axios";


const UseAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL:'https://newspaper-server-rosy.vercel.app'
    })
    return axiosSecure;
};

export default UseAxiosSecure;