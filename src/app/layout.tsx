import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English with Marcus | 1-on-1 Telephone English Lessons",
  description:
    "Build confidence and speak fluent English with personalised 1-on-1 telephone lessons. Trusted by 70+ students. Book your free trial call today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
