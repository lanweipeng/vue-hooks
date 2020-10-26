
import { ref } from "vue";
import _ from 'lodash-es'
export  default function useAsync(server,options:object={}) {
  console.log('debounce')
  console.log(_)
  const loading = ref(false);
  const error=ref(undefined);
  const data=ref(undefined);
  const {manual=false,
    pollingInterval,
    debounceInterval,
    onSuccess=function(){}}=options;
  const immediate=!manual;
  debounceInterval&&_.debounce(run,debounceInterval)
  pollingInterval&&setInterval(()=>{run()},pollingInterval)
  
immediate&&run()
function run(args){
  console.log(args)
  loading.value = true;
    server().then((res) => {
    loading.value = false;
    data.value=res;
    onSuccess(res,args)
  }).catch(err=>{
    error.value=err
  });
}
 
  return {
    loading,error,data,run
  };
}
