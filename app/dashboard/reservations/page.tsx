"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Calendar, Plus, X, FileText, CheckCircle } from "lucide-react";

export default function PilotReservations() {
  const [showModal, setShowModal] = useState(false);
  const [signature, setSignature] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    if (!signature) return;
    setShowModal(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const mockReservations = [
    { id: "RES-1029", date: "12/06/2026", time: "18:00", track: "Interlagos", status: "Confirmado" },
    { id: "RES-1025", date: "05/06/2026", time: "19:30", track: "Piracicaba", status: "Concluído" },
    { id: "RES-0998", date: "20/05/2026", time: "15:00", track: "Interlagos", status: "Concluído" },
    { id: "RES-0980", date: "10/05/2026", time: "10:00", track: "Interlagos", status: "Concluído" },
  ];

  return (
    <DashboardLayout role="pilot" title="Minhas Reservas">

      {/* Toast */}
      {showSuccess && (
        <div className="fixed top-8 right-8 z-50 bg-green-500/20 border border-green-500 text-green-500 px-6 py-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 shadow-2xl">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Reserva concluída! Contrato assinado com sucesso.</span>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-card border border-border rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b border-border bg-background/50">
              <h3 className="font-semibold text-foreground">Nova Reserva de F1600</h3>
              <button onClick={() => setShowModal(false)} className="text-foreground/50 hover:text-foreground transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-foreground/50 mb-1">Pista</label>
                  <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                    <option>Interlagos</option>
                    <option>Piracicaba</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground/50 mb-1">Data Desejada</label>
                  <input type="date" className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary" />
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <h4 className="text-sm font-bold text-primary">Assinatura de Contrato Obrigatória</h4>
                </div>
                <p className="text-xs text-foreground/70 mb-4">
                  Antes de prosseguir com a reserva, você deve assinar o Contrato Padrão de Locação atualizado pela equipe administrativa.
                </p>
                <div className="space-y-2">
                  <button className="text-xs text-primary underline hover:text-primary/80 mb-2 block">Ler Termos do Contrato (PDF)</button>
                  <label className="block text-xs font-medium text-foreground/50 mb-1">Assinatura Digital (Digite seu nome completo para assinar)</label>
                  <input 
                    type="text" 
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    placeholder="João da Silva" 
                    className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary font-mono" 
                  />
                </div>
              </div>

              <button 
                onClick={handleSave}
                disabled={!signature}
                className="w-full mt-4 font-bold py-3 rounded-lg transition-colors shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar Reserva e Assinar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-foreground">Histórico de Pista</h2>
        <button onClick={() => setShowModal(true)} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors text-sm font-bold shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4" /> Nova Reserva
        </button>
      </div>

      <div className="bg-card/50 border border-border rounded-xl p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-foreground/80">
            <thead className="text-xs text-foreground/50 uppercase bg-background/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 font-medium">ID Reserva</th>
                <th className="px-4 py-3 font-medium">Data / Hora</th>
                <th className="px-4 py-3 font-medium">Autódromo</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {mockReservations.map((res) => (
                <tr key={res.id} className="border-b border-border/50 hover:bg-background/20 transition-colors">
                  <td className="px-4 py-4 font-mono text-primary text-xs">{res.id}</td>
                  <td className="px-4 py-4">{res.date} às {res.time}</td>
                  <td className="px-4 py-4">{res.track}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      res.status === 'Confirmado' 
                        ? 'bg-primary/10 text-primary border-primary/20' 
                        : 'bg-foreground/5 text-foreground/60 border-border'
                    }`}>
                      {res.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button className="text-xs text-foreground/50 hover:text-primary transition-colors underline">Ver Detalhes</button>
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
