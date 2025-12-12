import { ref, onMounted } from 'vue'
import { supabase } from '~/supabaseClient'
import { useRouter } from 'vue-router'

const user = ref(null)
const router = useRouter()

export function useAuth() {
  const fetchUser = async () => {
    const { data } = await supabase.auth.getSession()
    user.value = data.session?.user || null
  }

  const logout = async () => {
    await supabase.auth.signOut()
    user.value = null
    router.push('/')
  }

  onMounted(fetchUser)

  return { user, logout, fetchUser }
}
