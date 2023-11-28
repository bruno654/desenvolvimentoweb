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
    // Remova a string "use server" - não é necessária no código
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    await sql`INSERT INTO courses (title, description, url) VALUES(${title}, ${description}, ${urlImage})`;
    console.log("Acessou a função");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    const formData = new FormData(event.currentTarget);
    await saveCourse(formData);
  }

  return (
    <div>
      <h1 className="text-white text-center text-4xl">Cadastrar Cursos</h1>
      <form onSubmit={handleSubmit}> {/* Adicione o evento onSubmit para chamar a função de salvar */}
        <input type="text" name="title" placeholder="Digite o Título do Curso" /><br /><br />
        <input type="text" name="description" placeholder="Digite a Descrição do curso" /> <br /><br />
        <br />
        <UploadButton />
        <button type="submit" className="text-white">Salvar</button> {/* Adicione type="submit" para submeter o formulário */}
      </form>
    </div>
  );
}
