import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const BookService = () => {
    const service = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log('user from services', user)

    const handleBookService = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const cost = form.cost.value;
        const booking = {
            customerName: name,
            email,
            date,
            cost,
            serviceId: service._id,
            serviceName: service.title,
            img: service.img

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('booking successful')
                }
            })



    }
    return (
        <div>
            <h3>Services: {service.title}</h3>
            <div className="hero min-h-screen bg-base-200 p-28 rounded-xl">
                <form onSubmit={handleBookService} className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full ">
                        <div className="">
                            {/* name  */}
                            <div className="form-control ">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered mb-5"
                                    name="name"
                                    required
                                />
                            </div>

                            {/* email  */}
                            <div className="form-control">

                                <input
                                    type="email"
                                    placeholder="email"
                                    defaultValue={user ? user.email : ''}
                                    className="input input-bordered"
                                    name="email"
                                    required
                                />

                            </div>
                        </div>


                        <div>
                            <div className="form-control">
                                {/* date  */}
                                <input
                                    type="date"
                                    placeholder="Date"
                                    className="input input-bordered mb-5"
                                    name="date"
                                    required
                                />
                            </div>
                            {/* cost  */}
                            <div className="form-control">

                                <input
                                    type="text"
                                    placeholder="Due Cost"
                                    className="input input-bordered"
                                    name="cost"
                                    value={service?.price}
                                    readOnly
                                    required
                                />
                            </div>
                        </div>

                    </div>
                    <textarea name="" id="" cols="30" rows="10" className="w-full mt-5 px-5 py-3 textarea" placeholder="You Message"></textarea>
                    <button type="submit" className="btn btn-block btn-primary mt-10">Confirm Order</button>
                </form>
            </div>
        </div>
    );
};

export default BookService;