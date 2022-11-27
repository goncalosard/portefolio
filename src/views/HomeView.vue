<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import FirstBlock from "../components/FirstBlock.vue";
import SecondBlock from "../components/SecondBlock.vue";
import ThirdBlock from "../components/ThirdBlock.vue";
import Contact from "../components/Contact.vue";

import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="firstSector">
    <div class="navbar">
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
</template>

<style scoped>
.firstSector {
  width: 100%;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 58px;
}

.secondSector {
  width: 100%;
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
