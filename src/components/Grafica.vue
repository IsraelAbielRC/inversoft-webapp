<template>
<div class="row">
    <div class="col-1">
        <canvas id="myChart"></canvas>
    </div>
</div>
</template>
<script>
import MyChart from "chart.js";
export default {
    //data: [0, 10, 5, 2, 20, 30, 45]
  mounted() {
    //Setear Informacion
    const data = {
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: ['#EB8113','#EB8113','#EB8113','#EB8113'],
          borderColor: "#E1DFDA",
          data:[25,25,25,25],
        },
      ],
    };
    //Intancia
    var ctx = document.getElementById("myChart");
    var tabla = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options:{
          responsive: true
      }
    });
  },
};
</script>
