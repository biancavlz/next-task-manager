import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Manager",
  description: "A simple task management application",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Browser extensions (e.g. ColorZilla) add attributes to <body> before hydration */}
      <body suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
