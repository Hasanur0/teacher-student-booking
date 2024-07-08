import { FaChalkboardTeacher } from 'react-icons/fa'
import { IoBookOutline, IoBookSharp } from 'react-icons/io5'
import { PiStudentBold } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

export default function SidebarStudent() {
  return (
    <>
      <NavLink
        to="/teachers"
        className={({ isActive }) =>
          `flex cursor-pointer items-center gap-2  ${
            isActive ? 'text-blue-500' : ''
          }`
        }
      >
        <FaChalkboardTeacher className="text-2xl" />
        <p className="font-medium mt-0.5">Teachers</p>
      </NavLink>
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
