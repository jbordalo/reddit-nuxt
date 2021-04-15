<template>
    <div>
        <b-container class="bv-example-row">
            <b-row class="mt-4 mb-4">
                <search-subreddits
                    @search-text="searchSubreddits"
                ></search-subreddits>
            </b-row>
            <b-row>
                <b-col v-for="subreddit in subreddits" :key="subreddit.data.id">
                    <nuxt-link
                        :to="
                            'subreddits/' +
                            subreddit.data.display_name.toLowerCase()
                        "
                    >
                        <subreddit
                            :title="subreddit.data.title"
                            :icon="
                                subreddit.data.community_icon.replace(
                                    'amp;',
                                    ''
                                )
                            "
                            :description="subreddit.data.public_description"
                        ></subreddit>
                    </nuxt-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import Subreddit from "../../components/Subreddit.vue";
import SearchSubreddits from "../../components/SearchSubreddits.vue";
export default Vue.extend({
    data() {
        return {
            subreddits: [],
        };
    },
    components: {
        Subreddit,
        SearchSubreddits,
    },
    methods: {
        async searchSubreddits(text: String) {
            try {
                console.log("log: searching for subreddits with query:" + text);
                // TODO HIDE ENDPOINTS, LIMIT TO CONSTANT
                const res = await axios.get(
                    `https://www.reddit.com/subreddits/search.json?q=${text}&limit=3&`
                );

                // console.log(res.data.data.children);

                this.subreddits = res.data.data.children;
            } catch (err) {
                console.log(err);
            }
        },
    },
    head() {
        return {
            title: "Subreddits",
        };
    },
});
</script>

<style scoped>
</style>