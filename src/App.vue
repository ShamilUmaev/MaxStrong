<template>
  <NavBar/>
  <Transition name="fade">
    <router-view></router-view>
  </Transition>
  <TheFooter></TheFooter>
</template>

<script>
import NavBar from './components/NavBar.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  components: { NavBar, TheFooter }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>