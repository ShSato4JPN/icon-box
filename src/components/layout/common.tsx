import type { ReactNode } from "react";

import Footer from "../Footer";
import Header from "../Header";

type CommonLayoutProps = {
  children: ReactNode;
};

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
