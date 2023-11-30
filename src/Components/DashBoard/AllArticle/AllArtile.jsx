import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import AllArticles from "./AllArticles/AllArticles";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";


const AllArtile = () => {
    const [page,setPage]= useState(2);
    const {loading} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { data: {article = [],ArticleCount} } = useQuery({
        queryKey: ['article',page],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/article/premium?page=${page}`);
            return res.data;

        }

    })
    return (
        <div>
            <h2 className="text-4xl text-center  mt-10">All  Articles </h2>
           <div className="grid grid-cols-3  mx-10 gap-10 mt-20">
            { 
              
              article.map(art=> <AllArticles key={art._id} art={art}></AllArticles>)
            
            }
           </div>
           <div className="text-center mt-10 ">
            <button onClick={()=> setPage(page - 1)}
            className="btn bg-red-600 text-white">Previous</button>
            <button onClick={()=> setPage(page + 1)}
            className="btn bg-red-600 text-white ml-10">Next</button>
           </div>
        
        </div>
    );
};

export default AllArtile;