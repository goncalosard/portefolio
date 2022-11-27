<script setup lang="ts">
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div id="home" class="homeview">
    <HomeView />
  </div>
  <div></div>
</template>

<style>
.homeview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
