<script lang="ts">
export {};
</script>

<template>
  <div class="navbar">
    <a class="animationBounce bounce" href="" target="">Main</a>
    <a class="animationBounce bounce" href="" target="">About</a>
    <a class="animationBounce bounce" href="" target="">Skills</a>
    <a @click="" class="animationBounce bounce" href="" target="">Fun</a>
  </div>
</template>

<style scoped>
.navbar {
  margin-top: 20px;
  width: 250px;
  color: black;
  display: flex;
  justify-content: space-between;
}

/* unvisited link */
a:link {
  text-decoration: none;
  color: black;
}

/* visited link */
a:visited {
  color: black;
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
