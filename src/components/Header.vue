<template>
  <header>
    <div class="title">
    <h1><router-link to="/">TODOLIST</router-link></h1>
    <div><img src="@/assets/img/skill.png" alt="skill"></div>
    </div>
    <form @submit.prevent="addData">
      <input :key="rdRef" type="text" placeholder="일정을 적어주세요." v-model="planTxt">
      <select name="week" @change="intoDay"  v-model="selectWeek">
        <option  :value="null">요일선택</option>
        <option :key="i" v-for="(day , i) of week" :value="day.eng">{{day.kor}}</option>
      </select>
        <button @submit="addData">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="mx-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </button>
    </form>
  </header>
</template>

<script>
import {  useStore  } from "vuex";
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default{
  setup(){
    const store = useStore()
    const week = store.state.week
    const plan = store.state.plan
    const router = useRouter()
    let selectWeek = null
    let planTxt = ""
    let rdRef = ref(0)


    function addData() {
      if (this.selectWeek && this.planTxt) {
        let formatId = ''
        let formatDate = ''
        const time = new Date()
        const tObj = {
          y : time.getFullYear(),
          mo : time.getMonth() + 1,
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

        formatDate += tObj.y + '-' + tObj.mo + '-' + tObj.d 

        let newPlan = {
          id : Number(formatId),
          done : false,
          txt : this.planTxt,
          date : formatDate
        }
        console.log(newPlan);
        plan[this.selectWeek].push(newPlan)
        store.commit('setPlan',plan)
        this.planTxt = ""
        
        rdRef.value++
      }
    }

    function intoDay () {
      if (this.selectWeek != null) {
        router.push({name : 'week' , params : {days : this.selectWeek}})
      } 
      else {
        router.push({name : 'home'})
      }
    }

    return {week , addData, selectWeek , planTxt ,intoDay ,rdRef}
  }
}
</script>

<style scoped>

.title{
  display: flex;
  justify-content: space-between;
}
.title h1{
  font-size: 48px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 20px;
}

.title > h1 > a {
  background: #42f8a8;
}

.title > div{
  width: 55px;
  height: 55px;
}

.title > div > img {
  width: 100%;
}



form{
  display: flex;
  height: 50px;
  width: 100%;
}

select,
input {
  font-size: 22px;
}

select{
  color: #9da4b0;
}
input {
  display: inline-block;
  width: 100%;
}

input::placeholder{
  color: #9da4b0;
}

header { 
  padding: 30px 30px 0;
}

button{
  display: block;
  width: 70px;
  height: 50px;
  background: #42f8a8;
}

svg{
  width: 35px;
  height: 35px;
}
</style>