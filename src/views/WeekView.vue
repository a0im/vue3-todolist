<template>
  <div>
      <ul>
        <li v-for="date of paramDate($route.params.days)" :key="date.id">{{ date.txt }}</li>
      </ul>
  </div>

</template>
<script>
import {  useStore  } from "vuex";
export default{
  setup() {
    const store = useStore()
    const plan = store.state.plan
    function paramDate(param) {
      console.log(plan[param]);
      return plan[param]
    } 
    return {paramDate}
  }

}
</script>

