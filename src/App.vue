<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="p-4">
    <nav>
      <RouterLink class="py-1 px-2" to="/">Home</RouterLink>
      <RouterLink class="py-1 px-2" to="/about">About</RouterLink>
      <RouterLink class="py-1 px-2" to="/products">Products</RouterLink>
      <RouterLink class="py-1 px-2" to="/preline">Preline</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
<style>
.router-link-active.router-link-exact-active {
  color: #757575;
}
</style>
