import useGetUserById from '../admin/useGetUserById'
import useUser from '../authentication/useUser'
import useApproveBooking from '../teacher/useApproveBooking'
import useCancelBooking from '../teacher/useCancelBooking'
import Spinner from './Spinner'
import SpinnerSmall from './SpinnerSmall'

export default function Booking({ booking }) {
  const { user } = useUser()
  const { user: teacher, isLoading: isLoadingUser } = useGetUserById(
    booking.teacher_id
  )
  const { approveBooking, isLoading: isLoadingApproval } = useApproveBooking()
  const { cancelBooking, isLoading: isLoadingCancelling } = useCancelBooking()
  if (isLoadingUser) return <Spinner />
  // console.log(booking)

  return (
    <div className="flex justify-between border py-3 px-4 items-center rounded-md">
      <div>
        <h2 className="text-lg font-medium">
          {teacher.user_metadata.fullName}
        </h2>
        <p className="text-base text-gray-500">
          {teacher.user_metadata.about.subject}
        </p>
      </div>
      <p>{booking.appointment_time}</p>
      <p
        className={`uppercase ${
          booking.status === 'pending' ? 'bg-yellow-400' : ''
        }
        ${booking.status === 'approved' ? 'bg-green-400' : ''}
        ${booking.status === 'cancelled' ? 'bg-red-400' : ''}
         py-1 px-3 rounded-md`}
      >
        {booking.status}
      </p>
      {user.user_metadata.role === 'teacher' &&
        booking.status === 'pending' && (
          <div className="flex gap-2">
            <button
              disabled={isLoadingApproval}
              onClick={() => approveBooking(booking.id)}
              className="px-2 py-1 bg-green-400 font-medium rounded-md focus:outline-none focus:ring ring-green-400 ring-offset-1"
            >
              {isLoadingApproval ? <SpinnerSmall /> : 'Approve'}
            </button>
            <button
              disabled={isLoadingCancelling}
              onClick={() => cancelBooking(booking.id)}
              className="px-2 py-1 bg-red-400 font-medium rounded-md focus:outline-none focus:ring ring-red-400 ring-offset-1"
            >
              {isLoadingCancelling ? <SpinnerSmall /> : 'Cancel'}
            </button>
          </div>
        )}
    </div>
  )
}
