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

<style lang="scss" scoped>
/* TODO separate file => nuxt-style-resources */
$text-max-height: 350px;
$vote-size: 15px;
$blur: 15px;

.card {
    width: 100%;
}
.scrollable {
    overflow-y: auto;
    max-height: $text-max-height;
}

.vote {
    width: $vote-size;
    height: $vote-size;
    margin: 0px;
}

.blur {
    filter: blur($blur);
    -webkit-filter: blur($blur);
}
</style>