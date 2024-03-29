import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import { useEffect, useState } from "react";



const DashBoard = () => {
    useEffect(()=>{
        document.title = "The Independent | Dashboard"
      },[]);
    const nagivate = useNavigate();
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
                <li  className="font-bold text-xl text-white"><NavLink to="/dashboard/statistics">Statistics</NavLink></li>
                <li  className="font-bold text-xl text-white"><NavLink to="/dashboard/userFeedback">Feedback</NavLink></li>
                <Navigate to="/dashboard/statistics">  </Navigate>
           </ul>
           
            </div>
            
                </>

                : 
                <>
               <div >
                    <h2 className="text-5xl font-bold text-red-700 mt-[400px] ml-96">DashBoard Only For Admin!!!</h2> 

                    <Link to="/"><button className="btn mt-10 ml-[600px] bg-red-600 text-white text-lg">Go To Home</button></Link>
                    
                </div>
                 
                 </>
            }
            <div>
           
           </div>
           <div className="flex-1">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoard;