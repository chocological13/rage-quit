import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import NavBar from "@/components/navbar/navbar";
import { Suspense } from "react";
import { Skeleton } from "@mui/material";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "RageQuit Games",
  description: "Embrace the Rage, Chase the Win!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Skeleton />}>
        <body className={` selection:bg-ragered selection:text-white`}>
          <AppRouterCacheProvider>
            <NavBar />
            {children}
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </Suspense>
    </html>
  );
}
