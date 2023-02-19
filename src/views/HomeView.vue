<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <section class="bg-gray-900 text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          Vite Vue Tailwind TypeScript.
        </h1>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <p class="mx-auto mt-2 max-w-xl sm:text-xl sm:leading-relaxed">
            Vite Vue Tailwind TypeScript for better developer experience
          </p>

          <RouterLink
            to="/about"
            class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          >
            Get Started
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
