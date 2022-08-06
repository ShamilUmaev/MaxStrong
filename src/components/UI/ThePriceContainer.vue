<template>
  <div class="outer-container">
    <div class="quadrat" :class="setColor">
    </div>
        <slot name="basic"></slot>
        <slot name="standard"></slot>
        <slot name="premium"></slot>
  </div>
</template>

<script>
export default {
    props: {
        bg: String
    },
    computed: {
        setColor() {
           if(this.bg === 'red') {
            return 'red-color'
           } else if (this.bg === 'blue') {
            return 'blue-color'
           } else {
            return 'green-color'
           }
        }
    },
    mounted() {
        
    }
}
</script>

<style scoped>
.outer-container {
    height: 500px;
    width: 30%;
    border-radius: 15px;
    border: none;
    background-color: #fff;
    position: relative;
    text-align: center;
}
h2 {
    position: absolute;
    top: 20px;
}
.quadrat {
    width: 0; 
    height: 0; 
    border-right: 100px solid transparent;
    transform: rotate(90deg);
}
.blue-color {
    border-bottom: 100px solid #7205f7; 
}
.red-color {
    border-bottom: 100px solid #80808024; 
}
.green-color {
    border-bottom: 100px solid #ffcd00de; 
}
</style>