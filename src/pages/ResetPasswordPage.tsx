import { Link } from "react-router";
import { GoZap } from "react-icons/go";
import { FaLock } from "react-icons/fa";
import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, ResetPasswordSchema } from "../schemas/auth";
import { useInput } from "../hooks/useInput";
import { useResetPassword } from "../hooks/useResetPassword";

export default function ResetPasswordPage() {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const { resetPasswordPending, resetPasswordMutation } = useResetPassword();
  const { inputType, toggleInputType } = useInput("password");
  const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      token: token || "",
      password: "",
      confirmPassword: "",
    }
  });

  const onSubmit = (formData: ResetPasswordSchema) => {
    resetPasswordMutation(formData);
  };

  return (
    <section className="flex justify-center items-center h-screen py-6 sm:py-0">
      <article className="hidden md:flex md:justify-center md:items-center md:flex-1 bg-[#f3f3f3] h-full">
        <h1 className="text-5xl font-bold opacity-80">Reset Password</h1>
      </article>
      <article className="flex justify-center items-center flex-1 h-full">
        <div className="flex flex-col items-center w-5/6">
          <div className="w-20 h-20 flex justify-center items-center mb-8 rounded-2xl border border-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.2)] animate-pulse delay-100">
            <GoZap size={40} className="animate-pulse" />
          </div>
          <div className="mb-4">
            <h1 className="text-xl font-bold leading-none tracking-normal opacity-80 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Reset Password
            </h1>
          </div>
          <div className="mb-6">
            <p className="text-base text-center md:text-lg leading-normal text-[#404040] tracking-normal max-w-75">
              Please enter a new password for your account.
            </p>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6" />
          <div className="flex flex-col gap-3 mb-6 xl:w-1/2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <div className="relative w-full">
                <FaLock
                  className="absolute top-1/2 left-6 -translate-y-1/2"
                  size={16}
                />
                <input
                  placeholder="New Password"
                  className="w-full border bg-[#f3f3f3] border-[rgba(212,212,212,0.6)]  rounded-full text-sm py-2 pl-14 pr-4 outline-0"
                  {...register("password")}
                  type={inputType}
                  onFocus={() => toggleInputType()}
                  onBlur={() => toggleInputType()}
                />
              </div>
              {errors.password && (
                <p className="self-end text-xs -mt-2 text-red-500">
                  {errors.password.message}
                </p>
              )}
              <div className="relative w-full">
                <FaLock
                  className="absolute top-1/2 left-6 -translate-y-1/2"
                  size={16}
                />
                <input
                  className="w-full border bg-[#f3f3f3] border-[rgba(212,212,212,0.6)]  rounded-full text-sm py-2 pl-14 pr-4 outline-0"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  type={inputType}
                  onFocus={() => toggleInputType()}
                  onBlur={() => toggleInputType()}
                />
              </div>
              {errors.confirmPassword && (
                <p className="self-end text-xs -mt-2 text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
              <div className="w-full">
                <button
                  disabled={resetPasswordPending}
                  className="w-full cursor-pointer rounded-full px-6 py-2 flex items-center justify-center text-white opacity-80 bg-[#000000] transition-all duration-400 hover:bg-[#f3f3f3] hover:text-[#000000] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resetPasswordPending ? "Updating Password..." : "Update Password"}
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mb-4">
            <div className="flex gap-2">
              <p className="text-[#404040] font-light">
                Already have an account?
              </p>
              <Link className="text-[#404040] underline" to="/sign-in">
                Sign In
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center text-center">
            <p className="text-xs font-extralight leading-normal tracking-normal text-[rgba(135,135,135,1)]">
              By continuing, you agree to FrontEnd Starter’s
              <br />
              <Link
                to="/terms-of-use"
                className="underline text-[rgba(0,0,0,1)]"
              >
                Terms of Use.
              </Link>{" "}
              Read our{" "}
              <Link
                to="/privacy-policy"
                className="underline text-[rgba(0,0,0,1)]"
              >
                Privacy Policy.
              </Link>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
