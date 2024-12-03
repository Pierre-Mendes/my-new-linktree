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
import { ref, onMounted } from 'vue';
import ImageProfile from './components/ImageProfile.vue';
import LinkContainer from './components/LinkContainer.vue';
import AppFooter from './components/AppFooter.vue';

// Ref para armazenar os links
const links = ref([]);

// URL do Gist com os dados JSON
const gistUrl = import.meta.env.VITE_GIST_URL;

// Função para buscar dados do Gist
const fetchLinks = async () => {
  try {
    const response = await fetch(gistUrl);
    console.log(response);
    const data = await response.json();
    links.value = data; // Armazena os dados na ref 'links'
  } catch (error) {
    console.error('Erro ao carregar os links:', error);
  }
};

// Chamando a função ao montar o componente
onMounted(() => {
  fetchLinks();
});
</script>

<style>
@import './assets/styles/style.css';
</style>
