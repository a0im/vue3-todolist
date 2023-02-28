<template>
  <div>
    <ul>
      <li  v-for="(day , i) of week" :key="i">
        <router-link :to="{name: 'week' , params : {days : day.eng}}">{{ day.kor + "요일" }}</router-link>
      </li>
    </ul>
  </div>
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