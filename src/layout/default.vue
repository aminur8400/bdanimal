<template>
  <div>
    <div class="header">
      <div class="container">
        <headerBar></headerBar>
      </div>
    </div>
    <RouterView></RouterView>
    <footerBar></footerBar>
  </div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
import headerBar from "./components/headerBar.vue";
import footerBar from "./components/footerBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    headerBar,
    footerBar,
  },
};
</script>
