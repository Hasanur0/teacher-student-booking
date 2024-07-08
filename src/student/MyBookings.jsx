import Booking from '../components/Booking'
import Spinner from '../components/Spinner'
import { getBookings } from '../services/apiBookings'
import useGetBookings from './useGetBookings'

export default function MyBookings() {
  const { bookings, isLoading } = useGetBookings()
  if (isLoading) return <Spinner />
  return (
    <div className="border p-3">
      {bookings.map((b) => (
        <Booking booking={b} key={b.id} />
      ))}
    </div>
  )
}
