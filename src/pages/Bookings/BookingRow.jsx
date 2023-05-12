

const BookingRow = ({ bookings, booking, setBookings }) => {
    const { _id, img, cost, date, name, serviceName, customerName } = booking

    const handleDeleteBooking = () => {
        const proced = confirm('Are you sure delete this booking?')
        if (proced) {
            const url = `http://localhost:5000/bookings/${_id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('booking is deleted')
                        const remaining = bookings.filter(book => book._id !== _id)
                        console.log(setBookings)
                        setBookings(remaining)
                    }

                })
                .catch(error => console.log(error))
        }
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
                <button className="btn btn-primary btn-sm px-5 py-2">Pending</button>
            </th>
        </tr>

    );
};

export default BookingRow;