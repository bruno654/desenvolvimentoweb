import UploadButton from "@/app/components/UploadButton";
import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export const revalidate =0

export default function NewCourse({
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){
    
    const urlImage = searchParams?.url || '';

    async function saveCourse(formData: FormData){
        "use server"
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        await sql`INSERT INTO courses (title, description,url) VALUES(${title}, ${description}, ${urlImage})`
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className="text-white text-center text-4xl">Cadastrar Cursos</h1>
            <form>
                <input type="text" name="title" placeholder="Digite o Título do Curso"/><br/><br/>
                <input type="text" name="description" placeholder="Digite a Descriçao do curso"/> <br/><br/>
                <br/>
                <UploadButton />
                <button formAction={saveCourse} className="text-white">Salvar</button>
            </form>
        </div>

    )
}