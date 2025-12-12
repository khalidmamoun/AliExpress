<template>
  <MainLayout>
    <div id="shoppingCartPage" class="mt-8 max-w-[1200px] mx-auto px-4">

      <!-- السلة الفارغة -->
      <div v-if="products.length === 0" class="bg-white rounded-3xl shadow-lg min-h-[500px] flex items-center justify-center">
        <div class="text-center px-6 pb-10">
          <img 
            class="mx-auto mb-6"
            width="280"
            src="/images/emptycart.png"
            alt="Empty Cart"
          >
          <p class="text-gray-500 mb-6 text-base">
            سجّل الدخول لمشاهدة المنتجات التي أضفتها إلى سلتك
          </p>
          <NuxtLink
            to="/auth"
            class="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold px-12 py-3 rounded-full transition-shadow shadow-md"
          >
            Sign in
          </NuxtLink>
        </div>
      </div>

      <!-- السلة المحتوية على منتجات -->
      <div v-else class="md:flex gap-6 justify-between mx-auto w-full">

        <!-- قائمة المنتجات -->
        <div class="md:w-[68%] space-y-6">

          <div class="bg-white rounded-3xl p-6 shadow-md transition-shadow">
            <div class="text-2xl font-bold mb-3 text-gray-800">
              Shopping Cart [ {{ products.length }} ]
            </div>
          </div>

          <div class="bg-gradient-to-r from-[#FDECEE] to-[#FCE4E1] rounded-3xl p-6 shadow-inner transition-shadow">
            <div class="text-red-600 font-bold text-lg">
              🎉 Welcome Deal Applicable ON 1 Item Only
            </div>
          </div>

          <div id="Items" class="bg-white rounded-lg p-4 mt-4 space-y-4">
            <div v-for="product in products" :key="product.id">
              <CartItem
                :product="product"
                :selectedArray="selectedArray"
                @selectedRadio="handleSelected"
                @updateQuantity="updateQuantity"
              />
            </div>
          </div>

        </div>

        <!-- ملخص السلة على الديسكتوب -->
        <div class="hidden md:block md:w-[30%]">
          <div id="Summary" class="bg-white rounded-3xl p-4 shadow-md sticky top-6 border border-gray-200 ">
            <h3 class="text-xl font-bold mb-4">Summary</h3>

            <div class="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>{{ subtotal }} EGP</span>
            </div>

            <div class="flex justify-between font-bold border-t pt-2">
              <span>Total:</span>
              <span>{{ subtotal }} EGP</span>
            </div>

            <button @click="goToCheckout" class="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-full transition-shadow shadow-md">
              Checkout
            </button>

            <!-- طرق الدفع -->
            <div id="paymentProtection" class="bg-white rounded-lg p-4 mt-6">
              <div class="text-lg font-bold mb-3">Payment Methods</div>
              <div class="flex flex-wrap items-center justify-start gap-2">
                <div v-for="card in cards" :key="card" class="p-2 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <img class="h-8 w-auto" :src="card" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- ملخص السلة على الموبايل -->
      <div class="md:hidden block mt-6 ">
        <div id="Summary" class="bg-white rounded-3xl p-6 shadow-md ">
          <h3 class="text-xl font-bold mb-4">Summary</h3>
          <div class="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>{{ subtotal }} EGP</span>
          </div>

          <div class="flex justify-between font-bold border-t pt-2">
            <span>Total:</span>
            <span>{{ subtotal }} EGP</span>
          </div>
          <button @click="goToCheckout" class=" mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-full transition-shadow shadow-md cursor-pointer">
            Check Out
          </button>
        </div>
      </div>

    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import CartItem from '~/components/CartItem.vue'

import { ref, computed, toRaw, onMounted } from 'vue'
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

// المنتجات
const products = ref([
  { id: 1, title: "هاتف ذكي Galaxy S23", description: "أفضل أداء وسعة تخزين ممتازة", url: "/images/product/0.png", price: 9999, quantity: 1 },
  { id: 2, title: "سماعات لاسلكية AirPods Pro", description: "صوت واضح وعزل ممتاز للضوضاء", url: "/images/product/1.png", price: 6499, quantity: 1 },
])

// المنتجات المحددة
const selectedArray = ref([])

// دالة اختيار المنتجات من CartItem
const handleSelected = (item) => {
  const index = selectedArray.value.findIndex(i => i.id === item.id)
  if (index === -1) selectedArray.value.push(item)
  else selectedArray.value.splice(index, 1)
}

// تحديث كمية المنتج
const updateQuantity = ({ id, quantity }) => {
  const product = products.value.find(p => p.id === id)
  if (product) product.quantity = quantity
}

// الانتقال لصفحة الدفع
const goToCheckout = () => {
  if (selectedArray.value.length === 0) {
    alert("اختر المنتجات أولاً")
    return
  }
  userStore.checkout = selectedArray.value.map(item => toRaw(item))
  router.push('/checkout')
}

// المجموع الكلي يشمل الكمية
const subtotal = computed(() =>
  products.value.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
)

// طرق الدفع
const cards = ref([
  '/images/payment img/visa.png',
  '/images/payment img/paypal.png',
  '/images/payment img/discover.png',
  '/images/payment img/mastercart.png',
])

// loader مؤقت
onMounted(() => {
  setTimeout(() => userStore.isLoading = false, 200)
})
</script>
