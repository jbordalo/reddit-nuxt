<template>
    <div>
        <b-container class="bv-example-row">
            <b-row class="mt-3 mb-3">
                <search-subreddits
                    @search-text="searchSubreddits"
                ></search-subreddits>
            </b-row>
            <b-row>
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

    async searchSubreddits(text: String) {
        try {
            console.log("log: searching for subreddits with query:" + text);
            // TODO HIDE ENDPOINTS, LIMIT TO CONSTANT
            // TODO reactive search, debounce -> no continuous search
            const res = await axios.get(
                `https://www.reddit.com/subreddits/search.json?q=${text
                    .trim()
                    .toLowerCase()}&limit=10`
            );

            console.log(res.data.data.children);

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
            // console.log(this.subreddits);
            // console.log(this.subreddits[0]);
        } catch (err) {
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

<style scoped>
</style>