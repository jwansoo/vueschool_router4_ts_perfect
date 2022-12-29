<template>
  <div class="home">
    <h1>All Destinations</h1>
    <button @click="triggerRouterError">Trigger Router Error</button>
    <!-- <button @click="addDynamicRoute">Add Dynamic Route</button> -->
    <!-- <router-link to="/dynamic">Visit Dynamic Route</router-link> -->
    <div class="destinations">
    <RouterLink 
     v-for="destination in destinations"
     :key="destination.id" 
     :to="{name:'destination.show', params:{id:destination.id,slug:destination.slug}}" 
     >
     <h2>{{destination.name}}</h2> 
     <img :src="`/images/${destination.image}`" :alt="destination.name" /> 
    </RouterLink>
    </div>  
  </div>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'
import  sourceData from '../data.json'
import { useRouter } from 'vue-router';
import { isNavigationFailure,NavigationFailureType } from 'vue-router';
const destinations=reactive(sourceData.destinations)
const router=useRouter()
// const addDynamicRoute=()=>{
      // router.addRoute({
        // name: "dynamic",
        // path: "/dynamic",
        // component: () => import("@/views/Login.vue")
      // })
      // router.removeRoute("dynamic")
    // }
  // 
const triggerRouterError=async()=>{
  const navigationFailure=await router.push('/')
  if(isNavigationFailure(navigationFailure,NavigationFailureType.duplicated)){
    console.log(navigationFailure.to)
    console.log(navigationFailure.from)
  }else{
  // all is well
  } 
}
</script>

<style scoped>

</style>