<template>
  <MainLayout>
    <div id="IndexPage" class="max-w-[1350px] mx-auto px-2">

      <div v-if="products.length" class="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div v-for="product in products" :key="product.id" class="h-full">
          <NuxtLink :to="`/item/${product.id}`">
            <ProductComponent :product="product" />
          </NuxtLink>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 py-20">
        {{ loading ? 'جاري التحميل...' : 'لا توجد منتجات حالياً' }}
      </div>

    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import ProductComponent from '~/components/ProductComponent.vue'
import { ref, onMounted } from 'vue'

const products = ref([])
const loading = ref(true)

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

onMounted(fetchProducts)
</script>
