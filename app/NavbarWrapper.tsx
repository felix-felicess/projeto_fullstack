"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Rotas onde a navbar NÃO aparece
  const hideOn = ["/login", "/register"];

  if (hideOn.includes(pathname)) {
    return null;
  }

  return <Navbar />;
}
