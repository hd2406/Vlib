<template>
    <div id="app">
        <kinesis-container class="container">
            <kinesis-element :strength="45">
                <h1 class = 'tit'>Welcome To VLibrary</h1>
            </kinesis-element>
            <kinesis-element :strength="10">
                Easy to use
            </kinesis-element>
            <kinesis-element :strength="20">
                Vue.js + SpringBoot
            </kinesis-element>
            <kinesis-element :strength="30">
                for library management
            </kinesis-element>

            <!-- background-circles-props -->
            <kinesis-element :strength="50" axis="y">
                <div class="circle circle-purple"></div>
            </kinesis-element>
            <kinesis-element :strength="80" axis="y">
                <div class="circle circle-purple1"></div>
            </kinesis-element>
            <kinesis-element :strength="80" axis="y">
                <div class="circle circle-purple2"></div>
            </kinesis-element>
            <kinesis-element :strength="80" axis="y">
                <div class="circle circle-purple3"></div>
            </kinesis-element>
            <kinesis-element :strength="80" axis="y">
                <div class="circle circle-purple4"></div>
            </kinesis-element>
        </kinesis-container>
    </div>
</template>

<script>
    export default {
        name: "App",
        components: {}
    };
</script>

<style>
    #app {
        text-align: center;
    }

    img {
        width: 4rem;
    }

    .container {
        padding: 10rem 0;
        background-color: rgba(255, 165, 172, 0);
        width: 85%;
        margin-left: 5rem;

    }

    .circle {
        position: absolute;
        border-radius: 100%;
    }

    .circle.circle-purple {
        border: 10px solid #c24a4c;
        opacity: 0.1;
        width: 4vw;
        height: 4vw;
        left: 10%;
        top: 25%;
    }

    .circle.circle-purple1 {
        border: 15px solid #ff55be;
        opacity: 0.1;
        width: 8vw;
        height: 8vw;
        right: -2%;
        bottom: 17%;
    }
    .circle.circle-purple2 {
        background-color: #3fe2d6;
        opacity: 0.1;
        width: 5vw;
        height: 5vw;
        left: 20%;
        bottom: 17%;
    }

    .circle.circle-purple3 {
        border: 15px solid #babd3c;
        opacity: 0.3;
        width: 3vw;
        height: 3vw;
        top: 80%;
        left: 60%;
    }
    .circle.circle-purple4 {
        border: 15px solid #dea8ff;
        opacity: 0.1;
        width: 9vw;
        height: 9vw;
        left: -2%;
        bottom: 17%;
    }
    .tit{
        font-family: "Comic Sans MS", cursive, sans-serif;
        color: #000000;
        font-size: 72px;
    }
</style>
