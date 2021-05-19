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
                <button type="button" class="btn btn-primary btn-block">
                  Guardar Presupuesto
                </button>
              </div>
              <div class="col-12">
                <small id="notes" class="form-text text-danger">* Nota: El presupuesto se calcula de forma quincenal usando tu salario mensual.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Presupuesto",
  data() {
    return {
      salario: 1000,
    };
  },
  methods: {
    calcular(value) {
      if (this.salario < 0) this.salario *= -1;
      return Math.round((this.salario * value) / 2 || 0);
    },
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
};
</script>
