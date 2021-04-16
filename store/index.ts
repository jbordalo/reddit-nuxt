import Vuex from "vuex";
// import { initialiseStores } from "../utils/store-accessor";
// const initializer = (store: Store<any>) => initialiseStores(store);
// export const plugins = [initializer];
// export * from "../utils/store-accessor";
import PostsModule from "./modules/PostsModule";

export function createStore() {
  return new Vuex.Store({
    modules: {
      PostsModule
    }
  });
}
