<template>
  <div>
{{loading}}
  </div>
</template>

<script>
import {ref} from 'vue'
// import useAsync from '../package/useAsync.vue'
import {useAsync} from '../../lib/index'
export default {
setup(){
    function getUserName(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve('lwp')
            },1000)
        })
    }
    const {loading}=useAsync(getUserName);
    console.log(loading);
    return {
        loading,getUserName
    }
}
}
</script>

<style>

</style>