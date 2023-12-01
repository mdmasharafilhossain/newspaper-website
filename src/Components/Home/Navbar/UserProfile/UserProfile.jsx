import { useContext } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { refetch, data: users = [], } = useQuery({
        queryKey: ['users'],

        queryFn: async () => {
            const res = await axiosSecure.get(`/users/profile/${user.email}`);
            console.log(res.data)
            return res.data;

        }

    })


    const hadndleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const UpdateProducts = {name,photo}
        console.log(UpdateProducts);
          axiosSecure.put(`/users/profile/${user.email}`,UpdateProducts)
          .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Update Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         })

    }

    return (
        <div className="mt-20">
            <h2>{users.length}</h2>
            <div className="mx-auto text-center w-4/12 ">
                <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">My Profile</h1>
            </div>

            {
                users.map(add => <div key={add._id}>
                    <img className="mx-auto rounded-full w-32" src={add.photo} alt="" />
                    <h2 className="text-center text-3xl font-bold mt-5">{add.name}</h2>
                    <h1 className="text-center text-lg">{add.email}</h1>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-red-600 text-white ml-[900px]" onClick={() => document.getElementById('my_modal_1').showModal()}>Update Profile</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                        <form onSubmit={hadndleUpdate}>
                        <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" defaultValue={add.name} placeholder="Name" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">

                                <input type="text" defaultValue={add.photo} placeholder="Brand Name" name="photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                        
                    </div>
                    <button className="btn mt-5 ml-48">Update</button>
                        </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>)
            }
        </div>
    );
};

export default UserProfile;