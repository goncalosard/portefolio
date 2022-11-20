<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import FirstBlock from "../components/FirstBlock.vue";
import SecondBlock from "../components/SecondBlock.vue";
</script>

<template>
  <div class="firstSector">
    <div class="navbar">
      <Navbar />
    </div>
    
    <FirstBlock />
  </div>

  <div class="secondSector">
    <SecondBlock />
  </div>

</template>

<style scoped>
.firstSector {
  height: 100vh;
  width: 100%;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 58px;
}

.secondSector {
 height: 100vh;
 width: 100%;
}

</style>
