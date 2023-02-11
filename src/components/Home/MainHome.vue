<template>
  <div class="container">
    <div class="header">
      <div class="time">
        <ion-icon name="hourglass-outline"></ion-icon>
        <h2>00:00:00</h2>
      </div>
      <h1>الذِّكْرَ</h1>
    </div>
    <div class="content">
      <!-- Start ... -->
      <router-link to="/ListQuran">
            <ion-card>
        <div class="card">
          <ion-card-header>
            <ion-card-title>
              <h1>القرآن الكريم</h1>
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <h3>القرآن الكريم كاملا</h3>
          </ion-card-content>
        </div>
          <img src="../../assets/images/Quran/-مصحف-.webp" alt="" />
        </ion-card>
          </router-link>

          <router-link to="/ListQuran">
            <ion-card class="card-sbase">
        <div class="card">
          <ion-card-header>
            <ion-card-title>
              <h1>القرآن الكريم</h1>
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <h3>القرآن الكريم كاملا</h3>
          </ion-card-content>
        </div>
          <img src="../../assets/images/Quran/-مصحف-.webp" alt="" />
        </ion-card>
          </router-link>


          <router-link to="/ListQuran">
            <ion-card class="card-sbase-2">
        <div class="card">
          <ion-card-header>
            <ion-card-title>
              <h1>القرآن الكريم</h1>
            </ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <h3>القرآن الكريم كاملا</h3>
          </ion-card-content>
        </div>
          <img src="../../assets/images/Quran/-مصحف-.webp" alt="" />
        </ion-card>
          </router-link>
      </div>
  </div>


</template>

<script>
import {
  // IonCol,
  // IonGrid,
  // IonRow,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";
import { defineComponent } from "vue";
// import IonItem from "./IonItem.vue";

export default defineComponent({
  name: "MainHome",
  components: {
    // IonCol,
    // IonGrid,
    // IonRow,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  },
  methods: {
    NewRoute(route) {
      this.$router.push(route);
    },
  },
});
</script>
<style scoped>
.container {
  background: #f1f6f5;
  width: 100%;
  height: 100vh;
  position: relative;
  display: block;
}
.header {
  background: #0081c9;
  width: 100%;
  height: 250px;
  border-radius: 0 0 80px 80px;
  position: fixed;
  display: block;
}
.header h1 {
  color: #fff;
  font-size: 50px;
  font-weight: 600;
  font-family: monospace;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.time {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.time ion-icon {
  font-size: 40px;
  color: #fff;
  margin-left: 10px;
}
.time h2 {
  font-size: 30px;
  color: #fff;
}

.content {
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 100vh;
}
.content ion-card {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
ion-card img {
  width: 90px;
  height: 85px;
}
ion-card-title h1 {
  margin: 0;
    font-size: 30px;
}
ion-card-content h3 {
  font-size: 17px;
  margin-top: -10px;
}

ion-card.card-sbase {
  margin-top: 150px;
}
ion-card.card-sbase-2 {
  margin-top: 300px;
}
</style>
