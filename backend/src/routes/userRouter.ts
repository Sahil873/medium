import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const dbUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (dbUser) {
    return c.json({ error: "User exists in db" }, 403);
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      name: body.name,
    },
  });

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
});

app.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    return c.json({ error: "User does not exist in db" }, 403);
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
});

export default app;
