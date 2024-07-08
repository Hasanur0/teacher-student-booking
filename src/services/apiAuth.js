import supabase, { adminClient } from './supabase'

export async function signup({
  fullName,
  email,
  password,
  role = 'student',
  approved = 'false',
  about = {},
}) {
  console.log(fullName, email, password)

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        role,
        approved,
        about,
      },
    },
  })

  if (error) {
    throw new Error(error.message)
  }
  console.log(data)
  return data
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession()
  // console.log('session', session)
  if (!session.session) return null
  const { data, error } = await supabase.auth.getUser()
  // console.log(data)
  if (error) {
    throw new Error(error.message)
  }
  return data?.user
}

export async function logout() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log(error)
    throw new Error(error.message)
  }
}

export async function getUser(id) {
  const { data, error } = await adminClient.getUserById(id)
  if (error) throw new Error(error)
  return data.user
}
