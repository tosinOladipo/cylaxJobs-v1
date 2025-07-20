"use client";
import React, { Children } from "react";
import Sidebar from "./_components/Sidebar";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/container";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useSelector((state: RootState) => state.user);

  return user ? (
    <section className="container mx-auto grid lg:grid-cols-6 gap-4 h-screen">
      <aside className="col-span-1">
        <Sidebar />
      </aside>
      <article className="col-span-5 pt-30 px-6 bg-gray-50">
        <div className="bg-red-200 rounded-xs"></div>
        <article className="flex flex-col gap-2">{children}</article>
        <footer className="text-center mt-20 pb-10 text-xs text-gray-500">
          All rights reserved. Cylax 2025
        </footer>
      </article>
    </section>
    
  ) : (
    <section className="h-screen flex flex-col items-center justify-center">
      <Container>
      <div className="px-4 py-2 mb-4 bg-red-50 flex items-center justify-between text-red-500 text-sm">
        <p className="font-medium">
          You have not created a profile, your account is not activated yet.
        </p>
        <Button
          asChild
          size="sm"
          className="bg-red-700 text-white text-xs capitalize p-2 rounded-sm"
        >
          <Link href="/profile">Create profile</Link>
        </Button>
      </div>
      </Container>
    </section>
  );


}

export default DashboardLayout;
