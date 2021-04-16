<template>
    <div>
        <b-card
            :title="post.getTitle"
            :footer="post.getAuthor"
            :img-src="post.checkUrl"
            :img-alt="post.getTitle"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
        >
            <div class="scrollable">
                <b-card-text class="mt-2">
                    {{ post.getText }}
                </b-card-text>
            </div>
            <b-link :href="post.getUrl" target="_blank">{{
                post.getUrl
            }}</b-link>
        </b-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PostInterface } from "../types/Post";

@Component
export default class Post extends Vue {
    @Prop({ type: Object, required: true }) readonly post!: PostInterface;
}
</script>

<style scoped>
/* TODO separate file nuxt-style-resources */
.card {
    width: 100%;
}
.scrollable {
    overflow-y: auto;
    max-height: 350px;
}
</style>