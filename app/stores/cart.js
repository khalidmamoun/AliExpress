import { defineStore } from "pinia"
import { ref } from "vue"

export const useCartStore = defineStore("cart", () => {

  const cart = ref([])

  // تحميل السلة
  function loadCart() {
    const saved = localStorage.getItem("cart")
    if (saved) {
      cart.value = JSON.parse(saved)
    }
  }

  // حفظ السلة
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart.value))
  }

  // إضافة منتج
  function addItem(product) {
    const exists = cart.value.find(p => p.id === product.id)
    if (exists) {
      exists.quantity = (exists.quantity || 1) + 1
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
    saveCart()
  }

  // حذف
  function removeItem(id) {
    cart.value = cart.value.filter(p => p.id !== id)
    saveCart()
  }

  // تفريغ
  function clearCart() {
    cart.value = []
    saveCart()
  }

  return { cart, addItem, removeItem, clearCart, loadCart }
})
