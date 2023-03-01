<template>
  <div id="root">
    <div class="contain">
    <Header/>
    <router-view/>
    </div>
  </div>
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
a {
  text-decoration: none;
  color: black;
}
li,ol,ul{
  list-style: none;
}

#root {
  width: 100vw;
  height: 100vh;
  background: #d1d5da;
}

.contain{
  width: 540px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
}
</style>
