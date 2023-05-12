import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-20">
            <h3 className="text-primary text-center text-2xl font-bold mb-5 my-10">Service</h3>
            <h1 className="text-4xl font-bold text-center mb-b">Our Service Area</h1>
            <p className="md:w-1/2 text-center mx-auto mb-10 mt-5">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)}
            </div>
        </div>
    );
};

export default Service;