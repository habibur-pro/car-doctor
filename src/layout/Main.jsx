
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-300px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;