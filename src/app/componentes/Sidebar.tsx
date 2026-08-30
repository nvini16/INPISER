import Link from "next/link";

type SidebarProps = {
  titulo: string;
};

const links = [
  { nome: "Dashboard", rota: "/dashboard" },
  { nome: "Calendário", rota: "/calendario" },
  { nome: "Automações", rota: "/automacoes" },
  { nome: "Insights", rota: "/insights" },
];

export default function Sidebar({ titulo }: SidebarProps) {
  return (
    <aside className="min-h-screen w-64 border-r border-green-900 bg-black p-4">
      <h1 className="text-center text-xl font-bold text-green-400">
        {titulo}
      </h1>

      <nav className="mt-8 flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.rota}
            href={link.rota}
            className="block rounded p-2 text-gray-300 hover:bg-green-900"
          >
            {link.nome}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
