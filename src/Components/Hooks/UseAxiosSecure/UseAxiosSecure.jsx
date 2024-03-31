import axios from "axios";


const UseAxiosSecure = () => {
    const axiosSecure = axios.create({
        // baseURL:'https://newspaper-server-rosy.vercel.app'
        baseURL:'http://localhost:5000'
    })
    return axiosSecure;
};

export default UseAxiosSecure;