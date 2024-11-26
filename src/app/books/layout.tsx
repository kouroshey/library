import type { Metadata } from "next";
import "@/style/globals.css";

export const metadata: Metadata = {
  title: "online library",
};

export default function BooksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center w-full">{children}</div>
  );
}
