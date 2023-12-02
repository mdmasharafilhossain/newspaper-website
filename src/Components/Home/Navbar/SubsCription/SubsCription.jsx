import { useEffect } from "react";
import { Link } from "react-router-dom";


const SubsCription = () => {
  useEffect(()=>{
    document.title = "The Independent | Subscription"
  },[]);
    return (
        <div className="mt-32">
          <img className="w-full h-[750px]" src="https://i.ibb.co/pKRmrxd/Screenshot-1180.png" alt="" /> 

          <div className="mx-[800px] mt-10">
           <Link to="/payment"> <button className="btn mb-20 text-base text-center bg-red-600 text-white">Pay Only $1500 To Take Subscription</button></Link>
          </div>
        </div>
    );
};

export default SubsCription;