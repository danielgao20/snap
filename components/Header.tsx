import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">SNAP</span>
        </Link>
      </header>
  );
}
