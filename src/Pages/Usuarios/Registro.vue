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
              <button type="button" class="btn btn-ligth btn-block">
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
export default {
  name: "registro",
  data() {
    return {};
  },
  methods: {
    emitirData() {
      this.$emit("emitirDataEvent", true);
    },
  },
};
</script>
