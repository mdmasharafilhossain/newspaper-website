import { Link } from "react-router-dom";


const PremiumArticles = ({preart}) => {
    const {_id,title,image,publisher,description,email,tag,views,author_name,author_photo,date,name} =preart;
    const LimitDes = (description, limit) => {
        const words = description.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '.......';
        }
        return description;
    };
    const des = LimitDes(description, 20);
    return (
        <div>
           <div>
                <div className={`card w-96 h-[600px] border-2 border-red-500  rounded-none bg-base-100 shadow-2xl`}>
                <figure><img className="h-60 w-full"  src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-bold text-2xl text-red-600">{title}</h2>
                    <p className="text-justify">{des} <Link to={`/serviceDetails/${_id}`}><button className="text-base font-bold text-red-600">Details</button></Link></p>
                    <div className="flex ">
                        <div>
                           {/* <img  className="h-10 w-12" src={service_provider_image} alt="" /> */}
                        </div>
                        <div>
                            <h1 className="ml-3  text-red-600 font-bold">{publisher}</h1>
                        </div>
                        
                    </div>
                    <div>
                        <p className="text-xl font-bold text-center border-2 bg-red-600 text-white">Premium</p>
                    </div>
                    
                    
                    
                </div>
            </div> 
                </div>
        </div>
    );
};

export default PremiumArticles;