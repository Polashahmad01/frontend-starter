export interface NotFoundPageProps {
  errorCode: string;
  title: string;
  message: string;
  links: {
    label: string;
    href: string;
  }[];
}
