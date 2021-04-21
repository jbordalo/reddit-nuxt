<template>
    <div class="container mt-4">
        <h3>Secret Page</h3>
        <hr />
        <p>You've accessed the secret page.</p>
    </div>
</template>

<script lang="ts">
export default {
    middleware: "auth",

    head() {
        return {
            title: "Secret Page",
        };
    },
};
</script>

<style lang="scss" scoped>
</style>
