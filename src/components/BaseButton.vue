<template>
    <button class="all-btn">
     <slot></slot>
    </button>
</template>

<style scoped>
.all-btn {
  background: #4B5092;
  color: #fff;
  font-size: .9rem;
  width: 200px;
  height: 45px;
  border-radius: 35px;
  border: none;
  cursor: pointer;
}
</style>