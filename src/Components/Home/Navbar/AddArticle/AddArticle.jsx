import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic/UseAxiosPublic";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";

const image_Hosting_key = "23272cf172fd85ad9006a154ec724204";
const Imgae_hosting_key = `https://api.imgbb.com/1/upload?key=${image_Hosting_key}`
const AddArticle = () => {
    useEffect(()=>{
        document.title = "The Independent | Add Article"
      },[]);
    const {user} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const axiosPublic = UseAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data);
        const ImageFile = {image:data.image[0]}
       const res = await axiosPublic.post(Imgae_hosting_key,ImageFile,{
        headers: {
            'content-type': 'multipart/form-data'
        }
       });
       console.log(res.data);
       if(res.data.success){
        const articleInfo = {
            title: data.title,
            image: res.data.data.display_url,
            publisher: data.publisher,
            description: data.description,
            tag: data.tag,
            email:user?.email,
            status:'pending'

        }
        // console.log(articleInfo);
        const ArticleRes = await axiosPublic.post('/article',articleInfo);
        console.log(ArticleRes.data);
        if(ArticleRes.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Article Added Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
       }
    
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