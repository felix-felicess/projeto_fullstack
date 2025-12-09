"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface EditTopicFormProps {
  id: string;
  title: string;
  description: string;
}

export default function EditTopicForm({
  id,
  title,
  description,
}: EditTopicFormProps) {

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newTitle, newDescription }),
    });

    router.refresh();
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="border border-slate-500 px-8 py-2"
        type="text"
      />

      <input
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="border border-slate-500 px-8 py-2"
        type="text"
      />

      <button type="submit" className="cursor-pointer bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Atualizar tópico
      </button>
    </form>
  );
}
