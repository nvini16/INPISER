type SidebarProps = {
  titulo: string
}

const links = [
    {
      nome: "Dashboard",
      rota: "/dashboard"
    },

    {
      nome: "Calendário",
      rota: "/calendario"
    },

    {
      nome: "Automações",
      rota: "/automacoes"
    },

    {
      nome: "Insights",
      rota: "insights"
    }
  ]

export default function Sidebar({titulo}: SidebarProps) {
  return (
    <aside className="w-64 min-h-screen border-r border-green-900 bg-black p-4">
        <h1 className="text-center text-xl font-bold text-green-400">

          {/* prop {titulo} de valor string : {titulo: straing} */}
          {titulo}
        </h1>

        {/* Menu lateral */}
        <nav className="mt-8 flex flex-col gap-2">

          {links.map((link) => (
            <a 
              key={link.rota} 
              href="link.rota" 
              className="block rounded p-2 text-gray-300 hover:bg-green-900"
            >
              {link.nome}
            </a>
          ))}

        </nav>
      </aside>
  )
}