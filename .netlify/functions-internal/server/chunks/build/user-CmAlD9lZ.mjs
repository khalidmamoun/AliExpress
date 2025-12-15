import { defineStore } from 'pinia';
import { ref } from 'vue';

const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const checkout = ref([]);
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(checkout.value));
  }
  function loadCart() {
    const saved = localStorage.getItem("cart");
    if (saved) {
      checkout.value = JSON.parse(saved);
    }
  }
  function addItem(product) {
    const exists = checkout.value.find((p) => p.id === product.id);
    if (exists) {
      exists.quantity = (exists.quantity || 1) + 1;
    } else {
      checkout.value.push({ ...product, quantity: 1 });
    }
    saveCart();
  }
  function removeItem(product) {
    checkout.value = checkout.value.filter((p) => p.id !== product.id);
    saveCart();
  }
  function clearCart() {
    checkout.value = [];
    saveCart();
  }
  return {
    user,
    checkout,
    addItem,
    removeItem,
    clearCart,
    loadCart,
    saveCart
  };
});

export { useUserStore as u };
//# sourceMappingURL=user-CmAlD9lZ.mjs.map
