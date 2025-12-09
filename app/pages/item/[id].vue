<template>
  <MainLayout>
    <div id="ItemPage" class="mt-8 max-w-[1200px] mx-auto px-3">
      
      <div class="bg-white rounded-2xl shadow-lg p-6 md:flex gap-8 w-full">

        <!-- ✅ الصور -->
        <div class="md:w-[40%] w-full">
          <!-- الصورة الرئيسية -->
          <div class="border border-gray-200 rounded-xl overflow-hidden">
<img
  class="object-contain w-full h-[420px] bg-white"
  :src="currentImage || '/images/product/11.png'"
  alt="صورة المنتج"
/>

          </div>

          <!-- ✅ الصور المصغرة -->
          <div v-if="images.length > 0" class="flex items-center justify-center mt-4 gap-3">
        <img
  v-for="(image, index) in images"
  :key="index"
  @click="currentImage = image"
  :src="image"
  width="70"
  class="rounded-lg object-cover border-2 cursor-pointer transition-all duration-300 hover:scale-105"
  :class="currentImage === image ? 'border-[#FF4646]' : 'border-gray-200'"
  alt="صورة مصغرة"
/>

          </div>
        </div>

        <!-- ✅ تفاصيل المنتج -->
    <!-- ✅ تفاصيل المنتج - ستايل AliExpress -->
<div class="md:w-[60%] w-full flex flex-col justify-start">

  <!-- ✅ العنوان -->
  <h1 class="text-[20px] font-semibold text-gray-900 mb-2 leading-snug">
    {{ product.name }}
  </h1>

  <!-- ✅ وصف صغير -->
  <p class="text-sm text-gray-500 mb-3">
    {{ product.description }}
  </p>

  <!-- ✅ عرض الخصم -->
  <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-2 w-fit">
    ⭐ Extra 5% off
  </div>

  <!-- ✅ التقييم + عدد الطلبات -->
  <div class="flex items-center gap-2 mb-3 text-sm">
    <div class="text-yellow-400">
      ★★★★☆
    </div>
    <span class="text-gray-500">5</span>
    <span class="text-gray-400">|</span>
    <span class="text-gray-500">213 Reviews</span>
    <span class="text-gray-400">|</span>
    <span class="text-gray-500">1000+ orders</span>
  </div>

  <!-- ✅ السعر -->
  <div class="flex items-end gap-3 mb-3">
    <span class="text-3xl font-bold text-black">
      $ {{ product.price }}
    </span>

    <span class="text-sm line-through text-gray-400">
      $ 32.40
    </span>

    <span class="text-xs text-orange-600 font-semibold">
      70% off
    </span>
  </div>

  <!-- ✅ الشحن -->
  <div class="text-sm text-green-600 mb-1">
    Free 11-day delivery over £8.28
  </div>

  <div class="text-sm text-green-600 mb-6">
    Free Shipping
  </div>

  <!-- ✅ زر Add To Cart -->
  <button
    class="w-fit bg-red-500 hover:bg-red-700 text-white px-10 py-3 rounded-md font-semibold transition"
  >
    Add to Cart
  </button>

</div>


      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import MainLayout from '~/layouts/MainLayout.vue'

// بيانات تجريبية
const product = {
  name: 'منتج تجريبي احترافي',
  description: 'هذا وصف احترافي للمنتج مع تفاصيل جذابة تقنع العميل بالشراء وتوضح المميزات الأساسية.',
  price: 250
}

const images = [
  '/images/product/11.png',
  '/images/product/12.png',
  '/images/product/13.png',
  '/images/product/14.png',
  '/images/product/15.png'
]

const currentImage = ref(images[0])
</script>
