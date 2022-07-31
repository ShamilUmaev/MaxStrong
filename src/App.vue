<template>
  <NavBar/>
  <router-view></router-view>
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
</style>