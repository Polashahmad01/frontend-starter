import { Link } from "react-router";
import { FaGoogle, FaApple, FaLock, FaEnvelope } from "react-icons/fa";
import { GoZap } from "react-icons/go";

export default function SignUpPage() {
  return (
    <section className="flex justify-center items-center h-screen">
      <article className="hidden md:flex md:justify-center md:items-center md:flex-1 bg-[#f3f3f3] h-full">
        <h1 className="text-5xl font-bold opacity-80">Sign Up Text</h1>
      </article>
      <article className="flex justify-center items-center flex-1 h-full">
        <div className="flex flex-col items-center w-5/6">
          <div className="w-20 h-20 flex justify-center items-center mb-8 rounded-2xl border border-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.2)] animate-pulse delay-100">
            <GoZap size={40} className="animate-pulse" />
          </div>
          <div className="mb-2">
            <h1 className="text-xl font-bold leading-none tracking-normal opacity-80 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Get Started
            </h1>
          </div>
          <div className="mb-6">
            <p className="text-base md:text-lg leading-normal text-[#404040] tracking-normal max-w-75">
              Sign up for free
            </p>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6" />
          <div className="flex flex-col gap-3 mb-6 xl:w-1/2">
            <button className="w-full cursor-pointer rounded-full px-6 py-2 flex items-center gap-4 bg-[#f3f3f3] hover:bg-[#fafafa]">
              <FaGoogle size={15} />
              <span>Sign in with Google</span>
            </button>
            <button className="w-full cursor-pointer rounded-full px-6 py-2 flex items-center gap-4 bg-[#f3f3f3] hover:bg-[#fafafa]">
              <FaApple size={20} />
              <span>Sign in with Apple</span>
            </button>
            <form className="flex flex-col gap-3">
              <div className="relative w-full">
                <FaEnvelope
                  className="absolute top-1/2 left-6 -translate-y-1/2"
                  size={16}
                />
                <input
                  type="email"
                  className="w-full border bg-[#f3f3f3] border-[#d4d4d4] rounded-full text-sm py-2 pl-14 pr-4 outline-0"
                  placeholder="E-mail"
                />
              </div>
              <div className="relative w-full">
                <FaLock
                  className="absolute top-1/2 left-6 -translate-y-1/2"
                  size={16}
                />
                <input
                  className="w-full border bg-[#f3f3f3] border-[#d4d4d4]  rounded-full text-sm py-2 pl-14 pr-4 outline-0"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="w-full">
                <button className="w-full cursor-pointer rounded-full px-6 py-2 flex items-center justify-center text-white opacity-80 bg-[#000000] transition-all duration-400 hover:bg-[#f3f3f3] hover:text-[#000000]">
                  Continue
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mb-4">
            <div className="flex gap-2">
              <p className="text-[#404040] font-light">
                Already have an account?
              </p>
              <Link className="text-[#404040] underline" to="/login">
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
