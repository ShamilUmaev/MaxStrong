<template>
<div class="footer-outer-container">
    <div class="footer">
        <div class="header">
            <h1>Max <span class="bold">Strong</span> </h1>
        </div>
        <div class="links">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/about" @click="scrollA">Our trainings</router-link></li>
                <li><router-link to="/prices">Price</router-link></li>
                <li><router-link to="/">FAQ</router-link></li>
            </ul>
        </div>
        <div class="stay-updated">
            <h4 class="bold">Stay up to date</h4>
            <input type="text" placeholder="Your email address">
        </div>
    </div>
    <h5>© Copyright © 2021 MaxStrong.</h5>
</div>
</template>

<style scoped>
.footer-outer-container {
    width: 80%;
    margin: 70px auto 50px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
}
.footer {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
}
.header {
    width: 20%;
}
.links {
    width: 40%;
}
.stay-updated {
    width: 20%;

}
ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 120px;
}
li {
    height: 40px;
}
.stay-updated h4 {
    margin-bottom: 15px;
}
input[type="text"] {
    width: 90%;
    padding: 12px;
    border: none;
    border-radius: 10px;
}
input::placeholder {
    font-size: .8rem;
    color: #000;
    background: url("../assets/icon-send.webp") no-repeat right;
}
</style>