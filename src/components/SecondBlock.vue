<script setup lang="ts">
import Pill from "../components/Pill.vue";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
</script>

<template>
  <div ref="tecs" class="sizing">
    <div>
      <div class="centerBlock">
        <h1 class="title">Skills</h1>
        <hr class="line" />
        <h2 class="sub-title">
          Below you can find my core skills as a frontend developer. In my
          projects, I program mainly in TypeScript and JavaScript, where I have
          used frameworks such as Vue, Angular and React. I have also worked
          with creating Web Components, and for that i have used Stencil Js. I'm
          comfortabel using CSS & Sass, and also have worked with Bootstrap and
          Angular Material.
        </h2>
      </div>

      <div class="flex iconsbox icons-column">
        <div
          class="icons-row animation"
          data-aos="slide-right"
          data-aos-once="true"
        >
          <Pill>
            <!-- <div class="flex showName greyicons">
                <v-icon name="vi-file-type-vue" scale="3" />
                <div class="hide names">Vue</div>
              </div> -->
            <template v-slot:image>
              <v-icon name="vi-file-type-vue" scale="3" />
            </template>
            <template v-slot:name>
              <div>Vue</div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:image>
              <v-icon name="vi-file-type-angular" scale="3" />
            </template>
            <template v-slot:name>
              <div>Angular</div>
            </template>
          </Pill>
          <Pill>
            <template v-slot:image>
              <v-icon name="vi-file-type-reactjs" scale="3" />
            </template>
            <template v-slot:name>
              <div>React</div>
            </template>
          </Pill>
          <Pill>
            <template v-slot:image>
              <v-icon name="vi-file-type-stencil" scale="3" />
            </template>
            <template v-slot:name>
              <div>Stencil</div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:image>
              <v-icon
                  color="rgb(203, 197, 32)"
                  name="io-logo-javascript"
                  scale="3"
                />
            </template>
            <template v-slot:name>
              <div>JavaScript</div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:image>
              <v-icon name="vi-file-type-typescript-official" scale="3" />
            </template>
            <template v-slot:name>
              <div>TypeScript</div>
            </template>
          </Pill>
          <Pill>
            <template v-slot:image>
              <v-icon name="vi-file-type-html" scale="3" />
            </template>
            <template v-slot:name>
              <div>HTML</div>
            </template>
          </Pill>
        </div>

        <div class="icons-row" data-aos="slide-left" data-aos-once="true">
          <Pill>
            <template v-slot:image>
              <v-icon name="vi-file-type-css" scale="3" />
            </template>
            <template v-slot:name>
              <div>CSS</div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:image>
              <v-icon name="vi-file-type-eslint" scale="3" />
            </template>
            <template v-slot:name>
              <div>ESLint</div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:image>
              <v-icon name="si-cypress" scale="3" />
            </template>
            <template v-slot:name>
              <div>Cypress</div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:image>
              <v-icon color="teal" name="si-i18next" scale="3" />
            </template>
            <template v-slot:name>
              <div>i18Next</div>
            </template>
          </Pill>

          <!-- <v-icon class="greyicons" name="vi-file-type-yarn" scale="3" /> -->
          <Pill>
            <template v-slot:image>
              <v-icon name="co-webcomponents-org" scale="3" />
            </template>
            <template v-slot:name>
              <div>Web Components</div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:image>
              <v-icon color="purple" name="co-bootstrap" scale="3" />
            </template>
            <template v-slot:name>
              <div>Bootstrap</div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:image>
              <v-icon name="si-json" scale="3" />
            </template>
            <template v-slot:name>
              <div>JSON</div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:image>
              <v-icon name="vi-file-type-sass" scale="3" />
            </template>
            <template v-slot:name>
              <div>Sass</div>
            </template>
          </Pill>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 70px;
  display: flex;
  justify-content: center;
  line-height: 75px;
  color: #2c3e50;
}

.sub-title {
  margin-top: 50px;
  width: 70%;
  display: flex;
  justify-content: center;
  text-align: justify;
  color: #2c3e50;
}

@media (max-width: 1440px) {
  .sub-title {
    width: 90%;
  }
}

@media (max-width: 1162px) {
  .sub-title {
    font-size: 18px;
  }
}

@media (max-width: 750px) {
  .icons-row {
    flex-direction: column !important;
    justify-content: start !important;
    // width: 30% !important;
  }

  .icons-column {
    flex-direction: row !important;
    justify-content: center;
  }
}

@media (max-width: 440px) {
  .title {
    font-size: 50px;
    line-height: 50px;
  }

  .sub-title {
    font-size: 18px;
  }

  .line {
    width: 160px !important;
  }
}

.centerBlock {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.line {
  width: 200px;
  height: 5px;
  text-align: left;
  margin-left: 0;
  background-color: brown;
  border: 2px brown solid;
}
.sizing {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 150px;
  // height: 50vh;
  // margin-left: 200px;
  // margin-right: 200px;
  // margin-top: 100px;
}

.flex {
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  // width: 100%;
}

.iconsbox {
  margin-top: 80px;
  // margin-left: 20px;
}

.icons-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.icons-column {
  display: flex;
  flex-direction: column;
}



.hide {
  display: none;
}

// .showName:hover {
//   .hide {
//     display: block;
//   }
//   // animation: headShake;
//   // animation-duration: 1s;
//   color: var(--color-text);
//   font-weight: bold;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 20px;
//   width: fit-content;
//   // height: 57.59px;
// }

.names {
  cursor: default;
  margin-left: 5px;
  font-weight: 500;
}
</style>
