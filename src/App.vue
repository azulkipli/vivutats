<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="p-4">
    <nav>
      <RouterLink class="py-1 px-2" to="/">Home</RouterLink>
      <RouterLink class="py-1 px-2" to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
<style>
.router-link-active.router-link-exact-active {
  color: #aaa;
}
</style>
