<script setup lang="ts">
import anime from "animejs";
import "animate.css";
function skillsScroll() {
  const element: any = document.getElementById("skills");
  element?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <div class="card">
    <h1 class="title fadeTitle textColor">My name is Gonçalo</h1>
    <h1 class="sub-title hover-1 fadeTitle textColor">
      I'm a Frontend Developer
    </h1>
    <div class="imageAndDescription">
      <div class="block fadeDescription textColor">
        <img class="photoLogo" src="../assets/photo.jpg" />
        <div class="description">
          <strong class="bold">Welcome</strong> to my page, my name is<strong
            class="bold"
          >
            Gonçalo Ferreira</strong
          >. I'm 26 years old, live in Portugal and I have a degree in
          <strong class="bold">Computer Science</strong> and at the moment I
          have been working as a frontend developer at Siemens. At the moment,
          in my journey as a <strong class="bold">frontend developer</strong> I
          have worked with 3 frameworks that are
          <strong class="bold">React, Angular and Vue</strong>. I work on a
          public project that is a open source design system and I also maintain
          a web application that I have developed in the past.
        </div>
      </div>
    </div>

    <div class="scrollIcon">
      <section id="section10" class="demo">
        <a @click="skillsScroll"><span></span></a>
      </section>
    </div>
  </div>
</template>

<style scoped>
.scrollIcon {
  /* padding-bottom: 0px; */
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
  margin-left: 9%;
  margin-right: 9%;
}

.sub-title {
  font-size: 70px;
  cursor: initial;
  margin-left: 9%;
  margin-right: 9%;
}

.card {
  width: 100%;
  padding-bottom: 150px;
}
.block {
  margin-top: 90px;
  width: 80%;
  display: flex;
  align-items: center;
}

img {
  width: 247px;
  height: 328px;
}

.imageAndDescription {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.photoLogo {
  border-radius: 10%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.description {
  margin-left: 50px;
  font-size: 20px;
  text-align: justify;
}

@media (max-width: 1340px) {
  .block {
    flex-direction: column;
    width: 90% !important;
  }
  .description {
    margin-top: 50px;
    margin-left: 0 !important;
  }

  .block {
    margin-top: 50px;
  }
}

@media (max-width: 1162px) {
  .title {
    font-size: 55px;
  }

  .sub-title {
    font-size: 55px;
  }
  .description {
    font-size: 18px;
  }
}

@media (max-width: 812px) {
  .title {
    font-size: 50px;
  }

  .sub-title {
    font-size: 50px;
  }
}

@media (max-width: 440px) {
  .title {
    font-size: 30px;
  }

  .sub-title {
    font-size: 30px;
  }
}

.infoPhoto {
  margin-top: 20px;
  margin-left: 20px;
  width: 247px;
  width: 80%;
  font-size: 20px;
}

.fadeTitle {
  animation: fadeIn;
  animation-duration: 2s;
}
.fadeDescription {
  animation: fadeIn;
  animation-duration: 2s;
}

.bold {
  font-weight: bold;
}

.textColor {
  color: #2c3e50;
}
</style>
