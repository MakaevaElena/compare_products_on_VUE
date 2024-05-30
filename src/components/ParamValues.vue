<script setup>
// import { storeToRefs } from 'pinia'
import { useRootStore } from '@/stores/root'
import { computed } from 'vue'
// import { PRODUCTS } from '../products'
import { COMPARE_PARAMS } from '../constants.ts'

const rootStore = useRootStore()
// const { products } = storeToRefs(rootStore)
// console.log('products', rootStore.products)

const props = defineProps({
  param: String
})

// const chosenProducts = rootStore.chosenProducts

const paramValues = computed(() => {
  return rootStore.chosenProducts.map((product) => {
    let paramValue
    paramValue = product[COMPARE_PARAMS[props.param]]
    return paramValue
  })
})
</script>

<template>
  <div v-for="paramValue in paramValues" :key="paramValue" class="param-value">
    <p v-if="paramValue === true"><img src="../../img/true.png" alt="" /></p>
    <p v-else-if="paramValue === false">
      <img src="../../img/false.png" alt="" />
    </p>
    <p v-else>{{ paramValue }}</p>
  </div>
</template>

<style scoped>
.param-value {
  width: 100px;
}

@media screen and (max-width: 500px) {
  .table-wrapper .param-value {
    font-size: 3.5vw;
  }
}

.param-value img {
  width: 22px;
  height: 22px;
}
</style>
