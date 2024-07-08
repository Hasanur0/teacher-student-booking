import useGetAllTeachers from './useGetAllTeachers'
import Spinner from './../components/Spinner'
import Teacher from '../components/Teacher'
import AddTeacher from '../components/AddTeacher'
import Modal from '../components/Modal'
import { useState } from 'react'

export default function Teachers() {
  const { teachers, isLoading } = useGetAllTeachers()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  if (isLoading) return <Spinner />
  return (
    <div className="p-4">
      <div>
        <button
          onClick={openModal}
          className="px-3 bg-blue-500 text-white rounded-md py-2 text-base font-medium"
        >
          Add Teacher
        </button>
        <div className="mt-4 space-y-1">
          {teachers.map((teacher) => (
            <Teacher key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <AddTeacher onClose={closeModal} />
        </Modal>
      )}
    </div>
  )
}
