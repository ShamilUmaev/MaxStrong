<template>
  <div class="coach-section">
    <img src="../assets/trainer.png">
    <div class="text-content">
      <h2 class="bold">Alexander Arnold</h2>
      <h5>35 y.o. // 10years experience</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet placerat mauris elementum dignissim.</p>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet placerat mauris elementum dignissim.</p>
      <BaseButton>Sign up for training</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  components: { BaseButton }
}
</script>

<style scoped>
.coach-section {
  margin-top: 100px;
  background: linear-gradient(99.85deg, #BAD5FF 0%, #6487BF 100%);
  display: flex;
  justify-content: center;
}
.text-content {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
}
.text-content h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}
.text-content h5 {
  margin-bottom: 20px;
}
.text-content button {
  background-color: #fff;
  color: #4B5092;
  margin-top: 20px;
}
</style>