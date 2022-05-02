<template>
  <RouterView/>
</template>

<script>
export default {
  mounted () {
    document.title = 'Cosmos 冰淇淋星球'
  }
}
</script>

<style lang="scss">
@import './assets/stylesheets/all';
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css");
@import '@/assets/scss/all';
</style>
