<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/Nav.vue';
export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow';
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #181b17;
}
</style>