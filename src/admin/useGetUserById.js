import { useQuery } from '@tanstack/react-query'
import { getUser } from '../services/apiAuth'

export default function (id) {
  const { data: user, isPending: isLoading } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
  })
  return { user, isLoading }
}
