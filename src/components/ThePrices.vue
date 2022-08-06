<template>
<div class="container">
    <the-price-container :bg="'red'">
        <template v-slot:basic>
            <h2>Basic</h2>
        </template>
    </the-price-container>
    <the-price-container :bg="'blue'">
        <template v-slot:standard>
            <h2>Standard</h2>
        </template>
    </the-price-container>
    <the-price-container :bg="'green'">
        <template v-slot:premium>
            <h2>Premium</h2>
        </template>
    </the-price-container>
</div>
</template>

<script>
import ThePriceContainer from './UI/ThePriceContainer.vue'
export default {
    data() {
        return {
        }
    },
    components: { ThePriceContainer }
}
</script>

<style scoped>
.container {
    height: 100vh;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>