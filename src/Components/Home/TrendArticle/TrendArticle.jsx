import { Link } from "react-router-dom";

const TrendArticle = ({article}) => {
    const {image,title,_id,publisher,description} = article;
    const LimitDes = (description, limit) => {
        const words = description.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '.......';
        }
        return description;
    };
    const des = LimitDes(description, 20);
    
    return (
        <div >
            <div>
                <div className="card w-96 h-[600px] rounded-none bg-base-100 shadow-2xl">
                <figure><img className="h-60 w-full"  src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-bold text-2xl text-red-600">{title}</h2>
                    <p className="text-justify">{des} <Link to={`serviceDetails/${_id}`}><button className="text-base font-bold text-red-600">Details</button></Link></p>
                    <div className="flex ">
                        <div>
                           {/* <img  className="h-10 w-12" src={service_provider_image} alt="" /> */}
                        </div>
                        <div>
                            <h1 className="ml-3  text-red-600 font-bold">{publisher}</h1>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div> 
                </div>
        </div>
    );
};

export default TrendArticle;