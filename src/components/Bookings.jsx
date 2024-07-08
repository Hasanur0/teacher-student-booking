import useUser from '../authentication/useUser'
import MyBookings from '../student/MyBookings'

export default function Bookings() {
  const { user } = useUser()
  console.log(user)
  return (
    <div>
      <MyBookings />
    </div>
  )
}
