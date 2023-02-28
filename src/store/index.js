import { createStore } from 'vuex'

export default createStore({
  state: {
    week : [
      {
        eng : "mon",
        kor : "월"
      },
      {
        eng : "tus",
        kor : "화"
      },
      {
        eng : "wed",
        kor : "수"
      },
      {
        eng : "thur",
        kor : "목"
      },
      {
        eng : "fri",
        kor : "금"
      },
      {
        eng : "sat",
        kor : "토"
      },
      {
        eng : "sun",
        kor : "일"
      },
    ],

    plan : {
      mon : [
        {
        id : 20220228,
        txt : "오늘은뭐하지"
      },
        {
        id : 20220229,
        txt : "2222"
      },
        {
        id : 20220210,
        txt : "오늘은뭐하지3333"
      },
        {
        id : 20220211,
        txt : "오늘은뭐하지444"
      },
    ],
      tus : [],
      wed : [],
      thur : [],
      fri : [],
      sat : [],
      sun : [],
    }
    
  },
  getters: {
    checkDate(state){
      state.plan[state.week.eng]
    }
  },
  mutations: {
  },
  actions: {
    setPlan(state , value){
      const newPlan = JSON.parse(JSON.stringify(state.setPlan))
      console.log(newPlan)
      // state.setPlan = 
    }
  },
  modules: {
  }
})
