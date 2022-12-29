<template>
  <div>
    <h1>Greetings, {{username}}</h1>
    <button @click="logout">Logout</button>
    <RouterLink :to="{name:'Invoices'}">
    <button>Invoices</button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router=useRouter()
const username=window.user
const logout=()=>{
  window.user=null
  router.push({name:'Home',query:{logout:null}})
}
</script>

<style scoped>

</style>