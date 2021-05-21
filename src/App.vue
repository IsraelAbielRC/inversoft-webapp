<template>
  <div id="app">
    <page-usuarios />
  </div>
</template>

<script>
import Usuarios from "./Pages/Usuarios/Usuarios.vue";
export default {
  name: "App",
  components: {
    "page-usuarios": Usuarios,
  },
};
</script>

<style></style>
