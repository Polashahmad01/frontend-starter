import { Link } from "react-router";
import { NotFoundPageProps } from "../types";

export default function NotFoundPage({
  errorCode = "404",
  title = "Innovation Not Found!",
  message = "This page seems to be still in development. Our engineering team is probably working on something amazing here!",
  links = [
    {
      label: "Home",
      href: "/app",
    },
    {
      label: "Go Back",
      href: "../",
    },
  ],
}: NotFoundPageProps) {
  return (
    <section className="container mx-auto px-6 py-6 h-screen">
      <div className="grid place-items-center h-full">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <h1 className="text-xl font-bold leading-none tracking-normal opacity-80 md:text-3xl lg:text-4xl lg:max-w-5/6 xl:text-5xl 2xl:text-6xl">
              {errorCode}
            </h1>
          </div>
          <div className="mb-2">
            <h2 className="text-sm font-bold leading-tight tracking-normal sm:text-base md:text-xl opacity-80">
              {title}
            </h2>
          </div>
          <div className="mb-4">
            <p className="text-[13px] leading-tight tracking-normal max-w-72 sm:max-w-80 md:max-w-112 sm:text-sm md:text-base">
              {message}
            </p>
          </div>
          <div className="flex gap-4 w-full sm:w-2/3">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[13px] sm:text-sm w-full cursor-pointer rounded-full px-6 py-2 flex items-center justify-center gap-4 bg-[#f3f3f3] hover:bg-[#fafafa]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
