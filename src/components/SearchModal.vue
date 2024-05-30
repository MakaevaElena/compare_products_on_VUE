<script setup>
import { ref, computed } from 'vue'
import { useRootStore } from '@/stores/root'
// import { storeToRefs } from 'pinia'

const value = ref('')
const rootStore = useRootStore()

const inModalProducts = rootStore.products.filter(
  (product) => !rootStore.chosenProducts.includes(product)
)

console.log('inModalProducts', inModalProducts)

const searchingProducts = computed(() => {
  return value.value
    ? inModalProducts.filter((product) =>
        product.productName.toLowerCase().includes(value.value.toLowerCase())
      )
    : inModalProducts
})

function handleChange(evt) {
  value.value = evt?.target.value
}

const handleChangeProduct = (product) => {
  const copyChosenProducts = rootStore.chosenProducts.slice()

  copyChosenProducts.splice(rootStore.changedProductId, 1, product)
  // dispatch(setChosenProducts(copyChosenProducts))
  rootStore.setChosenProducts(copyChosenProducts)
  // dispatch(setIsModalOpen(false))
  rootStore.setIsModalOpen(false)

  rootStore.setChosenProducts(rootStore.chosenProducts)
}
</script>

<template>
  <div className="modal-wrapper">
    <form>
      <input
        v-if="inModalProducts.length > 3"
        class="modal search-input"
        type="text"
        placeholder="Поиск"
        v-model="value"
        @input="handleChange"
      />

      <div class="modal product-list">
        <!-- {searchingProducts.map((product, i) => ( -->
        <div v-for="(product, i) in searchingProducts" class="modal product" :key="i">
          <div class="modal row-choose" @click="() => handleChangeProduct(product)"></div>
          <div class="modal image">
            <img class="modal product-img" :src="product.productImage" alt="" />
          </div>
          <div class="modal name">{{ product.productName }}</div>
        </div>
        <!-- ))} -->
      </div>
    </form>
  </div>
</template>

<style scoped>
.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  left: -100%;
  top: 100px;
  border: 1px solid #c1c1c1;
  width: 420px;
  max-height: 360px;
  background-color: white;
  border-radius: 2%;
  z-index: 100;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #808080;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 200px;
  margin: 34px 0px;
}

.search-input {
  width: 360px;
  height: 47px;
  border: 1px solid #c1c1c1;
  border-radius: 3%;
  outline: none;
  color: #c1c1c1;
  font-size: 24px;
}

.product-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

.product-list .product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.row-choose {
  background-image: url('../assets/img/row-choose.png');
  background-repeat: no-repeat;
  background-position: center;
  height: 4vw;
  width: 4vw;
  cursor: pointer;
}

.product-list .image {
  height: auto;
  width: 35px;
  margin: 0 15px;
}
</style>
