<template>
  <MainLayout>
    <div id="shoppingCartPage" class="mt-8 max-w-[1200px] mx-auto px-4">

      <!-- المستخدم غير مسجل دخول -->
      <div v-if="!isUserLoggedIn" class="bg-white rounded-3xl shadow-lg min-h-[500px] flex items-center justify-center">
        <div class="text-center px-6 pb-10">
          <img 
            class="mx-auto mb-6"
            width="280"
            src="/images/emptycart.png"
            alt="Empty Cart"
          >
       
          <NuxtLink
            to="/auth"
            class="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold px-12 py-3 rounded-full transition-shadow shadow-md"
          >
            Sign in
          </NuxtLink>
        </div>
      </div>

      <!-- السلة المحتوية على منتجات -->
      <div v-else-if="products.length > 0" class="md:flex gap-6 justify-between mx-auto w-full">

        <!-- قائمة المنتجات -->
        <div class="md:w-[68%] space-y-6">

          <div class="bg-white rounded-3xl p-6 shadow-md transition-shadow">
            <div class="text-2xl font-bold mb-3 text-gray-800">
              Shopping Cart [ {{ products.length }} ]
            </div>
          </div>

          <div id="Items" class="space-y-4">
            <div v-for="product in products" :key="product.id" class="flex gap-4 items-start bg-green-50 rounded-lg p-4 shadow-sm">
              
              <img :src="product.url" class="w-24 h-24 object-contain rounded-lg border" />

              <div class="flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-semibold text-lg text-green-800">{{ product.title }}</h3>
                  <p class="text-green-900 text-sm mt-1">{{ product.description }}</p>
                  <div class="flex gap-3 items-center mt-2">
                    <span class="font-bold text-green-800">{{ product.price.toLocaleString('en-EG') }} EGP</span>
                    <span class="text-yellow-800 line-through">{{ (product.price * 1.05).toLocaleString('en-EG') }} EGP</span>
                  </div>
                </div>

                <!-- كمية + مسح -->
                <div class="flex items-center gap-2 mt-3">
                  <button @click="decreaseQuantity(product)" class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200">-</button>
                  <span class="font-semibold text-green-800">{{ product.quantity }}</span>
                  <button @click="increaseQuantity(product)" class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200">+</button>

                  <button @click="removeItem(product)" class=" cursor-pointer font-bold ml-auto text-red-600 hover:text-red-800">
                    🗑️Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- ملخص السلة -->
        <div class="hidden md:block md:w-[30%]">
          <div class="bg-white rounded-3xl p-4 shadow-md sticky top-6">
            <h3 class="text-xl font-bold mb-4">Summary</h3>

            <div class="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>{{ subtotal.toLocaleString('en-EG') }} EGP</span>
            </div>

            <div class="flex justify-between font-bold border-t pt-2">
              <span>Total:</span>
              <span>{{ subtotal.toLocaleString('en-EG') }} EGP</span>
            </div>

            <button @click="goToCheckout" class="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-full transition-shadow shadow-md cursor-pointer">
              Checkout
            </button>
          </div>
        </div>

      </div>

      <!-- السلة فارغة لكن المستخدم مسجل دخول -->
      <div v-else class="bg-white rounded-3xl shadow-lg min-h-[500px] flex items-center justify-center">
        <div class="text-center px-6 pb-10">
          <img src="/images/emptycart.png" alt="">
        </div>
      </div>

    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import { ref, computed, onMounted, watch } from 'vue'
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const isUserLoggedIn = computed(() => !!userStore.user)

// نسخة reactive محلية للسلة
const products = ref([])

onMounted(() => {
  userStore.loadCart()
  products.value = [...userStore.checkout]  // مزامنة أولية
})

// تحديث UI عند أي تغيير في الـ store
watch(() => userStore.checkout, () => {
  products.value = [...userStore.checkout]
}, { deep: true })

// زيادة الكمية
function increaseQuantity(item) {
  userStore.addItem(item)  // هتزود الكمية في الـ store وتحفظ
}

// نقصان الكمية
function decreaseQuantity(item) {
  if (item.quantity > 1) {
    item.quantity -= 1
    userStore.saveCart()
  } else {
    removeItem(item)
  }
}

// حذف المنتج
function removeItem(item) {
  userStore.removeItem(item)
}

const subtotal = computed(() =>
  products.value.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
)

function goToCheckout() {
  if (!isUserLoggedIn.value) {
    router.push('/auth')
    return
  }
  if (products.value.length === 0) return
  router.push('/checkout')
}
</script>
