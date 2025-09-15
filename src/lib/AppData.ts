import { CustomerTestimonialProps, NotFoundPageProps } from "../types/NotFound";

export const notFoundPagePropsData: NotFoundPageProps = {
  errorCode: "404",
  title: "Innovation Not Found!",
  message:
    "This page seems to be still in development. Our engineering team is probably working on something amazing here!",
  links: [
    {
      label: "Home",
      href: "/app",
    },
    {
      label: "Go Back",
      href: "../",
    },
  ],
};

export const testimonials: CustomerTestimonialProps[] = [
  {
    title: "Sophia Carter",
    rating: 5,
    testimonial:
      "Absolutely love the result! The design came out better than I imagined, and the whole process was super smooth.",
  },
  {
    title: "Liam Johnson",
    rating: 4,
    testimonial:
      "Very satisfied overall. The detail in the work is impressive, though I wish the turnaround was a bit faster.",
  },
  {
    title: "Olivia Martinez",
    rating: 5,
    testimonial:
      "Exceeded my expectations! I get compliments all the time and couldn’t be happier with my experience.",
  },
];

export const moreTestimonials: CustomerTestimonialProps[] = [
  {
    title: "Harper Green",
    rating: 5,
    testimonial:
      "Such a wonderful experience! Everything was easy from start to finish, and I’m thrilled with the results.",
  },
  {
    title: "James Miller",
    rating: 4,
    testimonial:
      "Very professional service. The design came out great, although I wish I had more preview options.",
  },
  {
    title: "Ella Anderson",
    rating: 5,
    testimonial:
      "Absolutely fantastic! The creativity really shines, and the outcome was even better than I hoped.",
  },
];
