import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "./_components/Header";
import Providers from "./provider/provider";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { fetchUserInfo } from "@/utils/actions/users/actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cylax AI job platform",
  description: "AI-powered platform helps HR teams do more with less",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['user'],
    queryFn: () => fetchUserInfo(),
  });

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Providers>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <Header />
            </HydrationBoundary>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
