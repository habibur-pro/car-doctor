import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className='relative h-[550px] w-1/2 '>
                        <img src={person} className="w-4/5 h-4/5 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 border-8 border-white absolute left-1/2 top-1/2 rounded-lg shadow-2xl" />
                    </div>

                    <div className='w-1/3  '>
                        <h3 className='text-xl text-primary font-bold'>About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;