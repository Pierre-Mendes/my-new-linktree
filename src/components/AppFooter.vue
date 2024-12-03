<template>
  <footer class="footer-container">
    <p>&copy; {{ currentYear }} - Todos os direitos reservados</p>
    <span>Criado por Pierre Mendes Salatiel</span>
  </footer>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = ref(new Date().getFullYear());
    return { currentYear };
  },
};
</script>

<style scoped>
@import '../assets/styles/style.css';
</style>
