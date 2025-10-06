import React, { Suspense } from "react";
import PageLoader from "./PageLoader";

export default function LazyWrapper({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>
}
