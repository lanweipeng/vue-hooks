<template>
  <div>
    <useAysnc />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import useAysnc from './example/useAsync.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,useAysnc
  }
}
</script>
