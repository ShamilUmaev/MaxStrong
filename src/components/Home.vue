<template>
<div class="outer-container">
  <div class="time-to-get-strong">
    <div class="text-content-time-to-get-strong">
      <h2>The time to get <span class="bold">strong</span> has come</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet placerat mauris elementum dignissim.</p>
      <button class="all-btn">Contact Us</button>
    </div>
    <img src="../assets/workout-vector-1.png" alt="">
  </div>
  
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.outer-container {
  width: 80%;
  margin: 0 auto;
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
.all-btn {
  background: #4B5092;
  color: #fff;
  font-size: .9rem;
  width: 30%;
  height: 45px;
  border-radius: 35px;
  border: none;
}
</style>