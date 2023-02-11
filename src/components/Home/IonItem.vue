<script>
import { IonItem, IonItemGroup, IonLabel, IonList } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonItem,
    IonItemGroup,
    IonLabel,
    IonList,
  },
  props: {
    number: Number,
    counter: Number,
    name: String,
    
  },

});
</script>
<template>
  <ion-list>
    <ion-item-group>
      <ion-item>
        <div class="number">
          <ion-label>{{ number }}</ion-label>
        </div>
        <div class="name">
          <ion-label>{{ name }}</ion-label>
        </div>
        <div class="number-two">
          <ion-label>أياتها</ion-label>
          <ion-label>{{ counter }}</ion-label>
        </div>
        <div class="image">
          <img src="../../assets/images/pngtree.jpg" />
        </div>
      </ion-item>
    </ion-item-group>
  </ion-list>
</template>
    
<style scoped>
ion-item-group {
  display: block;
  width: 103%;
}
.number {
  width: 40px;
  height: 50px;
  background: #2d3436;
  text-align: center;
  margin-bottom: -12px;
}
.number ion-label {
  color: #fff;
  margin-top: 10px;
  font-size: 20px;
}
.name {
  width: 100%;
  height: 50px;
  background: #ffeaa7;
  text-align: center;
  margin-bottom: -12px;
}
.name ion-label {
  color: #000;
  margin-top: 4px;
  font-size: 20px;
  font-weight: 700;
}
.number-two {
  width: 110px;
  height: 50px;
  background: #ffeaa7;
  text-align: center;
  margin-bottom: -12px;
}
.number-two ion-label {
  color: #000;
  font-size: 13px;
  font-weight: 600;
}
.image {
  width: 50px;
  height: 50px;
  margin-bottom: -12px;
}
.number-two img {
  width: 50px;
  height: 50px;
}
</style>
    