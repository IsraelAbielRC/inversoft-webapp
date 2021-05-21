<template>
  <div>
    <app-menu-bar />
  </div>
</template>
<script>
import MenuBar from "./MenuBar.vue";
export default {
  name: "Menu",
  components: {
    "app-menu-bar": MenuBar,
  },
};
</script>
