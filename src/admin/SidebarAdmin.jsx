import { FaChalkboardTeacher } from 'react-icons/fa'
import { PiStudentBold } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

export default function SidebarAdmin() {
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
        to="/students"
        className={({ isActive }) =>
          `flex cursor-pointer items-center gap-2  ${
            isActive ? 'text-blue-500' : ''
          }`
        }
      >
        <PiStudentBold className="text-2xl" />
        <p className="font-medium mt-0.5">Students</p>
      </NavLink>
    </>
  )
}
