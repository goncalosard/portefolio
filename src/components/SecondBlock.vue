<script lang="ts"></script>

<template>
  <div class="sizing">
    <div>
      <h1>Technologies and Languages</h1>

      <div class="flex iconsbox">
        <div class="icons-direction">
          <div class="flex">
            <v-icon
              class="greyicons showName"
              name="vi-file-type-vue"
              scale="3"
            />
            <div class="hide">Vue</div>
          </div>

          <div class="flex marginleft">
            <v-icon
              class="greyicons showName"
              name="vi-file-type-angular"
              scale="3"
            />
            <div class="hide">Angular</div>
          </div>

          <div class="flex">
            <v-icon
              class="greyicons showName"
              name="vi-file-type-reactjs"
              scale="3"
            />
            <div class="hide">React</div>
          </div>

          <div class="flex marginleft">
            <v-icon
              class="greyicons showName"
              name="vi-file-type-stencil"
              scale="3"
            />
            <div class="hide">Stencil</div>
          </div>

          <div class="flex">
            <v-icon
              class="greyicons showName"
              color="yellow"
              name="io-logo-javascript"
              scale="3"
            />
            <div class="hide">JavaScript</div>
          </div>

          <div class="flex marginleft">
            <v-icon
              class="greyicons showName"
              name="vi-file-type-typescript-official"
              scale="3"
            />
            <div class="hide">TypeScript</div>
          </div>

          <div class="flex">
            <v-icon
              class="greyicons showName"
              name="vi-file-type-html"
              scale="3"
            />
            <div class="hide">HTML</div>
          </div>
        </div>

        <div class="icons-direction">
          <div class="flex">
            <v-icon
              class="greyicons showName"
              name="vi-file-type-css"
              scale="3"
            />
            <div class="hide">CSS</div>
          </div>

          <div class="flex marginleft">
            <v-icon
              class="greyicons showName"
              name="vi-file-type-eslint"
              scale="3"
            />
            <div class="hide">ESLint</div>
          </div>

          <div class="flex">
            <v-icon class="greyicons showName" name="si-cypress" scale="3" />
            <div class="hide">Cypress</div>
          </div>

          <div class="flex marginleft">
            <v-icon
              class="greyicons showName"
              color="teal"
              name="si-i18next"
              scale="3"
            />
            <div class="hide">i18Next</div>
          </div>

          <!-- <v-icon class="greyicons" name="vi-file-type-yarn" scale="3" /> -->
          <div class="flex">
            <v-icon
              class="greyicons showName"
              name="co-webcomponents-org"
              scale="3"
            />
            <div class="hide">Web Components</div>
          </div>

          <div class="flex marginleft">
            <v-icon
              class="greyicons showName"
              color="purple"
              name="co-bootstrap"
              scale="3"
            />
            <div class="hide">Bootstrap</div>
          </div>

          <div class="flex">
            <v-icon class="greyicons showName" name="si-json" scale="3" />
            <div class="hide">JSON</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sizing {
  height: 50vh;
  margin-left: 200px;
}

.flex {
  display: flex;
}

.marginleft {
  margin-left: 65px;
}

.iconsbox {
  margin-top: 40px;
  margin-left: 20px;
}

.icons-direction {
  width: 500px;
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

.showName:hover + .hide {
  display: block;
  color: black;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-left: 20px;
}
</style>
