import "react-native-url-polyfill/auto"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://uyamlodpkdqiuggiywxu.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5YW1sb2Rwa2RxaXVnZ2l5d3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzOTY1NDYsImV4cCI6MjAxNjk3MjU0Nn0.u1-1IkriTJq5bjt6rmH5oWdL_1USAOjuSbxXvyvMxZU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
