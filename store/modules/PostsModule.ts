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
    console.log("mutation: populating posts");

    this.posts.push(...posts);
    console.log(`posts: ${this.posts.length}`);
  }

  @Mutation
  clearPosts() {
    console.log("mutation: clearing posts");
    this.posts = [];
  }

  get getPosts(): PostInterface[] {
    return this.posts;
  }

  @Action({ commit: "clearPosts" })
  requestClearPosts() {
    console.log("action: clearing posts");
    return;
  }

  @Action({ commit: "populatePosts" })
  async requestPosts(subreddit: string) {
    console.log("action: populating posts");

    let id;
    if (this.posts.length === 0) {
      id = "";
    } else {
      id = this.posts[this.posts.length - 1].getId;
    }

    const url = `https://www.reddit.com/r/${subreddit}/hot.json?limit=10&after=t3_${id}`;

    console.log("Making request to " + url);

    const res = await axios.get(url);

    // TODO error handling
    let posts;
    try {
      posts = res.data.data.children.map((sub: any) => {
        return new PostClass(
          sub.data.id,
          sub.data.title,
          sub.data.url,
          sub.data.thumbnail,
          sub.data.selftext,
          sub.data.author
        );
      });
    } catch (error) {
      console.log("Error fetching data.");
    }

    // console.log(posts);

    return posts;
  }
}
