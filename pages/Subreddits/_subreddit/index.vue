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
import Post from "../../../components/Post.vue";
import { PostInterface } from "../../../types/Post";
import { getModule } from "vuex-module-decorators";
import PostsModule from "../../../store/modules/PostsModule";

@Component({
    components: {
        Post,
    },
})
export default class SubredditPosts extends Vue {
    subreddit: string = this.$route.params.subreddit;
    posts: PostInterface[] = [];

    // asyncData() {
    //     console.log("Fetching data");
    //     this.$store.dispatch("requestPosts", this.$route.params.subreddit);
    //     // this.posts = this.$store.getters.getPosts;
    //     return this.$store.getters.getPosts;
    // }

    // mounted vs created
    async created() {
        console.log("Fetching data");

        const PostsModuleInstance = getModule(PostsModule, this.$store);

        PostsModuleInstance.requestPosts(this.$route.params.subreddit)
            .then(() => {
                this.posts = PostsModuleInstance.getPosts;
            })
            .catch(() => console.log("Error in fetching data"));

        // TODO HIDE ENDPOINT .env
        // TODO Post and Subreddit types will implement a printable interface with required stuff?
        // TODO Pagination
        // TODO request into store, posts and subs
        // TODO asyncdata to set posts + getter!!
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