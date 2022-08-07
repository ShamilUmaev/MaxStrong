<template>
    <nav>
        <div class="nav-container">
        <h2>Max<span class="bold">Strong</span></h2>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
}
h2 {
    font-size: 2rem;
}
ul {
    width: 25%;
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
.nav-container {
    width: 80%;
    display: flex ;
    justify-content: space-between;
    margin: 0 auto;
    padding: 15px 0;
    box-sizing: border-box;
}
</style>