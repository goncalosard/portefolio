<script setup lang="ts">
import { ref } from "vue";

function toTop() {
  console.log(window.scrollY);
  const element: any = document.getElementById("navbar");
  element?.scrollIntoView({ behavior: "smooth" });
}
const scrollTop: any = document.querySelector("buttonTop");
window.addEventListener("scroll", (e) => {
  // scrollTop.display = window.scrollY > 20 ? "block" : "none";
  // console.log(window.scrollY);
  scrollTop.style.backgroundColor = "lime";
});
</script>

<template>
  <div id="buttonTop">
    <v-icon
      @click="toTop"
      color="brown"
      name="bi-arrow-up-circle-fill"
      class="scrollTop"
      scale="3"
    />
  </div>
</template>

<style scoped>
.scrollTop {
  position: fixed;
  right: 32px;
  bottom: 32px;
  cursor: pointer;
  display: block;
}
</style>
