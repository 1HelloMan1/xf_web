
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => (a: number) => state.counter * 2 + a,
  },
})