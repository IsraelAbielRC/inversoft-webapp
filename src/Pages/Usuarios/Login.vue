<template>
  <div class="row mt-4 justify-content-center">
    <div class="col-8">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <h1 class="h4 text-muted text-center">Inversof</h1>
            </div>
            <div class="col-12">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"
                    >Nombre:</span
                  >
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ingrese un nombre"
                  aria-label="Ingrese un nombre"
                  aria-describedby="basic-addon1"
                  v-model="Nombre"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"
                    >Codigo:</span
                  >
                </div>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Ingrese un Codigo"
                  aria-label="Ingrese un Codigo"
                  aria-describedby="basic-addon1"
                  v-model="Password"
                />
              </div>
            </div>
            <div class="col-12 mt-2">
              <button
                type="button"
                class="btn btn-primary btn-block"
                v-on:click="verificarCliente"
              >
                Ingresar Cuenta
              </button>
            </div>
            <div class="col-12 mt-2">
              <button
                type="button"
                class="btn btn-info btn-block"
                v-on:click="emitirData"
              >
                Crear Cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import bcrypt from "bcryptjs";
export default {
  name: "login",
  data() {
    return {
      Nombre: "",
      Password: "",
      Existe: false,
    };
  },
  methods: {
    emitirData() {
      this.$emit("emitirDataEvent", false);
    },
    cifrarData(value) {
      var hash = require("object-hash");
      return hash.sha1(value);
    },
    verificarCliente() {
      if (!this.Nombre || !this.Password) {
        this.$swal.fire({
          position: "center",
          icon: "error",
          title: "verificar Información",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      this.Existe = false;
      Axios.get("https://inversof-c4bcf.firebaseio.com/Usuarios.json")
        .then((res) => {
          for (const id in res.data) {
            if (res.data[id].Nombre == this.Nombre.trim().toUpperCase()) {
              this.Existe =
                res.data[id].Codigo == this.cifrarData(this.Password);
              break;
            }
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          if (this.Existe) {
            this.$router.push("/Grafica");
          } else {
            this.$swal.fire({
              position: "center",
              icon: "error",
              title: "verificar Información",
              showConfirmButton: false,
              timer: 1500,
            });
            return;
          }
        });
      //;
    },
  },
};
</script>
