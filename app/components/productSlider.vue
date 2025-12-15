<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const products = ref([])
const currentIndex = ref(0)
const visibleCount = ref(4)
let intervalId = null

// قيمة افتراضية false عشان تتجنب مشاكل SSR
const isLargeScreen = ref(false)

const goToItemPage = (id) => router.push(`/item/${id}`)

const next = () => {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
  else currentIndex.value = 0
}

const prev = () => {
  if (currentIndex.value > 0) currentIndex.value--
  else currentIndex.value = maxIndex.value
}

const maxIndex = computed(() =>
  Math.max(products.value.length - visibleCount.value, 0)
)

const sliderStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * (100 / visibleCount.value)}%)`,
}))

onMounted(async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    products.value = await res.json()
  } catch (error) {
    console.error('Failed to fetch products', error)
  }

  // حدث قيمة isLargeScreen فقط بعد المونت
  const updateScreen = () => {
    isLargeScreen.value = window.innerWidth >= 1161
  }

  updateScreen() // تحديث أول مرة عند المونت
  window.addEventListener('resize', updateScreen)

  // autoplay فقط على الشاشات الكبيرة
  intervalId = setInterval(() => {
    if (isLargeScreen.value) next()
  }, 4000)

  onBeforeUnmount(() => {
    clearInterval(intervalId)
    window.removeEventListener('resize', updateScreen)
  })
})
</script>

<template>
  <!-- نعرض السلايدر فقط على الشاشات الكبيرة -->
  <section v-if="isLargeScreen" class="max-w-7xl mx-auto px-6 py-16">
    <!-- Controls -->
    <div class="flex justify-end gap-3 mb-4">
      <button @click="prev" class="arrow-btn">‹</button>
      <button @click="next" class="arrow-btn">›</button>
    </div>

    <!-- Slider -->
    <div  class="overflow-hidden ">
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="sliderStyle"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="w-1/4 px-3 flex-shrink-0"
        >
          <div @click="goToItemPage(product.id)" class="cursor-pointer bg-white rounded-2xl border hover:shadow-xl transition p-4 h-full flex flex-col relative">

            <!-- Badges -->
            <div class="absolute top-3 left-3 flex flex-col gap-1">
              <span class="badge bg-red-500">Welcome Deal</span>
              <span class="badge bg-orange-500">Top Selling</span>
            </div>

            <!-- Image -->
            <img
              :src="product.image"
              :alt="product.title"
              class="h-40 mx-auto object-contain mb-4"
            />

            <!-- Title -->
            <h3 class="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">
              {{ product.title }}
            </h3>

            <!-- Description -->
            <p class="text-xs text-gray-500 line-clamp-3 mb-3">
              {{ product.description }}
            </p>

            <!-- Sold + Shipping -->
            <div class="text-xs text-gray-400 mb-2">
              259+ sold · Free Shipping
            </div>

            <!-- Price -->
            <div class="mt-auto">
              <div class="flex items-center gap-2">
                <span class="text-lg font-bold text-red-500">
                  {{ (product.price * 30).toFixed(2) }} EGP
                </span>
                <span class="text-sm line-through text-gray-400">
                  {{ (product.price * 32).toFixed(2) }} EGP
                </span>
              </div>

              <button
                @click="goToItemPage(product.id)"
                class="mt-3 w-full bg-blue-500 text-white py-2 rounded-full cursor-pointer
                       hover:bg-red-600 transition font-semibold text-sm"
              >
                Show Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.arrow-btn {
  width: 42px;
  height: 42px;
  border-radius: 9999px;
  background: #111;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
}

.arrow-btn:hover {
  background: #ef4444;
}

.badge {
  color: white;
  font-size: 10px;
  padding: 3px 6px;
  border-radius: 6px;
  font-weight: 600;
}
</style>
