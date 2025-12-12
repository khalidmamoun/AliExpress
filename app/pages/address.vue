<template>
  <MainLayout>
    <div id="AddressPage" class="min-h-screen w-full flex justify-center items-start pt-10 px-3  ">
      <div class="bg-white w-full max-w-[500px] rounded-xl  p-5 border border-gray-200 ">
        
        <h1 class="text-2xl font-bold mb-4 text-center  ">
          Address Details
        </h1>

        <form @submit.prevent="submit" class="space-y-3 ">

                  <TextInput 
                  class="mb-5 border border-gray-300 rounded-lg"
            placeholder="Contact Name"
            v-model:input="contactName"
            inputType="text"
            :error="error?.type === 'contactName' ? error.message : ''"
          />

          <TextInput 
          class="mb-5 border border-gray-300 rounded-lg"
            placeholder="Address"
            v-model:input="address"
            inputType="text"
            :error="error?.type === 'address' ? error.message : ''"
          />

          <TextInput
          class="mb-5 border border-gray-300 rounded-lg"
            placeholder="Zip Code"
            v-model:input="zipCode"
            inputType="text"
            :error="error?.type === 'zipCode' ? error.message : ''"
          />

          <TextInput          
          class="mb-5 border border-gray-300 rounded-lg"
            placeholder="City"
            v-model:input="city"
            inputType="text"
            :error="error?.type === 'city' ? error.message : ''"
          />

          <TextInput
           class="mb-5 border border-gray-300 rounded-lg"
            placeholder="Country"
            v-model:input="country"
            inputType="text"
            :error="error?.type === 'country' ? error.message : ''"
          />

          <button 
            :disabled="isWorking"
            type="submit"
            class="mt-4 bg-gradient-to-r from-[#FE630c] to-[#FF3200]  text-white text-[20px] font-semibold py-2 rounded-lg p-5 cursor-pointer flex justify-center m-auto disabled:opacity-50"
          >
            <template v-if="!isWorking">Update Address</template>
            <Icon v-else icon="eos-icons:loading" size="45" />
          </button>
     

        </form>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
import TextInput from '~/components/textinput.vue'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

const contactName = ref('')
const address = ref('')
const zipCode = ref('')
const city = ref('')
const country = ref('')
const error = ref(null)
const isWorking = ref(false)

const submit = async () => {
  isWorking.value = true
  error.value = null

  if (!contactName.value)
    error.value = { type: 'contactName', message: 'Contact Name is required' }
  else if (!address.value)
    error.value = { type: 'address', message: 'Address is required' }
  else if (!zipCode.value)
    error.value = { type: 'zipCode', message: 'Zip Code is required' }
  else if (!city.value)
    error.value = { type: 'city', message: 'City is required' }
  else if (!country.value)
    error.value = { type: 'country', message: 'Country is required' }

  if (error.value) {
    isWorking.value = false
    return
  }

  try {
    console.log('Submitting:', {
      contactName: contactName.value,
      address: address.value,
      zipCode: zipCode.value,
      city: city.value,
      country: country.value
    })
    await new Promise(resolve => setTimeout(resolve, 1000))
  } finally {
    isWorking.value = false
  }
}
</script>
