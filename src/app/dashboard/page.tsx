import Sidebar from "../componentes/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-inpiser-black text-inpiser-white">
      <Sidebar titulo="INPISER" />

      <section className="flex-1 p-8">
        <div>
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="mt-2 text-inpiser-gray-light">
            Acompanhe e gerencie sua conta do Instagram com o INPISER.
          </p>
        </div>

        {/* Cards do dashboard */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          {/* Card 1 */}
          <div className="flex flex-1 flex-col gap-2 rounded border border-inpiser-green-dark bg-inpiser-gray p-4">
            <h3 className="text-sm text-inpiser-gray-light">Publicações</h3>
            <p className="text-2xl font-bold">24</p>
            <span className="text-inpiser-gray-light">Este mês</span>
          </div>

          {/* Card 2 */}
          <div className="flex flex-1 flex-col gap-2 rounded border border-inpiser-green-dark bg-inpiser-gray p-4">
            <h3 className="text-sm text-inpiser-gray-light">Agendadas</h3>
            <p className="text-2xl font-bold">8</p>
            <span className="text-inpiser-gray-light">Próximas publicações</span>
          </div>

          {/* Card 3 */}
          <div className="flex flex-1 flex-col gap-2 rounded border border-inpiser-green-dark bg-inpiser-gray p-4">
            <h3 className="text-sm text-inpiser-gray-light">Engajamento</h3>
            <p className="text-2xl font-bold">12,4%</p>
            <span className="text-inpiser-gray-light">Taxa média</span>
          </div>
        </div>

        {/* Ações rápidas */}
        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Ações rápidas</h2>

          <div className="flex gap-2">
            <button className="rounded bg-inpiser-green px-4 py-2 font-medium text-inpiser-white hover:bg-green-600">
              Criar publicação
            </button>

            <button className="rounded border border-inpiser-green-dark bg-inpiser-gray px-4 py-2 text-inpiser-white hover:bg-inpiser-green-dark">
              Agendar publicações
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
