import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure/UseAxiosSecure";


const MyArticleTable = ({user,index,refetch}) => {
    const {_id,image,title,status} = user;
    const axiosSucure = UseAxiosSecure();
    
    const handleDelete = (user) =>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSucure.delete(`/article/add/${_id}`);
                console.log(res.data);
            if(res.data.deletedCount){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Delete SuccessFully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            }
          });
    }

    const hadndleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        
        const UpdateProducts = {title}
        console.log(UpdateProducts);
        axiosSucure.put(`/article/add/${user._id}`,UpdateProducts)
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
        <div>
            <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* head */}
                    
                    <tbody>
                        {/* row 1 */}
                        <tr>
        <th>
          {index+1}
        </th>
        <td>
          <h1>{user.title}</h1>
        </td>
        <td>
        <button className="btn btn-ghost btn-xs">details</button>
          
         
        </td>
        <td>
        <button className="btn btn-ghost">{user.status}</button>
          
         
        </td>
        <td>
        <button className="btn bg-red-600 text-white ml-[900px]" onClick={() => document.getElementById('my_modal_1').showModal()}>Update</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                        <form>
                        <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">

                                <input type="text" defaultValue={user.title} placeholder="Name" name="title" className="input input-bordered w-full" />
                            </label>
                        </div>
                        
                        
                    </div>
                    
                        </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button onSubmit={hadndleUpdate}
                                     className="btn">Update</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
          
         
        </td>
       <button className="btn bg-red-600" onClick={()=>handleDelete(user)}
       >Delete</button>
        <th>
         
        </th>
      </tr>

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default MyArticleTable;