<style scoped>
@import '../assets/styles/style.css';
</style>

<template>
  <div class="link-container" @click="openLink">
    <i :class="iconClass"></i>
    <a :href="link" target="_blank">{{ label }}</a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LinkContainer',
  props: {
    iconClass: { type: String, required: true },
    link: { type: String, required: true },
    label: { type: String, required: true },
  },
  methods: {
    openLink() {
      window.open(this.link, '_blank')
    },
  },
}
</script>
