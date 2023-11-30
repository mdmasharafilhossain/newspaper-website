import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure/UseAxiosSecure";
import PremiumArticles from "./PremiumArtcles/PremiumArticles";


const PremiumArticle = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: PremiumArticle = [] } = useQuery({
        queryKey: ['PremiumArticle'],
        
        queryFn: async () => {
            const res = await axiosSecure.get('/premiumArticle');
            return res.data;

        }

    })
    return (
        <div className="mt-20">
            <div >
                <div className="mx-auto text-center w-4/12">
                <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">Premium Article </h1>
                </div>
              
              <div className="grid grid-cols-3 gap-10 container mx-auto">
                {
                   PremiumArticle.map(preart => <PremiumArticles key={preart._id} preart={preart}></PremiumArticles>

                   ) 
                }
              </div>

            </div>
        </div>
    );
};

export default PremiumArticle;