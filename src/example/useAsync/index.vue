<template>
  <div>
      <h2>default</h2>
      <default></default>
      <h2>manual</h2>
      <manual></manual>
      <h2>轮询</h2>
      <polling></polling>
       <h2>防抖</h2>
      <debounce></debounce>
  </div>
</template>

<script>
import Default from './default.vue'
import Manual from './manual.vue'
import Polling from './polling.vue'
import Debounce from './debounce.vue'
export default {
components:{
    Default,Manual,Polling,Debounce
},
created(){
}
}
</script>

<style>

</style>