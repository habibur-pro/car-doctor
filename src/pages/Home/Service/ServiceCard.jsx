import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service
    console.log(service)
    return (
        <div className="card w-96 bg-base-100 border ">
            <figure className="rounded-xl"><img className="m-8 rounded-lg w-[330px] h-52 rounded-2xl" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between">
                    <h2 className=" text-lg font-bold text-primary">Price: {price}</h2>
                    <Link to={`booking/${_id}`}>
                        <button className=" text-primary"><FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;