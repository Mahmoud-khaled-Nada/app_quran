<template>
  <div class="container">
    <div class="login-content">
      <form action="#">
        <img src="../../assets/img-login/avatar.svg" />
        <h2 class="title">Welcome</h2>
        <div class="input-div one">
          <div class="div">
            <ion-item>
              <ion-input placeholder="Enter Username"></ion-input>
            </ion-item>
          </div>
        </div>
        <div class="input-div one">
          <div class="div">
            <ion-item>
             <ion-input placeholder="Enter E-mail"></ion-input>
            </ion-item>
          </div>
        </div>
        <div class="input-div one">
          <div class="div">
            <ion-item>
              <ion-input placeholder="Enter Mobile"></ion-input>
            </ion-item>
          </div>
        </div>
        <div class="input-div one">
          <div class="div">
            <ion-item>
              <ion-input type="password" placeholder="Enter Password"></ion-input>
            </ion-item>
          </div>
        </div>
        <ion-button class="login-btn" shape="round">Round</ion-button>
      </form>
    </div>
  </div>
</template>
<script>
import { IonInput, IonItem, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonInput, IonItem, IonButton },
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

.input-div.one {
 margin-bottom: 20px;
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
</style>
