import Link from 'next/link';

export default function Admin() {
  return (
    <div>
      <h1 className="text-center text-xl">Área Administrativa</h1>

      <Link href="/admin/course">
        <a>Listar Curso</a>
      </Link>
      <Link href="/admin/course/new">
        <a>Cadastrar Curso</a>
      </Link>
    </div>
  );
}
