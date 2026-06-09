import DashboardLayout from "@/components/DashboardLayout";
import { Receipt, CreditCard, Download } from "lucide-react";

export default function PilotPayments() {
  const mockInvoices = [
    { id: "INV-2026-06", desc: "Mensalidade Piloto Master", amount: "R$ 4.500,00", date: "05/06/2026", status: "Pago" },
    { id: "INV-2026-05", desc: "Mensalidade Piloto Master", amount: "R$ 4.500,00", date: "05/05/2026", status: "Pago" },
    { id: "INV-EXT-01", desc: "Pneu Extra (Slick) - Etapa 3", amount: "R$ 1.800,00", date: "22/05/2026", status: "Pendente" },
  ];

  return (
    <DashboardLayout role="pilot" title="Financeiro & Pagamentos">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card/50 border border-border rounded-xl p-5">
          <p className="text-sm font-medium text-foreground/60 mb-1">Total a Pagar (Mês atual)</p>
          <h3 className="text-2xl font-bold text-red-400">R$ 1.800,00</h3>
        </div>
        <div className="bg-card/50 border border-border rounded-xl p-5">
          <p className="text-sm font-medium text-foreground/60 mb-1">Total Gasto (Ano)</p>
          <h3 className="text-2xl font-bold text-foreground">R$ 28.800,00</h3>
        </div>
      </div>

      <div className="bg-card/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
          <Receipt className="w-5 h-5 text-primary" />
          Histórico de Faturas
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-foreground/80">
            <thead className="text-xs text-foreground/50 uppercase bg-background/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 font-medium">Fatura ID</th>
                <th className="px-4 py-3 font-medium">Descrição</th>
                <th className="px-4 py-3 font-medium">Data Venc.</th>
                <th className="px-4 py-3 font-medium">Valor</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Acões</th>
              </tr>
            </thead>
            <tbody>
              {mockInvoices.map((inv) => (
                <tr key={inv.id} className="border-b border-border/50 hover:bg-background/20 transition-colors">
                  <td className="px-4 py-4 font-mono text-foreground/50 text-xs">{inv.id}</td>
                  <td className="px-4 py-4">{inv.desc}</td>
                  <td className="px-4 py-4">{inv.date}</td>
                  <td className="px-4 py-4 font-bold text-foreground">{inv.amount}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      inv.status === 'Pago' 
                        ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                        : 'bg-red-500/10 text-red-500 border-red-500/20'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right flex justify-end gap-2">
                    {inv.status === 'Pendente' && (
                      <button className="bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 rounded text-xs hover:bg-primary/30 flex items-center gap-1">
                        <CreditCard className="w-3 h-3" /> Pagar
                      </button>
                    )}
                    <button className="bg-background/50 border border-border px-3 py-1.5 rounded text-xs hover:bg-background flex items-center gap-1">
                      <Download className="w-3 h-3" /> PDF
                    </button>
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
