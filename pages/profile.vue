<template>
    <div class="container mt-4">
        <h3>User Page</h3>
        <hr />
        <p>{{ "Name: " + $auth.user.name }}</p>
        <p>{{ "Email: " + $auth.user.email }}</p>
        <p>{{ "Age: " + $auth.user.age }}</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    middleware: "authMiddleware",

    head() {
        return {
            title: "User Page",
        };
    },
});
</script>

<style lang="scss" scoped>
</style>
