<template>
  <div class="container">
    <div class="login-content">
      <form action="#">
        <img src="../../assets/img-login/avatar.svg" />
        <h2 class="title">Welcome</h2>
        <div class="input-div one">
          <div class="div">
            <ion-item>
              <ion-label position="floating">Username</ion-label>
              <ion-input type="text" placeholder="Enter text"></ion-input>
            </ion-item>
          </div>
        </div>
        <div class="input-div pass">
          <div class="div">
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password" placeholder="Enter text"></ion-input>
            </ion-item>
          </div>
        </div>
        <div class="my-links">
          <ul class="div-link">
            <li>
              <a href="#">Register Her -></a>
            </li>
            <li>
              <a href="#">Password Her -></a>
            </li>
          </ul>
        </div>
        <ion-button class="login-btn" shape="round">Round</ion-button>
      </form>
    </div>
  </div>
</template>
<script>
import { IonInput, IonItem, IonLabel, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonInput, IonItem, IonLabel, IonButton },
});
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}
.wave {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: -1;
}
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 2rem;
}
.login-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

form {
    width: 95%;
    margin: auto -8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
ion-button.login-btn {
  margin-top: 30px;
    width: 50%;
    /* background: #38d39f; */
}
.login-content img {
  height: 100px;
}
.login-content h2 {
  margin: 15px 0;
  color: #333;
  text-transform: uppercase;
  font-size: 2.9rem;
}
.my-links {
  padding: 0;
  margin: 0;
}
.div-link {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
}
.div-link li {
  margin-top: 10px;
}
.div-link a {
  color: #38d39f;
  text-decoration: none;
}
</style>
