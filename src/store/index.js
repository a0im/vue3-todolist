import { createStore } from 'vuex'

export default createStore({
  state: {
    week : [
      {
        eng : "mon",
        kor : "월요일"
      },
      {
        eng : "tus",
        kor : "화요일"
      },
      {
        eng : "wed",
        kor : "수요일"
      },
      {
        eng : "thur",
        kor : "목요일"
      },
      {
        eng : "fri",
        kor : "금요일"
      },
      {
        eng : "sat",
        kor : "토요일"
      },
      {
        eng : "sun",
        kor : "일요일"
      },
    ],

    plan : {
      mon : [
        {
        id : 20220228,
        txt : "오늘은뭐하지",
        date : '2023-3-1'
      },
        {
        id : 20220229,
        txt : "2222",
        date : '2023-3-1'
      },
        {
        id : 20220210,
        txt : "오늘은뭐하지3333",
        date : '2023-3-1'

      },
        {
        id : 20220211,
        txt : "오늘은뭐하지444",
        date : '2023-3-1'
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
      console.log(state)
      return state
    }
  },
  mutations: {
    setPlan(state , value){
      state.plan = value
      console.log(state.plan)
    }
  },
  actions: {},
  modules: {}
})
