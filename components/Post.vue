<template>
    <div>
        <b-card
            :title="title"
            :footer="author"
            :img-src="checkUrl"
            :img-alt="title"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
        >
            <div class="scrollable">
                <b-card-text class="mt-2">
                    {{ text }}
                </b-card-text>
            </div>
            <b-link :href="url" target="_blank">{{ getUrl }}</b-link>
        </b-card>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props: ["title", "url", "image", "text", "author"],
});
</script>

<style scoped>
/* TODO separate file */
.card {
    width: 100%;
}
.scrollable {
    overflow-y: auto;
    max-height: 350px;
}
</style>