<template>
  <TheNavigationVue />
  <div class="container">
    <!-- Sidebar -->
    <router-view v-slot="{Component}" class="view left-sidebar" name="LeftSidebar">
      <transition name="fade" mode="out-in"> 
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <!-- Main -->
    <RouterView v-slot="{Component}" class="main-view">
      <transition name="fade" mode="out-in">
        <component :is="Component" ::key="$route.path"></component>
      </transition>
    </RouterView>
  </div>
</template>
<script setup lang="ts">
import TheNavigationVue from './components/TheNavigation.vue';
</script>
<style lang="css">
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to{
  opacity:0;
}
.container{
  display: flex;
}
.left-sidebar{
  width: 20%;
}
.main-view{
  width: 100%;
}
</style>
