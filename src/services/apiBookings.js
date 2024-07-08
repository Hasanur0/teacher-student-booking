import supabase from './supabase'

export async function createBooking({
  teacher_id,
  student_id,
  appointment_time,
}) {
  // console.log(teacher_id, student_id, appointment_time)

  const { data, error } = await supabase
    .from('appointments')
    .insert([{ teacher_id, student_id, appointment_time, status: 'pending' }])
    .select()

  console.log(data)
  if (error) throw new Error(error)
  return data
}

export async function getBookings({ id, student }) {
  let query = supabase.from('appointments')
  query = query.select('*')
  if (student) query = query.eq('student_id', id)
  if (!student) query = query.eq('teacher_id', id)

  let { data: bookings, error } = await query

  if (error) throw new Error(error)

  return bookings
}

export async function approveBooking(id) {
  const { data, error } = await supabase
    .from('appointments')
    .update({ status: 'approved' })
    .eq('id', id)
    .select()
  if (error) throw new Error(error)
  return data
}
export async function cancelBooking(id) {
  const { data, error } = await supabase
    .from('appointments')
    .update({ status: 'cancelled' })
    .eq('id', id)
    .select()
  if (error) throw new Error(error)
  return data
}
