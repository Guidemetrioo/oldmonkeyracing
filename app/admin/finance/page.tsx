"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Download, Edit3, Plus, Trash2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function AdminFinance() {
  // Estados detalhados
  const [entradasDetalhes, setEntradasDetalhes] = useState([
    { id: 1, nome: "Mensalidades", valor: 18000 },
    { id: 2, nome: "Treinos Avulsos", valor: 8500 },
    { id: 3, nome: "Patrocínios", valor: 5000 },
  ]);

  const [fixosDetalhes, setFixosDetalhes] = useState([
    { id: 1, nome: "Aluguel Box", valor: 3500 },
    { id: 2, nome: "Salários Mecânicos", valor: 4500 },
  ]);

  const [variaveisDetalhes, setVariaveisDetalhes] = useState([
    { id: 1, nome: "Pneus Novos", valor: 2500 },
    { id: 2, nome: "Combustível", valor: 1200 },
    { id: 3, nome: "Peças de Reposição", valor: 1300 },
  ]);

  // Cálculos totais
  const totalEntradas = entradasDetalhes.reduce((acc, curr) => acc + curr.valor, 0);
  const totalFixos = fixosDetalhes.reduce((acc, curr) => acc + curr.valor, 0);
  const totalVariaveis = variaveisDetalhes.reduce((acc, curr) => acc + curr.valor, 0);

  // Funções de atualização
  const updateDetail = (setter: any, items: any[], id: number, newVal: number) => {
    setter(items.map(item => item.id === id ? { ...item, valor: newVal } : item));
  };

  const chartData = [
    { month: "Jan", "Entrada Fixa": 15000, "Entrada Variável": 4000, "Despesa Fixa": 8000, "Despesa Variável": 3000 },
    { month: "Fev", "Entrada Fixa": 15000, "Entrada Variável": 5500, "Despesa Fixa": 8000, "Despesa Variável": 4200 },
    { month: "Mar", "Entrada Fixa": 18000, "Entrada Variável": 6000, "Despesa Fixa": 8000, "Despesa Variável": 2500 },
    { month: "Abr", "Entrada Fixa": 18000, "Entrada Variável": 8500, "Despesa Fixa": 8000, "Despesa Variável": 6000 },
    { month: "Mai", "Entrada Fixa": 20000, "Entrada Variável": 7000, "Despesa Fixa": 8000, "Despesa Variável": 4500 },
    { 
      month: "Jun", 
      "Entrada Fixa": entradasDetalhes.find(e => e.nome === "Mensalidades")?.valor || 0, 
      "Entrada Variável": totalEntradas - (entradasDetalhes.find(e => e.nome === "Mensalidades")?.valor || 0), 
      "Despesa Fixa": totalFixos, 
      "Despesa Variável": totalVariaveis 
    },
  ];

  return (
    <DashboardLayout role="admin" title="Controle Financeiro">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        
        {/* Entradas */}
        <div className="bg-card/50 border border-border rounded-xl p-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-foreground/60">Total Entradas (Junho)</p>
            <Edit3 className="w-3 h-3 text-primary" />
          </div>
          <div className="space-y-2 mb-3 flex-1">
            {entradasDetalhes.map(item => (
              <div key={item.id} className="flex items-center justify-between group">
                <span className="text-[11px] text-foreground/70 leading-none">{item.nome}</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-primary">R$</span>
                  <input 
                    type="number" 
                    value={item.valor} 
                    onChange={(e) => updateDetail(setEntradasDetalhes, entradasDetalhes, item.id, Number(e.target.value))}
                    className="text-xs font-bold text-primary bg-transparent border-b border-dashed border-primary/30 w-16 text-right focus:outline-none focus:border-primary/100 leading-none"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="pt-2 border-t border-border mt-auto flex items-center justify-between">
            <span className="text-xs font-bold text-foreground">Somatória</span>
            <span className="text-lg font-bold text-primary leading-none">R$ {totalEntradas.toLocaleString('pt-BR')}</span>
          </div>
        </div>

        {/* Custos Fixos */}
        <div className="bg-card/50 border border-border rounded-xl p-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-foreground/60">Custos Fixos (Junho)</p>
            <Edit3 className="w-3 h-3 text-red-400" />
          </div>
          <div className="space-y-2 mb-3 flex-1">
            {fixosDetalhes.map(item => (
              <div key={item.id} className="flex items-center justify-between group">
                <span className="text-[11px] text-foreground/70 leading-none">{item.nome}</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-red-400">R$</span>
                  <input 
                    type="number" 
                    value={item.valor} 
                    onChange={(e) => updateDetail(setFixosDetalhes, fixosDetalhes, item.id, Number(e.target.value))}
                    className="text-xs font-bold text-red-400 bg-transparent border-b border-dashed border-red-400/30 w-16 text-right focus:outline-none focus:border-red-400/100 leading-none"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="pt-2 border-t border-border mt-auto flex items-center justify-between">
            <span className="text-xs font-bold text-foreground">Somatória</span>
            <span className="text-lg font-bold text-red-400 leading-none">R$ {totalFixos.toLocaleString('pt-BR')}</span>
          </div>
        </div>

        {/* Custos Variáveis */}
        <div className="bg-card/50 border border-border rounded-xl p-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-foreground/60">Custos Variáveis (Junho)</p>
            <Edit3 className="w-3 h-3 text-orange-400" />
          </div>
          <div className="space-y-2 mb-3 flex-1">
            {variaveisDetalhes.map(item => (
              <div key={item.id} className="flex items-center justify-between group">
                <span className="text-[11px] text-foreground/70 leading-none">{item.nome}</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-orange-400">R$</span>
                  <input 
                    type="number" 
                    value={item.valor} 
                    onChange={(e) => updateDetail(setVariaveisDetalhes, variaveisDetalhes, item.id, Number(e.target.value))}
                    className="text-xs font-bold text-orange-400 bg-transparent border-b border-dashed border-orange-400/30 w-16 text-right focus:outline-none focus:border-orange-400/100 leading-none"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="pt-2 border-t border-border mt-auto flex items-center justify-between">
            <span className="text-xs font-bold text-foreground">Somatória</span>
            <span className="text-lg font-bold text-orange-400 leading-none">R$ {totalVariaveis.toLocaleString('pt-BR')}</span>
          </div>
        </div>

      </div>

      <div className="bg-card/50 border border-border rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-base font-medium text-foreground">Fluxo de Caixa Interativo (2026)</h3>
            <p className="text-xs text-foreground/50">Atualização em tempo real</p>
          </div>
          <button className="bg-background border border-border text-foreground/70 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-input transition-colors text-xs">
            <Download className="w-3 h-3" /> Exportar
          </button>
        </div>

        <div className="w-full h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
              <XAxis dataKey="month" stroke="#a1a1aa" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#a1a1aa" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `R$ ${val/1000}k`} />
              <Tooltip 
                cursor={{fill: '#141414'}}
                contentStyle={{ backgroundColor: '#0b0b0b', borderColor: '#27272a', color: '#fff', borderRadius: '8px' }}
                itemStyle={{ fontSize: '11px', fontWeight: 'bold' }}
              />
              <Legend wrapperStyle={{ paddingTop: '5px', fontSize: '11px' }} />
              
              <Bar dataKey="Entrada Fixa" stackId="entradas" fill="#5ec800" radius={[0, 0, 4, 4]} animationDuration={500} />
              <Bar dataKey="Entrada Variável" stackId="entradas" fill="#76FB00" radius={[4, 4, 0, 0]} animationDuration={500} />
              <Bar dataKey="Despesa Fixa" stackId="despesas" fill="#ef4444" radius={[0, 0, 4, 4]} animationDuration={500} />
              <Bar dataKey="Despesa Variável" stackId="despesas" fill="#f87171" radius={[4, 4, 0, 0]} animationDuration={500} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}
