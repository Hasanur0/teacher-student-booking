import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'
import useCreateBooking from '../student/useCreateBooking'
import useUser from './../authentication/useUser'
import toast from 'react-hot-toast'
import SpinnerSmall from './SpinnerSmall'

export default function Appointment({ onClose, teacher_id }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const { createBooking, isLoading } = useCreateBooking()
  const { user } = useUser()
  const handleAddBooking = (e) => {
    e.preventDefault()

    const appointmentTime = `${date.toISOString().split('T')[0]}T${time}:00+00`
    // console.log(`${date.toISOString().split('T')[0]}T${time}:00+00`)
    console.log(user)
    createBooking(
      {
        student_id: user.id,
        teacher_id,
        appointment_time: appointmentTime,
      },
      {
        onSuccess: () => {
          toast.success('Appointment created. Waiting for approval.')
          onClose()
        },
      }
    )
  }

  return (
    <form
      className="relative bg-white w-full max-w-[400px] p-8 rounded-md flex flex-col col gap-4"
      onSubmit={handleAddBooking}
    >
      <button
        type="button"
        className="bg-red-400 text-white text-xl rounded-full p-.5 absolute top-4 right-4"
        onClick={onClose}
      >
        <RxCross2 />
      </button>

      <div className="flex flex-col">
        <label className="font-medium  text-gray-500" htmlFor="date">
          Date
        </label>
        <input
          aria-label="Time"
          id="date"
          type="date"
          className="border px-2 py-1 rounded-md"
          //   defaultValue={new Date().toISOString().split('T')[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-medium  text-gray-500" htmlFor="time">
          Time
        </label>
        <input
          id="time"
          aria-label="Time"
          type="time"
          className="border px-2 py-1 rounded-md"
          //   defaultValue={new Date().getHours() + ':' + new Date().getMinutes()}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button
        disabled={isLoading}
        className="bg-green-500 font-medium text-lg py-2 rounded-md text-gray-50 outline-none mt-3 focus:outline-blue-500"
      >
        {/* {isUploading ? <SpinnerSmall /> : 'Upload'} */}
        {isLoading ? <SpinnerSmall /> : 'BooK'}
      </button>
    </form>
  )
}
