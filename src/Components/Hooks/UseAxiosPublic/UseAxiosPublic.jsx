import axios from "axios";

const asiosPublic = axios.create({
    baseURL:'http://localhost:5000'
})

const UseAxiosPublic = () => {
    return asiosPublic;
};

export default UseAxiosPublic;