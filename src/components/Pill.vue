<script setup lang="ts"></script>

<template>
  <div class="pill f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib black" href="#0">
    <div class="flex greyicons showName">
      <slot name="image"></slot>
      
      <div class="hide">
        <slot name="name"></slot>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  // width: 100%;
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
  transition: all 0.5s ease-out;
  color: var(--color-text);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  
  width: fit-content;
  // height: 57.59px;
}
.names {
  cursor: default;
  margin-left: 5px;
  font-weight: 500;
}


.pill {
  width: 300px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  // color: brown;
  display: flex;
  justify-content: center;
  width: fit-content;
  margin-right: 40px;
  border-color: brown;
  
  /* min-width: 80px; */
}

@media (max-width: 955px) {
  .pill {
    margin-right: 10px;
  }
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

// .showName:hover {
//   background-color: red;
//   transition: all 0.5s ease-out;
//   width: fit-content;
// }
</style>
