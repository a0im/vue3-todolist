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
        id : 2022022832,
        done : true,
        txt : "javascript 공부하기",
        date : '2023-3-1'
      },
      {
        id : 2022022843,
        done : false,
        txt : "vue 공부하기",
        date : '2023-3-1'
      },
    ],
      tus : [
        {
          id : 2022022811,
          done : false,
          txt : "react공부하기",
          date : '2023-3-1'
        },
      ],
      wed : [
        {
          id : 2022022843,
          done : false,
          txt : "vue공부하기",
          date : '2023-3-1'
        },
      ],
      thur : [
        {
          id : 2022022822,
          done : true,
          txt : "deep dive읽기",
          date : '2023-3-1'
        },
      ],
      fri : [
        {
          id : 2022022812,
          done : true,
          txt : "쫑구랑 산책가기",
          date : '2023-3-1'
        },
      ],
      sat : [
        {
          id : 2022022832,
          done : true,
          txt : "운동하기",
          date : '2023-3-1'
        },
      ],
      sun : [
        {
          id : 2022022849,
          done : true,
          txt : "cs공부하기",
          date : '2023-3-1'
        },
      ],
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
