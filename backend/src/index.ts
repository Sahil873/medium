import { Hono } from "hono";
import userRouter from "./routes/userRouter";
import blogRouter from "./routes/blogRouter";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use(
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT"],
  })
);

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.get("*", (c) => {
  return c.text("PAGE NOT FOUND");
});

export default app;
