<script setup lang="ts">
import IconShoppingCart from "../components/icons/IconShoppingCart.vue"
</script>
<template>
  <section class="bg-gray-50 px-5">
    <div class="hs-accordion-group">
      <div class="hs-accordion active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
        <button
          class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
        >
          Accordion #1
          <svg
            class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-one"
          class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
        >
          <p class="text-gray-800 dark:text-gray-200">
            <em>This is the third item's accordion body.</em> It is hidden by default, until the
            collapse plugin adds the appropriate classes that we use to style each element. These
            classes control the overall appearance, as well as the showing and hiding via CSS
            transitions.
          </p>
        </div>
      </div>

      <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-two">
        <button
          class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
        >
          Accordion #2
          <svg
            class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-two"
          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
        >
          <p class="text-gray-800 dark:text-gray-200">
            <em>This is the third item's accordion body.</em> It is hidden by default, until the
            collapse plugin adds the appropriate classes that we use to style each element. These
            classes control the overall appearance, as well as the showing and hiding via CSS
            transitions.
          </p>
        </div>
      </div>

      <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-three">
        <button
          class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
        >
          Accordion #3
          <svg
            class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-three"
          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
        >
          <p class="text-gray-800 dark:text-gray-200">
            <em>This is the third item's accordion body.</em> It is hidden by default, until the
            collapse plugin adds the appropriate classes that we use to style each element. These
            classes control the overall appearance, as well as the showing and hiding via CSS
            transitions.
          </p>
        </div>
      </div>
    </div>

    <h3 class="h-3 mt-3">Skeleton</h3>

    <ul class="mt-5 space-y-3">
      <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
      <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
      <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
      <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
    </ul>

    <button
      type="button"
      class="fixed bottom-5 right-5 pt-3 pb-3 px-3 inline-flex justify-center items-center gap-1 border border-transparent font-semibold bg-slate-800 text-white focus:outline-none transition-all text-sm rounded-full"
      data-hs-overlay="#hs-overlay-right"
    >
      <IconShoppingCart />
      <span
        class="inline-flex items-center py-0.5 px-1.5 rounded-full font-medium bg-blue-500 text-white text-[10.5px] absolute top-0 right-0"
        >15</span
      >
    </button>
  </section>

  <div
    id="hs-overlay-right"
    class="hs-overlay hs-overlay-open:translate-x-0 translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-md w-full z-[60] bg-slate-50 hidden"
    tabindex="-1"
  >
    <div class="flex justify-between items-center py-3 px-5">
      <h3 class="font-bold text-gray-800">Shopping Cart</h3>
      <button
        type="button"
        class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500"
        data-hs-overlay="#hs-overlay-right"
      >
        <span class="sr-only">Close modal</span>
        <svg
          class="w-3.5 h-3.5"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <div class="p-5">
      <p class="text-gray-800 dark:text-gray-400">
        Some text as placeholder. In real life you can have the elements you have chosen. Like,
        text, images, lists, etc.
      </p>
      <ul class="mt-5 space-y-3">
        <li class="w-full h-4 bg-gray-200 rounded-md"></li>
        <li class="w-full h-4 bg-gray-200 rounded-md"></li>
        <li class="w-full h-4 bg-gray-200 rounded-md"></li>
        <li class="w-full h-4 bg-gray-200 rounded-md"></li>
      </ul>
      <p class="text-gray-800 dark:text-gray-400">
        Some text as placeholder. In real life you can have the elements you have chosen. Like,
        text, images, lists, etc.
      </p>
      <ul class="mt-5 space-y-3">
        <li class="w-full h-4 bg-gray-200 rounded-md"></li>
        <li class="w-full h-4 bg-gray-200 rounded-md"></li>
        <li class="w-full h-4 bg-gray-200 rounded-md"></li>
        <li class="w-full h-4 bg-gray-200 rounded-md"></li>
      </ul>
      <button
        type="button"
        class="mt-7 mx-auto w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-all text-sm"
      >
        CHECKOUT
      </button>
      <button
        type="button"
        data-hs-overlay="#hs-overlay-right"
        class="mx-auto mt-3 w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-500 underline transition-all text-sm"
      >
        continue shopping
      </button>
    </div>
  </div>
</template>
