<template>
  <v-icon
    id="buttonTop"
    @click="toTop"
    color="brown"
    name="bi-arrow-up-circle-fill"
    class="scrollTop hidden"
    scale="3"
  />
</template>

<style scoped>
.scrollTop {
  position: fixed;
  right: 32px;
  bottom: 32px;
  cursor: pointer;
  z-index: 4;
}

.hidden {
  display: none;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

function toTop() {
  const element: any = document.getElementById("navbar");
  element?.scrollIntoView({ behavior: "smooth" });
}
const scrollTop: any = document.querySelector(".scrollTop");

window.addEventListener("scroll", (e) => {
  const aaa: any = (document.getElementById("buttonTop")!.style.display =
    window.scrollY > 20 ? "block" : "none");
});
</script>
