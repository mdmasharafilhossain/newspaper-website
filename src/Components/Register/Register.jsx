import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, updateProfile } from "firebase/auth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";
import app from "../FireBase/Firebase";
const auth = getAuth(app);


const Register = () => {
    useEffect(()=>{
        document.title = "The Independent | Register"
      },[]);
    const AxiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const { createUser,SignInWithGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(name, email, password, photo)
        setErrorMessage('');
        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMessage("You shuold have atleast one uppercase letter")
            return
        }
        else if (/^[a-zA-Z0-9]+$/.test(password)) {
            setErrorMessage("Use Atleast One special Character")
            return
        }
        else if(!/\d/.test(password)){
            setErrorMessage("Use Atleast One Numeric Number")
            return
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                });
                 const UserInfo = {
                    name:name,
                    photo: photo,
                    email:email
                 }
                 AxiosPublic.post('/users',UserInfo)
                 .then(res =>{
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
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message)
            })
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
            <div id="register" className="py-40">
                <div className="mt-[100px] md:mt-10 lg:mt-10 text-center">
                    <div className="p-5">
                        <h2 className="text-4xl font-bold text-red-600">Please Register</h2>

                        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
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
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-red-600 border-none font-bold text-white text-base hover:bg-red-700">Register</button>
                            </div>
                        </form>
                        <p className="font-bold mt-5 text-xl text-red-700">OR</p>
                <button onClick={hadleGoogleLogin} className="btn btn-primary bg-red-700 border-none mt-10 hover:bg-red-900 text-white">Google Login</button>
                        {
                            errorMessage && <p className="text-sm font-bold text-red-700">{errorMessage}</p>
                        }
                        <p className="text-xl mt-10">Already Have An Account?Please <Link to="/login" className="font-bold text-red-700">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;