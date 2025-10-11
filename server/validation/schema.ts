import z from "zod";

export const loginUserSchema = z.object({
    email: z.email(),
    password: z.string().min(8, "Password must be 8 or more characters"),
});