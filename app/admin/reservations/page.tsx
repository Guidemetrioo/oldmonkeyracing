import DashboardLayout from "@/components/DashboardLayout";
import { Calendar as CalendarIcon, Filter } from "lucide-react";

export default function AdminReservations() {
  const mockReservations = [
    { id: "RES-1029", pilot: "João Silva", date: "12/06/2026", time: "18:00", track: "Interlagos", status: "Confirmado" },
    { id: "RES-1030", pilot: "Carlos Mendes", date: "12/06/2026", time: "18:00", track: "Interlagos", status: "Confirmado" },
    { id: "RES-1031", pilot: "Ana Beatriz", date: "13/06/2026", time: "09:00", track: "Piracicaba", status: "Pendente" },
  ];

  return (
    <DashboardLayout role="admin" title="Agenda e Reservas Globais">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-3">
          <button className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-lg text-sm font-medium">Interlagos</button>
          <button className="bg-background border border-border text-foreground/70 px-4 py-2 rounded-lg text-sm font-medium hover:bg-input transition-colors">Piracicaba</button>
        </div>
        <button className="bg-background border border-border text-foreground/70 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-input transition-colors text-sm">
          <Filter className="w-4 h-4" /> Filtros
        </button>
      </div>

      <div className="bg-card/50 border border-border rounded-xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-foreground/80">
            <thead className="text-xs text-foreground/50 uppercase bg-background/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 font-medium">Data / Hora</th>
                <th className="px-4 py-3 font-medium">Pista</th>
                <th className="px-4 py-3 font-medium">Piloto</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              {mockReservations.map((res) => (
                <tr key={res.id} className="border-b border-border/50 hover:bg-background/20 transition-colors">
                  <td className="px-4 py-4 font-bold text-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-primary" />
                      {res.date} {res.time}
                    </div>
                  </td>
                  <td className="px-4 py-4">{res.track}</td>
                  <td className="px-4 py-4 text-foreground">{res.pilot}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      res.status === 'Confirmado' 
                        ? 'bg-primary/10 text-primary border-primary/20' 
                        : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                    }`}>
                      {res.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    {res.status === 'Pendente' ? (
                      <div className="flex justify-end gap-2">
                        <button className="bg-primary/20 text-primary px-3 py-1 rounded text-xs hover:bg-primary/30">Aprovar</button>
                        <button className="bg-red-500/20 text-red-500 px-3 py-1 rounded text-xs hover:bg-red-500/30">Recusar</button>
                      </div>
                    ) : (
                      <button className="text-xs text-foreground/50 underline hover:text-primary">Gerenciar</button>
                    )}
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
