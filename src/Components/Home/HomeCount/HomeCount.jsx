import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";


const HomeCount = () => {
    const axiosSecure = UseAxiosSecure();
    const {  data: result = []} = useQuery({
        queryKey: ['users'],
        
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            console.log(res.data)
            return res.data;

        }

    })
    return (
        <div>
            {result.length}
        </div>
    );
};

export default HomeCount;