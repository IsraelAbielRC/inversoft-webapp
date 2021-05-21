<template>
  <div class="container">
    <componente-login-usuario v-on:emitirDataEvent="getEmicion($event)" v-if="EstatusPadre"/>
    <componente-registro-usuario v-on:emitirDataEvent="getEmicion($event)" v-else-if="!EstatusPadre"/>
  </div>
</template>
<script>
/*Importamos Vue's*/
import Registro from "./Registro.vue";
import Login from "./Login.vue";
export default {
  name: "Registro",
  components: {
    "componente-registro-usuario": Registro,
    "componente-login-usuario": Login
  },
  data() {
    return {
      EstatusPadre: true,
      Mensaje: "",
    };
  },
  methods: {
    getEmicion($event) {
      this.EstatusPadre = $event;
    },
  },
  watch: {
    EstatusPadre: function() {
      console.log(this.EstatusPadre);
    },
  },
};
</script>
