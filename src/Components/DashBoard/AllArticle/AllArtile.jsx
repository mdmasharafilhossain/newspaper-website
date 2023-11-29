import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import AllArticles from "./AllArticles/AllArticles";


const AllArtile = () => {
    const axiosSecure = UseAxiosSecure();
    const { refetch, data: article = [] } = useQuery({
        queryKey: ['article'],
        queryFn: async () => {
            const res = await axiosSecure.get('/article');
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
        </div>
    );
};

export default AllArtile;