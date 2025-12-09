import EditTopicForm from "@/app/components/EditTopicForm";

const getTopicById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Erro ao carregar o tópico");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await getTopicById(id);

  if (!data) return <div>Erro ao carregar tópico</div>;

  const { topic } = data;
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
