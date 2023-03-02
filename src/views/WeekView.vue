<template>
  <main>
      <ul class="planBox">
        <li 
          v-for="date  of plan[$route.params.days]" 
          :key="date.id"
          >
          <div class="left-content">
            <div>
              <button @click="isDone($route.params.days , date.id)">
                <span :class="date.done  ? 'check-done-act' : 'check-done'">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="mx-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </button>
            </div>
            <span  :class="date.done  ? 'text-info-act' : 'text-info'" class="">{{ date.txt }}</span>
          </div>
          <time :datetime="date.txt" class="date-info">{{ date.date }}</time>
          <button @click="delPlan($route.params.days , date.id)">
            <svg class="cross" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
      
      store.commit('setPlan',plan)
    }

    const isDone = (param , id) => {
      const changeDone = plan[param].map(data =>{
        if (data.id === id) {
          data.done = !data.done
          return data
        } 
        else {
          return data
        }
      })
      plan[param] = changeDone
      store.commit('setPlan',plan[param])
    }

    return { plan , delPlan , isDone }
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

  .text-info,
  .text-info-act{
    position: relative;
    font-size: 20px;
    margin-left: 30px;
  }

  .text-info-act{
    color: #9da4b0;
  }

  .text-info-act::before{
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 110%;
    background: red;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .left-content{
    display: flex;
    align-items: center;
  }
  .check-done{
    display: block;
    width: 22.5px;
    height: 22.5px;
    border: 2px black solid;
    border-radius: 3px;
  }

  .check-done svg{
    visibility: hidden;
  }

  .check-done-act{
    position: relative;
    top: 2px;
    display: block;
    width: 22.5px;
    height: 22.5px;
    background: #42f8a8;
    border-radius: 3px;
  }

  .check-done-act svg {
    visibility: visible;
    font-size: 22.5px;
  }

  .date-info{
    margin-right: 40px;
    margin-left: auto;
    font-size: 16px;
    color: #9da4b0;
  }

  .cross{
    font-size: 30px;
  }

</style>

