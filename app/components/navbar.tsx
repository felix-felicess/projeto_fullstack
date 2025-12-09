'use client';
import { signOut } from "next-auth/react";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-600 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Anotações
      </Link>
      <Link className="bg-white p-2" href={"/addTopic"}>
        Adicionar
      </Link>
      <Link className="bg-red-500 text-white font-bold px-6 py-2 mt-3" href={"/login"}>
      Sair
      </Link>
    </nav>
  );
}
