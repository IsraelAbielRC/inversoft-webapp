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
            <div class="col-12 mt-2">
              <button type="button" class="btn btn-primary btn-block">
                  Ingresar Cuenta
              </button>
            </div>
            <div class="col-12 mt-2">
              <button type="button" class="btn btn-info btn-block" v-on:click="emitirData">
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
export default {
  name: "login",
  methods:{
      emitirData(){
          this.$emit("emitirDataEvent", false);
      }
  }
};
</script>
