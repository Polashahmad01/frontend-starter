import { Link } from "react-router";
import { FaGoogle, FaEnvelope } from "react-icons/fa";
import { GoZap } from "react-icons/go";
import { useSignInWithGoogle } from "../hooks/useSignInWithGoogle";

export default function JoinPage() {
  const { isSignInWithGoogleLoading, signInWithGooglePopup } = useSignInWithGoogle();

  return (
    <section className="flex justify-center items-center h-screen py-6 sm:py-0">
      <article className="hidden md:flex md:justify-center md:items-center md:flex-1 bg-[#f3f3f3] h-full">
        <h1 className="text-xl font-bold leading-none tracking-normal opacity-80 md:text-3xl lg:text-4xl lg:max-w-5/6 xl:text-5xl 2xl:text-6xl">
          Join Text
        </h1>
      </article>
      <article className="flex justify-center items-center flex-1 h-full">
        <div className="flex flex-col items-center w-5/6">
          <div className="w-20 h-20 flex justify-center items-center mb-8 rounded-2xl border border-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.2)] animate-pulse delay-100">
            <GoZap size={40} className="animate-pulse" />
          </div>
          <div className="text-center mb-4 lg:flex lg:justify-center">
            <h1 className="text-xl font-bold leading-none tracking-normal opacity-80 md:text-3xl lg:text-4xl lg:max-w-5/6 xl:text-5xl 2xl:text-6xl">
              Join millions of Happy Users
            </h1>
          </div>
          <div className="text-center mb-2">
            <p className="text-base leading-normal tracking-normal max-w-75">
              Your data is safe with us, and you’ll never receive spam.
            </p>
          </div>
          <div className="text-center mb-6">
            <p className="text-base leading-tight tracking-normal">
              Continue with one of these:
            </p>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6" />
          <div className="flex flex-col gap-3 mb-6 xl:w-1/2">
            <button
              onClick={signInWithGooglePopup}
              disabled={isSignInWithGoogleLoading}
              className="w-full cursor-pointer rounded-full px-6 py-2 flex items-center justify-center bg-[#f3f3f3] hover:bg-[#fafafa] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center gap-4">
                <FaGoogle size={15} />
                <span>{isSignInWithGoogleLoading ? "Signing In..." : "Sign in with Google"}</span>
              </div>
            </button>
            <Link
              to="/sign-up"
              className="w-full cursor-pointer rounded-full px-6 py-2 flex items-center justify-center bg-[#f3f3f3] hover:bg-[#fafafa]"
            >
              <div className="flex items-center gap-4">
                <FaEnvelope size={16} />
                <span>Continue with Email</span>
              </div>
            </Link>
          </div>
          <div className="text-center">
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
