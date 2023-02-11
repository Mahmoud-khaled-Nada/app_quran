<template v-for="row in dataRows" :key="row.id">
    <ion-list >
      <ion-item >
        <ion-button @click="showPageNumber">Super Mario World</ion-button>
      </ion-item>
    </ion-list>
  </template>
  
  <script>
    import { IonItem, IonList } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import showPageNumber from '../../server/quran';
  
    export default defineComponent({
      components: { IonItem, IonList },
      data() {
        return {
          dataRows:[],
        }
      },
      methods: {
        async showPageNumber() {
      try {
        const response = await showPageNumber.showPageNumber();
        const fetchData = response.data.data
        this.dataRows = fetchData
        console.log(fetchData);
        // for (let i in fetchData) {
        //   const item = fetchData[i];
        //   this.dataRows.push(item);
        //   console.log(this.dataRows);

        // }
      } catch (error) {
        console.log(error.data);
      }
    },
      }
    });
  </script>