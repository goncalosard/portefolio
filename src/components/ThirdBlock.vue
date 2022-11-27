<script setup lang="ts">
import Card from "../components/Cards.vue";
</script>

<template>
  <div class="sizing">
    <div class="centerBlock">
      <h1 class="title">Projects</h1>
      <hr class="line" />
    </div>
    <div class="row">
      <Card>
        <template v-slot:img>
          <svg
            data-name="220920_iX_Logo_transparenz"
            xmlns="http://www.w3.org/2000/svg"
            width="244"
            height="178"
            viewBox="0 0 244 178"
          >
            <path d="M0 0h244v178H0z" style="fill: #333353; opacity: 0.9" />
            <g data-name="Gruppe 4617">
              <path
                data-name="Pfad 4043"
                d="M216.5 48h-33.94L152 78.56 121.44 48H87.5l47.53 47.53L88.56 142h33.94l29.5-29.5 29.5 29.5h33.94l-46.47-46.47z"
                style="fill: #00bedc"
              />
              <path
                data-name="Rechteck 1096"
                transform="translate(36 72)"
                style="fill: #00bedc"
                d="M0 0h24v70H0z"
              />
              <circle
                data-name="Ellipse 35"
                cx="12"
                cy="12"
                r="12"
                transform="translate(36 24)"
                style="fill: #00bedc"
              />
            </g>
          </svg>
        </template>
        <template v-slot:title> Siemens iX </template>
        <template v-slot:description> Description </template>
      </Card>
      <Card>
        <template v-slot:img>
          <img
            class="photoLogo"
            src="../assets/projectsImg/EGlogo.png"
            width="180"
            height="180"
          />
        </template>
        <template v-slot:title> Eugenio The Genius of Words </template>
        <template v-slot:description> Description </template>
      </Card>
    </div>
    <div class="row">
      <Card>
        <template v-slot:img>
          <img
            class="photoLogo"
            src="../assets/projectsImg/solarPanel.png"
            width="180"
            height="180"
          />
        </template>
        <template v-slot:title> Solar Panels </template>
        <template v-slot:description> Description </template>
      </Card>
      <Card>
        <template v-slot:img>
          <img
            class="photoLogo"
            src="../assets/projectsImg/iot.png"
            width="180"
            height="180"
          />
        </template>
        <template v-slot:title> IOT </template>
        <template v-slot:description> Description </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 70px;
  line-height: 75px;
  z-index: 1;
}

.centerBlock {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;
}

.line {
  width: 290px;
  height: 5px;
  text-align: left;
  margin-left: 0;
  background-color: brown;
  border: 2px brown solid;
  z-index: 0;
}
.sizing {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 100px;
  /* height: 50vh;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 100px; */
}

.row {
  display: flex;
}

@media (max-width: 1700px) {
  .row {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
