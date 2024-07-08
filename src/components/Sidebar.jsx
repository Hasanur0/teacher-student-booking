import { FaChalkboardTeacher, FaFolderMinus } from 'react-icons/fa'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import { PiStudentBold } from 'react-icons/pi'
import useUser from './../authentication/useUser'
import SidebarAdmin from '../admin/SidebarAdmin'
import SidebarStudent from '../student/SidebarStudent'
import SidebarTeacher from '../teacher/SidebarTeacher'

export default function Sidebar() {
  const { user, isLoading } = useUser()

  return (
    <aside className="border py-5 px-10 border-r-gray-200 col-span-2 col-start-1 row-start-1 -row-end-1">
      <Logo />
      <div className="w-full h-[1px] bg-gray-200 mt-6"></div>
      <div className="mt-3 flex flex-col gap-4">
        {user.user_metadata.role === 'admin' && <SidebarAdmin />}
        {user.user_metadata.role === 'student' && <SidebarStudent />}
        {user.user_metadata.role === 'teacher' && <SidebarTeacher />}
      </div>
    </aside>
  )
}
