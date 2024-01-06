import axios from "axios";

const asiosPublic = axios.create({
    baseURL:'https://newspaper-server-rosy.vercel.app'
})

const UseAxiosPublic = () => {
    return asiosPublic;
};

export default UseAxiosPublic;