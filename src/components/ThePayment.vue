<template>
<div class="payments-outer-container">
    <transition name="payment" mode="out-in">
        <div v-if="!showCard" class="inner-container">  
            <h1>How would you like to pay</h1>
            <div class="payment-box">
                <div @click="visibilityOfCard" class="master-card-box">
                    <img src="../assets/icons8-mastercard-logo-96.png" id="master-card">
                    <h4>MasterCard</h4>
                </div>
                <a href="https://www.paypal.com/signin">
                    <div class="paypal-box">
                        <img src="../assets/icons8-paypal-96.png" id="paypal">
                        <h4>Paypal</h4>
                    </div>
                </a>
            </div>
        </div>
        <div v-else class="master-card-form">
            <form @submit.prevent>
                <h2>MasterCard</h2>
                <input type="text" placeholder="Name" required>
                <input type="number" placeholder="Card Number" required>
                <div class="date-cvc">
                    <input type="date" placeholder="Expiration (mm/yy)" required>
                    <input type="password" placeholder="CVC" maxlength="3" required>
                </div>
                <div class="btn-container">
                    <Base-button>Next</Base-button>
                </div>
            </form>
            <BaseButton v-if="showCard" @click="visibilityOfCard">Back</BaseButton>
        </div>
    </transition>
</div>
</template>

<script>
import BaseButton from './UI/BaseButton.vue'
export default {
    components: { BaseButton },
    data() {
        return {
            showCard: false,
        }
    },
    methods: {
        visibilityOfCard() {
            this.showCard = !this.showCard
        }
    }
}
</script>

<style scoped>
h1 {
    margin-bottom: 50px;
}
button {
    margin-top: 25px;
}
.payments-outer-container {
    height: 100vh;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inner-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.payment-box {
    width: 20%;
    padding: 15px;
    border: 2px solid #bebebe;
    display: flex;
    justify-content: space-between;
}
.master-card-box img {
    width: 50px;
    cursor: pointer;
}
.paypal-box img {
    width: 50px;
    cursor: pointer;
}
.master-card-box, .paypal-box {
    animation: scaleReverse 0.3s forwards;
}
.master-card-box:hover, .paypal-box:hover {
    animation: scale 0.3s forwards;
}
.master-card-form {
    width: 35%;
    margin-top: 40px;
}
input[type="text"], input[type="number"], input[type="date"], input[type="password"] {
    padding: 15px;
    border: 1px solid #bebebe;
    display: block;
    width: 100%;
    margin-top: 15px;
    border-radius: 5px;
}
input[type="date"] {
    width: 50%;
}
input[type="password"] {
    width: 30%;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.date-cvc {
    display: flex;
    justify-content: space-between;
}
.btn-container {
    display: flex;
    justify-content: space-between;
}
@keyframes scale {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.075);
    }
}
@keyframes scaleReverse {
    from {
        transform: scale(1.075);
    }
    to {
        transform: scale(1);
    }
}
@keyframes hidePayment {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes hidePaymentReverse {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(+50px);
    }
}
.payment-enter-active {
    animation: hidePayment 0.5s ease;
}
.payment-leave-active {
    animation: hidePaymentReverse 0.5s ease;
}
</style>