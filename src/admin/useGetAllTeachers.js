import { useQuery } from '@tanstack/react-query'
import { getTeachers } from '../services/apiTeachers'

export default function useGetAllTeachers() {
  const { data: teachers, isPending: isLoading } = useQuery({
    queryKey: ['teachers'],
    queryFn: getTeachers,
  })
  return { teachers, isLoading }
}
