import { useQuery } from '@tanstack/react-query'
import { getStudents } from '../services/apiStudents'

export default function useGetStudents() {
  const { data: students, isPending: isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: getStudents,
  })
  return { students, isLoading }
}
