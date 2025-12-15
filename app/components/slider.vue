<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

/* ======================
   Slider Data
====================== */
const slides = [
  {
    id: 1,
    title: 'Organic Green Tea',
    image: '/images/slider/sliderhome1.png',
    description: 'Refreshing and full of antioxidants for a healthy lifestyle.',
  },
  {
    id: 2,
    title: 'Wireless Headphones',
    image: '/images/slider/sliderhome2.png',
    description: 'Experience crystal-clear sound with noise cancellation technology.',
  },
  {
    id: 3,
    title: 'Eco-friendly Notebook',
    image: '/images/slider/sliderhome3.png',
    description: 'Made from recycled materials, perfect for daily journaling.',
  },
]


/* ======================
   Logic
====================== */
const currentSlide = ref(0)
let intervalId = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// تحريك السلايدر كله
const sliderTransform = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`,
}))

onMounted(() => {
  intervalId = setInterval(nextSlide, 8000) // autoplay كل 8 ثواني
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <section class="mx-auto w-full max-w-8xl px-6 py-3">
    <!-- ================= Slider ================= -->
    <div class="relative w-full aspect-[4/1] overflow-hidden rounded-2xl shadow-lg">
      <div
        class="flex h-full transition-transform duration-1000 ease-in-out"
        :style="sliderTransform"
      >
        <div
          v-for="slide in slides"
          :key="slide.id"
          class="w-full h-full flex-shrink-0 relative"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover"
          />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/40"></div>

          <!-- Text -->
          <div class="absolute bottom-5 left-5 md:left-10 text-white max-w-md">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">
              {{ slide.title }}
            </h2>
            <p class="mt-1 text-sm md:text-base lg:text-lg opacity-90">
              {{ slide.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Arrows -->
      <button @click="prevSlide" class="nav-btn left-2 md:left-4">‹</button>
      <button @click="nextSlide" class="nav-btn right-2 md:right-4">›</button>

      <!-- Dots -->
      <div class="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        <span
          v-for="(slide, index) in slides"
          :key="slide.id"
          @click="goToSlide(index)"
          class="w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition"
          :class="currentSlide === index
            ? 'bg-white scale-110'
            : 'bg-white/50 hover:bg-white'"
        ></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  z-index: 10;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.75);
}
</style>
