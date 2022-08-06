<template>
    <div class="contact-outer-container">
        <h2>Get in touch</h2>
        <form action="">
            <select>
                <option value="" disabled selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <div>
                <input type="text" placeholder="Name*" class="inline-block">
                <input type="text" placeholder="Vorname*">
            </div>
            <input type="email" placeholder="E-Mail-Address*">
            <textarea name="message" cols="50" rows="20"></textarea>
            <BaseButton>Submit</BaseButton>
        </form>
    </div>
</template>

<script>
import BaseButton from './UI/BaseButton.vue';
export default {
    components: { BaseButton }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
h2 {
    font-size: 3rem;
    letter-spacing: 2px;
    margin-bottom: 30px;
}
select, input[type="text"], input[type="email"], textarea {
    padding: 15px;
    border: 1px solid #bebebe;
    border-radius: 5px;
    margin-bottom: 15px;
}
select {
    appearance: none;
    background: #fff url('../assets/icons8-double-down-48.png') no-repeat right;
    background-size: 20px 20px;
    background-origin: content-box;
}
select:hover {
    cursor: pointer;
}
input[type="text"] {
    width: 48%;
}
input[type="email"] {
    width: 100%;
}
form div {
    display: flex;
    justify-content: space-between;
}
.contact-outer-container {
    height: 80vh;
    margin: 80px auto 50px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.contact-content {
    display: flex;
    flex-direction: column;
}
</style>