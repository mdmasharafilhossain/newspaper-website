import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";


const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    console.log(user.email)
    const {data:isAdmin} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin]
};

export default useAdmin;