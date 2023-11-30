
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './../../Hooks/UseAxiosSecure/UseAxiosSecure';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const AllUser = () => {
    const {loading} = useContext(AuthContext);

    const axiosSecure = UseAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;

        }

    })
     
    const handleMakeAdmin = user =>{
     axiosSecure.patch(`/users/admin/${user._id}`)
     .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is Admin Now`,
                showConfirmButton: false,
                timer: 1500
              });
        }
     })
    }

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
                                   {
                                    user.role === 'admin' ? <button className='btn bg-red-500 text-white'>Admin</button> : 
                                    <button 
                                    onClick={()=> handleMakeAdmin(user) }
                                    className="btn btn-ghost btn-xs">Make Admin</button>
                                   }
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