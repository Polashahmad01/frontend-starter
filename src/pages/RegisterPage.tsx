import { Link } from "react-router";
import { FaGoogle, FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoZap } from "react-icons/go";

export default function RegisterPage() {
  return (
    <section className="grid place-items-center h-full md:grid-cols-2">

      <div className="hidden md:block">
        <div className="bg-[#f3f3f3] rounded-3xl flex items-center justify-center px-4 py-4">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">

            <div className="p-4 border border-[#00000014] rounded-[20px] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img className="h-9 w-9 rounded-full" src="https://tattoo.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FreviewUser.b1603bfc.webp&w=96&q=75" alt="reviewUser" />
                <div className="flex flex-col">
                  <h6 className="text-sm">Ink Studio</h6>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-[13px]">I love this app! I use it to show my design team examples of concepts. 🔥🔥</p>
            </div>

            <div className="p-4 border border-[#00000014] rounded-[20px] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=350&fit=crop&crop=face" alt="reviewUser" />
                <div className="flex flex-col">
                  <h6 className="text-sm">Jacks Art</h6>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-[13px]">Very easy to use and quality product arrives quickly. Great value for the service.</p>
            </div>

            <div className="p-4 border border-[#00000014] rounded-[20px] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=350&fit=crop&crop=face" alt="reviewUser" />
                <div className="flex flex-col">
                  <h6 className="text-sm">Jacks Art</h6>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-[13px]">Very easy to use and quality product arrives quickly. Great value for the service.</p>
            </div>

            <div className="p-4 border border-[#00000014] rounded-[20px] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=350&fit=crop&crop=face" alt="reviewUser" />
                <div className="flex flex-col">
                  <h6 className="text-sm">Jacks Art</h6>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                    <svg className="w-4 h-4 text-warning-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-[13px]">Very easy to use and quality product arrives quickly. Great value for the service.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Register Area */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-20 h-20 mb-10 flex justify-center items-center rounded-2xl border border-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.2)] animate-pulse delay-100">
          <GoZap size={40} className="animate-pulse" />
        </div>
        <div className="text-center mb-4 lg:flex lg:justify-center">
          <h1 className="text-xl font-bold leading-none tracking-normal md:text-3xl lg:text-4xl lg:max-w-5/6 xl:text-5xl 2xl:text-6xl">Join millions of Happy Users</h1>
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
  );
}
