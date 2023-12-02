import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";

const AllArticles = ({art,refetch}) => {
    
    const AxiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const {_id,title,image,publisher,description,email,tag,views,author_name,author_photo,date,name} =art;
    const [isPremium, setIsPremium] = useState(false);
    const LimitDes = (description, limit) => {
        const words = description.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '.......';
        }
        return description;
    };
    const des = LimitDes(description, 20);
     
    const handaleMakePremium = e =>{
    e.preventDefault();
    setIsPremium(!isPremium);
    const ArticlePremiumInfo = {
        title,
        image,
        publisher,
        description,
}
    console.log(ArticlePremiumInfo);
    AxiosPublic.post('/premiumArticle',ArticlePremiumInfo)
    .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
            console.log("Article Added Database")
            Swal.fire({
                title: 'Done',
                text: `${title} Is Premium Now`,
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            navigate('/dashboard/allArticle');
        }
    })

    }

    const handleDelete = (art) =>{
        
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
                const res = await AxiosPublic.delete(`/article/premium/${_id}`);
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

    return (
        <div>
            <div>
                <div className={`card w-96 h-[800px] border  rounded-none bg-base-100 shadow-2xl`}>
                <figure><img className="h-60 w-full"  src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-bold text-2xl text-red-600">{title}</h2>
                    <p className="text-justify">{des} <Link to={`/serviceDetails/${_id}`}><button className="text-base font-bold text-red-600">Details</button></Link></p>
                    <div className="flex ">
                        <div>
                           <img  className="h-10 w-12" src={author_photo} alt="" />
                        </div>
                        <div>
                            <h1 className="ml-3 mt-2  text-red-600 font-bold">{author_name}</h1>
                        </div>
                        <div>
                            <h1 className="ml-3 mt-2   text-red-600 font-bold">{email}</h1>
                        </div>
                        
                    </div>
                    <div>
                            <h1 className="ml-3  text-red-600 font-bold">Date: {date}</h1>
                        </div>
                    <div>
                            <h1 className="ml-3  text-red-600 font-bold">Publisher:   {publisher}</h1>
                        </div>

                    {/* <div>
                        <p className="text-xl font-bold text-center border-2 bg-red-600 text-white">Publisher:{name}</p>
                    </div> */}
                    <div className="flex justify-around gap-2">
                        <button className="btn w-1/2">Approve</button>
                        <button className="btn w-1/2">Decline</button>
                    </div>
                    <div className="flex justify-around gap-2">
                        <button onClick={()=>handleDelete(art)}
                        className="btn w-1/2">Delete
                        </button>
                        <button
                         onClick={handaleMakePremium}
                        className="btn w-1/2">{isPremium ? <>
                         
                         <button className="btn bg-red-600 w-full text-white">Premium</button>
                        
                        </> : 'Make Premium'}</button>
                    </div>
                    
                    
                </div>
            </div> 
                </div>
        </div>
    );
};

export default AllArticles;