<template>
  <div class="border border-gray-100 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden h-full group">
    <!-- صورة المنتج -->
    <div class="w-full aspect-[1/1] bg-gray-50 relative flex-shrink-0 flex items-center justify-center overflow-hidden">
      <img
        :src="product.image"
        alt="product image"
        class="max-w-full max-h-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    </div>

    <!-- محتوى الكارت -->
    <div class="p-4 flex flex-col flex-1">
      <h3 class="text-sm md:text-base font-semibold text-gray-900 truncate hover:text-indigo-600 transition-colors duration-300">
        {{ product.title }}
      </h3>

      <p class="text-xs md:text-sm text-gray-500 mt-1 line-clamp-2">
        {{ product.description }}
      </p>

      <div class="flex flex-wrap gap-1 mt-2">
        <span class="text-xs bg-red-500 text-white px-2 py-0.5 rounded">Welcome Deal</span>
        <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Top Selling</span>
        <span class="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{{ product.rating?.count || 5000 }}+ sold</span>
        <span class="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Free Shipping</span>
      </div>

      <div class="mt-auto flex items-center gap-3 mt-3">
        <span class="text-red-600 font-bold text-sm md:text-base">
          {{ priceFormatted }} EGP
        </span>
        <span v-if="oldPriceFormatted" class="text-gray-400 line-through text-xs md:text-sm">
          {{ oldPriceFormatted }} EGP
        </span>
      </div>

      <button
        class="mt-3 w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
      >
        Show Product
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, toRef } from 'vue'

const props = defineProps(['product'])
const product = toRef(props, 'product')

const priceFormatted = computed(() => {
  return product.value.price.toLocaleString('en-EG')
})

const oldPriceFormatted = computed(() => {
  if (!product.value.price) return null
  let oldPrice = product.value.price * 1.05
  return oldPrice.toLocaleString('en-EG')
})
</script>
