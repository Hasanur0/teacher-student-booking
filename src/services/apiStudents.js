import { adminClient } from './supabase'

export const approveStudent = async (userId) => {
  const { data: user, error } = await adminClient.updateUserById(userId, {
    user_metadata: { approved: true },
  })
  if (error) throw new Error(error.message)
  return user
}

export const getStudents = async () => {
  const {
    data: { users },
    error,
  } = await adminClient.listUsers()
  if (error) {
    throw new Error(error.message)
  }
  const students = users.filter(
    (user) =>
      user.user_metadata.role === 'student' &&
      user.user_metadata.approved === 'false'
  )
  return students
}

export const removeStudent = async (userId) => {
  console.log(userId)
  const { data, error } = await adminClient.deleteUser(userId)
  if (error) throw new Error(error.message)
}
