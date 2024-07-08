import { useQuery } from '@tanstack/react-query'
import { getBookings } from '../services/apiBookings'
import useUser from '../authentication/useUser'

export default function useGetBookings() {
  const { user } = useUser()
  //   console.log(user)
  const { data: bookings, isPending: isLoading } = useQuery({
    queryKey: ['bookings'],
    queryFn: () =>
      getBookings({
        id: user.id,
        student: user.user_metadata.role === 'student',
      }),
  })
  return { bookings, isLoading }
}
