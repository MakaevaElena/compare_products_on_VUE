<script setup>
import { computed } from 'vue'
import { useRootStore } from '@/stores/root'
import ChosenProducts from '../components/ChosenProducts.vue'
import CompareTable from '../components/CompareTable.vue'
const rootStore = useRootStore()

const countOfProducts = computed(() => {
  return rootStore.products.map((_el, i) => {
    if (i > 0 && i < 6) {
      return i + 1
    }
  })
})

const handleOnclick = (event) => {
  rootStore.setChosenCount(+event.target.innerHTML)
  rootStore.setChosenProducts(rootStore.products.slice(0, rootStore.chosenCount))
}
</script>

<template>
  <div className="compare-wrapper wrapper">
    <div className="compare-nav">
      <div className="compare-title">
        <h4>Смартфоны</h4>
      </div>
      <div className="compare-count">
        <p>Отобразить товары:</p>

        <div
          v-for="(count, i) in countOfProducts"
          :key="i"
          :class="`count-for-compare ${rootStore.chosenCount == count ? 'chosen' : ''}`"
        >
          <p @click="handleOnclick($event)">
            {{ count }}
          </p>
        </div>
      </div>
    </div>
    <ChosenProducts />
  </div>
  <CompareTable />
</template>

<style scoped>
.compare-wrapper {
  padding-bottom: 77px;
  border-bottom: 1px solid #cdcfd2;
  background-color: white;
}

.compare-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.compare-title {
  color: #828286;
  font-size: 52px;
}

.compare-title h4 {
  margin-top: 62px;
  margin-bottom: 22px;
}

@media screen and (max-width: 800px) {
  .compare-title {
    font-size: 6vw;
  }
}

.compare-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  color: #0d5adc;
}

.compare-count p {
  margin-top: 70px;
  margin-bottom: 0px;
  font-size: 18px;
}

@media screen and (max-width: 800px) {
  .compare-count p {
    font-size: 4vw;
    margin: 10px;
  }
}

.count-for-compare {
  cursor: pointer;
}

.count-for-compare:hover {
  color: #5e90e6;
}

.chosen {
  text-decoration: underline;
}
</style>
