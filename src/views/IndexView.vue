<template>
  <main>
    <ul class="weekBox">
      <li><strong>요일선택</strong></li>
      <li v-for="(day , i) of week" :key="i">
        <router-link :to="{ name: 'week' , params : {days : day.eng} }">{{ day.kor }}</router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import {  useStore  } from "vuex";

  export default {
    setup(){
      const store = useStore()
      const week = store.state.week
      return {week}
    }
  }
</script>

<style scoped>
  main{
    margin: 30px;
  }

  .weekBox {
    display: flex;
    flex-wrap: wrap;
    background: #f3f4f6;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.63) inset;
  }

  .weekBox > li {
    width: 220px;
    height: 150px;
    font-size: 36px;
    margin: 10px;
    text-align: center;
    line-height: 150px;
    background: #fff;
    border-radius: 5px;
  }

  .weekBox > li:hover{
    transition: 300ms;
    background: #42f8a8;

  }

  .weekBox > li:first-of-type {
    background: #42f8a8;
    font-weight: 700;
  }
  .weekBox > li > a{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
