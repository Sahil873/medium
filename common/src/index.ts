// zod validations
import z from "zod";

export const signupInput = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "email is incorrect" }),
  password: z.string().min(6, { message: "password is too short" }),
});

export const signinInput = z.object({
  email: z.string().email({ message: "email is incorrect" }),
  password: z.string().min(6, { message: "password is too short" }),
});

export const blogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type BlogInput = z.infer<typeof blogInput>;
