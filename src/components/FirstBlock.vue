<template>
  <div class="card">
    <h1 class="title">My name is Gonçalo.</h1>
    <h1 class="sub-title hover-1">I'm a Frontend Developer.</h1>
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
.title {
  margin-top: 70px;
  font-size: 70px;
  cursor: initial;
}

.sub-title {
  font-size: 70px;
  width: fit-content;
  cursor: initial;
}

.hover-1 {
  --c: var(--color-text); /* the color  */
  --h: 1.2em; /* the height */

  line-height: var(--h);
  background: linear-gradient(var(--c) 0 0) no-repeat calc(200% - var(--_p, 0%))
    100%/200% var(--_p, 0.08em);
  color: #0000;
  overflow: hidden;
  text-shadow: 0 calc(-1 * var(--_t, 0em)) var(--c),
    0 calc(var(--h) - var(--_t, 0em)) #fff;
  transition: 0.3s var(--_s, 0s),
    background-position 0.3s calc(0.3s - var(--_s, 0s));
}
.hover-1:hover {
  --c: burlywood;
  --_t: var(--h);
  --_p: 100%;
  --_s: 0.3s;
}

h1 {
  font-family: system-ui, sans-serif;
  font-size: 3rem;
  margin: 0;
  cursor: pointer;
  padding: 0 0.1em;
}
.card {
  margin-left: 200px;
}
.block {
  margin-top: 100px;
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
