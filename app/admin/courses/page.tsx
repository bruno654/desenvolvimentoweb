import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate = 0;

async function deleteCourse(id: string) {
  try {
    await sql`DELETE from courses where id=${id}`;
    revalidatePath("/admin/course");
    console.log("Curso excluído com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir o curso:", error);
  }
}

export default async function ListCourse() {
  const { rows } = await sql`SELECT * from courses`;

  return (
    <div>
      <h1 className="text-center text-white">Lista de Cursos</h1>

      <table>
        <thead>
          <tr>
            <td>Título do Curso</td>
            <td>Descrição</td>
          </tr>
        </thead>
        <tbody>
          {rows.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    deleteCourse(course.id);
                  }}
                >
                  <input type="text" hidden name="id" value={course.id} />
                  <button type="submit">Excluir</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
