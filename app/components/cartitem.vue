<template>
  <div
    class="flex items-center p-2 my-2 rounded-lg border transition-all duration-200 cursor-pointer"
    :class="isSelected ? 'bg-red-50 border-red-500' : 'bg-white border-gray-200'"
    @click="toggleSelect"
  >
    <!-- الدائرة مع علامة الصح -->
    <div
      class="flex items-center justify-center h-[20px] w-[20px] rounded-full border mr-2 transition-all duration-200"
      :class="isSelected ? 'bg-red-500 border-red-500' : 'bg-white border-gray-400'"
    >
      <svg
        v-if="isSelected"
        class="w-3 h-3 text-white"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <!-- صورة المنتج -->
    <img 
      :src="`/images/product/11.png`"
      class="rounded-md md:w-[150px] w-[90px] object-cover"
    />

    <!-- معلومات المنتج -->
    <div class="flex-1 flex flex-col justify-between pl-2 overflow-hidden">
      <div class="flex items-center justify-between w-full">
        <span class="bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px] truncate">
          Welcome Deal
        </span>

        <button
          @click.stop="removeFromeCart()"
          class="ml-2 hover:text-red-500"
        >
          <Icon icon="mdi:trash-can-outline" width="20" height="20" />
        </button>
      </div>

      <div class="truncate mt-1 font-medium text-sm">
        {{ product.title }}
    
        <p class=" text-yellow-600 text-xs font-semibold pt-1">
          Shopping Now
        </p>
        <p class="text-[#009A66] text-xs font-semibold pt-1">
          Free 11-day delivery over EGP 5
        </p>
        <div class="text-xl font-semibold mt-2">
          $ <span class="font-bold">{{ product.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, toRefs } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  product: Object,
  selectedArray: {
    type: Array,
    default: () => []
  }
})

const { product, selectedArray } = toRefs(props)
const emit = defineEmits(['selectedRadio'])

let isSelected = ref(selectedArray.value.includes(product.value.id))

const toggleSelect = () => {
  isSelected.value = !isSelected.value
  emit('selectedRadio', { id: product.value.id, val: isSelected.value })
}

watch(selectedArray, (newVal) => {
  isSelected.value = newVal ? newVal.includes(product.value.id) : false
})

// دالة وهمية للحذف
const removeFromeCart = () => {
  console.log('Remove', product.value.id)
}
</script>
