<template>
    <div class="container">
    <Nav/>
    <RouterView></RouterView>
    </div>
</template>
  
<script setup>
    import Nav from "./components/Nav.vue"
    import { RouterView } from "vue-router"
</script>
  
<style scoped>

#home{
    min-height: 50vh;
}
</style>