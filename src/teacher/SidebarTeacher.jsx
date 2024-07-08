import { FaChalkboardTeacher } from 'react-icons/fa'
import { IoBookOutline, IoBookSharp } from 'react-icons/io5'
import { PiStudentBold } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

export default function SidebarTeacher() {
  return (
    <>
      <NavLink
        to="/bookings"
        className={({ isActive }) =>
          `flex cursor-pointer items-center gap-2  ${
            isActive ? 'text-blue-500' : ''
          }`
        }
      >
        <IoBookOutline className="text-2xl" />
        <p className="font-medium mt-0.5">Bookings</p>
      </NavLink>

      <NavLink
        to="/messages"
        className={({ isActive }) =>
          `flex cursor-pointer items-center gap-2  ${
            isActive ? 'text-blue-500' : ''
          }`
        }
      >
        <PiStudentBold className="text-2xl" />
        <p className="font-medium mt-0.5">Messages</p>
      </NavLink>
    </>
  )
}
