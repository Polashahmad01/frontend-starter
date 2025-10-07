import { useLocation } from "react-router"
import { useForm } from "react-hook-form";
import { FaHockeyPuck } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyEmailSchema, VerifyEmailSchema } from "../schemas";
import { useVerifyEmail } from "../hooks/useVerifyEmail";

export default function VerifyEmailPage() {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const { register, handleSubmit, formState: { errors } } = useForm<VerifyEmailSchema>({
    resolver: zodResolver(verifyEmailSchema),
    mode: "onChange",
    defaultValues: {
      token: token || "",
    }
  });
  const { isVerifyEmailPending, verifyEmailMutation } = useVerifyEmail();

  const onSubmit = (formData: VerifyEmailSchema) => {
    verifyEmailMutation(formData.token);
  };

  return (
    <section className="flex justify-center items-center h-screen py-6 sm:py-0">
      <article className="hidden md:flex md:justify-center md:items-center md:flex-1 bg-[#f3f3f3] h-full">
        <h1 className="text-5xl font-bold opacity-80">Verify Email</h1>
      </article>
      <article className="flex justify-center items-center flex-1 h-full">
        <div className="flex flex-col items-center w-5/6">
          <div className="mb-2">
            <h1 className="text-xl font-bold leading-none tracking-normal opacity-80 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Verify Your Email
            </h1>
          </div>
          <div className="mb-6">
            <p className="text-base md:text-lg leading-normal text-[#404040] tracking-normal max-w-75">
              Verify your email to continue
            </p>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="relative w-full">
              <FaHockeyPuck
                className="absolute top-1/2 left-6 -translate-y-1/2"
                size={15}
              />
              <input
                id="token"
                autoComplete="on"
                type="text"
                placeholder="Token"
                className="w-full border bg-[#f3f3f3] border-[rgb(212,212,212,0.6)]  rounded-full text-sm py-2 pl-14 pr-4 outline-0"
                {...register("token")}
              />
            </div>
            {errors.token && (
              <p className="self-end text-xs -mt-2 text-red-500">
                {errors.token.message}
              </p>
            )}
            <button
              disabled={isVerifyEmailPending}
              className="w-full cursor-pointer rounded-full px-6 py-2 flex items-center justify-center text-white opacity-80 bg-[#000000] transition-all duration-400 hover:bg-[#f3f3f3] hover:text-[#000000] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isVerifyEmailPending ? "Verifying..." : "Verify"}
            </button>
          </form>
        </div>
      </article>
    </section>
  )
}
