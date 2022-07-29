<template>
    <div class="base-container">
        <slot></slot>
    </div>
</template>

<style scoped>
.base-container {
  width: 45%;
  background: #F2F8FF;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 0 80px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>