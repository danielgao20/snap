import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          Built for peak mental performance. © {new Date().getFullYear()} SNAP.
        </p>
      </div>
    </footer>
  );
}
