import { Link } from "react-router";
import { FaGoogle, FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoZap } from "react-icons/go";

export default function RegisterPage() {
  return (
    <>
      <section className="grid place-items-center h-full">
        <div className="flex flex-col items-center justify-center">
          <div className="w-20 h-20 mb-10 flex justify-center items-center rounded-2xl border border-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.2)]">
            <GoZap size={40} className="animate-pulse" />
          </div>
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold leading-tight tracking-normal">Join millions of Happy Users</h1>
          </div>
          <div className="text-center mb-4">
            <p className="text-base leading-normal tracking-normal max-w-75">Your data is safe with us, and you’ll never receive spam.</p>
          </div>
          <div className="text-center mb-4">
            <p className="text-base leading-tight tracking-normal">Continue with one of these:</p>
          </div>
          <div className="flex flex-col gap-3 mb-4">
            <button className="w-full cursor-pointer rounded-full px-6 py-2 flex items-center gap-4 bg-[#f3f3f3] hover:bg-[#fafafa]">
              <FaGoogle size={15} />
              <span>Sign in with Google</span>
            </button>
            <button className="w-full cursor-pointer rounded-full px-6 py-2 flex items-center gap-4 bg-[#f3f3f3] hover:bg-[#fafafa]">
              <FaApple size={20} />
              <span>Sign in with Apple</span>
            </button>
            <button className="w-full cursor-pointer rounded-full px-6 py-2 flex items-center gap-4 bg-[#f3f3f3] hover:bg-[#fafafa]">
              <MdEmail size={17} />
              <span>Continue with Email</span>
            </button>
          </div>
          <div className="text-center">
            <p className="text-xs font-extralight leading-normal tracking-normal text-[rgba(135,135,135,1)]">
              By continuing, you agree to FrontEnd Starter’s 
              <br/>
              <Link to="#" className="underline text-[rgba(0,0,0,1)]">Terms of Use.</Link> Read our <Link to="#" className="underline text-[rgba(0,0,0,1)]">Privacy Policy.</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
