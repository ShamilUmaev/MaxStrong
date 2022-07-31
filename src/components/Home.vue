<template>
<div class="outer-container">
  <div class="time-to-get-strong">
    <div class="text-content-time-to-get-strong">
      <h2>The time to get <span class="bold">strong</span> has come</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet placerat mauris elementum dignissim.</p>
      <BaseButton @click="contactUs">Contact Us</BaseButton>
    </div>
    <img src="../assets/workout-vector-1.png" alt="">
  </div>
  <div class="choose-loads">
    <BaseContainer class="text-choose-loads">
      <template v-slot:choose-loads>
        <h2>Choose loads <span class="bold">for yourself</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet placerat mauris elementum dignissim.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet placerat mauris elementum dignissim.</p>
      </template>
    </BaseContainer>
    <img src="../assets/workout-vector-2.png">
  </div>
</div>
</template>

<script>
import router from '../router'
import BaseButton from './UI/BaseButton.vue'
import BaseContainer from './UI/BaseContainer.vue'
export default {
  components: { BaseButton, BaseContainer },
  methods: {
    contactUs() {
      router.push('/contact')
    }
  }
}
</script>

<style scoped>
.outer-container {
  width: 80%;
  margin: 50px auto;
}
.time-to-get-strong {
  width: 100%;
  display: flex;
  align-items: center;
}
.text-content-time-to-get-strong {
  width: 50%;
}
.text-content-time-to-get-strong h2 {
  font-size: 4rem;
}
.text-content-time-to-get-strong p {
  width: 80%;
  margin-top: 30px;
}
.text-content-time-to-get-strong button {
  margin-top: 30px;
}
.choose-loads {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 90px;
}
.choose-loads img {
  width: 50%;
}
.text-content-choose-loads {
  width: 45%;
  background: #F2F8FF;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 0 80px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text-choose-loads h2 {
  font-size: 2.5rem;
  width: 70%;
  margin-bottom: 20px;
}
</style>