<template>
    <div>
        <p>Enter quickly to see the effect</p>
        <input placeholder="Select Emails" v-model="input"/>
        <p v-if="loading">loading</p>
        <div v-if="!loading">
            <ul>
                <li v-for="email in data">{{email}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getEmail} from './tools'
import {useAsync} from '../../../lib/index'
import {ref} from 'vue'
    export default {
       setup(){
           const input=ref('')
           console.log('d')
           console.log(document.getElementById('input'))
           const text=ref('')
           const {data,loading,run}=useAsync(getEmail);
           return {
               data,loading,run,text,input
           }
       },
       watch:{
           input(){
               this.run();
           }
       }
    }
</script>

<style scoped>

</style>