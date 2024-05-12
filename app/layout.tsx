import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import NavBar from "@/components/navbar/navbar";
import { Suspense } from "react";
import { Skeleton } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RageQuit Games",
  description: "Embrace the Rage, Chase the Win!"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Skeleton />}>
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <NavBar />
            {children}
          </AppRouterCacheProvider>
        </body>
      </Suspense>
    </html>
  );
}
