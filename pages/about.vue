<template>
    <div class="container mt-4">
        <h3>Contacts:</h3>
        <hr />
        <label>Email:</label>
        <a>joao.bordalo@hypnotic.pt</a>
        <br />
        <label>Github:</label>
        <a id="link" href="https://www.github.com/jbordalo/" target="_blank"
            >jbordalo</a
        >
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    head() {
        return {
            title: "About",
        };
    },
});
</script>

<style lang="scss" src="~/assets/css/about.scss" scoped>
</style>