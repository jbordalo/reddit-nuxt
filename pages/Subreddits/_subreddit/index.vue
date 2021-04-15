<template>
    <b-container class="bv-example-row">
        <b-row>
            <h2>{{ "Browsing " + subreddit }}</h2>
        </b-row>
        <b-row v-for="post in posts" :key="post.data.id" class="mt-3 mb-3">
            <b-col cols="12">
                <post
                    :author="post.data.author"
                    :title="post.data.title"
                    :image="post.data.thumbnail"
                    :url="post.data.url"
                    :text="post.data.selftext"
                ></post>
            </b-col>
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
        // TODO CREATE POST TYPE
        // TODO HIDE ENDPOINT .env
        // TODO Pagination
        // TODO SHOW URL BUT SHOW AS IMG IF ENDSWITH .JPG or .PNG
        // TODO OR EXAMINE RESPONSE TO CHECK FOR IMAGE
        const res = await axios.get(
            `https://www.reddit.com/r/${this.$route.params.subreddit}/hot.json?limit=10`
        );

        // console.log(res.data.data.children);

        this.posts = res.data.data.children;
        this.subreddit = res.data.data.children[0].data.subreddit;
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