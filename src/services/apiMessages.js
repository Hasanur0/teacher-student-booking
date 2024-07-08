export const sendMessage = async () => {
  const { data, error } = await supabase
    .from('messages')
    .insert([{ some_column: 'someValue', other_column: 'otherValue' }])
    .select()
}
