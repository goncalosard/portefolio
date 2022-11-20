<script lang="ts"></script>

<template>
  <div class="card">
    <div class="block">
      <img
        class="photoLogo"
        src="../assets/photo.jpg"
        width="247"
        height="328"
      />
      <div class="description">This here is going to be a description</div>
    </div>
    <div class="infoPhoto">
      <div>Age 26</div>
      <div class="country">
        <div>From Portugal</div>
        <img class="PTicon" src="../assets/PTicon.png" width="30" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-left: 200px;
}
.block {
  margin-top: 30vh;
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
