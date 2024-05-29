<script setup>
// export default {
//   components: {
//     HeaderNav
//   }
// }
// import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import HeaderNav from './components/HeaderNav.vue'
import { useRootStore } from '@/stores/root'
import { storeToRefs } from 'pinia'

const rootStore = useRootStore()
const { isModalOpen } = storeToRefs(rootStore)

const closeModal = (event) => {
  if (
    isModalOpen &&
    event.target instanceof HTMLElement &&
    !event.target.className.match(/modal|row-open/gim)
  )
    // dispatch(setIsModalOpen(false))
    rootStore.setIsModalOpen(false)
}
</script>

<template>
  <div class="container" @click="(event) => closeModal(event)">
    <HeaderNav />

    <RouterView />
  </div>
</template>

<style scoped>
/* .container {
  margin: 0 auto;
  max-width: 1442px;
  font-size: 18px;
} */

body {
  font-family: Roboto, sans-serif;
  font-size: 18px;
}

.wrapper {
  max-width: 1440px;
  padding: 0 10vw;
}

@media screen and (max-width: 500px) {
  .wrapper {
    padding: 0 5vw;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
