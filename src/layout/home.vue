<template>
  <div>
    <div class="header">
      <div class="container">
        <headerBar></headerBar>
        <homeHero></homeHero>
      </div>
    </div>

    <div>
      <RouterView></RouterView>
    </div>

    <footerBar></footerBar>
  </div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
import headerBar from "./components/headerBar.vue";
import homeHero from "./components/homeHero.vue";
import footerBar from "./components/footerBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    headerBar,
    homeHero,
    footerBar,
  },
};
</script>
