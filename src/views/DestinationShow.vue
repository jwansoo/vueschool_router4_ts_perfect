<template>
 <div>
  <section class="destination" v-if="destination">
    <h1>{{destination.name}}</h1>
    <GoBack />
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{destination?.description}}</p>
    </div>
  </section>
  <section class="experiences" v-if="destination">
    <h2>Top Experience in {{destination.name}}</h2>
    <div class="cards">
      <RouterLink
      v-for="experience in destination.experiences"
      :key="experience.slug"
      :to="{name:'experience.show', params:{experienceSlug:experience.slug}}"
      >
      <ExperienceCard :experience="experience" />
    </RouterLink>
    </div>
    <RouterView />
  </section>
</div>
</template>

<script setup lang="ts">
import sourceData from '../data.json'
import {ref,computed} from 'vue'
import { useRoute,useRouter } from 'vue-router';
import ExperienceCard from '@/components/ExperienceCard.vue';
import GoBack from '@/components/GoBack.vue';

const props=defineProps<{
  id:number
}>()
const route=useRoute()
const destination=computed(()=>{
  return sourceData.destinations.find((destination)=>destination.id===props.id)

})
</script>

<style scoped>

</style>