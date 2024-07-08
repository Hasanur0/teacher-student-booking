import useApproveStudent from '../admin/useApproveStudent'
import useRemoveStudent from '../admin/useRemoveStudent'
import SpinnerSmall from './SpinnerSmall'

export default function Student({ student }) {
  console.log(student)

  const { approveStudent, isLoading: isApproving } = useApproveStudent()
  const { removeStudent, isLoading: isDeleting } = useRemoveStudent()
  return (
    <div className="flex items-center justify-between w-full border-b p-3 px-4 rounded-md border-b-gray-300 hover:bg-gray-300/60 transition-colors duration-200">
      <span className="font-medium capitalize">
        {student.user_metadata.fullName}
      </span>
      <span className="font-normal">{student.email}</span>
      <div className="flex gap-3">
        <button
          className="px-4 py-2 outline-none font-medium flex items-center gap-1.5 bg-blue-500 rounded-md border-none focus:outline-none focus:ring focus:ring-blue-400 ring-offset-1 active:scale-95 transition-transform duration-200 hover:scale-105 text-white"
          onClick={() => approveStudent(student.id)}
        >
          {isApproving && <SpinnerSmall />}
          Approve
        </button>
        <button
          className="px-4 py-2 outline-none font-medium flex items-center gap-1.5 bg-red-400 rounded-md border-none focus:outline-none focus:ring focus:ring-red-400 ring-offset-1 active:scale-95 transition-transform duration-200 hover:scale-105"
          onClick={() => removeStudent(student.id)}
        >
          {isDeleting && <SpinnerSmall />}
          Remove
        </button>
      </div>
    </div>
  )
}
