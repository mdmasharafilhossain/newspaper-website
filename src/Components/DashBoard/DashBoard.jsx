import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin/useAdmin";



const DashBoard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex container mx-auto">
            {
                isAdmin ? <>
                
  
                <div className="w-64 min-h-screen bg-red-500">
           <ul className="menu p-4 py-auto"> 
                <li className="font-bold text-xl text-white"><NavLink to="/dashboard/allUser">All User</NavLink></li>
                <li  className="font-bold text-xl text-white"><NavLink to="/dashboard/allArticle">All Article</NavLink></li>
                <li  className="font-bold text-xl text-white"><NavLink to="/dashboard/addPublisher">Add  Publisher</NavLink></li>
                <li  className="font-bold text-xl text-white"><NavLink to="/">Go to Home</NavLink></li>
           </ul>
            </div>

                </>

                : 
                <>
               <div className="text-5xl font-bold text-red-700 mt-[400px] ml-96">
                    DashBoard Only For Admin!!! 
                </div>
                 
                 </>
            }
           <div className="flex-1">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoard;