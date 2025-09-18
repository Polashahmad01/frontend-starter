import * as z from "zod";

export const signInSchema = z.object({
  email: z.email("Invalid email format").toLowerCase(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/(?=.*[A-Z])/, "one uppercase letter")
    .regex(/(?=.*[a-z])/, "one lowercase letter")
    .regex(/(?=.*\d)/, "one number")
    .regex(/(?=.*[@$!%*?&])/, "one special character"),
});

export type SignInSchema = z.infer<typeof signInSchema>;
