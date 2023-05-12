import { useContext } from 'react';
import loginImage from '../../assets/images/login/login.svg'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const SignUp = () => {
    const { signUpWithEmailAndPassword, signInWithGoogle } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        signUpWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))

    }

    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
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
                        <h3 className='font-bold text-3xl text-center mt-5'>Sign Up</h3>
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Name"
                                        name='name'
                                        className="input input-bordered" />
                                </div>
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
                                    <button type='submit' className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <p className='text-center mt-3 mb-5'>Or Sign Up With</p>
                            <div className='space-x-7 m-auto'>
                                <button className='p-3 rounded-full text-blue-400 bg-[#F5F5F8]'><FaFacebookF /></button>
                                <button className='p-3 rounded-full text-blue-600 bg-[#F5F5F8]'><FaLinkedinIn /></button>
                                <button onClick={handleGoogleSignUp} className='p-3 rounded-full text-blue-400 bg-[#F5F5F8]'><FcGoogle /></button>
                            </div>
                            <p className='text-center mt-3 mb-5'>Have An Account?
                                <Link className='text-primary font-bold ml-2' to='/signin'>Log In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;