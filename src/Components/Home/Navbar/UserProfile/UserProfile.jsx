import { useContext } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";


const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="mt-20">
            <div className="mx-auto text-center w-4/12 ">
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">My Profile</h1>
            </div>

            <div>
                <img  className="mx-auto rounded-full w-32"  src={user?.photoURL} alt="" />
                <h2 className="text-center text-3xl font-bold mt-5">{user?.displayName}</h2>
                <h1 className="text-center text-lg">{user?.email}</h1>
            </div>
        </div>
    );
};

export default UserProfile;