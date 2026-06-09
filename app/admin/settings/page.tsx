import DashboardLayout from "@/components/DashboardLayout";
import { FileText } from "lucide-react";

export default function AdminSettings() {
  return (
    <DashboardLayout role="admin" title="Configurações do Sistema">
      <div className="max-w-3xl">
        <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-medium text-foreground mb-4 border-b border-border pb-2">Valores Padrão de Locação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-foreground/50 mb-1">Preço Bateria (Avulso)</label>
              <input type="text" defaultValue="R$ 1.800,00" className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground/50 mb-1">Plano Anual (Mensalidade)</label>
              <input type="text" defaultValue="R$ 4.500,00" className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary" />
            </div>
          </div>
        </div>

        <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-medium text-foreground mb-4 border-b border-border pb-2">Contrato Padrão de Locação</h2>
          <div className="flex flex-col gap-3">
            <label className="block text-xs font-medium text-foreground/50">Arquivo Base (Exigido do piloto na reserva)</label>
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
              <FileText className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm font-medium text-foreground">Substituir Contrato Padrão (.PDF)</p>
              <p className="text-xs text-foreground/50 mt-1">Última atualização: 10/05/2026</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button className="px-5 py-2 text-sm font-medium text-foreground/70 bg-background border border-border rounded-lg hover:bg-input transition-colors">Descartar</button>
          <button className="px-5 py-2 text-sm font-bold text-background bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">Salvar Parâmetros</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
