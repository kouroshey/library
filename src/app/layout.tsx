import type { Metadata } from "next";
import "@/style/globals.css";
import { vazir } from "@/fonts/vazir/vazir";

export const metadata: Metadata = {
  title: "کتابخانه مجازی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body className={`${vazir.variable}`}>{children}</body>
    </html>
  );
}
