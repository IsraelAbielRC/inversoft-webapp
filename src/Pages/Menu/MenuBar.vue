<template>
  <nav class="navbar navbar-dark bg-dark">
    <ul class="nav">
      <li v-for="(ruta, index) in Rutas" :key="index" class="nav-item">
        <router-link
          :class="ruta.Icon"
          :to="ruta.Path"
          active-class="active"
        >
          {{ruta.Name}}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      Rutas: [],
    };
  },
  mounted() {
    this.Rutas.push({
      Icon: "nav-link fas fa-power-off",
      Path: "/",
      Name: "Salir",
    });
    this.Rutas.push({
      Icon: "nav-link fas fa-signal",
      Path: "/Grafica/" + this.$route.params.id,
      Name: "Grafica",
    });
    this.Rutas.push({
      Icon: "nav-link fas fa-coins",
      Path: "/Presupuesto/" + this.$route.params.id,
      Name: "Presupuesto",
    });
    this.Rutas.push({
      Icon: "nav-link far fa-calendar-alt",
      Path: "/Portafolio/" + this.$route.params.id,
      Name: "Portafolio",
    });
  },
};
</script>
<style scoped>
.active {
  color: aliceblue;
}
</style>
