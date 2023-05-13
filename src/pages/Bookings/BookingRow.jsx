

const BookingRow = ({ bookings, booking, setBookings }) => {
    const { _id, img, cost, date, customerName, status } = booking

    const handleDeleteBooking = () => {
        const proced = confirm('Are you sure delete this booking?')
        if (proced) {
            const url = `https://car-doctor-server-habibur-pro.vercel.app/bookings/${_id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('booking is deleted')
                        const remaining = bookings.filter(book => book._id !== _id)

                        setBookings(remaining)
                    }

                })
                .catch(error => console.log(error))
        }
    }


    const handleBookingConfirm = (id) => {

        const url = `https://car-doctor-server-habibur-pro.vercel.app/bookings/${id}`
        console.log(url)
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(book => book._id !== id)
                    const updated = bookings.find(book => book._id === id)
                    updated.status = "confirm"
                    const updatedBookings = [...remaining, updated]
                    setBookings(updatedBookings)

                }
            })
    }


    return (
        <tr>
            <th>
                <label>
                    <button onClick={handleDeleteBooking} className="btn btn-circle btn-sm">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-24 h-24">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td className="font-bold">
                $ {cost}

            </td>
            <td className="font-bold">{date}</td>
            <th>
                {
                    status === 'confirm' ? <button className="text-green-500">Confirmed</button>
                        :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-primary btn-sm px-5 py-2">confirm</button>
                }
            </th>
        </tr>

    );
};

export default BookingRow;