<template>
    <div class="container mt-4">
        <h3>Search Subreddits</h3>
        <hr />
        <b-container class="bv-example-row">
            <b-row class="mt-3 mb-3">
                <search-subreddits
                    @search-text="searchSubreddits"
                ></search-subreddits>
            </b-row>
            <b-row v-if="!loadingError">
                <b-col v-for="subreddit in subreddits" :key="subreddit.getId">
                    <nuxt-link
                        :to="
                            'subreddits/' +
                            subreddit.getDisplayName.toLowerCase()
                        "
                    >
                        <subreddit :subreddit="subreddit"></subreddit>
                    </nuxt-link>
                </b-col>
            </b-row>
            <b-row v-else>
                <h3>Could not load subreddits :(</h3>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Subreddit from "../../components/Subreddit.vue";
import SearchSubreddits from "../../components/SearchSubreddits.vue";
import { SubredditInterface, SubredditClass } from "~/types/Subreddit";

@Component({
    components: {
        Subreddit,
        SearchSubreddits,
    },
})
export default class Subreddits extends Vue {
    subreddits: SubredditInterface[] = [];
    loadingError: boolean = false;

    async searchSubreddits(text: String) {
        try {
            console.log("log: searching for subreddits with query:" + text);
            // TODO HIDE ENDPOINTS, LIMIT TO CONSTANT
            const res = await axios.get(
                `https://www.reddit.com/subreddits/search.json?q=${text
                    .trim()
                    .toLowerCase()}&limit=10`
            );

            this.subreddits = res.data.data.children.map(
                (sub: any) =>
                    new SubredditClass(
                        sub.data.id,
                        sub.data.title,
                        sub.data.display_name,
                        // TODO make into function
                        sub.data.community_icon.replace("amp;", "") ||
                            sub.data.icon_img,
                        sub.data.public_description
                    )
            );

            this.loadingError = false;
        } catch (err) {
            this.loadingError = true;
            console.log(err);
        }
    }

    head() {
        return {
            title: "Subreddits",
        };
    }
}
</script>

<style lang="scss" scoped>
</style>