<template>
    <div class="card">
      <img :src="`/images/${experience.image}`" :alt="experience.name" />
      <span class="card__text">
        {{ experience.name }}
      </span>
    </div>
</template>

<script setup lang="ts">
import type { Destinations,Experiences } from '@/types/Destination';
const props=defineProps<{
  experience:Experiences
}>()
</script>

<style scoped>

</style>