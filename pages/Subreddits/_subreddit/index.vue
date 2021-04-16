<template>
    <b-container class="bv-example-row">
        <b-row class="mt-3">
            <h2>{{ "Browsing r/" + subreddit }}</h2>
        </b-row>
        <!-- if no posts =>  -->
        <b-row v-for="post in posts" :key="post.getId" class="mt-3 mb-3">
            <b-col cols="12">
                <post :post="post"></post>
            </b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Post from "../../../components/Post.vue";
import { PostInterface, PostClass } from "../../../types/Post";

@Component({
    components: {
        Post,
    },
})
export default class SubredditPosts extends Vue {
    subreddit: string = "";
    posts: PostInterface[] = [];
    // mounted vs created
    async created() {
        // TODO HIDE ENDPOINT .env
        // TODO Post and Subreddit types will implement a printable interface with required stuff?
        // TODO Pagination
        // TODO request into store, posts and subs
        // TODO asyncdata to set posts + getter!!
        // error handling (with ?)
        // test middleware
        const res = await axios.get(
            `https://www.reddit.com/r/${this.$route.params.subreddit}/hot.json?limit=10`
        );

        // console.log(res.data.data.children);

        // TODO REFACTOR IMAGE, not thumbnail but URL, deal with it inside
        this.posts = res.data.data.children.map((sub: any) => {
            return new PostClass(
                sub.data.id,
                sub.data.title,
                sub.data.url,
                sub.data.thumbnail,
                sub.data.selftext,
                sub.data.author
            );
        });

        // console.log(this.posts);
        // console.log(this.posts[0]);

        this.subreddit = res.data.data.children[0].data.subreddit;
    }
    head() {
        return {
            title: "Posts",
        };
    }
}
</script>


<style scoped>
</style>