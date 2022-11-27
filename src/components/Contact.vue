<script setup lang="ts"></script>

<template>
  <div class="sizing">
    <div class="centerBlock">
      <h1 id="projects" class="title">Contact</h1>
      <hr class="line" />
    </div>

    <div class="icons">
      <a href="https://www.linkedin.com/in/goncalosard/" target="_blank">
        <v-icon color="brown" name="bi-linkedin" scale="3"
      /></a>
      <a href="https://github.com/goncalosard" target="_blank">
        <v-icon color="brown" name="bi-github" scale="3"
      /></a>
    </div>

    <form id="form" class="form-adjust">
      <input id="name" type="text" placeholder="NAME" />
      <input id="email" type="text" placeholder="E-MAIL" />
      <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
      <input id="submit" type="submit" value="GO!" />
    </form>
  </div>
</template>

<style scoped lang="scss">
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
  /* height: 50vh; */
  margin-left: 200px;
  margin-right: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icons {
  margin-top: 50px;
  display: flex;
  gap: 50px;
}

.form-adjust {
  margin-top: 20px;
}

// input::-webkit-input-placeholder,
// textarea::-webkit-input-placeholder {
//   color: #aca49c;
//   font-size: 0.875em;
// }

// input:focus::-webkit-input-placeholder,
// textarea:focus::-webkit-input-placeholder {
//   color: #bbb5af;
// }

// input::-moz-placeholder,
// textarea::-moz-placeholder {
//   color: #aca49c;
//   font-size: 0.875em;
// }

// input:focus::-moz-placeholder,
// textarea:focus::-moz-placeholder {
//   color: #bbb5af;
// }

// input::placeholder,
// textarea::placeholder {
//   color: #aca49c;
//   font-size: 0.875em;
// }

// input:focus::placeholder,
// textarea::focus:placeholder {
//   color: #bbb5af;
// }

// input::-ms-placeholder,
// textarea::-ms-placeholder {
//   color: #aca49c;
//   font-size: 0.875em;
// }

// input:focus::-ms-placeholder,
// textarea:focus::-ms-placeholder {
//   color: #bbb5af;
// }

// /* on hover placeholder */

// input:hover::-webkit-input-placeholder,
// textarea:hover::-webkit-input-placeholder {
//   color: #e2dedb;
//   font-size: 0.875em;
// }

// input:hover:focus::-webkit-input-placeholder,
// textarea:hover:focus::-webkit-input-placeholder {
//   color: #cbc6c1;
// }

// input:hover::-moz-placeholder,
// textarea:hover::-moz-placeholder {
//   color: #e2dedb;
//   font-size: 0.875em;
// }

// input:hover:focus::-moz-placeholder,
// textarea:hover:focus::-moz-placeholder {
//   color: #cbc6c1;
// }

// input:hover::placeholder,
// textarea:hover::placeholder {
//   color: #e2dedb;
//   font-size: 0.875em;
// }

// input:hover:focus::placeholder,
// textarea:hover:focus::placeholder {
//   color: #cbc6c1;
// }

// input:hover::placeholder,
// textarea:hover::placeholder {
//   color: #e2dedb;
//   font-size: 0.875em;
// }

// input:hover:focus::-ms-placeholder,
// textarea:hover::focus:-ms-placeholder {
//   color: #cbc6c1;
// }

body {
  font-family: "Lato", sans-serif;
  background: #e2dedb;
  color: #b3aca7;
}

header {
  position: relative;
  margin: 100px 0 25px 0;
  font-size: 2.3em;
  text-align: center;
  letter-spacing: 7px;
}

#form {
  position: relative;
  width: 470px;
  //   margin: 50px auto 100px auto;
}

input {
  font-family: "Lato", sans-serif;
  font-size: 0.875em;
  width: 470px;
  height: 50px;
  padding: 0px 15px 0px 15px;

  background: transparent;
  outline: none;
  color: #726659;

  border: solid 1px #b3aca7;
  border-bottom: none;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

input:hover {
  background: #b3aca7;
  color: #e2dedb;
}

textarea {
  width: 470px;
  max-width: 470px;
  height: 110px;
  max-height: 110px;
  padding: 15px;

  background: transparent;
  outline: none;

  color: #726659;
  font-family: "Lato", sans-serif;
  font-size: 0.875em;

  border: solid 1px #b3aca7;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

textarea:hover {
  background: #b3aca7;
  color: #e2dedb;
}

#submit {
  padding: 0;
  margin: -5px 0px 0px 0px;

  font-family: "Lato", sans-serif;
  font-size: 0.875em;
  color: #b3aca7;

  outline: none;
  cursor: pointer;

  border: solid 1px #b3aca7;
  border-top: none;
}

#submit:hover {
  color: #e2dedb;
}
</style>
