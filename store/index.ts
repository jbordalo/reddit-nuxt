import Vuex from "vuex";
import PostsModule from "./modules/PostsModule";

export function createStore() {
  return new Vuex.Store({
    modules: {
      PostsModule
    }
  });
}
