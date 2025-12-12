<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '~/supabaseClient'
import { useAuth } from '~/composables/useAuth'
import { NuxtLink } from '#components'
import { Icon } from '@iconify/vue'

const { user, logout } = useAuth()

const selectedFile = ref(null)
const avatarUrl = ref('/images/default-avatar.png')
const isUploading = ref(false)

// تحميل صورة المستخدم وقت فتح الصفحة
onMounted(() => {
  if (user.value?.user_metadata?.avatar) {
    // إضافة cache-busting
    avatarUrl.value = user.value.user_metadata.avatar + '?t=' + new Date().getTime()
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
  const fileName = `${user.value.id}.${ext}`
  const filePath = `avatars/${fileName}`

  // الرفع
  const { error } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, { upsert: true })

  if (error) {
    alert('Upload failed: ' + error.message)
    isUploading.value = false
    return
  }

  // الحصول على الرابط العام
  const { data } = supabase.storage.from('avatars').getPublicUrl(filePath)

  // تحديث الصورة مع cache-busting
  avatarUrl.value = data.publicUrl + '?t=' + new Date().getTime()

  // تحديث بيانات المستخدم
  const { error: metaError } = await supabase.auth.updateUser({
    data: { avatar: data.publicUrl }
  })

  if (metaError) alert('Failed to update profile: ' + metaError.message)
  else alert('Avatar updated successfully!')

  selectedFile.value = null
  isUploading.value = false
}

// حذف الصورة
async function deleteAvatar() {
  if (!user.value?.user_metadata?.avatar) {
    avatarUrl.value = '/images/default-avatar.png'
    return
  }

  const url = user.value.user_metadata.avatar
  const fileName = url.split('/').pop()
  const filePath = `avatars/${fileName}`

  const { error } = await supabase.storage
    .from('avatars')
    .remove([filePath])

  if (error) {
    alert('Failed to delete avatar: ' + error.message)
    return
  }

  // رجع صورة افتراضية (مع cache-busting)
  avatarUrl.value = '/images/default-avatar.png?t=' + new Date().getTime()

  // تحديث بيانات المستخدم
  const { error: metaError } = await supabase.auth.updateUser({
    data: { avatar: null }
  })

  if (metaError) alert('Failed to update profile: ' + metaError.message)
  else alert('Avatar deleted successfully!')
}


</script>

<template>
<div class="min-h-screen bg-gray-50 flex flex-col items-center py-10">

  <!-- Logo -->
  <NuxtLink to="/" class="mb-6 flex items-center gap-2">
    <img src="/images/logo.png" alt="Site Logo" class="w-36" />
  </NuxtLink>

  <!-- Profile -->
  <div class="max-w-md w-full bg-white p-6 rounded-lg shadow-md text-center">
    <h1 class="text-2xl font-bold mb-6">My Profile</h1>
      <p class="font-semibold text-lg mb-4">{{ user.email }}</p>

    <div v-if="user">
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

      <!-- Buttons -->
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
  class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
>
  Home Page
</NuxtLink>

    
      </div>



    </div>
  </div>
</div>
</template>
