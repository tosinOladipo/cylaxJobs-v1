"use client";
import React, { useEffect } from "react";
import companylinks from "@/utils/data/companyLinks";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="h-screen w-fit fixed flex flex-col gap-4 pt-30">
      {companylinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <nav className="flex gap-3 px-4 py-3 bg-blue-50 items-center rounded-sm pr-12 text-sm">
            {link.icon} {link.label}
          </nav>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
