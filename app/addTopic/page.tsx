"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Erro ao criar topico");
      }
    } catch (error) {
      console.error("POST error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Titulo"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Descrição"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Criar tópico
      </button>
    </form>
  );
}
