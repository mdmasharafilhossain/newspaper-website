import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const Publisher = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { refetch, data: publisher = [], } = useQuery({
        queryKey: ['users'],

        queryFn: async () => {
            const res = await axiosSecure.get('/publisher');
            console.log(res.data)
            return res.data;

        }

    })
    return (
        <div className="mt-20">
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">All Publisher </h1>

            <div className="grid grid-cols-1 container mx-auto lg:ml-80 gap-10 md:grid-cols-2 lg:grid-cols-2">
               {
                publisher.map(publish=> <div key={publish._id}>

                  <div>
                  <img className="w-52 h-40" src={publish.photo} alt="" />
                  <h1 className="ml-20 text-xl">{publish.name}</h1>
                  </div>

                </div>)
               }
            </div>
        </div>
    );
};

export default Publisher;