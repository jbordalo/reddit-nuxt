<template>
    <div>
        <app-header></app-header>
        <Nuxt />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "../components/AppHeader.vue";

@Component({
    components: {
        AppHeader,
    },
})
export default class Default extends Vue {}
</script>

<style>
</style>
