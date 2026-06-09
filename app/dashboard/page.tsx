import DashboardLayout from "@/components/DashboardLayout";
import { Calendar, CreditCard, Flag, Clock } from "lucide-react";

export default function PilotDashboard() {
  const mockReservations = [
    { id: "RES-1029", date: "12/06/2026", time: "18:00", track: "Pista Principal", status: "Confirmado" },
    { id: "RES-1025", date: "05/06/2026", time: "19:30", track: "Pista Noturna", status: "Concluído" },
    { id: "RES-0998", date: "20/05/2026", time: "15:00", track: "Pista Principal", status: "Concluído" },
  ];

  return (
    <DashboardLayout role="pilot" title="Visão Geral do Piloto">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <StatCard title="Próximo Treino" value="12/06" subtitle="Daqui 4 dias" icon={<Calendar className="w-6 h-6 text-primary" />} />
        <StatCard title="Faturas Pendentes" value="R$ 0,00" subtitle="Tudo em dia!" icon={<CreditCard className="w-6 h-6 text-green-500" />} />
        <StatCard title="Total de Treinos" value="24" subtitle="Nesta temporada" icon={<Flag className="w-6 h-6 text-blue-500" />} />
        <StatCard title="Tempo Médio" value="54.2s" subtitle="Última bateria" icon={<Clock className="w-6 h-6 text-purple-500" />} />
      </div>

      {/* Recent Activity */}
      <div className="bg-card/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Minhas Últimas Reservas
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-foreground/80">
            <thead className="text-xs text-foreground/50 uppercase bg-background/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 font-medium">ID Reserva</th>
                <th className="px-4 py-3 font-medium">Data / Hora</th>
                <th className="px-4 py-3 font-medium">Pista</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockReservations.map((res) => (
                <tr key={res.id} className="border-b border-border/50 hover:bg-background/20 transition-colors">
                  <td className="px-4 py-3 font-mono text-primary">{res.id}</td>
                  <td className="px-4 py-3">{res.date} às {res.time}</td>
                  <td className="px-4 py-3">{res.track}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      res.status === 'Confirmado' 
                        ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                        : 'bg-foreground/5 text-foreground/60 border-border'
                    }`}>
                      {res.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value, subtitle, icon }: any) {
  return (
    <div className="bg-card/50 border border-border rounded-xl p-5 flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-foreground/60 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-foreground">{value}</h3>
        <p className="text-xs text-foreground/40 mt-1">{subtitle}</p>
      </div>
      <div className="p-3 bg-background/50 rounded-lg border border-border/50">
        {icon}
      </div>
    </div>
  );
}
