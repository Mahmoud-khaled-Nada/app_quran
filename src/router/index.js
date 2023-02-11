import { createRouter, createWebHistory } from "@ionic/vue-router";
import FirstScreen from '@/components/Home/FirstScreen.vue';

const routes = [
  {
    path: '/',
    name: 'FirstScreen',
    component: FirstScreen
  },
  {
    path: '/LoginIn',
    name: 'LoginIn',
    component: () => import("../views/Auth/LoginIn.vue")
  },
  {
    path: '/RegisterIn',
    name: 'RegisterIn',
    component: () => import("../views/Auth/RegisterIn.vue")
  },
  {
    path: '/MainHome',
    name: 'MainHome',
    replace: "MainHome",
    component: () => import("../views/Home/MainHome.vue")
  },
  {
    path: '/ListQuran',
    replace: "ListQuran",
    name: 'ListQuran',
    component: () => import("../components/Home/ListQuran.vue")
  },
  {
    path: '/IonItem',
    component: () => import("../components/Home/IonItem.vue")
  },
  //-------------------
  // {
  //   path: '/MainSurahs',
  //   name: 'MainSurahs',
  //   component: () => import("../components/Quran/MainSurahs.vue")
  // },
  {
    path: '/Surah-1',
    name: 'Surah-1',
    component: () => import("../components/Quran/Surah-1.vue")
  },
  {
    path: '/TestList',
    name: 'TestList',
    component: () => import("../components/Home/TestList.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
