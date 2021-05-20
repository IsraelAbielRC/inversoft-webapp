<template>
  <div id="app">
    <app-ingreso/>
    <app-detalle/>
  </div>
</template>

<script>
import Ingreso from './components/Ingreso.vue';
import Detalles from './components/ListaDetalle.vue';
export default {
  name: 'App',
  components: {
    'app-ingreso': Ingreso,
    'app-detalle' : Detalles
  }
}
</script>

<style>
</style>
