<script setup lang="ts">
import Pill from "../components/Pill.vue";
</script>

<template>
  <div ref="tecs" class="sizing">
    <div>
      <div class="centerBlock">
        <h1 class="title">Skills</h1>
        <hr class="line" />
        <h2 class="sub-title">
          Some text about the skills i have and where i used them Some text
          about the skills i have and where i used them Some text about the
          skills i have and where i used them Some text about the skills i have
          and where i used them Some text about the skills i have and where i
          used them Some text about the skills i have and where i used them Some
          text about the skills i have and where i used them Some text about the
          skills i have and where i used them
        </h2>
      </div>

      <div class="flex iconsbox icons-column">
        <div class="icons-row">
          <div class="">
            <Pill
              ><template v-slot:content>
                <div class="flex showName greyicons">
                  <v-icon name="vi-file-type-vue" scale="3" />
                  <div class="hide names">Vue</div>
                </div></template
              >
            </Pill>
          </div>

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

        <div class="icons-row">
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
  height: 50vh;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 100px;
}

.flex {
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
}

.iconsbox {
  margin-top: 80px;
  margin-left: 20px;
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
