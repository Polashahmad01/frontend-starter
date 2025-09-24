import * as z from "zod";

export const signInSchema = z.object({
  email: z.email("Invalid email format").toLowerCase(),
  password: z
    .string()
    .regex(/(?=.*[A-Z])/, "one uppercase letter")
    .regex(/(?=.*[a-z])/, "one lowercase letter")
    .regex(/(?=.*\d)/, "one number")
    .regex(/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/, "one special character")
    .min(8, "Password must be at least 8 characters long"),
});

export type SignInSchema = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  email: z.email("Invalid email format").toLowerCase(),
  password: z
    .string()
    .regex(/(?=.*[A-Z])/, "one uppercase letter")
    .regex(/(?=.*[a-z])/, "one lowercase letter")
    .regex(/(?=.*\d)/, "one number")
    .regex(/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/, "one special character")
    .min(8, "Password must be at least 8 characters long"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;

export const forgotPasswordSchema = z.object({
  email: z.email("Invalid email format").toLowerCase(),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
