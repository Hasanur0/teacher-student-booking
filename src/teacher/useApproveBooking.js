import { useMutation, useQueryClient } from '@tanstack/react-query'

import { approveBooking as approveBookingApi } from '../services/apiBookings'

export default function useApproveBooking() {
  const queryClient = useQueryClient()
  const { mutate: approveBooking, isPending: isLoading } = useMutation({
    mutationFn: approveBookingApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['bookings'])
    },
  })
  return { approveBooking, isLoading }
}
