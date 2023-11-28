import UploadButton from "@/app/components/UploadButton";
import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export const revalidate = 0;

export default function NewCourse({
  searchParams,
}: {
  searchParams?: {
    url?: string;
  };
}) {
  const urlImage = searchParams?.url || '';

  async function saveCourse(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    try {
      // Executa a inserção no banco de dados
      await sql`INSERT INTO courses (title, description, url) VALUES(${title}, ${description}, ${urlImage})`;
      console.log("Curso salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar o curso:", error);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await saveCourse(formData);
  }

  return (
    <div>
      <h1 className="text-white text-center text-4xl">Cadastrar Cursos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Digite o Título do Curso" /><br /><br />
        <input type="text" name="description" placeholder="Digite a Descrição do curso" /> <br /><br />
        <br />
        <UploadButton />
        <button type="submit" className="text-white">Salvar</button>
      </form>
    </div>
  );
}
