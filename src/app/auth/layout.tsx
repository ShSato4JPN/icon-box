import TopLayout from "@/components/layout/top-layout";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TopLayout>{children}</TopLayout>;
}
