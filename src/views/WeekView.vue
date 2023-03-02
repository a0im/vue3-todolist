<template>
  <main>
      <ul class="planBox">
        <li 
          v-for="date  of plan[$route.params.days]" 
          :key="date.id"
          >
          <div class="left-content">
            <div>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-yellow-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
              </svg>
            </div>
            <span  class="text-info">{{ date.txt }}</span>
          </div>
          <time :datetime="date.txt" class="date-info">{{ date.date }}</time>
          <button @click="delPlan($route.params.days , date.id)">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
              <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </li>
      </ul>
  </main>
</template>

<script>
import {  useStore  } from "vuex";
export default{
  setup() {
    const store = useStore()
    const plan = store.state.plan

    const delPlan = (param, id) => {
      const changeData = plan[param].filter(data => data.id !== id)
      plan[param] = changeData;
      store.commit('setPlan',plan[param])
    }

    return {delPlan ,plan}
  }
}
</script>

<style scoped>
  main {
    margin : 30px;
  }

  .planBox{
    width: 100%;
    height: 450px;
    overflow-y: scroll;
  }

  .planBox > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 15px;
    background: #fff;
  }

  .text-info{
    font-size: 20px;
    margin-left: 30px;
  }
  .left-content{
    display: flex;
    align-items: center;
  }
  .date-info{
    margin-right: 40px;
    margin-left: auto;
    font-size: 16px;
    color: #9da4b0;
  }

  svg{
    font-size: 30px;
  }

</style>

