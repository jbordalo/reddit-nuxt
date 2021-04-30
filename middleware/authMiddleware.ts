import { Middleware } from "@nuxt/types";

const authenticateUser: Middleware = context => {
  // Use context

  // if (!confirm("Are you 18?")) {
  //   context.redirect("/");
  // }
  const loggedIn = context.$auth.loggedIn;
  if (!loggedIn) {
    context.redirect("/login");
  }
};

export default authenticateUser;
