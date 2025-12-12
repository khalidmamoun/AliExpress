import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore("user", () => {

  const user = ref(null)
  const checkout = ref([])

  // حفظ السلة في localStorage
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(checkout.value))
  }

  // تحميل السلة عند فتح الصفحة
  function loadCart() {
    const saved = localStorage.getItem("cart")
    if (saved) {
      checkout.value = JSON.parse(saved)
    }
  }

  // إضافة منتج
  function addItem(product) {
    const exists = checkout.value.find(p => p.id === product.id)

    if (exists) {
      exists.quantity = (exists.quantity || 1) + 1
    } else {
      checkout.value.push({...product, quantity: 1})
    }
    saveCart()     // ← مهم جداً
  }

  // حذف منتج
  function removeItem(product) {
    checkout.value = checkout.value.filter(p => p.id !== product.id)
    saveCart()
  }

  // تفريغ السلة
  function clearCart() {
    checkout.value = []
    saveCart()
  }

  return {
    user,
    checkout,
    addItem,
    removeItem,
    clearCart,
    loadCart,
  }
})
