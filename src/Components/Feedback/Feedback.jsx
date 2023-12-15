import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";


const Feedback = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { data: feedback = [] } = useQuery({
        queryKey: ['feedback'],

        queryFn: async () => {
            const res = await axiosSecure.get('/feedback');
            return res.data;

        }

    })

    const handleAddPublisher = e => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName;
        const email = user?.email;
        const feedback = form.feedback.value;
        const userFeedbackInfo = {
            name,
            email,
            feedback 
        }
        console.log(userFeedbackInfo);
        axiosSecure.post('/feedback', userFeedbackInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Feedback Received Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }





            )

    }
    return (
        <div className="mt-28">
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">Submit Your FeedBack</h1>
            <form onSubmit={handleAddPublisher}>

                <div className="flex gap-5 ml-5">
                    <div className="form-control w-3/4 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={user?.displayName} readOnly placeholder="Publisher Name"  name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-3/4 md:w-1/2 lg:mr-5">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Publisher Photo" defaultValue={user?.email} readOnly name="email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <label className="form-control px-5">
                    <div className="label">
                        <span className="label-text">Your Feedback</span>
                        
                    </div>
                    <textarea name="feedback" className="textarea textarea-bordered h-24 " placeholder="Write your feedback...."></textarea>
                    
                </label>
                <button className="btn bg-red-500 w-1/4 ml-[700px] text-white mt-5">Submit</button>
            </form>
        </div>
    );
};

export default Feedback;