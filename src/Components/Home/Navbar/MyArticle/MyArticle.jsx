import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import MyArticleTable from "./MyArticleTable/MyArticleTable";


const MyArticle = () => {
    useEffect(()=>{
        document.title = "The Independent | My Article"
      },[]);
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { refetch, data: users = [], } = useQuery({
        queryKey: ['users'],

        queryFn: async () => {
            const res = await axiosSecure.get(`/article/add/${user.email}`);
            console.log(res.data)
            return res.data;

        }

    })
    

    return (
        <div className="mt-32">
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">MY Article </h1>
            <div>
           

            {
                users.map((user,index)=><MyArticleTable key={user._id} refetch={refetch} index={index} user={user}></MyArticleTable>)
            }
            </div>
        </div>
    );
};

export default MyArticle;