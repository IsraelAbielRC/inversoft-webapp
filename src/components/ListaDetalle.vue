<template>
  <div class="container-fluid">
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
import moment from "moment";
export default {
  name: "Detalles",
  data() {
    return {
      Detalles: [],
    };
  },
  computed: {
    formatDate(date) {
      console.log(date);
      return 
    },
  },
  mounted() {
    Axios.get("https://inversof-c4bcf.firebaseio.com/Ingresos.json")
      .then((res) => {
        for (const id in res.data) {
          this.Detalles.push({
            Salario: res.data[id].Salario,
            Fecha: res.data[id].Fecha.split('T')[0],
            Estatus: res.data[id].Estatus,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
</style>
