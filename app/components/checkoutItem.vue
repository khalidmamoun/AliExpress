<template>
  <div class="flex items-center gap-4 p-3 border border-gray-200 m-5 rounded-lg transition-all">
    <!-- صورة المنتج -->
    <img
      :src="product.url"
      :alt="product.title"
      class="w-20 h-20 object-cover rounded-md"
    />

    <!-- معلومات المنتج -->
    <div class="flex-1 flex flex-col justify-between">
      <div class="font-semibold text-md">{{ product.title }}</div>
      <div class="text-gray-500 text-sm">{{ product.description }}</div>
    </div>

    <!-- السعر -->
    <div class="font-bold text-lg">{{ product.price }} EGP</div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
