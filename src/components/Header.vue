<template>
  <div>
    <h1 class="title"><router-link to="/">TODOLIST</router-link></h1>
    <form>
      <input type="text" placeholder="일정을 입력하세요" v-model="plenTxt">
      <select name="week" v-model="selectWeek">
        <option value="">요일선택</option>
        <option :key="i" v-for="(day , i) of week" :value="day.eng">{{day.kor}}</option>
      </select>
      <button @click="addData">작성</button>
    </form>
  </div>
</template>

<script>
import {  useStore  } from "vuex";
import { useRouter } from 'vue-router';
export default{
  setup(){
    const store = useStore()
    const week = store.state.week
    const plan = store.state.plan
    const router = useRouter()
    let selectWeek = null
    let plenTxt = null

    function addData() {
      if (this.selectWeek && this.plenTxt) {
        console.log("sss");
        let formatId = ''
        const time = new Date()
        const tObj = {
          y : time.getFullYear(),
          mo : time.getMonth()+1,
          d : time.getDate(),
          h : time.getHours(),
          mi : time.getMinutes(),
          s : time.getSeconds(),
        }

        for (const when in tObj) {
          if (tObj.hasOwnProperty.call(tObj, when) && when != "y" ) {
            formatId += ("00" + tObj[when].toString()).slice(-2);
          } 
          else if ( when == "y") {
            formatId += tObj.y.toString()
          }
        }

        let newPlan = {
          id : Number(formatId),
          txt : this.plenTxt
        }
        plan[this.selectWeek].push(newPlan)
        console.log(plan);
        store.commit('setPlan',plan)

        router.push({name : 'week' , params : {days : this.selectWeek}})
      }
    }

    return {week , addData, selectWeek , plenTxt}
  }
}
</script>

<style scoped>
.title{
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
}

.title a {
  background: #42f8a8;
}

form{
  display: flex;
  font-size: 22px;
  height: 50px;
}

input {
  font-size: 22px;

}
</style>