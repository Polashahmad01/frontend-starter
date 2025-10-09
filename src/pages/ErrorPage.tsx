import { Link, useRouteError } from "react-router";

interface RouteError {
  statusText?: string;
  message?: string;
  status?: number;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <section className="container mx-auto px-6 py-6 h-screen">
      <div className="grid place-items-center h-full">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <h1 className="text-xl font-bold leading-none tracking-normal opacity-80 md:text-3xl lg:text-4xl lg:max-w-5/6 xl:text-5xl 2xl:text-6xl">Something went wrong</h1>
          </div>
          <div className="mb-2">
            <h2 className="text-sm font-bold leading-tight tracking-normal sm:text-base md:text-xl opacity-80">Please try again later.</h2>
          </div>
          <div className="mb-4">
            <p className="text-[13px] leading-tight text-red-500 tracking-normal max-w-72 sm:max-w-80 md:max-w-112 sm:text-sm md:text-base">
              {error?.statusText || error?.message}
            </p>
          </div>
          <Link
              to="/app"
              className="text-[13px] sm:text-sm cursor-pointer rounded-full px-6 py-2 flex items-center justify-center gap-4 bg-[#f3f3f3] hover:bg-[#fafafa]"
            >
              Home
            </Link>
        </div>
      </div>
    </section>
  );
}
