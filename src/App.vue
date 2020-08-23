<template>
    <div id="app">
        <app-header />
        <router-view />
    </div>
</template>

<script>
import AppHeader from "@/components/global/AppHeader";

export default {
    name: "App",
    components: {
        AppHeader
    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
