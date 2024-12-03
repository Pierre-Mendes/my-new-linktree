<template>
  <div class="app-container">
    <div class="container">
      <ImageProfile
        imageSrc="/src/assets/images/my-avatar.jpeg"
        name="Pierre Mendes Salatiel"
        role="Fullstack Developer"
      />
      <section>
        <LinkContainer
          v-for="(link, index) in links"
          :key="index"
          :iconClass="link.iconClass"
          :link="link.link"
          :label="link.label"
        />
      </section>
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useLinksStore } from './stores/linksStore.ts';
import ImageProfile from './components/ImageProfile.vue';
import LinkContainer from './components/LinkContainer.vue';
import AppFooter from './components/AppFooter.vue';

const linksStore = useLinksStore();
const gistUrl = import.meta.env.VITE_GIST_URL;

onMounted(async () => {
  await linksStore.fetchLinks(gistUrl);
});

const links = linksStore.links;
</script>

<style>
@import './assets/styles/style.css';
</style>
