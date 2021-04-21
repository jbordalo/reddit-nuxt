<template>
    <div class="container">
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
            <b-button variant="outline-primary" @click="getPosts"
                >More Posts</b-button
            >
        </b-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Post from "../../../components/Post.vue";
import { PostInterface } from "../../../types/Post";
import { Action, getModule } from "vuex-module-decorators";
import PostsModule from "../../../store/modules/PostsModule";

@Component({
    components: {
        Post,
    },
})
export default class SubredditPosts extends Vue {
    subreddit: string = this.$route.params.subreddit;
    posts: PostInterface[] = [];
    postsModuleInstance: PostsModule = getModule(PostsModule, this.$store);

    async getPosts() {
        console.log("Fetching data");
        // const PostsModuleInstance = getModule(PostsModule, this.$store);
        this.postsModuleInstance
            .requestPosts(this.$route.params.subreddit)
            .then(() => {
                this.posts = this.postsModuleInstance.getPosts;
            })
            .catch(() => console.log("Error whilst fetching data"));
    }

    mounted() {
        // this.postsModuleInstance.requestClearPosts();
        this.getPosts();
        // TODO HIDE ENDPOINT .env
        // TODO Post and Subreddit types will implement a printable interface with required stuff?
    }

    beforeDestroy() {
        this.postsModuleInstance.requestClearPosts();
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