import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" />


                    {/* content  */}
                    <div className="absolute flex items-center bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full justify-start  space-x-5    text-white space-y-7">
                        <div className='pl-5 md:pl-20 space-y-6 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className='space-x-10'>
                                <button className='btn btn-outline btn-primary'>Discover more</button>
                                <button className='btn btn-outline btn-primary'>Latest Projects</button>
                            </div>
                        </div>

                    </div>

                    {/* buttons  */}
                    <div className="absolute flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-primary btn-circle"><FaArrowLeft /></a>
                        <a href="#slide2" className="btn btn-primary btn-circle"><FaArrowRight /></a>
                    </div>
                </div>


                {/* sliede 2  */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    {/* content  */}
                    <div className="absolute flex items-center bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full justify-start  space-x-5    text-white space-y-7">
                        <div className='pl-5 md:pl-20 space-y-6 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className='space-x-10'>
                                <button className='btn btn-outline btn-primary'>Discover more</button>
                                <button className='btn btn-outline btn-primary'>Latest Projects</button>
                            </div>
                        </div>

                    </div>

                    {/* buttons  */}
                    <div className="absolute flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-primary btn-circle"><FaArrowLeft /></a>
                        <a href="#slide3" className="btn btn-primary btn-circle"><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />

                    {/* content  */}
                    <div className="absolute flex items-center bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full justify-start  space-x-5    text-white space-y-7">
                        <div className='pl-5 md:pl-20 space-y-6 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className='space-x-10'>
                                <button className='btn btn-outline btn-primary'>Discover more</button>
                                <button className='btn btn-outline btn-primary'>Latest Projects</button>
                            </div>
                        </div>

                    </div>

                    {/* buttons  */}
                    <div className="absolute flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-primary btn-circle"><FaArrowLeft /></a>
                        <a href="#slide4" className="btn btn-primary btn-circle"><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full" />
                    {/* content  */}
                    <div className="absolute flex items-center bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full justify-start  space-x-5    text-white space-y-7">
                        <div className='pl-5 md:pl-20 space-y-6 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className='space-x-10'>
                                <button className='btn btn-outline btn-primary'>Discover more</button>
                                <button className='btn btn-outline btn-primary'>Latest Projects</button>
                            </div>
                        </div>

                    </div>

                    {/* buttons  */}
                    <div className="absolute flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-primary btn-circle"><FaArrowLeft /></a>
                        <a href="#slide5" className="btn btn-primary btn-circle"><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={image5} className="w-full" />
                    {/* content  */}
                    <div className="absolute flex items-center bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full justify-start  space-x-5    text-white space-y-7">
                        <div className='pl-5 md:pl-20 space-y-6 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className='space-x-10'>
                                <button className='btn btn-outline btn-primary'>Discover more</button>
                                <button className='btn btn-outline btn-primary'>Latest Projects</button>
                            </div>
                        </div>

                    </div>

                    {/* buttons  */}
                    <div className="absolute flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-primary btn-circle"><FaArrowLeft /></a>
                        <a href="#slide6" className="btn btn-primary btn-circle"><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={image6} className="w-full" />
                    {/* content  */}
                    <div className="absolute flex items-center bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full justify-start  space-x-5    text-white space-y-7">
                        <div className='pl-5 md:pl-20 space-y-6 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className='space-x-10'>
                                <button className='btn btn-outline btn-primary'>Discover more</button>
                                <button className='btn btn-outline btn-primary'>Latest Projects</button>
                            </div>
                        </div>

                    </div>

                    {/* buttons  */}
                    <div className="absolute flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-primary btn-circle"><FaArrowLeft /></a>
                        <a href="#slide1" className="btn btn-primary btn-circle"><FaArrowRight /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;