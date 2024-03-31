import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/attachment_110636162.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then()
            .catch()
    }
    const NavLinks = <>
        <li><NavLink
            to="/" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
        >
            Home
        </NavLink></li>
        <li><a href='#register'><NavLink
            to="/register" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
        >
           Register
        </NavLink></a></li>
       
       {
        user ? 
        <>
         <li><NavLink
            to="/AddArticle" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
        >
            Add Article
        </NavLink></li>
        <li><NavLink
            to="/AllArticle" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
        >
            All Article
        </NavLink></li>
        <li><NavLink
            to="/Subscription" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
        >
            Subscription
        </NavLink></li>
        <li><NavLink
            to="/dashboard" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
        >
            Dashboard
        </NavLink></li>
        <li><NavLink
            to="/MyArticle" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
        >
            My Article
        </NavLink></li>
        <li><NavLink
            to="/premiumArticle" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
        >
           Premium Article
        </NavLink></li>
        <li><NavLink
            to="/feedback" style={{ fontWeight: "bold", fontSize: "20px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
            }
        >
         Feedback
        </NavLink></li>
        </>

        :

        <>
        
        </>
       }
        
        

    </>
    return (
        <div>
            <div className='shadow-lg bg-base-100 fixed top-0 left-0 right-0 z-50'>
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                             {NavLinks}
                            </ul>
                        </div>
                        <img className='h-14 lg:ml-10' src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="navbar-end flex lg:mr-5 space-x-1">
                    <div>
                    <h2 className="mt-4 text-base hidden md:block lg:block font-bold text-orange-600-600">
        {user?.displayName && user?.displayName.length > 12 ? `${user?.displayName.substring(0, 12)}` : user?.displayName}
    </h2>
                        </div>
                        <div>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <Link to="/UserProfile"><div className="w-12 rounded-full mt-3">
                                        <img className='w-8 rounded-full' src={user?.photoURL} />
                                    </div></Link>
                                </label>
                        </div>
                        <div>
                       {
                        user? 
                        <button onClick={handleLogOut} className=" text-red-700 border-4 border-red-600
                        hover:bg-red-100 font-bold text-lg px-4 py-2 rounded-xl">
                            SignOut</button>
                        : 
                        <Link to="/login"><button className=" text-red-700 border-4 border-red-600
                        hover:bg-red-100 font-bold text-lg px-4 py-2 rounded-xl">Sign In</button></Link>
                       }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;