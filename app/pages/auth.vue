<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-white px-4">
    <!-- Logo -->
    <NuxtLink to="/" class="mb-6">
      <img width="170" src="/images/logo.png" alt="Logo" />
    </NuxtLink>

    <div class="max-w-[400px] w-full bg-gray-50 p-6 rounded-lg shadow-md">
      <h1 class="text-center text-2xl font-bold mb-6">Login / Sign up</h1>

      <!-- Loader -->
      <div v-if="isLoading" class="flex justify-center mb-4">
        <Icon icon="eos-icons:loading" class="text-3xl animate-spin" />
      </div>



      <p v-if="error" class="text-red-500 text-center mb-4">{{ error }}</p>
      <p v-if="success" class="text-green-500 text-center mb-4">{{ success }}</p>


      <!-- OAuth Buttons -->
      <button
        v-for="provider in providers"
        :key="provider.name"
        @click="loginWithOAuth(provider.id)"
        class="mb-3 flex items-center justify-center gap-3 p-3 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold cursor-pointer"
      >
        <img :src="provider.icon" :alt="provider.name" class="w-[30px]" />
        Login with {{ provider.name }}
      </button>

      <!-- Logout -->
      <button
        v-if="user"
        @click="logout"
        class="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '~/supabaseClient'

import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const error = ref('')
const success = ref('')
const user = ref(null)

// OAuth Providers
const providers = [
  { id: 'google', name: 'Google', icon: '/images/google.png' },
  { id: 'github', name: 'GitHub', icon: '/images/github.png' }
]

// تحقق من تسجيل الدخول بعد تحميل الصفحة
onMounted(async () => {
  const { data } = await supabase.auth.getSession()
  user.value = data.session?.user || null

  // لو المستخدم موجود، اعمل redirect للـ Profile
  if (user.value) {
    router.push('/Profile')
  }
})

// تسجيل دخول أو تسجيل مستخدم جديد بالإيميل
const loginWithEmail = async () => {
  error.value = ''
  success.value = ''
  isLoading.value = true

  let { data, error: signInError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (signInError) {
    if (signInError.message.includes('Invalid login credentials')) {
      const { error: signUpError } = await supabase.auth.signUp({
        email: email.value,
        password: password.value
      })
      if (signUpError) {
        error.value = signUpError.message
      } else {
        success.value = 'Account created! Check your email for confirmation.'
      }
    } else {
      error.value = signInError.message
    }
  } else {
    user.value = data.user
    success.value = 'Logged in successfully!'
    router.push('/Profile') // redirect بعد تسجيل الدخول
  }

  isLoading.value = false
}

// تسجيل الدخول عبر OAuth
const loginWithOAuth = async (providerId) => {
  isLoading.value = true
  const { data, error: err } = await supabase.auth.signInWithOAuth({
    provider: providerId,
    options: {
      redirectTo: 'https://nweezbuwcjthzfwvfpzg.supabase.co/auth/v1/callback'
    }
  })

  if (err) {
    error.value = err.message
    isLoading.value = false
    return
  }

  window.location.href = data.url
}

// تسجيل الخروج
const logout = async () => {
  await supabase.auth.signOut()
  user.value = null
  email.value = ''
  password.value = ''
  success.value = 'Logged out successfully!'
  router.push('/login')
}
</script>
