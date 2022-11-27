<script setup lang="ts">
import HomeView from "./views/HomeView.vue";
import Footer from "../src/components/Footer.vue";
// import anime from "animejs";

// anime({
//   targets: "div",
//   opacity: [0, 1],
//   easing: "linear",
//   duration: 1000,
//   delay: 50,
// });
</script>

<template>
  <div id="home" class="homeview">
    <HomeView />
  </div>
  <Footer />
</template>

<style>
.homeview {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 200px;
  padding-right: 200px;
}

body::-webkit-scrollbar {
  width: var(--scroll-size, 10px);
  height: var(--scroll-size, 10px);
}
body::-webkit-scrollbar-track {
  background-color: var(--scroll-track, transparent);
  border-radius: var(--scroll-track-radius, var(--scroll-radius));
}
body::-webkit-scrollbar-thumb {
  background-color: var(--scroll-thumb-color, grey);
  background-image: var(--scroll-thumb, none);
  border-radius: var(--scroll-thumb-radius, var(--scroll-radius));
}

:root {
  --scroll-size: 8px;
  --scroll-radius: 10px;
  --scroll-track: rgb(255 255 255 / 10%);
  --scroll-thumb-color: rgb(0 0 0 / 80%);
  --scroll-thumb-color: burlywood;
  /* brown color maybe */
}
</style>
