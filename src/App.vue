<template>
  <div id="app">
    <MainNav />
    <router-view />
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue';

export default {
  components: { MainNav }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

p {
  margin: 0;
}

input {
  padding: 5px;
}
</style>
