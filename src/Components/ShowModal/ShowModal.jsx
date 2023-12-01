import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ShowModal = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 10000); 

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>

            {show && (

                <div>
                    

                    <div className="card w-1/4 mx-auto bg-red-600 text-center h-[300px] border  shadow-xl">
                        
                        <div className="card-body z-50 ">
                            <h2 className="card-title text-white text-2xl ">Subscribe Now</h2>
                            
                            <div className="card-actions justify-end">
                                <Link to="/Subscription"><button className="btn btn-primary">Subscribe</button></Link>
                            </div>
                        </div>
                    </div>


                </div>
            )}
        </div>
    );
};

export default ShowModal;