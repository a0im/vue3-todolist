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
/* global */

*{
  margin: 0;
  padding: 0;
  box-sizing: none;
}

a {
  text-decoration: none;
  color: black;
}
li,ol,ul{
  list-style: none;
}

input,select,button{
  border: none;
  background: #fff;
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
  background: #f3f4f6;
}
</style>
