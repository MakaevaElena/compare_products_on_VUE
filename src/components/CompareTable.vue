<script setup>
import ParamValues from '../components/ParamValues.vue'
import { useRootStore } from '@/stores/root'
import { storeToRefs } from 'pinia'
import { COMPARE_PARAMS } from '../constants.ts'

const rootStore = useRootStore()
const { showChanges } = storeToRefs(rootStore)

const PARAMS = Object.keys(COMPARE_PARAMS)

const isSameParams = (param) => {
  const setOfParams = new Set()
  rootStore.chosenProducts.map((product) => {
    setOfParams.add(product[COMPARE_PARAMS[param]])
  })
  return showChanges.value && setOfParams.size === 1
}
</script>

<template>
  <div class="table-wrapper wrapper">
    <!-- {Object.keys(COMPARE_PARAMS).map((param: string, i: number) => { return ( !isSameParams(param)
    && ( -->
    <div v-for="(param, i) in PARAMS" :key="i">
      <div v-if="!isSameParams(param)" class="compare-row">
        <div class="param-title">
          <p>{{ param }}</p>
        </div>

        <!-- {{ renderParamValues(param) }} -->
        <ParamValues :param="param" />
      </div>
    </div>
    <!-- ) ); })} -->
  </div>
</template>

<style scoped>
.table-wrapper {
  background-color: white;
  padding-bottom: 90px;
  background-color: #f4f9fc;
}

.compare-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cdcfd2;
}

.param-title {
  width: 165px;
  color: #a4a9b9;
  font-size: 18px;
  padding-right: 10px;
}

@media screen and (max-width: 500px) {
  .table-wrapper .param-title {
    font-size: 3vw;
  }
}
</style>
