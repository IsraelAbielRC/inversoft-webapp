<template>
  <div id="app">
    <app-ingreso/>
  </div>
</template>

<script>
import Ingreso from './components/Ingreso.vue';
export default {
  name: 'App',
  components: {
    'app-ingreso': Ingreso
  }
}
</script>

<style>
</style>
