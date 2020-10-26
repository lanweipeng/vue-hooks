<template>
  <div>
{{loading}}
{{data}}
{{error}}
  </div>
</template>

<script>
import {ref} from 'vue'
// import useAsync from '../package/useAsync.vue'
import {useAsync} from '../../../lib/index'
export default {
setup(){
    function getUserName(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('lwp')
                // reject('请求错误')
            },1000)
        })
    }
    const {loading,data,error}=useAsync(getUserName);
    if(error.value){
        console.log('err')
    }else{
        console.log('right')
    }
    return {
        loading,getUserName,data,error
    }
}
}
</script>

<style>

</style>