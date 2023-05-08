<template>
    <div class="row container nav-menus-style">
        <RouterLink active-class="active" class="goto-link-style" to="/auction/live">Live</RouterLink>
        <RouterLink active-class="active" class="goto-link-style" to="/auction/newEntry">New</RouterLink>
        <RouterLink active-class="active" class="goto-link-style" to="/auction/bidderList">bidders</RouterLink>
        <RouterLink active-class="active" class="goto-link-style" to="/auction/allAuction">List</RouterLink>
    </div>
</template>
<script setup>
    import {  RouterLink } from "vue-router"
</script>
<style scoped>
.goto-link-style {
    padding: 10px;
}
.nav-menus-style {
    justify-content: center;
}
.active {
    background-color: aqua;
    color: black;
}
</style>