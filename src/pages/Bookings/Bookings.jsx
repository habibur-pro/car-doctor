import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext)

    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">


                <tbody>
                    {
                        bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            setBookings={setBookings}
                            bookings={bookings}
                        ></BookingRow>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default Bookings;