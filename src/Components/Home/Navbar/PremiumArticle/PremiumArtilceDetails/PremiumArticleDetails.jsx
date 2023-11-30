import { useLoaderData, useParams } from "react-router-dom";


const PremiumArticleDetails = () => {
    const CardsInfo = useLoaderData();
    console.log(CardsInfo);
    const { id } = useParams();
    
    const InfoCard = CardsInfo.find(brand =>brand._id === id);
    
    console.log(InfoCard);
    return (
        <div className="mt-32">
            <div className="text-center">
           <h2 className="text-3xl w-1/4   ml-[700px] font-bold mt-5 mb-5 ">{InfoCard.title}</h2>
           <p className="mr-[350px] mb-10 font-bold">Published By : {InfoCard.publisher}</p>
           
            <img  className="mx-auto w-[500px] h-[400px] mb-5" src={InfoCard.image} alt="" />
            <h1 className="w-[500px] ml-[700px] text-xl text-justify ">{InfoCard.description}</h1>
            
            
           </div>
        </div>
    );
};

export default PremiumArticleDetails;