"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Users, DollarSign, Activity, Wrench, X, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setActiveModal(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const mockPilots = [
    { id: "PLT-001", name: "João Silva", status: "Pago", lastRace: "05/06/2026", balance: "R$ 0,00" },
    { id: "PLT-002", name: "Carlos Mendes", status: "Pendente", lastRace: "20/05/2026", balance: "R$ 150,00" },
    { id: "PLT-003", name: "Ana Beatriz", status: "Pago", lastRace: "12/06/2026", balance: "R$ 0,00" },
    { id: "PLT-004", name: "Felipe Costa", status: "Pendente", lastRace: "10/01/2026", balance: "R$ 0,00" },
  ];

  return (
    <DashboardLayout role="admin" title="Painel Geral Administrativo">
      
      {/* Toast de Sucesso */}
      {showSuccess && (
        <div className="fixed top-8 right-8 z-50 bg-green-500/20 border border-green-500 text-green-500 px-6 py-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 shadow-2xl">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Ação realizada com sucesso!</span>
        </div>
      )}

      {/* Modais das Ações Rápidas */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-card border border-border rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border bg-background/50">
              <h3 className="font-semibold text-foreground">
                {activeModal === 'treino' && "Registrar Novo Treino"}
                {activeModal === 'manutencao' && "Nova Manutenção (Oficina)"}
                {activeModal === 'reserva' && "Nova Reserva Manual"}
                {activeModal === 'relatorio' && "Gerar Relatório Financeiro"}
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-foreground/50 hover:text-foreground transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              {activeModal === 'treino' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-foreground/50 mb-1">Selecione o Piloto</label>
                    <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                      <option>João Silva</option>
                      <option>Carlos Mendes</option>
                      <option>Ana Beatriz</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/50 mb-1">Carro Utilizado</label>
                    <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                      <option>F1600 #1</option>
                      <option>F1600 #2</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/50 mb-1">Best Lap</label>
                    <input type="text" placeholder="0:00.000" className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary" />
                  </div>
                </>
              )}

              {activeModal === 'manutencao' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-foreground/50 mb-1">Veículo</label>
                    <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                      <option>F1600 #1</option>
                      <option>F1600 #2</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/50 mb-1">Tipo de Manutenção</label>
                    <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                      <option>Preventiva (Revisão Padrão)</option>
                      <option>Corretiva (Quebra/Batida)</option>
                      <option>Acerto Técnico (Setup)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/50 mb-1">Descrição</label>
                    <textarea placeholder="Detalhes do serviço..." className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary resize-none h-20" />
                  </div>
                </>
              )}

              {activeModal === 'reserva' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-foreground/50 mb-1">Piloto (Locatário)</label>
                    <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                      <option>João Silva</option>
                      <option>Carlos Mendes</option>
                      <option>Piloto Novo (Sem Cadastro)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground/50 mb-1">Data</label>
                      <input type="date" className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/50 mb-1">Sessão</label>
                      <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                         <option>Manhã</option>
                         <option>Tarde</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {activeModal === 'relatorio' && (
                <>
                  <div className="text-center py-4">
                    <DollarSign className="w-12 h-12 text-primary mx-auto mb-3 opacity-50" />
                    <p className="text-sm text-foreground/80 font-medium">Gerar relatório financeiro consolidado?</p>
                    <p className="text-xs text-foreground/50 mt-1">O arquivo será exportado em formato PDF com os balancetes do mês corrente.</p>
                  </div>
                </>
              )}

              <button 
                onClick={handleSave}
                className="w-full mt-4 bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                {activeModal === 'relatorio' ? "Exportar Relatório" : "Confirmar e Salvar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <StatCard title="Total de Pilotos" value="142" subtitle="+12 este mês" icon={<Users className="w-5 h-5 text-blue-500" />} />
        <StatCard title="Receita Mensal" value="R$ 18.450" subtitle="Previsto: R$ 22k" icon={<DollarSign className="w-5 h-5 text-green-500" />} />
        <StatCard title="Manutenções Pendentes" value="3" subtitle="Carros na oficina" icon={<Wrench className="w-5 h-5 text-orange-500" />} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Pilots Table */}
        <div className="xl:col-span-2 bg-card/50 border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-medium text-foreground flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Gestão de Pilotos
            </h2>
            <button className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded hover:bg-primary/20 transition-colors uppercase font-bold">
              Ver Todos
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-[11px] text-left text-foreground/80">
              <thead className="text-[10px] text-foreground/50 uppercase bg-background/50 border-b border-border">
                <tr>
                  <th className="px-3 py-2 font-medium">Nome do Piloto</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                  <th className="px-3 py-2 font-medium">Último Treino</th>
                </tr>
              </thead>
              <tbody>
                {mockPilots.map((pilot) => (
                  <tr key={pilot.id} className="border-b border-border/50 hover:bg-background/20 transition-colors">
                    <td className="px-3 py-2 font-medium text-foreground">{pilot.name} <span className="text-[9px] text-foreground/40 block font-normal">{pilot.id}</span></td>
                    <td className="px-3 py-2">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border uppercase tracking-wider ${
                        pilot.status === 'Pago' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                        pilot.status === 'Pendente' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                        'bg-foreground/5 text-foreground/60 border-border'
                      }`}>
                        {pilot.status}
                      </span>
                    </td>
                    <td className="px-3 py-2">{pilot.lastRace}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-card/50 border border-border rounded-xl p-4 flex flex-col">
          <h2 className="text-base font-medium text-foreground mb-3">Ações Rápidas</h2>
          <div className="space-y-2 flex-1">
            <button onClick={() => setActiveModal('treino')} className="w-full flex items-center justify-between p-2.5 rounded-lg border border-border bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-xs text-left group">
              <span>Registrar Novo Treino</span>
              <Activity className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
            </button>
            <button onClick={() => setActiveModal('manutencao')} className="w-full flex items-center justify-between p-2.5 rounded-lg border border-border bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-xs text-left group">
              <span>Nova Manutenção (Oficina)</span>
              <Wrench className="w-3.5 h-3.5 text-orange-500 group-hover:scale-110 transition-transform" />
            </button>
            <button onClick={() => setActiveModal('reserva')} className="w-full flex items-center justify-between p-2.5 rounded-lg border border-border bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-xs text-left group">
              <span>Nova Reserva Manual</span>
            </button>
            <button onClick={() => setActiveModal('relatorio')} className="w-full flex items-center justify-between p-2.5 rounded-lg border border-border bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-xs text-left group">
              <span>Gerar Relatório Financeiro</span>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value, subtitle, icon }: any) {
  return (
    <div className="bg-card/50 border border-border rounded-xl p-4 flex items-center justify-between">
      <div>
        <p className="text-xs font-medium text-foreground/60 mb-0.5">{title}</p>
        <h3 className="text-lg font-bold text-foreground leading-none">{value}</h3>
        <p className="text-[10px] text-foreground/40 mt-1">{subtitle}</p>
      </div>
      <div className="p-2 bg-background/50 rounded-lg border border-border/50">
        {icon}
      </div>
    </div>
  );
}
