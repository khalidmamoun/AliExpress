<template>
  <MainLayout>
    <div id="ItemPage" class="mt-8 max-w-[1200px] mx-auto px-3">

      <!-- المنتج -->
      <div v-if="product" class="bg-white rounded-2xl shadow-lg p-6 md:flex gap-8 w-full">
        <div class="md:w-[40%] w-full">
          <div class="border border-gray-200 rounded-xl overflow-hidden">
            <img class="object-contain w-full h-[420px] bg-white" :src="currentImage" alt="صورة المنتج"/>
          </div>
          <div v-if="product.images.length > 1" class="flex items-center justify-center mt-4 gap-3">
            <img v-for="(img, index) in product.images" :key="index" @click="currentImage = img" :src="img" width="70" class="rounded-lg object-cover border-2 cursor-pointer transition-all duration-300 hover:scale-105" :class="currentImage === img ? 'border-[#FF4646]' : 'border-gray-200'" alt="صورة مصغرة"/>
          </div>
        </div>

        <div class="md:w-[60%] w-full flex flex-col justify-start">
          <h1 class="text-[20px] font-semibold text-gray-900 mb-2 leading-snug">{{ product.title }}</h1>
          <p class="text-sm text-gray-500 mb-3">{{ product.description }}</p>
          <div class="flex flex-wrap gap-1 mt-2 mb-3">
            <span class="text-xs bg-red-500 text-white px-2 py-0.5 rounded">Welcome Deal</span>
            <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Top Selling</span>
            <span class="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{{ product.rating?.count || 5000 }}+ sold</span>
            <span class="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Free Shipping</span>
          </div>
          <div class="flex items-end gap-3 mb-3">
            <span class="text-3xl font-bold text-black">{{ priceFormatted }} EGP</span>
            <span class="text-sm line-through text-gray-400">{{ oldPriceFormatted }} EGP</span>
          </div>

          <button class="w-fit px-10 py-3 rounded-md font-semibold transition mt-4" :class="isInCart ? 'bg-green-500 hover:bg-green-600 text-white cursor-default' : 'bg-red-500 hover:bg-red-700 text-white cursor-pointer'" @click="handleAddToCart()">
            {{ isInCart ? 'Item in Cart' : 'Add to Cart' }}
          </button>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 py-20">جاري التحميل...</div>

      <transition name="fade">
        <div v-if="showLoginToast" class="font-bold text-center bg-yellow-400 text-black p-5 rounded-lg shadow-lg">
          Welcome in Ali Express ( Please Login To Add Item in Cart )
        </div>
      </transition>

    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '~/layouts/MainLayout.vue'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const route = useRoute()
const productId = Number(route.params.id)

const product = ref(null)
const currentImage = ref('')
const isInCart = ref(false)
const showLoginToast = ref(false)

function updateCartState() {
  if (!product.value) return
  isInCart.value = userStore.checkout.some(p => p.id === product.value.id)
}

async function fetchProduct() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const data = await res.json()
    product.value = { ...data, images: [data.image] }
    currentImage.value = product.value.images[0]
    updateCartState()
  } catch (err) { console.error('Error fetching product:', err) }
}

onMounted(() => {
  userStore.loadCart()
  fetchProduct()
  updateCartState()
})

const priceFormatted = computed(() => product.value ? product.value.price.toLocaleString('en-EG') : '')
const oldPriceFormatted = computed(() => product.value ? (product.value.price * 1.05).toLocaleString('en-EG') : '')

function handleAddToCart() {
  if (!userStore.user) {
    showLoginToast.value = true
    setTimeout(() => showLoginToast.value = false, 2500)
    return
  }
  userStore.addItem({
    id: product.value.id,
    title: product.value.title,
    price: product.value.price,
    url: product.value.images[0],
    description: product.value.description
  })
  isInCart.value = true
}

watch(() => userStore.checkout, updateCartState, { deep: true })
</script>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
