<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import Navbar from "../components/Navbar.vue";
import FirstBlock from "../components/FirstBlock.vue";
import SecondBlock from "../components/SecondBlock.vue";
import ThirdBlock from "../components/ThirdBlock.vue";
import Contact from "../components/Contact.vue";
import ScrollTopButton from "../components/ScrollTopButton.vue";

var question = ref(document.body.scrollTop);
const obj = reactive({ count: 0 });

function scrollPercentage() {
  question = ref(document.body.scrollTop);
  console.log(document.body.scrollTop);
}
</script>

<template>
  <div class="firstSector">
    <div id="navbar" class="navbar">
      <Navbar />
    </div>

    <FirstBlock />
  </div>

  <div id="skills" class="secondSector">
    <SecondBlock />
  </div>

  <div id="projects" class="thirdSector">
    <ThirdBlock />
  </div>

  <div id="contact" class="contact">
    <Contact />
  </div>

  <ScrollTopButton />
</template>

<style scoped>
.firstSector {
  width: 100%;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
  animation: fadeIn;
  animation-duration: 2s;
}

@media (max-width: 403px) {
  .navbar {
    gap: 30px !important;
  }
}

@media (max-width: 338px) {
  .navbar {
    gap: 20px !important;
  }
}

.secondSector {
  width: 100%;
  margin-right: 10px;
  /* background-image: linear-gradient(
    0deg,
    rgba(255, 255, 189, 1) 0%,
    rgba(249, 249, 206, 1) 65%,
    rgba(249, 249, 206, 1) 100%
  ); */
}

.thirdSector {
  width: 100%;

  /* background-image: linear-gradient(
    180deg,
    rgba(255, 255, 189, 1) 0%,
    rgba(249, 249, 206, 1) 65%,
    rgba(249, 249, 206, 1) 100%
  ); */
}

.contact {
  width: 100%;
}
</style>
