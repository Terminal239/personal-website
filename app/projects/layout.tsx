import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of the projects that I have created over the years",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
