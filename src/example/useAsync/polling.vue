<template>
    <div>
        <p>Username:{{loading?'loading':data}}</p>
        <button type="button" @click="run">start</button>
    </div>
</template>
<script>
import {useAsync} from '../../../lib/index'

function getUsername() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('lwp')
        },1000)
    })
}
export default {
    setup(){
        const {data,loading,run,cancel}=useAsync(getUsername,{
            pollingInterval: 1000
        })
        return {data,loading,run}
    }
   

}
</script>