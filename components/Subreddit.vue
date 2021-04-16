<template>
    <div>
        <b-card
            :title="title"
            :img-src="icon"
            :img-alt="title"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
        >
            <b-card-text>
                {{ description }}
            </b-card-text>
        </b-card>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props: ["title", "icon", "description"],
});
</script>

<style scoped>
</style>