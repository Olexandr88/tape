"use client";

import { ThemeSwitcherExpanded } from "@tape.xyz/winder";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-[100px] items-center justify-between border-custom border-b bg-site/60 p-6 backdrop-blur-md md:border-x">
      <Link href="/winder" prefetch={false}>
        <h1 className="font-semibold font-serif text-xl leading-5">Winder</h1>
        <span className="text-muted text-sm">brand & design system</span>
      </Link>
      <ThemeSwitcherExpanded id="winder-header" />
    </nav>
  );
};