import { useContext } from 'react';
import loginImage from '../../assets/images/login/login.svg'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const { signInEmailAndPassword, signInWithGoogle } = useContext(AuthContext)

    let from = location.state?.from?.pathname || "/";

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signInEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('car-access-token', data.token)
                    })
                // navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))

    }


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="text-center lg:text-left w-1/2">
                        <img className='h-full' src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm rounded-md  border">
                        <h3 className='font-bold text-3xl text-center mt-5'>Login</h3>
                        <div className="card-body">
                            <form onSubmit={handleSignIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        placeholder="email"
                                        name='email'
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        name='password'
                                        className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className='text-center mt-3 mb-5'>Or Sign In With</p>
                            <div className='space-x-7 m-auto'>
                                <button className='p-3 rounded-full text-blue-400 bg-[#F5F5F8]'><FaFacebookF /></button>
                                <button className='p-3 rounded-full text-blue-600 bg-[#F5F5F8]'><FaLinkedinIn /></button>
                                <button onClick={handleGoogleLogin} className='p-3 rounded-full text-blue-400 bg-[#F5F5F8]'><FcGoogle /></button>
                            </div>
                            <p className='text-center mt-3 mb-5'>New to Car Doctor?
                                <Link className='text-primary font-bold ml-2' to='/signup'>Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;