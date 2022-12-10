<script setup lang="ts">
import { ref } from "vue";

function skillsScroll() {
  const element: any = document.getElementById("skills");
  element?.scrollIntoView({ behavior: "smooth" });
}

function projectsScroll() {
  const element: any = document.getElementById("projects");
  element?.scrollIntoView({ behavior: "smooth" });
}

function homeScroll() {
  const element: any = document.getElementById("home");
  element?.scrollIntoView({ behavior: "smooth" });
}

function contactScroll() {
  const element: any = document.getElementById("contact");
  element?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <div class="navbar">
    <a @click="homeScroll" class="animationBounce bounce">Home</a>
    <a @click="skillsScroll" class="animationBounce bounce">Skills</a>
    <a @click="projectsScroll" class="animationBounce bounce">Projects</a>
    <a @click="contactScroll" class="animationBounce bounce">Contact</a>
  </div>
</template>

<style scoped>
.navbar {
  margin-top: 20px;
  width: 250px;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  cursor: pointer;
}

/* unvisited link */
a:link {
  text-decoration: none;
  color: #2c3e50;
}

/* visited link */
a:visited {
  color: #2c3e50;
}

/* mouse over link */
a:hover {
  color: brown;
}

/* selected link */
a:active {
  color: burlywood;
}

.bounce:hover {
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}

.animationBounce {
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  transform-origin: bottom;
}
</style>
