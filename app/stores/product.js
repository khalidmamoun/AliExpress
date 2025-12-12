// ~/stores/product.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const selectedImage = ref(null) // الصورة الحالية المعروضة في ItemPage
  const selectedProduct = ref(null) // المنتج المختار بالكامل

  return { selectedImage, selectedProduct }
})
