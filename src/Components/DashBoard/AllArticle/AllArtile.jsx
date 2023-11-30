import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import AllArticles from "./AllArticles/AllArticles";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";


const AllArtile = () => {
    const [page,setPage]= useState(0);
    const [limit ,setLimit] = useState(3);
    const {loading} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const {refetch, data: {result : article = [],ArticleCount = 0} = {}} = useQuery({
        
        queryKey: ['article',page],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/article/premium?page=${page}&limit=${limit}`);
            console.log(res.data)
            return res.data;
            

        }
        

    });
    const totalPages = Math.ceil(ArticleCount / 3);
    const pages = [...new Array(totalPages).fill(0)]
    return (
        <div>
            <h2 className="text-4xl text-center  mt-10">All  Articles </h2>
           <div className="grid grid-cols-3  mx-10 gap-10 mt-20">
            { 
              
              article.map(art=> <AllArticles key={art._id} refetch={refetch} art={art}></AllArticles>)
            
            }
           </div>
           <div className="text-center mt-10 mb-10 ">
           {
            pages.map((item,index)=><button onClick={()=> setPage(index)}
            className={`btn border  ${page === index ? "bg-slate-400 text-black":"bg-red-600 text-white"} `}>{index+1}</button>)
           }
           
           </div>
        
        </div>
    );
};

export default AllArtile;