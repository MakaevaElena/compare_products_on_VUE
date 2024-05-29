<script setup>
import { useRootStore } from '@/stores/root'
import { storeToRefs } from 'pinia'
// import { onUpdated } from 'vue'
const rootStore = useRootStore()

const { chosenProducts } = storeToRefs(rootStore)
// const products = rootStore.products

// import { PRODUCTS } from '../products'
// import SearchModal from '../components/SearchModal.vue'
// const chosenProducts = rootStore.chosenProducts

// const isModalOpen = false
// const orderNum = 2

function handleShowDiffs() {
  // dispatch(setShowChanges(!showChanges));
  console.log('handleChange')
}

const onOpenSearchModal = ($event, i, product) => {
  // setOrderNum(i);
  // dispatch(setChangedProduct(product));
  // dispatch(setChangedProductId(+i));
  // dispatch(setIsModalOpen(true));
  // if (changedProductId === i) dispatch(setIsModalOpen(!isModalOpen));
  console.log('onOpenSearchModal', $event, i, product)
}

// onUpdated(() => {
//   rootStore.setChosenProducts(rootStore.products.slice(0, rootStore.chosenCount))
// })
</script>

<template>
  <div className="choose-products">
    <div>
      <input className="checkbox-diff" type="checkbox" id="diffs" @onChange="handleShowDiffs()" />
      <label htmlFor="diffs">Показать различия</label>
    </div>

    <!-- {chosenProducts.map((product, i) => ( -->
    <div v-for="product in chosenProducts" class="product" :key="product.i">
      <div class="top">
        <div class="image">
          <img class="product-img" :src="product.productImage" alt="" />
        </div>

        <div
          v-if="chosenProducts.length !== rootStore.products.length"
          class="row-open"
          @onClick="($event) => onOpenSearchModal($event, i, product)"
        ></div>
      </div>
      <div class="name">{{ product.productName }}</div>
      <!-- <SearchModal v-if="isModalOpen && orderNum === product.i" /> -->
    </div>
  </div>
</template>

<style scoped>
.choose-products {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.checkbox-diff {
  height: 23px;
  width: 23px;
  margin-right: 15px;
}

.choose-products label {
  color: #0d5adc;
}

@media screen and (max-width: 500px) {
  .choose-products {
    font-size: 4vw;
  }
}

.top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 7px;
}

.product {
  position: relative;
}

.product .image {
  width: auto;
  height: auto;
}

.product-img {
  width: 100%;
  height: 100%;
}

.row-open {
  background-image: url('../assets/img/chevron_small.png');
  background-repeat: no-repeat;
  background-position: center;
  height: 4vw;
  width: 4vw;
  cursor: pointer;
}

.row-active {
  transition: 0.2s;
  transform: scale(1.1);
}
</style>
