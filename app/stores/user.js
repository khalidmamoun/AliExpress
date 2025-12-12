import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '~/supabaseClient'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const checkout = ref([])

  // تحميل السلة من Supabase عند تسجيل الدخول
  const loadCart = async () => {
    if (!user.value) return
    const { data, error } = await supabase
      .from('cart')
      .select('*')
      .eq('user_id', user.value.id) // أو user.value.id حسب الـ auth
    if (!error) checkout.value = data.map(item => ({ ...item, quantity: item.quantity || 1 }))
  }

  // إضافة عنصر للسلة وحفظه في Supabase
  const addItem = async (product) => {
    if (!user.value) return

    const existing = checkout.value.find(p => p.product_id === product.id)
    if (existing) {
      existing.quantity += 1
      await supabase
        .from('cart')
        .update({ quantity: existing.quantity })
        .eq('user_id', user.value.id)
        .eq('product_id', product.id)
    } else {
      const newItem = {
        user_id: user.value.id,
        product_id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1
      }
      checkout.value.push(newItem)
      await supabase.from('cart').insert(newItem)
    }
  }

  const removeItem = async (product) => {
    const index = checkout.value.findIndex(p => p.product_id === product.product_id)
    if (index !== -1) {
      checkout.value.splice(index, 1)
      await supabase
        .from('cart')
        .delete()
        .eq('user_id', user.value.id)
        .eq('product_id', product.product_id)
    }
  }

  const clearCart = async () => {
    checkout.value = []
    if (!user.value) return
    await supabase.from('cart').delete().eq('user_id', user.value.id)
  }

  return { user, checkout, loadCart, addItem, removeItem, clearCart }
})
