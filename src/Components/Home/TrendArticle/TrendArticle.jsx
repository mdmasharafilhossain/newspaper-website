import { Link } from "react-router-dom";

const TrendArticle = ({article}) => {
    const {image,title,_id,publisher,description,views} = article;
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
                <div className="card  w-96 md:w-96 lg:w-[370px] h-[600px] md:h-[700px] lg:h-[600px] rounded-none bg-base-100 shadow-2xl">
                <figure><img className="h-60 md:h-60 lg:h-60 w-full md:w-full lg:w-full"  src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-bold text-2xl md:text-2xl lg:text-2xl text-red-600">{title}</h2>
                    <p className="text-justify text-base md:text-base lg:text-base">{des} <Link to={`serviceDetails/${_id}`}><button className="text-base font-bold text-red-600">Details</button></Link></p>
                    <div className="flex  flex-col md:flex-row  lg:flex-row justify-around">
                        
                        <div>
                            <h1 className="ml-3  text-red-600 font-bold">{publisher}</h1>
                        </div>
                        <div>
                           <h1 className="font-bold ">views:{views}</h1>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div> 
                </div>
        </div>
    );
};

export default TrendArticle;