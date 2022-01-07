<template>
  <div id="app">
    <h2>Table Data</h2>
    <HelloWorld/>
    <program/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import program from './components/program.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    program,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
