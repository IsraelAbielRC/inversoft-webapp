<template>
  <div class="row mt-4 justify-content-center">
    <div class="col-8">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <h1 class="h4 text-muted text-center">Registrar Usuario</h1>
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
                  v-model="Codio"
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
                  placeholder="Repita el Codigo"
                  aria-label="Repita el Codigo"
                  aria-describedby="basic-addon1"
                  v-model="CodigoRep"
                />
              </div>
            </div>
            <div class="col-6">
              <button
                type="button"
                class="btn btn-ligth btn-block"
                v-on:click="emitirData"
              >
                <i class="far fa-window-close text-danger"></i>
              </button>
            </div>
            <div class="col-6">
              <button
                type="button"
                class="btn btn-ligth btn-block"
                v-on:click="saveUsuario"
                v-if="Existe"
              >
                <i class="far fa-save text-primary"></i>
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
  name: "registro",
  data() {
    return {
      Nombre: "",
      Codio: "",
      CodigoRep: "",
      Existe: false,
    };
  },
  methods: {
    emitirData() {
      this.$emit("emitirDataEvent", true);
    },
    saveUsuario() {
      /*Validamos Codigos */
      if (!this.Codio || !this.CodigoRep) {
        this.$swal.fire({
          position: "center",
          icon: "info",
          title: "Contraseñas Vacias",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      if (this.Codio != this.CodigoRep) {
        this.$swal.fire({
          position: "center",
          icon: "info",
          title: "Revise Contraseñas",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      /*Creamos el Objecto*/
      const usuario = {
        Nombre: this.Nombre.toString().toUpperCase(),
        Codigo: this.cifrarData(this.Codio),
        fechaRegistro: new Intl.DateTimeFormat("es-MX", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date()),
        Portafolio: "",
        Presupuesto: "",
      };
      /*Metodo Post */
      Axios.post("https://inversof-c4bcf.firebaseio.com/Usuarios.json", usuario)
        .then((res) => {
          console.log(res.data.name);
          this.$swal.fire({
            position: "center",
            icon: "success",
            title: "Se Guardo Usuario",
            showConfirmButton: false,
            timer: 1500,
          });
          this.emitirData();
        })
        .catch((er) => {
          console.error(er);
          this.emitirData();
        });
    },
    cifrarData(value) {
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(value, salt);
    },
    verificarUsoName() {
      this.Existe = true;
      Axios.get("https://inversof-c4bcf.firebaseio.com/Usuarios.json")
        .then((res) => {
          for (const id in res.data) {
            if (res.data[id].Nombre == this.Nombre.trim().toUpperCase()) {
              this.Existe = false;
              break;
            }
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
        });
    },
  },
  watch: {
    Nombre: function() {
      this.verificarUsoName();
    },
  },
};
</script>
