import type { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

import MainErrorFallback from "@/components/errors/main";

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
