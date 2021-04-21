<template>
    <div>
        <b-card
            :title="subreddit.getTitle"
            :img-src="subreddit.getIcon"
            :img-alt="subreddit.getTitle"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
        >
            <b-card-text>
                {{ subreddit.getDescription }}
            </b-card-text>
        </b-card>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { SubredditInterface } from "~/types/Subreddit";

@Component
export default class Subreddit extends Vue {
    @Prop({ type: Object, required: true })
    readonly subreddit!: SubredditInterface;
}
</script>

<style lang="scss" scoped>
</style>