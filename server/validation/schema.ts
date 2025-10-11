import z from "zod";

export const loginUserSchema = z.object({
    email: z.email(),
    password: z.string().min(8, "Password must be 8 or more characters"),
});

export const registerUserSchema = z.object({
    name: z.string().min(3, "Name must be 3 or more characters"),
    email: z.email(),
    password: z.string().min(8, "Password must be 8 or more characters"),
});