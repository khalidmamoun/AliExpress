<script setup>
/* ----------------------------------------
🔹 IMPORTS
----------------------------------------- */
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import Footer from '~/components/Footer.vue'
import { useAuth } from '~/composables/useAuth'
import { useRouter, useRoute } from 'vue-router'
import { NuxtLink } from '#components'
import { supabase } from '~/supabaseClient'
import { useUserStore } from '~/stores/user.js'

/* ----------------------------------------
🔹 AUTH + ROUTER
----------------------------------------- */
const router = useRouter()
const route = useRoute()
const { user, logout } = useAuth()
const userStore = useUserStore()

/* ----------------------------------------
🔹 LOCAL STATES
----------------------------------------- */
const isAccountMenu = ref(false)
const isCartHover = ref(false)
const isSearching = ref(false)
const searchItem = ref('')
const isMobileMenu = ref(false)

/* ----------------------------------------
🔹 AVATAR
----------------------------------------- */
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

/* ----------------------------------------
🔹 SWITCH ACCOUNT
----------------------------------------- */
async function switchAccount(provider) {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin,
        queryParams: { prompt: 'select_account' }
      }
    })
    if (error) throw error
  } catch (err) {
    console.error('Switch account error:', err.message)
  }
}

/* ----------------------------------------
🔹 NAVIGATION
----------------------------------------- */
function navigateTo(path) {
  router.push(path)
}

/* ----------------------------------------
🔹 ITEM PAGE IMAGE HANDLING
----------------------------------------- */
const images = [
  '/images/product/11.png',
  '/images/product/12.png',
  '/images/product/13.png',
  '/images/product/14.png',
  '/images/product/15.png'
]
const currentImage = ref(images[0])
onMounted(() => {
  if (route.query.img) currentImage.value = route.query.img
})
function openItem(image) {
  router.push({ path: '/item', query: { img: image } })
}

/* ----------------------------------------
🔹 DUMMY PRODUCT DATA
----------------------------------------- */
const product = {
  name: 'منتج تجريبي احترافي',
  description: 'هذا وصف احترافي للمنتج مع تفاصيل جذابة تقنع العميل بالشراء وتوضح المميزات الأساسية.',
  price: 250
}
</script>

