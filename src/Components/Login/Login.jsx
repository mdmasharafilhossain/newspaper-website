import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../FireBase/Firebase";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";
const auth = getAuth(app);

const Login = () => {
    const AxiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const {SignIn,SignInWithGoogle} = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
          const password = form.get('password')
        SignIn(email,password)
        .then(result =>{
          console.log(result.user);
          Swal.fire({
              title: 'Log In',
              text: 'Log In Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
        })
        .catch(error =>{
          console.error(error);
          setErrorMessage(error.message)
  
        });
        
    }
    const hadleGoogleLogin = e =>{
        const googleProvider = new GoogleAuthProvider();
        e.preventDefault();
        SignInWithGoogle(auth,googleProvider)
        .then(result=>{
            console.log(result);
            const PeopleInfo = {
                name:result.user?.displayName,
                photo: result.user?.photoURL,
                email:result.user?.email
            }
            console.log(PeopleInfo);
            AxiosPublic.post('/users',PeopleInfo)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    console.log("user Added Database")
                    Swal.fire({
                        title: 'Done',
                        text: 'Register Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    navigate('/');
                }
            })
        })
        .catch(error =>{
            console.log(error);
        })
      }

    return (
        <div>
             <div className=" py-60">
            <div className="mt-[100px] md:mt-10 lg:mt-10 text-center   py-5">
                <h2 className="text-4xl font-bold text-red-600">Please login</h2>

                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"
                        name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-red-600 border-none font-bold text-white text-base hover:bg-red-700">Login</button>
                        
                       
                    </div>
                </form>
                <p className="font-bold mt-5 text-xl text-red-700">OR</p>
                <button onClick={hadleGoogleLogin} className="btn btn-primary bg-red-700 border-none mt-10 hover:bg-red-900 text-white">Google Login</button>
                {
                    errorMessage && <p className="text-sm font-bold text-red-700">{errorMessage}</p>
                }
                <p className="text-xl mt-10">New Here?Please <Link to="/register" className="font-bold text-red-700">Register</Link></p>
            </div>








        </div>
        </div>
    );
};

export default Login;