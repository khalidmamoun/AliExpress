<template>
  <div class="flex flex-col md:flex-row justify-between items-center rounded-2xl p-6 shadow-lg mb-1 mt-10">
    <!-- العنوان -->
    <div class="text-center md:text-left mb-4 md:mb-0">
      <h2 class="text-3xl font-bold text-red-600">For Sale</h2>
      <p class="text-gray-700 mt-2">Special discounts and offers available this month!</p>
    </div>

    <!-- العدّاد -->
    <div class="text-center bg-white px-6 py-4 rounded-2xl shadow-md flex gap-4 items-center">
      <div class="flex flex-col">
        <span class="text-3xl font-bold text-red-600">{{ countdown.days }}</span>
        <span class="text-xs text-gray-500">Days</span>
      </div>
      <span class="text-2xl font-bold text-gray-400">:</span>
      <div class="flex flex-col">
        <span class="text-3xl font-bold text-red-600">{{ countdown.hours }}</span>
        <span class="text-xs text-gray-500">Hours</span>
      </div>
      <span class="text-2xl font-bold text-gray-400">:</span>
      <div class="flex flex-col">
        <span class="text-3xl font-bold text-red-600">{{ countdown.minutes }}</span>
        <span class="text-xs text-gray-500">Minutes</span>
      </div>
      <span class="text-2xl font-bold text-gray-400">:</span>
      <div class="flex flex-col">
        <span class="text-3xl font-bold text-red-600">{{ countdown.seconds }}</span>
        <span class="text-xs text-gray-500">Seconds</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
let timerInterval = null

const calculateCountdown = () => {
  const now = new Date()
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1) // بداية الشهر القادم
  const diff = endOfMonth - now

  countdown.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  }
}

onMounted(() => {
  calculateCountdown()
  timerInterval = setInterval(calculateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timerInterval)
})
</script>

<style scoped>
/* يمكن تضيف هنا تأثيرات إضافية */
</style>
