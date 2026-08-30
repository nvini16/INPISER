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
    <aside className="min-h-screen w-64 border-r border-inpiser-green-dark bg-inpiser-black p-4">
      <h1 className="text-center text-xl font-bold text-inpiser-green">
        {titulo}
      </h1>

      <nav className="mt-8 flex flex-col gap-2" aria-label="Navegação principal">
        {links.map((link) => (
          <Link
            key={link.rota}
            href={link.rota}
            className="block rounded p-2 text-inpiser-gray-light transition-colors hover:bg-inpiser-green-dark hover:text-inpiser-white"
          >
            {link.nome}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
