import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="container mx-auto px-6 py-6 h-screen">
      <div className="grid place-items-center h-full">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <h1 className="text-xl font-bold leading-none tracking-normal opacity-80 md:text-3xl lg:text-4xl lg:max-w-5/6 xl:text-5xl 2xl:text-6xl">404</h1>
          </div>
          <div className="mb-2">
            <h2 className="text-sm font-bold leading-tight tracking-normal sm:text-base md:text-xl opacity-80">Innovation Not Found!</h2>
          </div>
          <div className="mb-4">
            <p className="text-[13px] leading-tight tracking-normal max-w-72 sm:max-w-80 md:max-w-112 sm:text-sm md:text-base">
              This page seems to be still in development. Our engineering team is probably working on something amazing here!
            </p>
          </div>
          <div className="flex gap-4 w-full sm:w-2/3">
            <Link
              to="/app"
              className="text-[13px] sm:text-sm w-full cursor-pointer rounded-full px-6 py-2 flex items-center justify-center gap-4 bg-[#f3f3f3] hover:bg-[#fafafa]"
            >
              Home
            </Link>
            <Link
              to="../"
              className="text-[13px] sm:text-sm w-full cursor-pointer rounded-full px-6 py-2 flex items-center justify-center gap-4 bg-[#f3f3f3] hover:bg-[#fafafa]"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
