<template>
  <div class="navbar">
    <div class="logo">
      <a href="/"
        ><img
          src="../../assets/images/bangladesh-pigeon-market-banner.png"
          alt="logo"
          style="height: 40px"
      /></a>
    </div>
    <nav>
      <ul id="MenuItems" v-show="menuItemShow || windowSize.width > 800">
        <li v-for="(nv, nk) in navList" :key="nk">
          <RouterLink active-class="header__option" :to="nv.url">
            <a>{{ $t(nv.title) }}</a>
          </RouterLink>
        </li>

        <select v-model="$i18n.locale" id="locale">
          <option v-for="locale in $i18n.availableLocales" :value="locale">
            {{ locale }}
          </option>
        </select>
      </ul>
    </nav>
    <a href="cart.html"
      ><img src="../../images/cart.png" width="30px" height="30px"
    /></a>
    <img
      src="../../images/menu.png"
      class="menu-icon"
      @click="menuItemShow = !menuItemShow"
    />
  </div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
const navList = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "Auction",
    url: "/auction/live",
  },
  {
    title: "collection",
    url: "/collection",
  },
  {
    title: "product",
    url: "/product",
  },
  {
    title: "about",
    url: "/about",
  },
  {
    title: "login",
    url: "/login",
  },
];
export default {
  data() {
    return {
      windowSize: {},
      menuItemShow: true,
      navList,
    };
  },
  mounted() {
    this.windowSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
    window.addEventListener("resize", () => {
      this.windowSize = {
        height: window.innerHeight,
        width: window.innerWidth,
      };
    });
  },
};
</script>
<style scoped>
.header__option {
  border-bottom: 1px solid red;
  border-bottom-width: 3px;
}
</style>
