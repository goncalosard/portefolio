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
          used frameworks such as Vue, Angular and React. I also have worked
          with creating Web Components, for that i have used Stencil Js. I'm
          confotable using CSS & Sass, and also have worked with Bootstrap.
        </h2>
      </div>

      <div class="flex iconsbox icons-column">
        <div
          class="icons-row animation"
          data-aos="slide-right"
          data-aos-once="true"
        >
          <Pill
            ><template v-slot:content>
              <div class="flex showName greyicons">
                <v-icon name="vi-file-type-vue" scale="3" />
                <div class="hide names">Vue</div>
              </div></template
            >
          </Pill>

          <Pill>
            <template v-slot:content>
              <div class="flex showName greyicons">
                <v-icon name="vi-file-type-angular" scale="3" />
                <div class="hide names">Angular</div>
              </div>
            </template>
          </Pill>
          <Pill>
            <template v-slot:content>
              <div class="flex showName greyicons">
                <v-icon name="vi-file-type-reactjs" scale="3" />
                <div class="hide names">React</div>
              </div>
            </template>
          </Pill>
          <Pill>
            <template v-slot:content>
              <div class="flex showName greyicons">
                <v-icon name="vi-file-type-stencil" scale="3" />
                <div class="hide names">Stencil</div>
              </div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:content>
              <div class="flex showName greyicons">
                <v-icon color="yellow" name="io-logo-javascript" scale="3" />
                <div class="hide names">JavaScript</div>
              </div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:content>
              <div class="flex showName greyicons">
                <v-icon name="vi-file-type-typescript-official" scale="3" />
                <div class="hide names">TypeScript</div>
              </div>
            </template>
          </Pill>
          <Pill>
            <template v-slot:content>
              <div class="flex showName greyicons">
                <v-icon name="vi-file-type-html" scale="3" />
                <div class="hide names">HTML</div>
              </div>
            </template>
          </Pill>
        </div>

        <div class="icons-row" data-aos="slide-left" data-aos-once="true">
          <Pill>
            <template v-slot:content>
              <div class="flex showName greyicons">
                <v-icon name="vi-file-type-css" scale="3" />
                <div class="hide names">CSS</div>
              </div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:content>
              <div class="flex showName greyicons">
                <v-icon name="vi-file-type-eslint" scale="3" />
                <div class="hide names">ESLint</div>
              </div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:content>
              <div class="flex showName greyicons">
                <v-icon name="si-cypress" scale="3" />
                <div class="hide names">Cypress</div>
              </div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:content>
              <div class="flex showName greyicons">
                <v-icon color="teal" name="si-i18next" scale="3" />
                <div class="hide names">i18Next</div>
              </div>
            </template>
          </Pill>

          <!-- <v-icon class="greyicons" name="vi-file-type-yarn" scale="3" /> -->
          <Pill>
            <template v-slot:content>
              <div class="flex greyicons showName">
                <v-icon name="co-webcomponents-org" scale="3" />
                <div class="hide names">Web Components</div>
              </div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:content>
              <div class="flex greyicons showName">
                <v-icon color="purple" name="co-bootstrap" scale="3" />
                <div class="hide names">Bootstrap</div>
              </div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:content>
              <div class="flex greyicons showName">
                <v-icon name="si-json" scale="3" />
                <div class="hide names">JSON</div>
              </div>
            </template>
          </Pill>

          <Pill>
            <template v-slot:content>
              <div class="flex greyicons showName">
                <v-icon name="vi-file-type-sass" scale="3" />
                <div class="hide names">Sass</div>
              </div>
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
}

.sub-title {
  margin-top: 50px;
  width: 70%;
  display: flex;
  justify-content: center;
  text-align: justify;
}

@media (max-width: 1440px) {
  .sub-title {
    width: 90%;
  }
}

@media (max-width: 440px) {
  .title {
    font-size: 60px;
  }

  .sub-title {
    font-size: 20px;
  }

  .icons-row {
    flex-direction: column !important;
    justify-content: start !important;
    width: 30% !important;
  }

  .icons-column {
    flex-direction: row !important;
    justify-content: center;
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
  width: 100%;
}

.iconsbox {
  margin-top: 80px;
  // margin-left: 20px;
}

.icons-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.icons-column {
  display: flex;
  flex-direction: column;
}

.greyicons {
  -webkit-filter: grayscale(1);
}

.greyicons:hover {
  -webkit-filter: grayscale(0);
}

.hide {
  display: none;
}

.showName:hover {
  .hide {
    display: block;
  }
  // animation: headShake;
  // animation-duration: 1s;
  color: var(--color-text);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 57.59px;
}

.names {
  cursor: default;
  margin-left: 5px;
  font-weight: 500;
}
</style>
