<template>
  <MainLayout>
    <!-- السلايدر الكبير -->
    <Slider />

    <!-- قسم العروض مع العد التنازلي -->
    <SaleCountdown />

    <!-- سلايدر المنتجات الصغير -->
    <ProductSlider :products="products" />

        <div class="text-center mb-8">
      <span class="text-xs uppercase tracking-widest text-red-500 font-semibold">Special Selection</span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Special Products For You</h2>
    </div>

    
    <!-- شبكة المنتجات -->
    <div id="IndexPage" class="max-w-[1350px] mx-auto px-2 mt-8">
      <div v-if="products.length" class="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div v-for="product in products" :key="product.id" class="h-full">
          <NuxtLink :to="`/item/${product.id}`">
            <ProductComponent :product="product" />
          </NuxtLink>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 py-20">
        {{ loading ? 'Please Wait...' : 'No Product' }}
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// استدعاء المكونات
import MainLayout from '~/layouts/MainLayout.vue'
import Slider from '~/components/Slider.vue'
import ProductSlider from '~/components/ProductSlider.vue'
import ProductComponent from '~/components/ProductComponent.vue'
import SaleCountdown from '~/components/SaleCountdown.vue'

// حالة المنتجات
const products = ref([])
const loading = ref(true)

// جلب المنتجات من API
async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    products.value = await res.json()
  } catch (err) {
    console.error('Error fetching products:', err)
  } finally {
    loading.value = false
  }
}

// تنفيذ عند تحميل الصفحة
onMounted(fetchProducts)
</script>

<style scoped>
/* يمكنك إضافة أي تعديلات على التصميم هنا إذا أحببت */
</style>
