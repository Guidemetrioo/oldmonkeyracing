"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Wrench, Search, Plus, Filter, X, CheckCircle } from "lucide-react";

export default function AdminMaintenance() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setActiveModal(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const mockMaintenance = [
    { id: "MN-001", car: "F1600 #1", type: "Preventiva", details: "Troca de óleo e pneus", date: "10/06/2026", status: "Em Andamento" },
    { id: "MN-002", car: "F1600 #2", type: "Corretiva", details: "Quebra de semi-eixo", date: "09/06/2026", status: "Aguardando Peça" },
    { id: "MN-003", car: "F1600 #1", type: "Preventiva", details: "Revisão de pastilhas de freio", date: "05/06/2026", status: "Concluído" },
    { id: "MN-004", car: "F1600 #2", type: "Preventiva", details: "Alinhamento e cambagem", date: "02/06/2026", status: "Concluído" },
  ];

  return (
    <DashboardLayout role="admin" title="Manutenção da Frota">

      {/* Toast de Sucesso */}
      {showSuccess && (
        <div className="fixed top-8 right-8 z-50 bg-green-500/20 border border-green-500 text-green-500 px-6 py-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 shadow-2xl">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Ordem de Serviço salva com sucesso!</span>
        </div>
      )}

      {/* Modais */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-card border border-border rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border bg-background/50">
              <h3 className="font-semibold text-foreground">
                {activeModal === 'nova' ? 'Nova Ordem de Serviço' : 'Gerenciar Ordem de Serviço'}
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-foreground/50 hover:text-foreground transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
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
              {activeModal === 'gerenciar' && (
                <div>
                  <label className="block text-xs font-medium text-foreground/50 mb-1">Status da Ordem</label>
                  <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                    <option>Em Andamento</option>
                    <option>Aguardando Peça</option>
                    <option>Concluído</option>
                  </select>
                </div>
              )}
              <div>
                <label className="block text-xs font-medium text-foreground/50 mb-1">Descrição do Serviço</label>
                <textarea placeholder="Detalhes das peças, problemas ou acertos..." className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary resize-none h-24" />
              </div>

              <button 
                onClick={handleSave}
                className="w-full mt-4 bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Salvar Ordem
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4 items-center">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-3 text-foreground/40" />
            <input type="text" placeholder="Buscar F1600..." className="w-full pl-9 pr-4 py-2 bg-input border border-border rounded-lg text-sm focus:outline-none focus:border-primary" />
          </div>
          <button className="bg-background border border-border text-foreground/70 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-input transition-colors text-sm">
            <Filter className="w-4 h-4" /> Filtros
          </button>
        </div>
        <button onClick={() => setActiveModal('nova')} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors text-sm font-bold shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4" /> Nova Ordem de Serviço
        </button>
      </div>

      <div className="bg-card/50 border border-border rounded-xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-foreground/80">
            <thead className="text-xs text-foreground/50 uppercase bg-background/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 font-medium">OS #</th>
                <th className="px-4 py-3 font-medium">Veículo</th>
                <th className="px-4 py-3 font-medium">Tipo</th>
                <th className="px-4 py-3 font-medium">Detalhes</th>
                <th className="px-4 py-3 font-medium">Data</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              {mockMaintenance.map((item) => (
                <tr key={item.id} className="border-b border-border/50 hover:bg-background/20 transition-colors">
                  <td className="px-4 py-4 font-mono text-foreground/50 text-xs">{item.id}</td>
                  <td className="px-4 py-4 font-medium text-foreground">{item.car}</td>
                  <td className="px-4 py-4">{item.type}</td>
                  <td className="px-4 py-4 text-xs">{item.details}</td>
                  <td className="px-4 py-4">{item.date}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      item.status === 'Concluído' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                      item.status === 'Em Andamento' ? 'bg-primary/10 text-primary border-primary/20' :
                      'bg-orange-500/10 text-orange-500 border-orange-500/20'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button onClick={() => setActiveModal('gerenciar')} className="text-xs text-foreground/50 hover:text-primary transition-colors flex items-center justify-end gap-1 ml-auto">
                      <Wrench className="w-3 h-3" /> Gerenciar
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
