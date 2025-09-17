export interface NotFoundPageProps {
  errorCode: string;
  title: string;
  message: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface CustomerTestimonialProps {
  title: string;
  rating: number;
  testimonial: string;
}
