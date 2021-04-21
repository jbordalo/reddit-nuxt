<template>
    <div class="container mt-4">
        <b-container class="bv-example-row">
            <h3>{{ "Browsing r/" + subreddit }}</h3>
            <hr />
            <div v-if="!loadingError">
                <b-row
                    v-for="post in posts"
                    :key="post.getId"
                    class="mt-3 mb-3"
                >
                    <b-col cols="12">
                        <post :post="post"></post>
                    </b-col>
                </b-row>
            </div>
            <div v-else>
                <h2>We couldn't load posts :(</h2>
            </div>
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
    loadingError: boolean = false;

    async getPosts() {
        console.log("Fetching data");
        this.postsModuleInstance
            .requestPosts(this.$route.params.subreddit)
            .then(() => {
                this.loadingError = false;
                this.posts = this.postsModuleInstance.getPosts;
            })
            .catch(() => {
                this.loadingError = true;
                console.log("Error whilst fetching data");
            });
    }

    mounted() {
        this.getPosts();
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