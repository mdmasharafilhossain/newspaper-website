
import CountUp from 'react-countup';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
const Count = () => {
    const axiosSecure = UseAxiosSecure();
    const {  data: count = [] } = useQuery({
        queryKey: ['user'],
        
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            console.log(res.data)
            return res.data;

        }
        
    })
    console.log(count);
    return (
        <div className='mt-10 container mx-auto'>
             <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">Our Users </h1>
             <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:ml-40'>
             <div className='border-2 border-red-700 w-1/2 text-center py-5'>
                <h2 className='font-bold text-3xl'>All User</h2>
                <CountUp className='font-bold text-3xl' end={count.length} 
            duration={10}
            />
             </div>
             <div className='border-2 border-red-700 w-1/2 text-center py-5'>
                <h2 className='font-bold text-3xl'>Premium Users</h2>
                <CountUp className='font-bold text-3xl' end={3} 
            duration={10}
            />
             </div>
             <div className='border-2 border-red-700 w-1/2 text-center py-5'>
                <h2 className='font-bold text-3xl'>Normal Users</h2>
                <CountUp className='font-bold text-3xl' end={3} 
            duration={10}
            />
             </div>
             </div>
            
        </div>
    );
};

export default Count;