<script setup lang="ts"></script>

<template>
  <div class="pill f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib black" href="#0">
    <slot name="content"></slot>
  </div>
</template>

<style scoped>
.pill {
  width: 300px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: brown;
  display: flex;
  justify-content: center;
  width: fit-content;
  margin-right: 40px;
  /* min-width: 80px; */
}
.f6 {
  font-size: 0.875rem;
}

.ba {
  border-style: solid;
  border-width: 1px;
}

.bw1 {
  border-width: 0.125rem;
}

/* .ph3 {
  padding-left: 1rem;
  padding-right: 1rem;
} */

.pv2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.mb2 {
  margin-bottom: 0.5rem;
}

.br-pill {
  border-radius: 9999px;
}
</style>
