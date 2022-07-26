<template>
  <nav>
    <h2>Max<span class="bold">Strong</span></h2>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About Us</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    nav {
        width: 90%;
        display: flex ;
        justify-content: space-between;
        margin: 30px auto;
    }
    h2 {
        font-size: 2rem;
    }
    ul {
        width: 30%;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    a:hover {
        color: #e8e189;
    }
    a {
        text-decoration: none;
        color: #111235;
    }
</style>