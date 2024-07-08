import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rmhdeegoegzfefoelsmv.supabase.co'
const service_role_key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtaGRlZWdvZWd6ZmVmb2Vsc212Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTMxMDg2NCwiZXhwIjoyMDM0ODg2ODY0fQ.QDEpUXVYLfHXT0FM-ZMKD_gkqHfasGCeUfO_md31_LQ'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtaGRlZWdvZWd6ZmVmb2Vsc212Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzMTA4NjQsImV4cCI6MjAzNDg4Njg2NH0.JHEc-QwNji30dIfH1rOMMepe-ZlSz4vJF5_VAcpDSpA'
const supabase = createClient(supabaseUrl, supabaseKey)

const supabaseAdmin = createClient(supabaseUrl, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})
export const adminClient = supabaseAdmin.auth.admin
export default supabase
