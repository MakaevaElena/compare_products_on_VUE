<script setup lang="ts">
import { RouterLink } from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div className="header-wrapper wrapper">
    <section className="header-left">
      <!-- <HelloWorld msg="You did it!jhgjhg" /> -->
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/catalog">
        <p>Каталог</p>
      </RouterLink>
    </section>
    <section className="header-right">
      <RouterLink to="/compare">
        <p>СРАВНЕНИЕ</p>
      </RouterLink>
      <div className="header-user">
        <RouterLink to="/user">
          <p>Личный кабинет</p>
        </RouterLink>
        <div className="user-icon"></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #a6a5a9;
  max-width: 1110px;
  padding-bottom: 19px;
}

.header-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-left p {
  color: #0d5adc;
  font-weight: 700;
  font-size: 18px;
}

.header-right {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
}

@media screen and (max-width: 500px) {
  .header-right {
    gap: 10px;
  }
}

.header-user {
  display: flex;
  justify-content: space-between;
  gap: 19px;
  align-items: center;
  flex-wrap: wrap;
}

.user-icon {
  background-image: url('../assets/img/user.png');
  height: 20px;
  width: 20px;
}

.active {
  text-decoration: underline;
}
</style>
