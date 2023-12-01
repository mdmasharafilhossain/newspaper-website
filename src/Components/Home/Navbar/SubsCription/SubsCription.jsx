import { Link } from "react-router-dom";


const SubsCription = () => {
    return (
        <div className="mt-32">
          <img className="w-full h-[750px]" src="https://i.ibb.co/pKRmrxd/Screenshot-1180.png" alt="" /> 

          <div className="mx-[800px] mt-10">
           <Link to="/payment"> <button className="btn w-1/2 text-center ">Take Subscription</button></Link>
          </div>
        </div>
    );
};

export default SubsCription;