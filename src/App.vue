<template>
  <nav>
    <Header>
</Header>
  </nav>

  <router-view/> <!--이거 머지 여기서 라우터 표시해주는듯 -->
</template>

<script>
import Header from './components/Header.vue';

export default {
  name : "App",
  components:{
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
