import { useState } from 'react'
import { Link } from 'react-router-dom'
import AddTeacher from '../components/AddTeacher'
import Modal from '../components/Modal'
import Appointment from '../components/Appointment'

export default function Teacher({ teacher }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className="flex items-center justify-between w-full border-b p-3 px-4 rounded-md border-b-gray-300 hover:bg-gray-300/60 transition-colors duration-200">
        <div className="flex flex-col gap-1 ">
          <span className="font-medium text-xl">
            {teacher.user_metadata.fullName}
          </span>
        </div>
        <div className="flex flex-col gap-1 font-medium">
          <span>{teacher.user_metadata.about.department}</span>
          <span>{teacher.user_metadata.about.subject}</span>
        </div>
        <div className="space-x-2">
          <button
            className="px-4 py-2 outline-none font-medium bg-green-400 rounded-md border-none focus:outline-none focus:ring focus:ring-green-400 ring-offset-1 active:scale-95 transition-transform duration-200 hover:scale-105"
            onClick={openModal}
          >
            Book
          </button>
          <Link
            to={`/messages/${teacher.id}`}
            className="px-4 py-2 outline-none font-medium bg-blue-500 text-white rounded-md border-none focus:outline-none focus:ring focus:ring-blue-500  ring-offset-1 active:scale-95 transition-transform duration-200 hover:scale-105"
            // onClick={() => {}}
          >
            Message
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Appointment onClose={closeModal} teacher_id={teacher.id} />
        </Modal>
      )}
    </>
  )
}
