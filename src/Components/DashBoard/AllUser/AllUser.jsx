
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './../../Hooks/UseAxiosSecure/UseAxiosSecure';

const AllUser = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }

    })
    return (
        <div>
            <div className="flex justify-evenly my-6">
                <h2 className="text-3xl ">All User</h2>
                <h2 className="text-3xl ">Total User:{users.length}</h2>
            </div>
            <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                    <h1>{user.name}</h1>
                                    <br />
                                    
                                </td>
                                <td>{user.email}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Make Admin</button>
                                </th>
                            </tr>)
                        }
                        
                    </tbody>
                    {/* foot */}
                 
                </table>
            </div>
        </div>
    );
};

export default AllUser;