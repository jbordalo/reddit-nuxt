<template>
    <div>
        <b-card
            :title="post.getTitle"
            :footer="post.getAuthor"
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
        >
            <b-card-img
                :src="post.checkUrl"
                :alt="post.getTitle"
                :class="{ blur: censored }"
                @click="unblur"
                onerror="this.style.display = 'none'"
            ></b-card-img>
            <div class="scrollable">
                <b-card-text class="mt-2">
                    {{ post.getText }}
                </b-card-text>
            </div>
            <b-link :href="post.getUrl" target="_blank">{{
                post.getUrl
            }}</b-link>
            <hr />

            <img src="../assets/img/upvote.png" class="vote" />
            <img src="../assets/img/downvote.png" class="vote" />
            {{ "Score: " + post.getScore }}
        </b-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PostInterface } from "../types/Post";

@Component
export default class Post extends Vue {
    @Prop({ type: Object, required: true }) readonly post!: PostInterface;
    censored: boolean = this.post.nsfw;

    unblur() {
        if (!this.post.nsfw) return;
        this.censored = !this.censored;
    }
}
</script>

<style lang="scss" src="../assets/css/post.scss" scoped>
</style>