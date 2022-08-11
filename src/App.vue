<template>
  <NavBar/>
    <router-view v-slot="{ Component, route }">
      <transition name="nav" mode="out-in" :key="route" appear>
        <div>
          <component :is="Component"></component>    
        </div>
      </transition>
    </router-view>
  <TheFooter></TheFooter>
</template>

<script>
import NavBar from './components/NavBar.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  components: { NavBar, TheFooter },
}
</script>

<style scoped>
nav {
  z-index: 1;
}
.nav-enter-from {
  transform: translateX(-100px);
  opacity: 0;
}
.nav-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.nav-enter-active {
  transition: all 0.6s ease-out;
}
.nav-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.nav-leave-to {
  transform: translateX(+100px);
  opacity: 0;
}
.nav-leave-active {
  transition: all 0.6s ease-in;
}
/* @keyframes nav {
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(+50%);
  } 
}*/
</style>