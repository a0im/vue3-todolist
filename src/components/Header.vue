<template>
  <div>
    <h1><router-link to="/">TODOLIST</router-link></h1>
    <input type="text" placeholder="일정을 입력하세요" v-model="newPlan">
    <select name="week" v-model="selectWeek">
      <option value="">요일선택</option>
      <option :key="i" v-for="(day , i) of week" :value="day.eng">{{day.kor}}</option>
    </select>
    <button @click="setData">작성</button>
  </div>
</template>

<script>
import {  useStore  } from "vuex";
export default{
  setup(){
    const store = useStore()
    const week = store.state.week
    let selectWeek = null
    let newPlan = null

    function setData() {
      if (this.selectWeek && this.newPlan) {
        console.log(this.selectWeek);
        console.log(this.newPlan);
      }
    }
    return {week , setData, selectWeek , newPlan}
  }
}
</script>