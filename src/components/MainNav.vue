<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/todo">Список задач</router-link>
  </nav>
</template>

<script>
export default {
  name: 'MainNav'
};
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
