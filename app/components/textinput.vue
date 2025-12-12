<template>
  <div>
    <input
      :placeholder="placeholder"
      :maxlength="max"
      :type="inputType"
      v-model="inputComputed"
      @focus="isFocused = true"
      @blur="isFocused = false"
      autocomplete="off"
      class="w-full text-sm rounded-lg p-3 placeholder-gray-500 focus:outline-none transition-colors duration-200"
      :class="[
        'border',
        error ? 'border-red-500' : isFocused ? 'border-red-500 bg-red-50' : 'border-[#EFF0FB] bg-white'
      ]"
    />

    <!-- رسالة الخطأ -->
    <p v-if="error" class="text-red-500 text-sm mt-1">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
import { ref, computed, toRefs } from 'vue'

const props = defineProps({
  input: String,
  placeholder: String,
  max: Number,
  inputType: {
    type: String,
    default: 'text'
  },
  error: {
    type: String,
    default: ''
  }
})

const { input, error } = toRefs(props)
let isFocused = ref(false)

const emit = defineEmits(['update:input'])

const inputComputed = computed({
  get: () => input.value,
  set: val => emit('update:input', val)
})
</script>
