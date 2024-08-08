import { Hono } from "hono";
import userRouter from "./routes/userRouter";
import blogRouter from "./routes/blogRouter";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.get("*", (c) => {
  return c.text("PAGE NOT FOUND");
});

export default app;
