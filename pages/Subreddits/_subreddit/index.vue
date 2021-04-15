<template>
    <b-container class="bv-example-row col-4">
        <b-row>
            <h2>{{ subreddit }}</h2>
        </b-row>
        <b-row v-for="post in posts" :key="post.data.id">
            <post
                :author="post.data.author"
                :title="post.data.title"
                :image="post.data.thumbnail"
                :url="post.data.url"
                :text="post.data.selftext"
            ></post>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import Post from "../../../components/Post.vue";

export default Vue.extend({
    data() {
        return {
            subreddit: "",
            posts: [],
        };
    },
    async created() {
        // TODO HIDE ENDPOINT .env
        const res = await axios.get(
            `https://www.reddit.com/r/${this.$route.params.subreddit}/hot.json?limit=10`
        );

        // console.log(res.data.data.children);

        this.posts = res.data.data.children;
        this.subreddit = res.data.data.children[0].subreddit;
    },
    components: {
        Post,
    },
    head() {
        return {
            title: "Posts",
        };
    },
});
</script>


<style scoped>
</style>