<template>
<div id="MainLayout" class="w-full relative min-h-screen">

  <!-- TOP MENU -->
  <div id="TopMenu" class="w-full bg-[#FAFAFA] md:block hidden">
    <ul class="flex items-center justify-end text-xs text-[#333] font-light px-2 h-10 max-w-[1200px] mx-auto">
      <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Sell on AliExpress</li>
      <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Cookie preferences</li>
      <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Help</li>
      <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Buyer Protection</li>
      <li class="flex items-center gap-1 px-3 hover:text-[#FF46F6] cursor-pointer border-r-0">
        <Icon icon="ic:sharp-install-mobile" width="17" /> App
      </li>

      <!-- ACCOUNT -->
      <li 
        @click="isAccountMenu = !isAccountMenu"
        class="relative flex items-center px-2 gap-1 cursor-pointer select-none"
        :class="isAccountMenu ? 'font-bold bg-white border border-[#FF46F6] z-40 rounded-md shadow-md text-[#FF46F6]' : 'border border-transparent text-red-500 font-bold'"
      >
        <template v-if="user">
          <img :src="avatar" class="w-7 h-7 rounded-full border border-gray-200 object-cover"/>
        </template>
        <template v-else>
          <Icon icon="ph:user-thin" width="17" /> Account
        </template>
        <Icon icon="mdi:chevron-down" width="15" class="ml-1 transition-transform" :class="isAccountMenu ? 'rotate-180' : 'rotate-0'" />

        <transition name="fade">
          <div v-if="isAccountMenu" class="absolute bg-white w-[220px] text-[#333] z-50 top-[38px] left-[-83px] border border-gray-200 rounded-lg shadow-md mt-3">
            <div v-if="!user" class="flex items-center gap-1 px-3 mb-3">
              <NuxtLink to="/auth" class="bg-[#FF4646] w-full text-white text-center p-2 rounded-sm font-semibold text-[16px] mt-2">
                Login / Sign up
              </NuxtLink>
            </div>
            <div v-else class="text-center font-semibold py-3">
              <div class="bg-red-500 p-2 text-white font-bold mb-2">Hello, {{ user.email }}</div>
              <div class="flex flex-col gap-2 mb-3 px-2">
                <button @click="switchAccount('google')" class="text-red-500 text-[13px] p-3 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200 font-bold">Switch Account to Google</button>
                <button @click="switchAccount('github')" class="text-red-500 text-[13px] p-3 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200 font-bold">Switch Account to GitHub</button>
              </div>
              <ul>
                <li @click="navigateTo('/profile')" class="text-[13px] p-3 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200 font-bold">My Profile</li>
                <li @click="navigateTo('/orders')" class="text-[13px] p-3 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200 font-bold">My Orders</li>
                <li @click="logout" class="text-[13px] py-2 px-4 hover:bg-gray-200 cursor-pointer font-bold">Log out</li>
              </ul>
            </div>
          </div>
        </transition>
      </li>
    </ul>
  </div>

  <!-- HEADER -->
  <div class="w-full bg-white mt-4 border-b border-gray-200 border-t">
    <div class="flex items-center gap-4 max-w-[1150px] w-full px-3 mx-auto">
      <NuxtLink to="/" class="flex-shrink-0"><img width="160" src="/images/logo.png" alt="logo" /></NuxtLink>
      <div class="flex-grow relative">
        <div class="flex items-center border-2 border-[#FF4646] rounded-md w-full">
          <input v-model="searchItem" @input="isSearching = searchItem.length > 0" class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none" placeholder="Search..." type="text"/>
          <button class="flex items-center h-full p-2 px-4 bg-[#FF4646]">
            <Icon icon="ph:magnifying-glass" class="text-[22px]" color="#ffffff"/>
          </button>
        </div>
      </div>

      <NuxtLink to="/shoppingcart" class="relative flex-shrink-0">
        <span class="absolute -top-2 -right-2 flex items-center justify-center bg-[#FF4646] text-white text-xs font-semibold w-5 h-5 rounded-full">
          {{ userStore?.cart ? userStore.cart.length : 0 }}
        </span>
        <Icon icon="ph:shopping-cart-simple-light" width="33" :color="isCartHover ? '#FF4646' : '#000000'" @mouseenter="isCartHover = true" @mouseleave="isCartHover = false"/>
      </NuxtLink>

      <button class="md:hidden block flex-shrink-0" @click="isMobileMenu = true">
        <Icon icon="ci:hamburger-md" width="32" />
      </button>
    </div>
  </div>

  <!-- MOBILE BLACK OVERLAY -->
  <div v-if="isMobileMenu" class="fixed inset-0 bg-black/40 z-40 md:hidden" @click="isMobileMenu = false"></div>

  <!-- MOBILE MENU -->
  <div class="fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out"
       :class="isMobileMenu ? 'translate-x-0' : 'translate-x-full'">
    <div class="p-4 flex justify-between items-center border-b border-gray-200 text-gray-700">
      <h2 class="text-lg font-bold flex items-center gap-2">Menu</h2>
      <button @click="isMobileMenu = false">
        <Icon icon="iconamoon:close-bold" width="28" color="#FF4646" />
      </button>
    </div>
    <ul class="flex flex-col text-gray-700 text-base px-4 pt-3">
      <li class="py-3 border-b border-gray-200 font-bold flex items-center gap-2" @click="navigateTo('/'); isMobileMenu = false">
        <Icon icon="mdi:home-outline" width="20" color="#FF4646" /> Home
      </li>
      <li class="py-3 border-b border-gray-200 font-bold flex items-center gap-2" @click="navigateTo('/profile'); isMobileMenu = false">
        <Icon icon="mdi:account-outline" width="20" color="#FF4646" /> My Profile
      </li>
      <li class="py-3 border-b border-gray-200 font-bold flex items-center gap-2" @click="navigateTo('/orders'); isMobileMenu = false">
        <Icon icon="mdi:clipboard-list-outline" width="20" color="#FF4646" /> My Orders
      </li>
      <li class="py-3 border-b border-gray-200 font-bold flex items-center gap-2" @click="navigateTo('/shoppingcart'); isMobileMenu = false">
        <Icon icon="mdi:cart-outline" width="20" color="#FF4646" /> Cart
      </li>
      <li v-if="user" class="py-3 font-bold flex items-center gap-2" @click="logout(); isMobileMenu = false">
        <Icon icon="mdi:logout" width="20" color="#FF4646" /> Logout
      </li>
      <li v-else class="py-3 flex items-center gap-2" @click="navigateTo('/auth'); isMobileMenu = false">
        <Icon icon="mdi:login" width="20" color="#FF4646" /> Login / Sign Up
      </li>
    </ul>
  </div>

  <!-- PAGE SPACE -->
  <div class="lg:pt-[50px] md:pt-[130px] pt-[80px]"></div>

  <!-- PAGE CONTENT -->
  <slot/>

  <!-- FOOTER -->
  <Footer/>
</div>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
