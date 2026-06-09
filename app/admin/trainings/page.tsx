import DashboardLayout from "@/components/DashboardLayout";
import { Search, Activity, Download } from "lucide-react";

export default function AdminTrainings() {
  const mockTrainings = [
    { id: "TRN-001", pilot: "João Silva", date: "10/06/2026", track: "Interlagos", bestLap: "0:58.420", totalLaps: 32 },
    { id: "TRN-002", pilot: "Carlos Mendes", date: "08/06/2026", track: "Piracicaba", bestLap: "1:02.115", totalLaps: 45 },
    { id: "TRN-003", pilot: "João Silva", date: "05/06/2026", track: "Interlagos", bestLap: "0:59.100", totalLaps: 28 },
    { id: "TRN-004", pilot: "Ana Beatriz", date: "01/06/2026", track: "Interlagos", bestLap: "0:57.890", totalLaps: 50 },
  ];

  return (
    <DashboardLayout role="admin" title="Histórico de Treinos (Por Piloto)">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-foreground/40" />
          <input type="text" placeholder="Buscar por piloto ou pista..." className="w-full pl-9 pr-4 py-2 bg-input border border-border rounded-lg text-sm focus:outline-none focus:border-primary" />
        </div>
        <button className="bg-background border border-border text-foreground/70 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-input transition-colors text-sm font-medium">
          <Download className="w-4 h-4" /> Exportar Relatório
        </button>
      </div>

      <div className="bg-card/50 border border-border rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
          <Activity className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-medium text-foreground">Registro de Telemetria e Laps</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-foreground/80">
            <thead className="text-xs text-foreground/50 uppercase bg-background/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 font-medium">Piloto</th>
                <th className="px-4 py-3 font-medium">Data</th>
                <th className="px-4 py-3 font-medium">Pista</th>
                <th className="px-4 py-3 font-medium">Voltas Completadas</th>
                <th className="px-4 py-3 font-medium">Melhor Volta (Best Lap)</th>
                <th className="px-4 py-3 font-medium text-right">Telemetria</th>
              </tr>
            </thead>
            <tbody>
              {mockTrainings.map((train) => (
                <tr key={train.id} className="border-b border-border/50 hover:bg-background/20 transition-colors">
                  <td className="px-4 py-4 font-bold text-foreground">{train.pilot}</td>
                  <td className="px-4 py-4">{train.date}</td>
                  <td className="px-4 py-4">{train.track}</td>
                  <td className="px-4 py-4 font-mono">{train.totalLaps}</td>
                  <td className="px-4 py-4 font-mono text-primary font-bold">{train.bestLap}</td>
                  <td className="px-4 py-4 text-right">
                    <button className="text-xs text-foreground/50 hover:text-foreground underline">Ver Gráficos</button>
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
