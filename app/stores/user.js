import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    checkout: [],   // هنا هيتحفظ المنتجات المختارة للدفع
    user: null      // لو حبيت تضيف مستخدم بعدين
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
