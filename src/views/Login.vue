<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" name="username" type="text" class="input">
      <label for="password">Password</label>
      <input v-model="password" name="password" type="text" class="input">
      <button class="btn">Login</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import { useRoute,useRouter } from 'vue-router'
  const route=useRoute()
  const router=useRouter()
  const username=ref('')
  const password=ref('')
  const login=()=>{
      window.user = username.value
       const redirectPath = ref(route.query.redirect || '/Protected')
      router.push(redirectPath.value)
    }
</script>