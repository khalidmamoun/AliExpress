<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useAuth } from '~/composables/useAuth'
import { useRouter } from 'vue-router'
import { NuxtLink } from '#components'
import { supabase } from '~/supabaseClient'
import { useUserStore } from '~/stores/user.js'

const router = useRouter()
const { user, logout } = useAuth()
const userStore = useUserStore()

const isAccountMenu = ref(false)
const isCartHover = ref(false)
const isSearching = ref(false)
const searchItem = ref('')

const orders = ref([
  { id: 1, name: 'Wireless Mouse', price: '$25', status: 'Delivered', date: '2025-12-01' },
  { id: 2, name: 'Mechanical Keyboard', price: '$75', status: 'Processing', date: '2025-12-03' },
  { id: 3, name: 'HD Monitor', price: '$150', status: 'Shipped', date: '2025-12-05' },
])

const avatar = ref('/images/default-avatar.png')
onMounted(() => {
  if (user.value?.user_metadata?.avatar) {
    avatar.value = user.value.user_metadata.avatar + '?t=' + new Date().getTime()
  }
})
supabase.auth.onAuthStateChange((event, session) => {
  if (session?.user?.user_metadata?.avatar) {
    avatar.value = session.user.user_metadata.avatar + '?t=' + new Date().getTime()
  }
})

function switchAccount(provider) {
  supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: window.location.origin,
      queryParams: { prompt: 'select_account' }
    }
  }).catch(err => console.error('Switch account error:', err.message))
}

function navigateTo(path) {
  router.push(path)
}
</script>

<template>
      <!-- TOP MENU -->
  <div id="TopMenu" class="w-full bg-[#FAFAFA] md:block hidden">
    <ul class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 max-w-[1200px] mx-auto">
      <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Sell on AliExpress</li>
      <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Cookie preferences</li>
      <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Help</li>
      <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Buyer Protection</li>
      <li class="flex items-center gap-1 px-3 hover:text-[#FF46F6] cursor-pointer border-r-0">
        <Icon icon="ic:sharp-install-mobile" width="17" /> App
      </li>

      <!-- ACCOUNT MENU -->
      <li @click="isAccountMenu = !isAccountMenu"
          class="relative flex items-center px-2 gap-1 cursor-pointer select-none"
          :class="isAccountMenu ? 'font-bold bg-white border border-[#FF46F6] z-40 rounded-b shadow-md text-[#FF46F6] p-2 rounded-md' : 'border border-transparent text-red-500 font-bold'">
        
        <!-- Avatar -->
        <template v-if="user">
          <img :src="avatar" class="w-7 h-7 rounded-full border border-gray-200 object-cover"/>
        </template>
        <template v-else>
          <Icon icon="ph:user-thin" width="17" />
          Account
        </template>

        <Icon icon="mdi:chevron-down" width="15" class="ml-1 transition-transform"
              :class="isAccountMenu ? 'rotate-180' : 'rotate-0'" />

        <!-- DROPDOWN -->
        <transition name="fade">
          <div v-if="isAccountMenu"
               class="absolute bg-white w-[220px] text-[#333333] z-50 top-[38px] left-[-83px] border border-gray-200 rounded-lg shadow-md mt-5">
            <div v-if="!user" class="flex items-center gap-1 px-3 mb-3">
              <NuxtLink to="/auth" class="bg-[#FF4646] w-full text-white text-center p-2 rounded-sm font-semibold text-[16px] mt-2">
                Login / Sign up
              </NuxtLink>
            </div>
            <div v-else class="text-center font-semibold py-3">
              <div class="bg-red-500 p-2 text-white font-bold mb-2"> Hello, {{ user.email }}</div>
              <div class="flex flex-col gap-2 mb-3 px-2">
                <button @click="switchAccount('google')" class="text-gray-700 font-black cursor-pointer px-2 py-1 rounded border hover:bg-gray-100">
                  Switch to Google
                </button>
                <button @click="switchAccount('github')" class="text-gray-700 font-black cursor-pointer px-2 py-1 rounded border hover:bg-gray-100">
                  Switch to GitHub
                </button>
              </div>
              <ul>
                <li @click="navigateTo('/profile')" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 cursor-pointer border border-gray-200 font-bold">
                  My Profile
                </li>
                <li @click="navigateTo('/orders')" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 cursor-pointer font-bold border-b border-gray-200">
                  My Orders
                </li>
                <li @click="logout" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 cursor-pointer font-bold">
                  Log out
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </li>
    </ul>
  </div>
  <div class="w-full min-h-screen">

    <!-- HEADER -->
    <div class="flex items-center w-full bg-white border-b border-gray-200">
      <div class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 mx-auto items-center">
        <NuxtLink to="/"><img width="170" src="/images/logo.png" alt="logo" /></NuxtLink>

        <!-- SEARCH BAR -->
        <div class="max-w-[750px] w-full md:block hidden relative">
          <div class="flex items-center border-2 border-[#FF4646] rounded-md w-full">
            <input  
              v-model="searchItem"
              @input="isSearching = searchItem.length > 0"
              class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none" 
              placeholder="Search..." 
              type="text"
            />
            <Icon v-if="isSearching" icon="eos-icons:loading" />
            <button class="flex items-center h-full p-2 px-4 bg-[#FF4646]">
              <Icon icon="ph:magnifying-glass" class="text-[25px]" color="#ffffff"/>
            </button>
          </div>
        </div>

        <!-- CART ICON -->
        <NuxtLink to="/shoppingcart" class="relative">
          <button 
            class="relative flex items-center cursor-pointer"
            @mouseenter="isCartHover = true"
            @mouseleave="isCartHover = false"
          >
            <span 
              class="absolute -top-2 -right-2 flex items-center justify-center bg-[#FF4646] text-white text-xs font-semibold w-5 h-5 rounded-full"
            >
              {{ userStore?.cart ? userStore.cart.length : 0 }}
            </span>
            <Icon 
              icon="ph:shopping-cart-simple-light" 
              width="33" 
              height="33" 
              :color="isCartHover ? '#FF4646' : '#000000'"
            />
          </button>
        </NuxtLink>
      </div>
    </div>

    <!-- PAGE TITLE -->
    <div class="max-w-[1150px] mx-auto px-3 py-6">
      <h1 class="text-2xl font-bold text-gray-800">My Orders</h1>
      <p class="text-gray-500 text-sm mt-1">Here is the list of your recent orders.</p>
    </div>

    <!-- ORDERS LIST -->
    <div class="max-w-[1150px] mx-auto px-3">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="order in orders" :key="order.id" class="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h2 class="font-semibold text-lg">{{ order.name }}</h2>
          <p class="text-gray-600 mt-1">Price: <span class="font-bold">{{ order.price }}</span></p>
          <p class="text-gray-600 mt-1">Status: 
            <span :class="{
              'text-green-600 font-bold': order.status === 'Delivered',
              'text-yellow-600 font-bold': order.status === 'Processing',
              'text-blue-600 font-bold': order.status === 'Shipped'
            }">{{ order.status }}</span>
          </p>
          <p class="text-gray-500 mt-1 text-sm">Date: {{ order.date }}</p>
        </div>
      </div>
    </div>


  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
