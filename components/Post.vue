<template>
    <div>
        <b-card
            :title="post.getTitle"
            :footer="post.getAuthor"
            tag="article"
            style="max-width: 20rem"
            class="card mb-2"
        >
            <b-card-img-lazy
                :src="post.getImage"
                :alt="post.getTitle"
                :class="{ 'card--blur': censored }"
                @click.native="unblur"
                onerror="this.style.display = 'none'"
            ></b-card-img-lazy>
            <div class="card--scrollable">
                <b-card-text class="mt-2">
                    {{ post.getText }}
                </b-card-text>
            </div>
            <b-link :href="post.getUrl" target="_blank">{{
                post.getUrl
            }}</b-link>
            <hr />

            <img src="~/assets/img/upvote.png" class="card__vote" />
            <img src="~/assets/img/downvote.png" class="card__vote" />
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

<style lang="scss" src="~/assets/css/post.scss" scoped>
</style>