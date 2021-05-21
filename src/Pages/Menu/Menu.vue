<template>
  <div>
      <app-menu-bar/>
      <router-view></router-view>
  </div>
</template>
<script>
import MenuBar from "./MenuBar.vue";
export default {
  name: "Menu",
  components:{
      'app-menu-bar': MenuBar
  }
};
</script>
