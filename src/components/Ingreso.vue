<template>
  <div class="container-fluid">
    <div class="row mt-4 justify-content-center">
      <div class="col-sm-10 col-md-8 col-lg-6 col-xl-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <h1 class="h4 text-muted text-center">Calcular Presupuesto</h1>
              </div>
              <div class="col-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text"
                      for="validationCustom01"
                      id="inputGroup-sizing-default"
                      >Salario Mensual</span
                    >
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    placeholder="Ingrese un Salario"
                    aria-describedby="inputGroup-sizing-default"
                    required
                    min="0"
                    max="999999999"
                    v-model="salario"
                    step="1"
                    maxlength="10"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text"
                      for="validationCustom01"
                      id="inputGroup-sizing-default"
                      >Gastos</span
                    >
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    placeholder="Ingrese un Salario"
                    aria-describedby="inputGroup-sizing-default"
                    required
                    min="0"
                    max="999999999"
                    v-model="obtenerGastos"
                    step="1"
                    maxlength="10"
                    readonly
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text"
                      for="validationCustom01"
                      id="inputGroup-sizing-default"
                      >Deudas</span
                    >
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    placeholder="Ingrese un Salario"
                    aria-describedby="inputGroup-sizing-default"
                    required
                    min="0"
                    max="999999999"
                    v-model="obtenerDeudas"
                    step="1"
                    maxlength="10"
                    readonly
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text"
                      for="validationCustom01"
                      id="inputGroup-sizing-default"
                      >Inversion</span
                    >
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    placeholder="Ingrese un Salario"
                    aria-describedby="inputGroup-sizing-default"
                    required
                    min="0"
                    max="999999999"
                    v-model="obtenerInversion"
                    step="1"
                    maxlength="10"
                    readonly
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text"
                      for="validationCustom01"
                      id="inputGroup-sizing-default"
                      >Ahorro</span
                    >
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    placeholder="Ingrese un Salario"
                    aria-describedby="inputGroup-sizing-default"
                    required
                    min="0"
                    max="999999999"
                    v-model="obtenerAhorro"
                    step="1"
                    maxlength="10"
                    readonly
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text"
                      for="validationCustom01"
                      id="inputGroup-sizing-default"
                      >Libre</span
                    >
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    placeholder="Ingrese un Salario"
                    aria-describedby="inputGroup-sizing-default"
                    required
                    min="0"
                    max="999999999"
                    v-model="obtenerLibre"
                    step="1"
                    maxlength="10"
                    readonly
                  />
                </div>
              </div>
              <div class="col-12">
                <button
                v-if="index == -1"
                  type="button"
                  class="btn btn-primary btn-block"
                  v-on:click="addIngreso"
                >
                  Guardar Presupuesto
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-primary btn-block"
                  v-on:click="updateIngresos"
                >
                  Actualizar Presupuesto
                </button>
              </div>
              <div class="col-12">
                <small id="notes" class="form-text text-danger"
                  >* Nota: El presupuesto se calcula de forma quincenal usando
                  tu salario mensual.</small
                >
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
                v-for="(detalle, i) in Detalles"
                :key="i"
                class="list-group-item d-flex justify-content-between"
              >
                <span class="text-success cursor">
                  <i class="far fa-dot-circle"></i>
                </span>
                <h6>
                  Salario Mensual $
                  <span class="badge badge-secondary">{{
                    detalle.Salario
                  }}</span>
                </h6>
                <h6>
                  Fecha Registro
                  <span class="badge badge-secondary">{{ detalle.Fecha }}</span>
                </h6>
                <i
                  class="fas fa-check-circle text-primary cursor"
                  v-on:click="cargarIngreso(i)"
                ></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "Presupuesto",
  data() {
    return {
      salario: 1000,
      Detalles: [],
      index: -1,
    };
  },
  methods: {
    calcular(value) {
      if (this.salario < 0) this.salario *= -1;
      return Math.round((this.salario * value) / 2 || 0);
    },
    addIngreso() {
      const currentDateWithFormat = new Date();
      const Ingreso = {
        Salario: Number.parseFloat(this.salario.toString()),
        Fecha: currentDateWithFormat
          .toJSON()
          .slice(0, 10)
          .replace(/-/g, "/"),
        Estatus: false,
      };
      Axios.post("https://inversof-c4bcf.firebaseio.com/Ingresos.json", Ingreso)
        .then((res) => {
          console.log(res.data.name);
          this.resetData();
          this.$swal.fire({
            position: "center",
            icon: "success",
            title: "Se Guardo Salario",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((er) => {
          console.error(er);
        });
    },
    getIngresos() {
      Axios.get("https://inversof-c4bcf.firebaseio.com/Ingresos.json")
        .then((res) => {
          this.Detalles = [];
          for (const id in res.data) {
            this.Detalles.push({
              ID: id,
              Salario: res.data[id].Salario,
              Fecha: res.data[id].Fecha,
              Estatus: res.data[id].Estatus,
            });
          }
          this.getIngresos();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    cargarIngreso(index) {
      this.index = index;
      this.salario = this.Detalles[index].Salario;
      this.$swal.fire({
        position: "center",
        icon: "success",
        title: "Se Cargo Salario",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    updateIngresos() {
      const Ingreso = {
        Salario: Number.parseFloat(this.salario.toString()),
        Fecha: this.Detalles[this.index].Fecha,
        Estatus: this.Detalles[this.index].Estatus,
      };
      Axios.put(
        "https://inversof-c4bcf.firebaseio.com/Ingresos/" +
          this.Detalles[this.index].ID +
          ".json",
        Ingreso
      )
        .then((res) => {
          this.getIngresos();
          this.resetData();
          this.$swal.fire({
            position: "center",
            icon: "success",
            title: "Se Actualizo Salario",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.error(error);
          this.getIngresos();
          this.resetData();
        });
    },
    resetData(){
      this.index = -1;
      this.salario = 0;
    }
  },
  computed: {
    obtenerGastos() {
      return this.calcular(0.4);
    },
    obtenerDeudas() {
      return this.calcular(0.2);
    },
    obtenerInversion() {
      return this.calcular(0.2);
    },
    obtenerAhorro() {
      return this.calcular(0.1);
    },
    obtenerLibre() {
      return this.calcular(0.1);
    },
  },
  mounted() {
    this.getIngresos();
  },
};
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
</style>
