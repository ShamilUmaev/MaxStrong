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
<div class="benefits-of-exercise">
  <div class="btn-and-header-text">
    <h2> <span class="bold">The benefits</span> of exercise</h2>
    <BaseButton>Get now</BaseButton>
  </div>
  <div class="benefits-and-img">
    <div class="text-containers">
      <BaseContainer>
        <template v-slot:business-flexibility>
          <h3 class="bold">Increases business flexibility</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet placerat mauris elementum dignissim.</p>
        </template>
      </BaseContainer>
      <BaseContainer>
        <template v-slot:mental-health>
          <h3 class="bold">Provides more energy throughout the day</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet placerat mauris elementum dignissim.</p>
        </template>
      </BaseContainer>
      <BaseContainer>
        <template v-slot:energy-throughout-day>
          <h3 class="bold">Improves mental health</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet placerat mauris elementum dignissim.</p>
        </template>
      </BaseContainer>
      <BaseContainer>
        <template v-slot:helps-finding-friends>
          <h3 class="bold">Helps to find new friends</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet placerat mauris elementum dignissim.</p>
        </template>
      </BaseContainer>
    </div>
    <img src="../assets/workout-vector-3.webp">
  </div>
</div>
</template>

<script>
import BaseButton from './UI/BaseButton.vue'
import BaseContainer from './UI/BaseContainer.vue'
export default {
  components: { BaseButton, BaseContainer }
}
</script>

<style scoped>
h3 {
  margin-bottom: 15px;
  width: 85%;
}
p {
  font-size: .9rem;
  line-height: 24px;
}
.coach-section {
  margin: 80px auto 50px;
  width: 80%;
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
  margin-bottom: 30px;
}
.text-content button {
  background-color: #fff;
  color: #4B5092;
  margin-top: 30px;
}
.benefits-of-exercise {
  width: 80%;
  margin: 150px auto;
}
.benefits-of-exercise h2 {
  font-size: 2.5rem;
}
.btn-and-header-text {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 80px auto;
}
.benefits-and-img {
  display: flex;
  align-items: center;
}
.text-containers {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 540px;
}
div.base-container {
  min-height: 250px;
  margin-bottom: 20px;
}
div.base-container:nth-last-of-type(2) {
  background-color: rgba(114, 122, 239, 0.1);
}
div.base-container:nth-last-of-type(3) {
  background-color: rgba(114, 122, 239, 0.1);
}
.benefits-of-exercise img {
  width: 35%;
  height: 400px;
}
</style>