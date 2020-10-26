<template>
  <div>
    <useAysnc />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import useAysnc from './example/useAsync/index.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,useAysnc
  }
}
</script>
