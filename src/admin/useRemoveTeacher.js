import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeTeacher as removeTeacherApi } from '../services/apiTeachers'

export default function useRemoveTeacher() {
  const queryClient = useQueryClient()

  const { mutate: removeTeacher, isPending: isLoading } = useMutation({
    mutationFn: removeTeacherApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['students'])
    },
  })
  return { removeTeacher, isLoading }
}
