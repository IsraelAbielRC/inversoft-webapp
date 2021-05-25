<template>
  <div>
    <app-menu-bar />
    <div class="container-fluid">
      <div class="row mt-4 justify-content-center">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-6">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <h1 class="h4 text-muted text-center">
                    Portafolio Personal
                  </h1>
                </div>
                <div class="col-12">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text"
                        for="validationCustom01"
                        id="inputGroup-sizing-default"
                        >Plataforma</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      placeholder="Ingrese Plataforma"
                      aria-describedby="inputGroup-sizing-default"
                      required
                      step="1"
                      maxlength="50"
                      v-model="Plataforma.Nombre"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text"
                        for="validationCustom01"
                        id="inputGroup-sizing-default"
                        >Fecha Actual</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      placeholder="Fecha Actual"
                      aria-describedby="inputGroup-sizing-default"
                      readonly
                      v-model="Plataforma.FechaActual"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text"
                        for="validationCustom01"
                        id="inputGroup-sizing-default"
                        >Cantidad</span
                      >
                    </div>
                    <input
                      type="number"
                      class="form-control"
                      aria-label="Sizing example input"
                      placeholder="Ingrese una Cantidad"
                      aria-describedby="inputGroup-sizing-default"
                      required
                      step="1"
                      min="1"
                      v-model.number="Plataforma.Cantidad"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <button type="button" class="btn btn-ligth btn-block">
                    <i class="far fa-window-close text-danger"></i>
                  </button>
                </div>
                <div class="col-6">
                  <button
                    type="button"
                    class="btn btn-ligth btn-block"
                    v-on:click="savePlataforma"
                    v-if="!isUpdate"
                  >
                    <i class="far fa-save text-primary"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-ligth btn-block"
                    v-on:click="actualizarPlataforma"
                    v-if="isUpdate"
                  >
                    <i class="fas fa-exchange-alt text-info"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4 justify-content-center">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-6">
          <div class="card">
            <div class="card-body">
              <ul class="list-group">
                <li
                  v-for="(detalle, i) in Plataformas"
                  :key="i"
                  class="list-group-item d-flex justify-content-between"
                >
                  <span class="text-danger cursor">
                    <i
                      class="fas fa-trash-alt"
                      v-on:click="eliminarPlataforma(i)"
                    ></i>
                  </span>
                  <h6>
                    Plataforma
                    <span class="badge badge-secondary">{{
                      detalle.Nombre
                    }}</span>
                  </h6>
                  <h6>
                    Cantidad $
                    <span class="badge badge-secondary">{{
                      detalle.Cantidad
                    }}</span>
                  </h6>
                  <i
                    class="fas fa-check-circle text-primary cursor"
                    v-on:click="seleccionarPlataforma(i)"
                  ></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import menu from "../Menu/MenuBar.vue";
import Axios from "axios";
export default {
  components: {
    "app-menu-bar": menu,
  },
  data() {
    return {
      id: "",
      isUpdate: false,
      index: 0,
      Usuario: null,
      Plataforma: {
        Nombre: "",
        FechaActual: new Intl.DateTimeFormat("es-MX", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date()),
        Cantidad: 0.0,
      },
      Plataformas: [],
    };
  },
  methods: {
    resetData() {
      this.Plataforma.Nombre = "";
      this.Plataforma.Cantidad = 0.0;
      this.isUpdate = false;
      this.index = 0;
    },
    getPlataformas() {
      Axios.get("https://inversof-c4bcf.firebaseio.com/Usuarios.json")
        .then((res) => {
          this.Usuario = res.data[this.id];
          this.Plataformas = JSON.parse(this.Usuario.Portafolio);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    savePlataforma() {
      this.Plataformas.push(this.Plataforma);
      this.Usuario.Portafolio = JSON.stringify(this.Plataformas);
      this.actualizarDatos(this.Usuario);
    },
    seleccionarPlataforma(index) {
      this.Plataforma = this.Plataformas[index];
      this.isUpdate = true;
      this.index = index;
      this.$swal.fire({
        position: "center",
        icon: "success",
        title: "Se Cargo Plataforma",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    eliminarPlataforma(index) {
      this.Plataformas.splice(index, 1);
      this.Usuario.Portafolio = JSON.stringify(this.Plataformas);
      this.actualizarDatos(this.Usuario);
    },
    actualizarDatos(Usuario) {
      if (!this.id) {
        this.$swal.fire({
          position: "center",
          icon: "error",
          title: "No se Cuenta con una Cuenta",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      Axios.put(
        "https://inversof-c4bcf.firebaseio.com/Usuarios/" + this.id + ".json",
        Usuario
      )
        .then((res) => {
          this.$swal.fire({
            position: "center",
            icon: "success",
            title: "Se Ejecuto la Tarea con Exito!",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(res.status);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.getPlataformas();
          this.resetData();
        });
    },
    actualizarPlataforma() {
      this.Plataformas[this.index] = this.Plataforma;
      this.Usuario.Portafolio = JSON.stringify(this.Plataformas);
      this.actualizarDatos(this.Usuario);
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getPlataformas();
  },
};
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
</style>
