import { NotFoundPageProps } from "../types/NotFound";

export const notFoundPagePropsData: NotFoundPageProps = {
  errorCode: "404",
  title: "Innovation Not Found!",
  message: "This page seems to be still in development. Our engineering team is probably working on something amazing here!",
  links: [
    {
      label: "Take Me Home",
      href: "/app"
    },
    {
      label: "Go Back",
      href: "../"
    }
  ]
}
