// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { PRODUCTS } from '../products'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useRootStore = defineStore('root', {
  state: () => ({
    products: PRODUCTS,
    chosenCount: 3,
    searchValue: '',
    chosenProducts: PRODUCTS.slice(0, 3),
    changedProduct: {
      productName: '',
      productImage: '',
      producer: '',
      year: 0,
      diagonal: 0,
      country: '',
      memory: '',
      fqc: '',
      NFC: false,
      ESIM: false,
      wirelessPower: false,
      price: ''
    },
    changedProductId: 0,
    showChanges: false,
    isModalOpen: false
  }),
  actions: {
    setChosenCount(val: number) {
      this.chosenCount = val
    }
  }
})
