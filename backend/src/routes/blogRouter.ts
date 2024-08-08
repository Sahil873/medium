import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { jwt, JwtVariables } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: JwtVariables;
}>();

// middleware
app.use("/*", async (c, next) => {
  const jwtMiddleware = jwt({
    secret: c.env.JWT_SECRET,
  });
  return jwtMiddleware(c, next);
});

app.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: c.get("jwtPayload").id, // from middleware
      },
    });
    return c.json({ blogId: blog.id });
  } catch (e) {
    return c.json({ error: "Unable to create post" }, 500);
  }
});

app.put("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const id = c.req.param("id");

  const blog = prisma.post.update({
    where: { id },
    data: { title: body.title, content: body.content },
  });

  return c.json({ msg: "Blog updated successfully" });
});

// todo pagination
app.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany();
    return c.json({ blogs });
  } catch (e) {
    return c.json({ error: "Failed to fetch blogs" }, 500);
  }
});

app.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const id = c.req.param("id");
    const blog = await prisma.post.findFirst({
      where: { id },
    });
    return c.json({ blog });
  } catch (e) {
    return c.json({ error: "Failed to fetch blog" }, 500);
  }
});

export default app;
