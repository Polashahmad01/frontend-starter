import { lazy } from "react";
import LazyWrapper from "../components/LazyWrapper";
import { RouteConfig } from "../types";

// Lazy load components for better performance
const TermsOfUsePage = lazy(() => import("../pages/TermsOfUsePage"));
const PrivacyPolicyPage = lazy(() => import("../pages/PrivacyPolicyPage"));

const legalRoutes: RouteConfig[] = [
  {
    path: "/terms-of-use",
    element: (
      <LazyWrapper>
        <TermsOfUsePage />
      </LazyWrapper>
    ),
    title: "Terms of Use",
    description: "Terms and conditions",
  },
  {
    path: "/privacy-policy",
    element: (
      <LazyWrapper>
        <PrivacyPolicyPage />
      </LazyWrapper>
    ),
    title: "Privacy Policy",
    description: "Privacy policy and data handling",
  },
];

export default legalRoutes;