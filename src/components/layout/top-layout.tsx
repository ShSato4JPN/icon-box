import type { ReactNode } from "react";

import Footer from "../Footer";
import Header from "../Header";

type TopLayoutProps = {
  children: ReactNode;
};

export default function TopLayout({ children }: TopLayoutProps) {
  return (
    <div className="w-dvw h-dvh">
      <div className="size-full grid grid-rows-[auto_1fr_auto]">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
