<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import Footer from '~/components/Footer.vue'

// Local states
let isAccountMenu = ref(false)
let isCartHover = ref(false)
let isSearching = ref(false)
let searchItem = ref('')

// Functions
function navigateTo(path) {
  console.log('Navigate to', path)
}
</script>

<template>
<div id="MainLayout" class="w-full relative min-h-screen ">
    <!-- Top Menu -->
    <div id="TopMenu" class="w-full bg-[#FAFAFA]  md:block hidden">
      <ul class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 max-w-[1200px] mx-auto">
        <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Sell on AliExpress</li>
        <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Cookie preferences</li>
        <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Help</li>
        <li class="border-r border-gray-400 px-3 hover:text-[#FF46F6] cursor-pointer">Buyer Protection</li>
        <li class="flex items-center gap-1 px-3 hover:text-[#FF46F6] cursor-pointer border-r-0">
          <Icon icon="ic:sharp-install-mobile" width="17" /> App
        </li>

        <!-- Account Menu -->
        <li
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="relative flex items-center px-2 gap-1 hover:text-[#FF4646] h-full cursor-pointer"
          :class="isAccountMenu ? 'bg-white border z-40' : 'border border-transparent'"
        >
          <Icon icon="ph:user-thin" width="17" />
          Account
          <Icon icon="mdi:chevron-down" width="15" class="ml-1" />

          <transition name="fade">
            <div
              v-if="isAccountMenu"
              class="absolute bg-white w-[220px] text-[#333333] z-50 top-[38px] left-0 border border-t-0 rounded-b shadow-md"
            >
              <div class="font-semibold text-[15px] my-4 px-3">Welcome To AliExpress!</div>
              <div class="flex items-center gap-1 px-3 mb-3">
                <NuxtLink to="/auth" class="bg-[#FF4646] w-full text-white text-center p-2 rounded-sm font-semibold text-[16px]">
                  Login / Register
                </NuxtLink>
              </div>
              <div class="border-t">
                <ul>
                  <li @click="navigateTo('/orders')" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 cursor-pointer">
                    My Orders
                  </li>
                  <li class="text-[13px] py-2 px-4 w-full hover:bg-gray-200 cursor-pointer">Sign out</li>
                </ul>
              </div>
            </div>
          </transition>
        </li>
      </ul>
    </div>

    <!-- Main Header -->
    <div id="MainHeader" class="flex items-center w-full bg-white mt-4 border-b border-gray-200 border-t border-gray-200">
      <div class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 mx-auto items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="min-w-[170px]">
          <img width="170" src="/images/logo.png" alt="logo" />    
        </NuxtLink>

        <!-- Search Bar -->
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

          <!-- Search Dropdown -->
          <transition name="fade">
            <div v-if="isSearching" class="absolute bg-white max-w-[700px] w-full border rounded-b shadow-md mt-1 z-40">
              <div class="p-1">
                <NuxtLink to="/item/1" class="flex w-full cursor-pointer hover:bg-yellow-100 p-2 hover:text-black">
                  <div class="flex items-center gap-2">
                    <img class="rounded-md" width="40" src="/images/product/12.png" />
                    <div class="truncate">Printer testing</div>
                    <div class="truncate font-semibold">$99.99</div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </transition>
        </div>

        <!-- Cart -->
        <NuxtLink to="/shoppingcart" class="relative">
          <button class="relative flex items-center" @mouseenter="isCartHover = true" @mouseleave="isCartHover = false">
            <span class="absolute -top-2 -right-2 flex items-center justify-center bg-[#FF4646] text-white text-xs font-semibold w-5 h-5 rounded-full">
              0
            </span>
            <Icon icon="ph:shopping-cart-simple-light" width="33" height="33" :color="isCartHover ? '#FF4646' : '#000000'" />
          </button>
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button @click="console.log('Open Mobile Menu')" class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200">
          <Icon icon="radix-icons:hamburger-menu" size="33"/>
        </button>
      </div>
    </div>

   

    <!-- Spacer for fixed header -->
    <div class="lg:pt-[50px] md:pt-[130px] pt-[80px]"></div>

    <!-- Slot content -->
    <slot/>
    <!-- Footer -->
    <Footer />

  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
