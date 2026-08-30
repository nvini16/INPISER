import Sidebar from '../componentes/Sidebar';
export default function Home() {
  return (
    <main className="min-h-screen flex bg-black text-white">
      
      {/* Valor de prop {titulo} criado em Sidebar.tsx */}
      <Sidebar titulo="Instagram Inpiser" />


      <section className="flex-1 p-8">

        {/* Div de descrição */}
        <div>
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="mt-2 text-gray-400">
            Acompanhe e gerencie sua conta do Instagram com Inpiser.
          </p>
        </div>

       {/* Dashboards */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row">

          {/* Card 1 */}
          <div className="flex flex-1 flex-col gap-2 rounded border border-green-900 bg-gray-900 p-4">
            <h3 className="text-sm text-gray-400">Publicações</h3>
            <p className="text-2xl font-bold">24</p>
            <span className="text-gray-400">Este mês</span>
          </div>

          {/* Card 2 */}
          <div className="flex flex-1 flex-col gap-2 rounded border border-green-900 bg-gray-900 p-4">
            <h3 className="text-sm text-gray-400">Agendadas</h3>
            <p className="text-2xl font-bold">8</p>
            <span className="text-gray-400">Próximas publicações</span>
          </div>

          {/* Card 3 */}
          <div className="flex flex-1 flex-col gap-2 rounded border border-green-900 bg-gray-900 p-4">
            <h3 className="text-sm text-gray-400">Engajamento</h3>
            <p className="text-2xl font-bold">12,4%</p>
            <span className="text-gray-400">Taxa média</span>
          </div>
        </div>

        {/* Ações rpidas */}
        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Ações rápidas</h2>

          {/* Botões de ação rápida */}
          <div className="flex gap-2">

            <button className="rounded bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600">
              Criar publicação
            </button>

            <button className="bg-gray-800 px-4 py-2 rounded borde border-green-900 text-white hover:bg-green-900">
              Agendar publicações
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}
