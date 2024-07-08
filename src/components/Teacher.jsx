import useRemoveTeacher from '../admin/useRemoveTeacher'

export default function Teacher({ teacher }) {
  console.log(teacher)
  const { removeTeacher, isLoading: isDeleting } = useRemoveTeacher()
  return (
    <div className="flex items-center justify-between w-full border-b p-3 px-4 rounded-md border-b-gray-300 hover:bg-gray-300/60 transition-colors duration-200">
      <div className="flex flex-col gap-1 ">
        <span className="font-medium">{teacher.user_metadata.fullName}</span>
        <span className="font-normal">{teacher.email}</span>
      </div>
      <div className="flex flex-col gap-1 font-medium">
        <span>{teacher.user_metadata.about.department}</span>
        <span>{teacher.user_metadata.about.subject}</span>
      </div>
      <button
        className="px-4 py-2 outline-none font-medium bg-red-400 rounded-md border-none focus:outline-none focus:ring focus:ring-red-400 ring-offset-1 active:scale-95 transition-transform duration-200 hover:scale-105"
        onClick={() => removeTeacher(teacher.id)}
      >
        Delete
      </button>
    </div>
  )
}
