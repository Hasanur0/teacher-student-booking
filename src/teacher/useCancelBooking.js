import { useMutation, useQueryClient } from '@tanstack/react-query'
import { cancelBooking as cancelBookingApi } from '../services/apiBookings'

export default function useCancelBooking() {
  const queryClient = useQueryClient()
  const { mutate: cancelBooking, isPending: isLoading } = useMutation({
    mutationFn: cancelBookingApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['bookings'])
    },
  })
  return { cancelBooking, isLoading }
}
