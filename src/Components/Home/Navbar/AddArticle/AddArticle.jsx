import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic/UseAxiosPublic";

const image_Hosting_key = import.meta.env.VITE_IMAGE_UPLOAD;
const Imgae_hosting_key = `https://api.imgbb.com/1/upload?key=${image_Hosting_key}`
const AddArticle = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = UseAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data);
       
    
    }
    return (
        <div className="mt-32">
            <div className="mx-auto text-center w-4/12 ">
                <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">Add Article</h1>
            </div>

            <div>
                <form className="container mx-auto space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Title</span>
                            
                        </div>
                        <input 
                        {...register("title")}
                         type="text" 
                         placeholder="Name Of The Article Title"  required
                         className="input input-bordered w-full" />
                        
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Description</span>
                            
                        </div>
                        <input 
                        {...register("description")}
                         type="text" 
                         placeholder="Description Of The Article Title"  required
                         className="input input-bordered w-full " />
                        
                    </label>
                    <div className="flex gap-5">
                    <select {...register("tag")}
                        className="select select-bordered w-full ">
                        <option disabled selected>Select Tag</option>
                        <option value="War">War</option>
                        <option value="Nature">Nature</option>
                        <option value="Technology">Technology</option>
                        <option value="Sports">Sports</option>

                    </select>
                    <select {...register("publisher")}
                        className="select select-bordered w-full ">
                        <option disabled selected>Select Publisher</option>
                        <option value="BBC">BBC</option>
                        <option value="CNN">CNN</option>
                        <option value="Aljajira">Aljajira</option>
                        <option value="NDTV">NDTV</option>

                    </select>
                    </div>
                    <div>
                    <input 
                    {...register("image")}
                    type="file" 
                    className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <input className="btn w-full bg-red-600 text-white" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddArticle;