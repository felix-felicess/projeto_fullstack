import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

// Tipagem do tópico
interface Topic {
  _id: string;
  title: string;
  description: string;
}

// Tipagem do retorno da API
interface TopicsResponse {
  topics: Topic[];
}

const getTopics = async (): Promise<TopicsResponse> => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Falha ao carregar tópicos");
    }

    return res.json();
  } catch (error) {
    console.log("Erro ao carregar tópicos:", error);
    return { topics: [] }; // fallback seguro
  }
};

export default async function   TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
