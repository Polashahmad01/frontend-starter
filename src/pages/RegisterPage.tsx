import { FaGoogle, FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoZap } from "react-icons/go";

export default function RegisterPage() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center container mx-auto px-6">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[rgba(0,0,0,0.2)] border border-[rgba(0,0,0,0.2)] mb-6">
          <GoZap size={40} className="animate-pulse" />
        </div>
        <div className="text-center mb-4">
          <h1 className="font-bold leading-tight tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Join millions of Happy Users</h1>
        </div>
        <div className="text-center mb-4">
          <p className="text-base leading-tight tracking-normal sm:text-lg">Your data is safe with us, and you’ll never receive spam.</p>
        </div>
        <div className="text-center mb-4">
          <p className="text-base leading-tight tracking-normal sm:text-lg">Continue with one of these:</p>
        </div>
        <div className="flex flex-col items-center gap-3 mb-4">
          <button className="flex items-center gap-4 bg-[rgba(243,243,243,1)] rounded-full px-6 py-2 w-full cursor-pointer hover:bg-[rgba(250,250,250,1)]">
            <FaGoogle size={15} />
            <span className="text-base leading-tight tracking-normal text-[rgba(0,0,0,1)]">Sign in with Google</span>
          </button>
          <button className="flex items-center gap-4 bg-[rgba(243,243,243,1)] rounded-full px-6 py-2 w-full cursor-pointer hover:bg-[rgba(250,250,250,1)]">
            <FaApple size={20} />
            <span className="text-base leading-tight tracking-normal text-[rgba(0,0,0,1)]">Sign in with Apple</span>
          </button>
          <button className="flex items-center gap-4 bg-[rgba(243,243,243,1)] rounded-full px-6 py-2 w-full cursor-pointer hover:bg-[rgba(250,250,250,1)]">
            <MdEmail size={15} />
            <span className="text-base leading-tight tracking-normal text-[rgba(0,0,0,1)]">Continue with Email</span>
          </button>
        </div>
        <div className="text-center">
          <p className="text-xs leading-tight tracking-normal">By continuing, you agree to Backend Starter’s Terms of Use. Read our Privacy Policy</p>
        </div>
      </div>
    </section>
  );
}
