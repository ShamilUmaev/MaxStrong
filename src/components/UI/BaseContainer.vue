<template>
    <div class="base-container">
        <slot name="business-flexibility"></slot>
        <slot name="mental-health"></slot>
        <slot name="energy-throughout-day"></slot>
        <slot name="helps-finding-friends"></slot>
        <slot name="choose-loads"></slot>
    </div>
</template>

<style scoped>
.base-container {
  width: 45%;
  background: #d3e6fc;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 0 80px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>