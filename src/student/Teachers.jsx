import useGetAllTeachers from '../admin/useGetAllTeachers'
import Spinner from '../components/Spinner'
import Teacher from './Teacher'

export default function Teachers() {
  const { teachers, isLoading } = useGetAllTeachers()

  if (isLoading) return <Spinner />
  return (
    <div className="mt-4 space-y-1">
      {teachers.map((teacher) => (
        <Teacher key={teacher.id} teacher={teacher} />
      ))}
    </div>
  )
}
