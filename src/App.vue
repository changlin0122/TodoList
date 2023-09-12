<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
    name:'App',
    components: {
        Home
    },
    setup(){
    }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
