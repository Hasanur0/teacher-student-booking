import { adminClient } from './supabase'
// https://supabase.com/docs/reference/javascript/auth-admin-getuserbyid
export const getTeachers = async () => {
  const {
    data: { users },
    error,
  } = await adminClient.listUsers()
  if (error) {
    throw new Error(error.message)
  }
  const teachers = users.filter((user) => user.user_metadata.role === 'teacher')
  return teachers
}

export const removeTeacher = async (userId) => {
  console.log(userId)
  const { data, error } = await adminClient.deleteUser(userId)
  if (error) throw new Error(error.message)
}
