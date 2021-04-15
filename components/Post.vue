<template>
    <div>
        <b-card
            :title="title"
            :img-src="image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
        >
            <b-card-text>
                {{ text }}
                <a :href="url" target="_blank">{{ url }}</a>
            </b-card-text>
        </b-card>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props: ["title", "url", "image", "text"],
});
</script>

<style scoped>
</style>