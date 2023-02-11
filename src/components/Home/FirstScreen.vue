<template>
  <ion-page>
  <div class="container">
    <img class="img-one" src="../../assets/undraw_reading_book_re_kqpk.svg" />
    <div class="FirstScreen-content">
      <main action="#">
        <img src="../../assets/مخطوطة_القرآن_الكريم_،_القرآن_الكريم_مزخرفة.svg.png" />
        <h2>الذِّكْرَ</h2>
        <div class="input-div one">
          <div class="div-spinner">
            <ion-spinner name="dots"></ion-spinner>
          </div>
        </div>
      </main>
    </div>
    <img class="img-two" src="../../assets/undraw_reading_book_re_kqpk.svg" />
  </div>
</ion-page>
</template>
<script>
import { IonSpinner, IonPage } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonSpinner,IonPage },
    mounted (){
      setTimeout(()=>{
        this.$router.push({path: '/MainHome'})
      },5000)
  },
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
  background-image: url(../../assets/11.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  /* opacity: 0.5;  */
}
.container img {
  height: 150px;
}
.FirstScreen-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

main {
  width: 95%;
  margin: auto -8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.FirstScreen-content img {
  height: 250px;
}
.FirstScreen-content h2 {
    color: #ff793f;
    font-size: 5rem;
    font-weight: 500;
}
.div-spinner {
  position: relative;
  margin: 0;
  padding: 0;
}
.div-spinner ion-spinner {
  color: #ff6300db;
  width: 100px;
  height: 100px;
}
.img-two {
  position: absolute;
  top: 85%;
  left: 15%;
  opacity: 0.5;
}
.img-one {
  position: absolute;
  top: 0%;
  left: 70%;
  opacity: 0.5;
}
</style>
