// ~/stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    checkout: [],   // المنتجات المختارة للدفع
    user: null
  }),

  actions: {
    setCheckout(items) {
      this.checkout = items
    },

    setUser(userData) {
      this.user = userData
    }
  }
})
