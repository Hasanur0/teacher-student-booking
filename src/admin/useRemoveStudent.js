import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeStudent as removeStudentApi } from '../services/apiStudents'

export default function useRemoveStudent() {
  const queryClient = useQueryClient()

  const { mutate: removeStudent, isPending: isLoading } = useMutation({
    mutationFn: removeStudentApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['students'])
    },
  })
  return { removeStudent, isLoading }
}
