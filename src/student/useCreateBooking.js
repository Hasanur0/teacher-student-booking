import { useMutation } from '@tanstack/react-query'
import { createBooking as createBookingApi } from '../services/apiBookings'

export default function useCreateBooking() {
  const { mutate: createBooking, isPending: isLoading } = useMutation({
    mutationFn: createBookingApi,
  })
  return { createBooking, isLoading }
}
