import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import Swal from "sweetalert2";


const AddPublisher = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: publisher = [] } = useQuery({
        queryKey: ['publisher'],
        
        queryFn: async () => {
            const res = await axiosSecure.get('/publisher');
            return res.data;

        }

    })

    const handleAddPublisher = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        const PublisherInfo = {
            name,
            photo
        }
        console.log(PublisherInfo);
        axiosSecure.post('/publisher',PublisherInfo)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Publisher Added Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }}
           
            
            
            
            
            )
       
    }
    
    return (
        <div>
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">Add Publisher </h1>


            <div>
                <form onSubmit={handleAddPublisher}>

                <div className="flex gap-5 ml-5">
                <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Publisher Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Publisher Name" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Publisher Photo</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Publisher Photo" name="photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                </div>
                <button className="btn bg-red-500 text-white mt-5 ml-[600px]">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddPublisher;