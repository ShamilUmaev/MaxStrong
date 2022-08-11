<template>
<div class="container">
    <the-price-container :background="'red'" @click="redirectToPayment">
        <template v-slot:basic>
            <div class="benefits">
                <h2>Basic</h2>
                <h4>29.99€</h4>
                <p>✔ Plan future workouts</p>
                <p>✔ Build and use unlimited workout libraries</p>
                <p>✔ Upload your workouts</p>
            </div>
        </template>
    </the-price-container>
    <the-price-container :background="'blue'" @click="redirectToPayment">
        <template v-slot:standard>
            <div class="benefits">  
                <h2>Standard</h2>
                <h4>49.99€</h4>
                <p>✔ Plan future workouts</p>
                <p>✔ Build and use unlimited workout libraries</p>
                <p>✔ Upload your workouts</p>
                <p>✔ View workout and firness summaries</p>
                <p>✔ Log your taining</p>
            </div>
        </template>
    </the-price-container>
    <the-price-container :background="'green'" @click="redirectToPayment">
        <template v-slot:premium>
            <div class="benefits">
                <h4>69.99€</h4>
                <h2>Premium</h2>
                <p>✔ Plan future workouts</p>
                <p>✔ Build and use unlimited workout libraries</p>
                <p>✔ Upload your workouts</p>
                <p>✔ View workout and firness summaries</p>
                <p>Log your taining</p>
                <p>✔ Use with a training olan or coach</p>
                <p>✔ Track your performances</p>
            </div>
        </template>
    </the-price-container>
</div>
</template>

<script>
import ThePriceContainer from './UI/ThePriceContainer.vue'
import router from '../router'
export default {
    components: { ThePriceContainer },
    methods: {
        redirectToPayment() {
            router.push('/payment')
        }
    }
}
</script>

<style scoped>
.container {
    height: 100vh;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
div.outer-container {
    margin-top: 150px;
    padding-bottom: 20px ;
    position: relative;
    text-align: center;
    animation: reverse 0.4s;
}
div.outer-container:hover {
    animation: smooth 0.4s forwards;
}
h2 {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
}
h4 {
    margin-bottom: 30px;
}
.benefits {
    width: 70%;
    text-align: left;
    margin: 0 auto;
}
p {
    line-height: 2.3rem;
}
@keyframes smooth {
    from { transform: scale(1); }
    to { transform: scale(1.07); }
}
@keyframes reverse {
    from { transform: scale(1.07); }
    to { transform: scale(1); }
}
</style>