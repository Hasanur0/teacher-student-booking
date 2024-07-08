import Spinner from '../components/Spinner'
import Student from '../components/Student'
import useGetStudents from './useGetStudents'

export default function Students() {
  const { students, isLoading } = useGetStudents()
  if (isLoading) return <Spinner />
  console.log(students)
  return (
    <div className="mt-4 space-y-1">
      {students.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  )
}
