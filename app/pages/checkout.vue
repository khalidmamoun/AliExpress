<template>
  <MainLayout>
    <div id="checkoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between w-full">

        <!-- LEFT SIDE -->
        <div class="md:w-[65%]">
          <div class="bg-white rounded-xl shadow-md p-5">

            <!-- Title -->
            <div class="text-xl font-semibold mb-4">Shipping Address</div>

            <div v-if="hasAddress">
              <NuxtLink
                to="/address"
                class="mb-3 flex items-center text-blue-500 hover:text-red-500 transition-all font-medium"
              >
                <Icon icon="mdi:plus" size="20" class="mr-2" />
                Update Address
              </NuxtLink>

              <div class="pt-5 border-t">
                <div class="underline pb-1 font-semibold">Delivery Address</div>

                <ul class="text-sm mt-3 space-y-2">
                  <li class="flex items-center gap-2">
                    <span class="text-gray-600">Contact Name:</span>
                    <span class="font-bold">{{ address.name }}</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-gray-600">Address:</span>
                    <span class="font-bold">{{ address.address }}</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-gray-600">Zip Code:</span>
                    <span class="font-bold">{{ address.zip }}</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-gray-600">City:</span>
                    <span class="font-bold">{{ address.city }}</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-gray-600">Country:</span>
                    <span class="font-bold">{{ address.country }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <NuxtLink
              v-else
              to="/address"
              class="flex items-center text-blue-500 hover:text-red-400 font-medium"
            >
              <Icon icon="mdi:plus" size="20" class="mr-2" />
              Add New Address
            </NuxtLink>

          </div>

          <!-- Products List -->
          <div id="Items" class="bg-white rounded-lg p-4 mt-4 space-y-3 ">
            <div v-if="products.length === 0" class="text-center text-gray-500 py-6">
              Your Cart Is Empty
            </div>

            <div v-else>
              <div v-for="product in products" :key="product.id">
                <CheckoutItem 
                  :product="product" 
                  :initialQuantity="product.quantity" 
                  @updateQuantity="handleQuantityUpdate"
                />
              </div>
            </div>
          </div>

        </div>

        <!-- SUMMARY + PAYMENT -->
        <div class="block my-4 md:w-[30%]">
          <div id="placeOrder" class="bg-white rounded-lg p-4 shadow">
            <div class="text-2xl font-extrabold mb-2">Summary</div>

            <div class="flex items-center justify-between my-4">
              <div>Total Shipping</div>
              <div>Free</div>
            </div>

            <div class="border-t">
              <div class="flex items-center justify-between my-4">
                <div class="font-semibold">Total</div>
                <div class="text-2xl font-semibold">
                  EGP <span class="font-extrabold">{{ total }}</span>
                </div>
              </div>

              <!-- PAYMENT FORM -->
              <form @submit.prevent="pay()">
                <div id="card-element" class="border border-gray-400 p-3 rounded-lg"></div>
                <p id="card-error" role="alert" class="text-red-700 text-center font-semibold mt-2"></p>
<button
  :disabled="isProcessing"
  type="submit"
  class="mt-4 w-full text-white text-[21px] font-semibold p-2 rounded-full bg-gradient-to-r from-[#FE630c] to-[#FF3200] flex justify-center items-center"
>
  <template v-if="isProcessing">
    <!-- الدائرة في النص -->
    <svg class="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
  </template>
  <template v-else>
    Place Order
  </template>
</button>

              </form>

              <div class="bg-white rounded-lg p-4 mt-4">
                <div class="text-lg font-semibold mb-2 mt-2">AliExpress</div>
                <p class="my-2">
                  AliExpress keeps your information and payment safe.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </MainLayout>
</template>

<script setup>
    import MainLayout from '~/layouts/MainLayout.vue'
import CheckoutItem from '~/components/checkoutItem.vue'
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'

const hasAddress = ref(false)
const isProcessing = ref(false)

const address = ref({
  name: 'Ali',
  address: '123 Street, Cairo',
  zip: '12345',
  city: 'Cairo',
  country: 'Egypt'
})

// إضافة quantity لكل منتج
const products = ref([
  { id: 1, title: "هاتف ذكي Galaxy S23", description: "أفضل أداء وسعة تخزين ممتازة", url: "/images/product/0.png", price: 9999, quantity: 1 },
  { id: 2, title: "سماعات لاسلكية AirPods Pro", description: "صوت واضح وعزل ممتاز للضوضاء", url: "/images/product/1.png", price: 6499, quantity: 1 }
])

// تحديث كمية المنتج عند تغييرها
const handleQuantityUpdate = ({ id, quantity }) => {
  const product = products.value.find(p => p.id === id)
  if (product) product.quantity = quantity
}

// حساب المجموع الكلي
const total = computed(() =>
  products.value.reduce((sum, p) => sum + p.price * p.quantity, 0)
)

const pay = () => {
  isProcessing.value = true
  // هنا منطق بوابة الدفع
  setTimeout(() => {
    alert("Payment processed successfully!")
    isProcessing.value = false
  }, 2000)
}
</script>
