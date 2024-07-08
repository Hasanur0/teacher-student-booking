import { useState } from 'react'
import useUser from '../authentication/useUser'
import TeachersAdmin from '../admin/Teachers'
import Teachers from '../student/Teachers'

export default function TeachersMain() {
  const { user } = useUser()
  if (user.user_metadata.role === 'admin') return <TeachersAdmin />
  if (user.user_metadata.role === 'student') return <Teachers />
  return <p>hi</p>
}
