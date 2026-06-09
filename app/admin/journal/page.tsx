"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Sparkles, Save, Image as ImageIcon, Link as LinkIcon, Send } from "lucide-react";

export default function AdminJournal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAI = () => {
    setIsGenerating(true);
    // Simula a geração por IA
    setTimeout(() => {
      setTitle("Fim de Semana Eletrizante: Resumo dos Treinos F1600");
      setContent("Neste último final de semana, a equipe OldMonkey Racing colocou seus dois F1600 na pista de Interlagos para uma bateria intensa de testes. O clima estava perfeito, resultando em tempos de volta impressionantes.\\n\\nO F1600 #1 pilotado por João Silva conseguiu extrair o máximo do novo acerto aerodinâmico, cravando 0:58.420. Enquanto isso, o F1600 #2 passou por testes de durabilidade focados em race pace, mantendo a consistência na casa de 0:59.000 ao longo de 45 voltas.\\n\\nO trabalho da equipe de engenharia focou na degradação de pneus, e os dados coletados indicam que estamos prontos para a etapa oficial.");
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <DashboardLayout role="admin" title="Jornal & Assessoria (IA)">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Editor Principal */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-card/50 border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
              <h2 className="text-lg font-medium text-foreground">Redação de Matéria</h2>
              <button 
                onClick={handleGenerateAI}
                disabled={isGenerating}
                className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/20 transition-all text-sm font-bold disabled:opacity-50"
              >
                <Sparkles className={`w-4 h-4 ${isGenerating ? 'animate-pulse' : ''}`} /> 
                {isGenerating ? "Gerando Matéria..." : "Gerar com IA"}
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-foreground/50 mb-1">Título da Matéria</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Novo recorde de pista estabelecido..." 
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors font-medium" 
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/50 mb-1">Conteúdo (Estilo Jornalístico)</label>
                {/* Toolbar mock */}
                <div className="border border-border border-b-0 rounded-t-lg bg-background/50 px-3 py-2 flex items-center gap-2">
                  <button className="p-1.5 text-foreground/50 hover:text-foreground hover:bg-input rounded transition-colors font-bold font-serif">B</button>
                  <button className="p-1.5 text-foreground/50 hover:text-foreground hover:bg-input rounded transition-colors italic font-serif">I</button>
                  <div className="w-[1px] h-4 bg-border mx-1"></div>
                  <button className="p-1.5 text-foreground/50 hover:text-foreground hover:bg-input rounded transition-colors"><LinkIcon className="w-4 h-4"/></button>
                  <button className="p-1.5 text-foreground/50 hover:text-foreground hover:bg-input rounded transition-colors"><ImageIcon className="w-4 h-4"/></button>
                </div>
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Comece a escrever sua matéria aqui, ou clique em 'Gerar com IA' para puxar os dados dos últimos treinos..." 
                  className="w-full h-80 bg-input border border-border rounded-b-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none leading-relaxed" 
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button className="px-5 py-2 text-sm font-medium text-foreground/70 bg-background border border-border rounded-lg hover:bg-input transition-colors flex items-center gap-2">
                <Save className="w-4 h-4"/> Salvar Rascunho
              </button>
              <button className="px-5 py-2 text-sm font-bold text-background bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center gap-2">
                <Send className="w-4 h-4"/> Publicar Matéria
              </button>
            </div>
          </div>
        </div>

        {/* Painel Lateral */}
        <div className="space-y-6">
          <div className="bg-card/50 border border-border rounded-xl p-6">
            <h2 className="text-sm font-medium text-foreground mb-4">Contexto para a IA</h2>
            <p className="text-xs text-foreground/50 mb-4 leading-relaxed">
              A Inteligência Artificial lê automaticamente os dados de telemetria dos últimos treinos registrados para criar uma matéria engajadora. Você pode selecionar quais sessões deseja incluir.
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-background/30 cursor-pointer hover:border-primary/50 transition-colors">
                <input type="checkbox" defaultChecked className="accent-primary w-4 h-4" />
                <span className="text-xs font-medium text-foreground">Sessão #102 - F1600 #1 (0:58.420)</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-border rounded-lg bg-background/30 cursor-pointer hover:border-primary/50 transition-colors">
                <input type="checkbox" defaultChecked className="accent-primary w-4 h-4" />
                <span className="text-xs font-medium text-foreground">Sessão #101 - F1600 #2 (Testes)</span>
              </label>
            </div>
          </div>

          <div className="bg-card/50 border border-border rounded-xl p-6">
            <h2 className="text-sm font-medium text-foreground mb-4">Matérias Recentes</h2>
            <div className="space-y-4">
              <div className="group cursor-pointer">
                <h4 className="text-sm text-primary font-medium group-hover:underline">Ajustes finos para a etapa de Interlagos</h4>
                <p className="text-xs text-foreground/50 mt-1">Publicado em 05/06/2026</p>
              </div>
              <div className="group cursor-pointer">
                <h4 className="text-sm text-primary font-medium group-hover:underline">Apresentando a nova pintura da temporada</h4>
                <p className="text-xs text-foreground/50 mt-1">Publicado em 28/05/2026</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
