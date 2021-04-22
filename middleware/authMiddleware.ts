import { Middleware } from "@nuxt/types";

const authenticateUser: Middleware = context => {
  // Use context
  if (!confirm("Are you 18?")) {
    context.redirect("/");
  }
};

export default authenticateUser;
