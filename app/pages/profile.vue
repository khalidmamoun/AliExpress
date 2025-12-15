<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '~/stores/user'
import { NuxtLink } from '#components'
import { Icon } from '@iconify/vue'

const store = useUserStore()
const selectedFile = ref(null)
const avatarUrl = ref('/images/default-avatar.png')
const isUploading = ref(false)

// تحميل صورة المستخدم وبياناته عند فتح الصفحة
onMounted(() => {
  // لو فيه avatar محفوظ في user store
  if (store.user?.avatar) {
    avatarUrl.value = store.user.avatar + '?t=' + new Date().getTime()
  }
})

// لما المستخدم يختار صورة
function onFileChange(e) {
  selectedFile.value = e.target.files[0]
  if (selectedFile.value) {
    avatarUrl.value = URL.createObjectURL(selectedFile.value)
  }
}

// رفع الصورة
async function uploadAvatar() {
  if (!selectedFile.value) return alert('Please select a file!')
  isUploading.value = true

  const file = selectedFile.value
  const ext = file.name.split('.').pop()
  const fileName = `${store.user.id}.${ext}`
  const filePath = `avatars/${fileName}`

  const { error } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, { upsert: true })

  if (error) {
    alert('Upload failed: ' + error.message)
    isUploading.value = false
    return
  }

  const { data } = supabase.storage.from('avatars').getPublicUrl(filePath)
  avatarUrl.value = data.publicUrl + '?t=' + new Date().getTime()

  // تحديث بيانات المستخدم في الـ store
  store.user.avatar = data.publicUrl

  alert('Avatar updated successfully!')
  selectedFile.value = null
  isUploading.value = false
}

// حذف الصورة
async function deleteAvatar() {
  if (!store.user?.avatar) {
    avatarUrl.value = '/images/default-avatar.png'
    return
  }

  const url = store.user.avatar
  const fileName = url.split('/').pop()
  const filePath = `avatars/${fileName}`

  const { error } = await supabase.storage.from('avatars').remove([filePath])

  if (error) {
    alert('Failed to delete avatar: ' + error.message)
    return
  }

  avatarUrl.value = '/images/default-avatar.png?t=' + new Date().getTime()
  store.user.avatar = null
  alert('Avatar deleted successfully!')
}
</script>

<template>
<div class="min-h-screen bg-gray-50 flex flex-col items-center py-10">

  <!-- Logo -->
  <NuxtLink to="/" class="mb-6 flex items-center gap-2">
    <img src="/images/logo.png" alt="Site Logo" class="w-36" />
  </NuxtLink>

  <!-- Profile -->
  <div v-if="store.user" class="max-w-md w-full bg-white p-6 rounded-lg shadow-md text-center">
    <h1 class="text-2xl font-bold mb-6">My Profile</h1>
    <p class="font-semibold text-lg mb-4">{{ store.user.email }}</p>

    <div class="relative w-32 h-32 mx-auto mb-4">
      <img
        :src="avatarUrl"
        class="w-32 h-32 rounded-full border-2 border-gray-300 object-cover"
        alt="Avatar"
      />
      <label
        for="avatarInput"
        class="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600"
      >
        <Icon icon="ph:pencil-simple" width="20" />
      </label>
    </div>

    <input
      id="avatarInput"
      type="file"
      class="hidden"
      accept="image/*"
      @change="onFileChange"
    />

    <div class="flex justify-center gap-4 mb-4">
      <button
        @click="uploadAvatar"
        :disabled="!selectedFile || isUploading"
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
      >
        {{ isUploading ? 'Uploading...' : 'Save Image' }}
      </button>

      <button
        @click="deleteAvatar"
        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
      >
        Delete Image
      </button>

      <NuxtLink
        to="/"
        class="font-bold bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Home Page
      </NuxtLink>
    </div>
  </div>

  <div v-else class="text-center py-10">
    <p class="text-lg font-semibold text-gray-500">You are not logged in.</p>
    <NuxtLink to="/" class="text-blue-500 hover:underline mt-4 inline-block">Go to Home</NuxtLink>
  </div>

</div>
</template>
