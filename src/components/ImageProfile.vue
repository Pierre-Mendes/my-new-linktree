<style scoped>
@import '../assets/styles/style.css';
</style>

<template>
  <div class="image-profile-container">
    <img :src="imageSrc" alt="Image Profile" class="image-profile" />
    <h1>{{ name }}</h1>
    <h2>{{ role }}</h2>
  </div>
</template>

<script lang="ts">

export default {
  name: "ImageProfile",
  props: {
    imageSrc: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
  },
};

</script>
