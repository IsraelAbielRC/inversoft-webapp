<template>
  <nav class="navbar navbar-dark bg-dark">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/" active-class="active" exact
          >Home</router-link
        >
      </li>
      <li class="nav-item">
        <!--<a class="nav-link" href="/Aves">Aves</a>-->
        <router-link class="nav-link" to="/Menu" active-class="active"
          >Menu</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Mamiferos" active-class="active"
          >Mamiferos</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Reptiles" active-class="active"
          >Reptiles</router-link
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