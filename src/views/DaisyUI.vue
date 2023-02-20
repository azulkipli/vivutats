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
          <div class="indicator bg-gray-500 rounded-[10px] p-2 text-white fixed bottom-5 right-5">
            <span class="indicator-item badge badge-info w-2 h-2 p-3 rounded-full text-xs">3</span>
            <label class="drawer-button btn gap-2 btn-ghost hover:bg-transparent" for="my-drawer-4">
              <!-- <span class="font-normal text-[15px]">Cart</span> -->
              <IconShoppingCart />
            </label>
          </div>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-4" class="drawer-overlay"></label>
          <div class="menu w-[600px] bg-base-100 text-base-content border">
            <!-- Sidebar content here -->

            <div class="px-2 py-4 border">
              <header class="text-center">
                <h1 class="text-xl font-bold text-gray-900 sm:text-2xl">Shopping Cart</h1>
              </header>

              <div class="mt-5 space-y-3">
                <div class="space-y-3 text-center">
                  <div class="cartwrapper">
                    <ul>
                      <li>
                        <div class="card card-side bg-base-100">
                          <figure>
                            <img
                              class="h-24"
                              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                              alt="Movie"
                            />
                          </figure>
                          <div class="card-body">
                            <h2 class="card-title">New movie is released!</h2>
                            <p class="text-left">Click the button to watch on Jetflix app.</p>
                            <div class="card-actions justify-end">
                              <button class="btn btn-outline btn-xs"><IconClose /></button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card card-side bg-base-100">
                          <figure>
                            <img
                              class="h-24"
                              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                              alt="Movie"
                            />
                          </figure>
                          <div class="card-body">
                            <h2 class="card-title">New movie is released!</h2>
                            <p class="text-left">Click the button to watch on Jetflix app.</p>
                            <div class="card-actions justify-end">
                              <button class="btn btn-outline btn-xs"><IconClose /></button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="card card-side bg-base-100">
                          <figure>
                            <img
                              class="h-24"
                              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                              alt="Movie"
                            />
                          </figure>
                          <div class="card-body">
                            <h2 class="card-title">New movie is released!</h2>
                            <p class="text-left">Click the button to watch on Jetflix app.</p>
                            <div class="card-actions justify-end">
                              <button class="btn btn-outline btn-xs"><IconClose /></button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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
