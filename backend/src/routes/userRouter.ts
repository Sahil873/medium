import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinInput, signupInput } from "@sahil873/medium-common";
import { Hono } from "hono";
import { sign } from "hono/jwt";

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

  const res = signupInput.safeParse(body);
  if (!res.success) {
    const errors = res.error.format();
    // const emailError = errors.email?._errors[0];
    // const passwordError = errors.password?._errors[0];
    // const nameError = errors.name?._errors[0];
    return c.json({ error: errors }, 403);
  }

  const dbUser = await prisma.user.findUnique({
    where: {
      email: res.data.email,
    },
  });

  if (dbUser) {
    return c.json({ error: "User exists in db" }, 403);
  }

  const user = await prisma.user.create({
    data: {
      email: res.data.email,
      password: res.data.password,
      name: res.data.name,
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
  const res = signinInput.safeParse(body);
  if (!res.success) {
    return c.json({ error: res.error.errors }, 403);
  }

  const user = await prisma.user.findFirst({
    where: {
      email: res.data.email,
      password: res.data.password,
    },
  });

  if (!user) {
    return c.json({ error: "User does not exist in db" }, 403);
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
});

export default app;
