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
                      v-model="salario"
                      step="1"
                      maxlength="50"
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
                      required
                      v-model="salario"
                      step="1"
                      maxlength="50"
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
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      placeholder="Ingrese una Cantidad"
                      aria-describedby="inputGroup-sizing-default"
                      required
                      v-model="salario"
                      step="1"
                      maxlength="50"
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
    </div>
  </div>
</template>
<script>
import menu from "../Menu/MenuBar.vue";
export default {
  name: "Portafolio",
  components: {
    "app-menu-bar": menu,
  },
};
</script>
