import axios from "axios";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { PostClass, PostInterface } from "~/types/Post";

@Module({
  name: "modules/PostsModule",
  stateFactory: true,
  namespaced: true
})
export default class PostsModule extends VuexModule {
  posts: PostInterface[] = [];

  @Mutation
  populatePosts(posts: PostInterface[]) {
    console.log("I was committed");

    this.posts = posts;
    console.log(posts);
  }

  get getPosts(): PostInterface[] {
    return this.posts;
  }

  @Action({ commit: "populatePosts" })
  async requestPosts(subreddit: string) {
    console.log("I was dispatched");

    const res = await axios.get(
      `https://www.reddit.com/r/${subreddit}/hot.json?limit=10`
    );

    // TODO error handling
    const posts = res.data.data.children.map((sub: any) => {
      return new PostClass(
        sub.data.id,
        sub.data.title,
        sub.data.url,
        sub.data.thumbnail,
        sub.data.selftext,
        sub.data.author
      );
    });

    console.log("Inside action:");
    console.log(posts);

    return posts;
  }
}
