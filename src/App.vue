<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import HeaderNav from './components/HeaderNav.vue'
</script>

<template>
  <div class="container">
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
</style>
