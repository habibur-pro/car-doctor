import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";


const SocialLogins = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

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
            <p className='text-center mt-3 mb-5'>Or Sign In With</p>
            <div className='space-x-7 m-auto text-center'>
                <button className='p-3 rounded-full text-blue-400 bg-[#F5F5F8]'><FaFacebookF /></button>
                <button className='p-3 rounded-full text-blue-600 bg-[#F5F5F8]'><FaLinkedinIn /></button>
                <button onClick={handleGoogleLogin} className='p-3 rounded-full text-blue-400 bg-[#F5F5F8]'><FcGoogle /></button>
            </div>
        </div>
    );
};

export default SocialLogins;