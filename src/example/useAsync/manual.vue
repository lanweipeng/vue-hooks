<template>
  <div>
      <input
        v-model="state"
        placeholder="Please enter username"
        style="width: 240,marginRight: 16"
      />
      <button :disabled="loading" type="button" @click="run(state)">
    <div v-if="loading">loading</div>
    <div v-if="!loading">Edit</div>
      </button>
    </div>
</template>

<script>
import {ref} from 'vue'
import {useAsync} from '../../../lib/index'
export default {
setup(){
    const state=ref(undefined)
    function changeUsername(username) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 1000);
  });
}
    const {loading,run}=useAsync(changeUsername,{
        manual:true,
        onSuccess:(result,params)=>{
            if(result.success){
                console.log(params)
            }
        }
    });
    return {
        loading,run,state
    }
}
}
</script>

<style>

</style>