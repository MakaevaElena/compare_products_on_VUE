<script setup>
import { computed } from 'vue'
import { PRODUCTS } from '../products'
import { COMPARE_PARAMS } from '../constants.ts'

const props = defineProps({
  param: String
})

const chosenProducts = PRODUCTS.slice(0, 3)

const paramValues = computed(() => {
  // const paramValues = () => {
  return chosenProducts.map((product) => {
    let paramValue

    // switch (product[COMPARE_PARAMS[props.param]]) {
    //   case true:
    //     paramValue = <img src="./img/true.png" alt="" />
    //     break
    //   case false:
    //     // paramValue = <img src="./img/false.png" alt="" />
    //     break

    //   default:
    //     paramValue = product[COMPARE_PARAMS[props.param]]
    // }
    paramValue = product[COMPARE_PARAMS[props.param]]
    return paramValue
  })
})
</script>

<template>
  <div v-for="paramValue in paramValues" :key="paramValue" class="param-value">
    <p v-if="paramValue === true"><img src="../../public/img/true.png" alt="" /></p>
    <p v-else-if="paramValue === false">
      <img src="../..//public/img/false.png" alt="" />
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
