<template>
  <div class="row">
    <div class="col-1">
      <canvas id="myChart"></canvas>
    </div>
    <div class="col-auto">
      <app-radial
        :diameter="100"
        :completed-steps="pasos"
        :total-steps="total"
        startColor="#EB8113"
        stopColor="#EB8113"
        innerStrokeColor="#E1DFDA"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col text-center">{{total}}/{{pasos}}</div>
          </div>
        </div>
      </app-radial>
    </div>
  </div>
</template>
<script>
import MyChart from "chart.js";
import RadialBar from "vue-radial-progress";
export default {
  data() {
    return {
      total: 4,
      pasos: 2,
    };
  },
  components: {
    "app-radial": RadialBar,
  },
  mounted() {
    //Setear Informacion
    const data = {
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: ["#EB8113", "#EB8113", "#EB8113", "#EB8113"],
          borderColor: "#E1DFDA",
          data: [25, 25, 25, 25],
        },
      ],
    };
    //Intancia
    var ctx = document.getElementById("myChart");
    var tabla = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
      },
    });
  },
};
</script>
