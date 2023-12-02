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

    const handleCloseModal = () =>{
        setShow(false)
    }

    return (
        <div>

            {show && (

                <div>


                    <div className="card w-full md:w-1/2 lg:w-1/4 mx-auto  bg-red-600 text-center h-[300px] border fixed bottom-0 z-10  shadow-2xl">

                        <div className="card-body ">
                            <h2 className="font-bold text-white text-center lg:text-xl ">Subscribe Now</h2>

                            <div className=" ">
                                <Link to="/Subscription"><button className="btn btn-primary w-full mt-10">Subscribe</button></Link>
                            </div>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={handleCloseModal}
                                className="btn w-full">Close</button>
                            </form>
                        </div>
                    </div>


                </div>
            )}
        </div>
    );
};

export default ShowModal;