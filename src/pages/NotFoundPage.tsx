import { Link } from "react-router";
import { NotFoundPageProps } from "../types/NotFound";

export default function NotFoundPage({
  errorCode = "404",
  title = "Innovation Not Found!",
  message = "This page seems to be still in development. Our engineering team is probably working on something amazing here!",
  links = [
    {
      label: "Take Me Home",
      href: "/app"
    },
    {
      label: "Go Back",
      href: "../"
    }
  ]
}: NotFoundPageProps) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center text-center px-6 max-w-2xl">
        <div className="mb-2">
          <h1 className="text-3xl font-bold leading-tight tracking-normal sm:text-4xl md:text-5xl lg:text-7xl">{errorCode}</h1>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold leading-tight tracking-normal sm:text-xl md:text-2xl lg:text-3xl">{title}</h2>
        </div>
        <div className="mb-6">
          <p className="text-base leading-tight tracking-normal sm:text-lg">{message}</p>
        </div>
    
        <div className="flex gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-base leading-tight tracking-normal py-2.5 px-4 border rounded-lg hover:bg-black hover:text-white transition-colors duration-200 ease-in-out"
              >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
