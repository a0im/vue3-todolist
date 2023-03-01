<template>
  <div>
      <ul>
        <li 
          v-for="(date , i) of plan[$route.params.days]" 
          :key="date.id"
          >
          <span>{{ (i + 1)  + ".  "}}</span>
          <span>{{ date.txt }}</span>
          <button @click="delPlan($route.params.days , date.id)">삭제</button>
        </li>
      </ul>
  </div>

</template>
<script>
import {  useStore  } from "vuex";
export default{
  setup() {
    let store = useStore()
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

