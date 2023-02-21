<template>
  <div class="cart-relative-wrap">
    <button class="cart-qty-btn cart-qty-dec" aria-label="decrease">-</button>
    <input type="number" class="cart-qty-input" aria-label="quantity" step="1" />
    <button class="cart-qty-btn cart-qty-inc" aria-label="increase">+</button>
  </div>
</template>
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input {
  border: none;
  background: transparent;
}
.cart-relative-wrap {
  @apply flex flex-row border border-[#e5e5e5] rounded-[4px] relative bg-transparent p-[2px];
}

.cart-qty-input {
  @apply h-auto w-[50px] text-sm text-[13px] text-center text-gray-900 focus:font-semibold disabled:opacity-60;
}

input[type="number"]::-webkit-inner-spin-button.cart-qty-input,
input[type="number"]::-webkit-outer-spin-button.cart-qty-input {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"].cart-qty-input {
  -moz-appearance: textfield;
}

.qtyproduct .cart-relative-wrap {
  @apply p-0 border border-gray-200 w-[130px];
}
.qtyproduct .cart-qty-input {
  @apply h-auto w-[70px] text-[15px];
}

.cart-qty-btn {
  @apply text-gray-800 p-[4px] font-bold;
}
.qtyproduct .cart-qty-btn {
  @apply p-[8px];
}
.cart-qty-btn:disabled {
  @apply opacity-70;
}
</style>
