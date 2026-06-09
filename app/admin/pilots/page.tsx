"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Search, UserPlus, Ban, Edit, Eye, FileText, X, CheckCircle } from "lucide-react";

export default function AdminPilots() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedPilot, setSelectedPilot] = useState<any>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setActiveModal(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const mockPilots = [
    { id: "PLT-001", name: "João Silva", email: "joao@email.com", status: "Pago", plan: "Master Anual", contract: "Assinado" },
    { id: "PLT-002", name: "Carlos Mendes", email: "carlos@email.com", status: "Pendente", plan: "Avulso", contract: "Pendente" },
    { id: "PLT-003", name: "Ana Beatriz", email: "ana@email.com", status: "Pago", plan: "Master Mensal", contract: "Assinado" },
    { id: "PLT-004", name: "Felipe Costa", email: "felipe@email.com", status: "Pendente", plan: "Avulso", contract: "Pendente" },
  ];

  return (
    <DashboardLayout role="admin" title="Gestão de Pilotos">

      {/* Toast */}
      {showSuccess && (
        <div className="fixed top-8 right-8 z-50 bg-green-500/20 border border-green-500 text-green-500 px-6 py-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 shadow-2xl">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Ação realizada com sucesso!</span>
        </div>
      )}

      {/* Modais */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-card border border-border rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b border-border bg-background/50">
              <h3 className="font-semibold text-foreground">
                {activeModal === 'novo' && "Cadastrar Novo Piloto"}
                {activeModal === 'editar' && `Editar: ${selectedPilot?.name}`}
                {activeModal === 'ver' && `Ficha: ${selectedPilot?.name}`}
                {activeModal === 'banir' && "Suspender Piloto"}
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-foreground/50 hover:text-foreground transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4 overflow-y-auto">
              {(activeModal === 'novo' || activeModal === 'editar') && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground/50 mb-1">Nome Completo</label>
                      <input type="text" defaultValue={selectedPilot?.name} className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/50 mb-1">Email</label>
                      <input type="email" defaultValue={selectedPilot?.email} className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground/50 mb-1">Status Financeiro</label>
                      <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                        <option>Pago</option>
                        <option>Pendente</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/50 mb-1">Plano</label>
                      <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                        <option>Master Anual</option>
                        <option>Master Mensal</option>
                        <option>Avulso</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {activeModal === 'ver' && selectedPilot && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold uppercase">
                      {selectedPilot.name.substring(0,2)}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{selectedPilot.name}</h4>
                      <p className="text-sm text-foreground/50">{selectedPilot.email}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 bg-background/50 p-4 rounded-xl border border-border">
                    <div>
                      <p className="text-xs text-foreground/50 uppercase">Status do Contrato</p>
                      <p className={`text-sm font-bold mt-1 ${selectedPilot.contract === 'Assinado' ? 'text-green-500' : 'text-yellow-500'}`}>
                        {selectedPilot.contract}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 uppercase">Assinatura</p>
                      {selectedPilot.contract === 'Assinado' ? (
                        <button className="text-sm text-primary hover:underline mt-1 flex items-center gap-1"><FileText className="w-4 h-4"/> Visualizar PDF</button>
                      ) : (
                        <p className="text-sm text-foreground mt-1">Aguardando assinatura</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'banir' && (
                <div className="text-center py-4">
                  <Ban className="w-12 h-12 text-red-500 mx-auto mb-3 opacity-80" />
                  <p className="text-sm text-foreground/80 font-medium">Tem certeza que deseja suspender este piloto?</p>
                  <p className="text-xs text-foreground/50 mt-1">Ele perderá acesso ao agendamento de reservas até a liberação.</p>
                </div>
              )}

              {activeModal !== 'ver' && (
                <button 
                  onClick={handleSave}
                  className={`w-full mt-6 font-bold py-3 rounded-lg transition-colors shadow-lg ${activeModal === 'banir' ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/20' : 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20'}`}
                >
                  {activeModal === 'banir' ? 'Confirmar Suspensão' : 'Salvar Alterações'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <div className="relative w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-foreground/40" />
          <input type="text" placeholder="Buscar piloto..." className="w-full pl-9 pr-4 py-2 bg-input border border-border rounded-lg text-sm focus:outline-none focus:border-primary" />
        </div>
        <button onClick={() => setActiveModal('novo')} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors text-sm font-bold shadow-lg shadow-primary/20">
          <UserPlus className="w-4 h-4" /> Novo Piloto
        </button>
      </div>

      <div className="bg-card/50 border border-border rounded-xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-foreground/80">
            <thead className="text-xs text-foreground/50 uppercase bg-background/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 font-medium">ID</th>
                <th className="px-4 py-3 font-medium">Nome</th>
                <th className="px-4 py-3 font-medium">Contrato</th>
                <th className="px-4 py-3 font-medium">Plano</th>
                <th className="px-4 py-3 font-medium">Status Pag.</th>
                <th className="px-4 py-3 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {mockPilots.map((pilot) => (
                <tr key={pilot.id} className="border-b border-border/50 hover:bg-background/20 transition-colors">
                  <td className="px-4 py-4 font-mono text-foreground/50 text-xs">{pilot.id}</td>
                  <td className="px-4 py-4 font-medium text-foreground">{pilot.name}</td>
                  <td className="px-4 py-4">
                    <span className={`flex items-center gap-1.5 text-xs font-medium ${pilot.contract === 'Assinado' ? 'text-green-500' : 'text-yellow-500'}`}>
                      {pilot.contract === 'Assinado' ? <CheckCircle className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                      {pilot.contract}
                    </span>
                  </td>
                  <td className="px-4 py-4">{pilot.plan}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      pilot.status === 'Pago' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                      pilot.status === 'Pendente' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                      'bg-foreground/5 text-foreground/60 border-border'
                    }`}>
                      {pilot.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right flex justify-end gap-2">
                    <button onClick={() => { setSelectedPilot(pilot); setActiveModal('ver'); }} className="p-1.5 text-foreground/50 hover:text-primary transition-colors bg-background rounded border border-border" title="Ver Dados">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button onClick={() => { setSelectedPilot(pilot); setActiveModal('editar'); }} className="p-1.5 text-foreground/50 hover:text-blue-500 transition-colors bg-background rounded border border-border" title="Editar">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button onClick={() => { setSelectedPilot(pilot); setActiveModal('banir'); }} className="p-1.5 text-foreground/50 hover:text-red-500 transition-colors bg-background rounded border border-border" title="Suspender">
                      <Ban className="w-4 h-4" />
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
