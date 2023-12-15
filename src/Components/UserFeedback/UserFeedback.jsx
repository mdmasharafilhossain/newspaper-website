import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure/UseAxiosSecure";


const UserFeedback = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { data: feedback = [] } = useQuery({
        queryKey: ['feedback'],

        queryFn: async () => {
            const res = await axiosSecure.get('/feedback');
            return res.data;

        }

    })
    return (
        <div>
            <h2 className="text-xl font-bold text-center mt-20">Total User Feedback :  {feedback.length}</h2>
            <div className="gird grid-cols-3 ">
            
               {
                   feedback.map(feed =><div className="border border-red-600 mx-60 text-center mt-10 p-20 " key={feed._id}>

                      <h2 className="text-2xl font-bold ">{feed.feedback}</h2>
                      <h1 className="mt-2 text-xl">--------{feed.name}</h1>
                      <p className="text-xs ml-10">{feed.email}</p>

                   </div>) 
                }
               
            </div>

        </div>
    );
};

export default UserFeedback;