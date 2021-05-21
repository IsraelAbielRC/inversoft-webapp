<template>
  <nav class="navbar navbar-dark bg-dark">
    <ul class="nav">
      <li class="nav-item">
        <router-link
          class="nav-link fas fa-power-off"
          to="/"
          active-class="active"
          exact
        >
          Salir</router-link
        >
      </li>
      <li class="nav-item">
        <!--<a class="nav-link" href="/Aves">Aves</a>-->
        <router-link
          class="nav-link fas fa-signal"
          to="/Grafica"
          active-class="active"
        >
          Grafica</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link fas fa-coins"
          to="/Presupuesto"
          active-class="active"
          >Presupuesto</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link far fa-calendar-alt"
          to="/Portafolio"
          active-class="active"
        >
          Portafolio</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.active {
  color: aliceblue;
}
</style>
