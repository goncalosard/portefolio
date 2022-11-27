<script setup lang="ts">
function skillsScroll() {
  const element: any = document.getElementById("skills");
  element?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <div class="card">
    <h1 class="title">My name is Gonçalo.</h1>
    <h1 class="sub-title hover-1">I'm a Frontend Developer.</h1>
    <div class="block">
      <img
        class="photoLogo"
        src="../assets/photo.jpg"
        width="247"
        height="328"
      />
      <div class="description">This here is going to be a description</div>
    </div>
  </div>
  <div class="scrollIcon">
    <section id="section10" class="demo">
      <a @click="skillsScroll"><span></span></a>
    </section>
  </div>
</template>

<style scoped>
.scrollIcon {
  margin-left: 200px;
  margin-right: 200px;
}
.demo a {
  cursor: pointer;
  position: absolute;
  margin-top: 30px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  font: normal 400 20px/1 "Josefin Sans", sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}
.demo a:hover {
  opacity: 0.5;
}

/* #section10 a {
  padding-top: 60px;
} */
#section10 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid var(--color-text);
  border-radius: 50px;
  box-sizing: border-box;
}
#section10 a span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: "";
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: var(--color-text);
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.title {
  margin-top: 70px;
  font-size: 70px;
  cursor: initial;
}

.sub-title {
  font-size: 70px;
  width: fit-content;
  cursor: initial;
}

.hover-1 {
  --c: var(--color-text); /* the color  */
  --h: 1.2em; /* the height */

  line-height: var(--h);
  background: linear-gradient(var(--c) 0 0) no-repeat calc(200% - var(--_p, 0%))
    100%/200% var(--_p, 0.08em);
  color: #0000;
  overflow: hidden;
  text-shadow: 0 calc(-1 * var(--_t, 0em)) var(--c),
    0 calc(var(--h) - var(--_t, 0em)) #fff;
  transition: 0.3s var(--_s, 0s),
    background-position 0.3s calc(0.3s - var(--_s, 0s));
}
.hover-1:hover {
  --c: burlywood;
  --_t: var(--h);
  --_p: 100%;
  --_s: 0.3s;
}

h1 {
  font-family: system-ui, sans-serif;
  font-size: 3rem;
  margin: 0;
  cursor: pointer;
  padding: 0 0.1em;
}
.card {
  margin-left: 200px;
  margin-right: 200px;
}
.block {
  margin-top: 100px;
  width: 80%;
  display: flex;
  align-items: center;
}
.photoLogo {
  border-radius: 10%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.description {
  margin-left: 50px;
  height: 200px;
  font-size: 20px;
}

.infoPhoto {
  margin-top: 20px;
  margin-left: 20px;
  width: 247px;
  width: 80%;
  font-size: 20px;
}

.country {
  display: flex;
}
.PTicon {
  margin-left: 5px;
}
</style>
