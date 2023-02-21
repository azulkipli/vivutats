<script setup lang="ts">
import IconClose from "../components/icons/IconClose.vue"
import IconShoppingCart from "../components/icons/IconShoppingCart.vue"
</script>
<template>
  <section class="bg-gray-50">
    <div class="daisy mx-auto">
      <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content relative">
          <div class="container p-5">
            <h1 class="text-lg mb-5">Header nih</h1>
          </div>
          <!-- Page content here -->
          <div class="bg-gray-700 rounded-full pt-2 pb-2 text-white fixed bottom-5 right-5">
            <label
              class="drawer-button indicator btn btn-ghost hover:bg-transparent"
              for="my-drawer-4"
            >
              <span
                class="indicator-item badge badge-info p-[5px] rounded-full text-[11px] top-[2px]"
                >99</span
              >

              <IconShoppingCart />
            </label>
          </div>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-4" class="drawer-overlay"></label>
          <div
            class="menu xl:w-[375px] w-full sm:w-full md:w-full bg-base-100 text-base-content border"
          >
            <!-- Sidebar content here -->

            <div class="px-2 border">
              <header class="text-center">
                <h1 class="text-xl font-bold text-gray-900 sm:text-2xl">Shopping Cart</h1>
              </header>

              <div class="mt-5">
                <div class="px-4">
                  <div class="cartwrapper">
                    <div
                      v-for="ci in [
                        {
                          id: 1,
                          name: 'Product 1',
                          img: 'https://via.placeholder.com/96',
                          price: 1000,
                        },
                        {
                          id: 2,
                          name: 'Product 2',
                          img: 'https://via.placeholder.com/96',
                          price: 1500,
                        },
                        {
                          id: 3,
                          name: 'Product 3',
                          img: 'https://via.placeholder.com/96',
                          price: 2000,
                        },
                      ]"
                      :key="ci.id"
                      class="flex justify-between mb-5"
                    >
                      <div class="w-24 mr-2">
                        <img :src="ci.img" :alt="ci.name" />
                      </div>
                      <div class="border border-green-500 text-left w-[150px] mr-2">
                        {{ ci.name }}
                      </div>
                      <div class="text-right border w-[150px]">
                        {{ ci.price }}
                      </div>
                    </div>
                  </div>

                  <button class="btn btn-block">CHECKOUT</button>
                  <label
                    for="my-drawer-4"
                    class="drawer-button btn btn-link font-normal lowercase text-sm text-gray-600 transition hover:text-gray-600"
                  >
                    Continue shopping
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
