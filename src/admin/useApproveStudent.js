import { useMutation, useQueryClient } from '@tanstack/react-query'
import { approveStudent as approveStudentApi } from '../services/apiStudents'

const useApproveStudent = () => {
  const queryClient = useQueryClient()
  const { mutate: approveStudent, isPending: isLoading } = useMutation({
    mutationFn: approveStudentApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['students'])
    },
  })
  return { approveStudent, isLoading }
}
export default useApproveStudent
