import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service
    console.log(service)
    return (
        <div className="card w-96 bg-base-100 border">
            <figure className="rounded-xl"><img className="m-8 rounded-lg w-96 h-52 rounded-2xl" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between">
                    <h2 className=" text-lg font-bold text-primary">Price: {price}</h2>
                    <button className=" text-primary"><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;