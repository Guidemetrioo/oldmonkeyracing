import DashboardLayout from "@/components/DashboardLayout";
import { Upload } from "lucide-react";

export default function PilotSettings() {
  return (
    <DashboardLayout role="pilot" title="Configurações do Perfil">
      <div className="max-w-3xl">
        <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-medium text-foreground mb-4 border-b border-border pb-2">Dados Pessoais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-foreground/50 mb-1">Nome Completo</label>
              <input type="text" defaultValue="Piloto Demo" className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground/50 mb-1">E-mail</label>
              <input type="email" defaultValue="piloto@demo.com" className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground/50 mb-1">Telefone (WhatsApp)</label>
              <input type="tel" defaultValue="(11) 98888-7777" className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary" />
            </div>
          </div>
        </div>

        <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-medium text-foreground mb-4 border-b border-border pb-2">Ficha Médica & Equipamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-foreground/50 mb-1">Tipo Sanguíneo</label>
              <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                <option>O+</option>
                <option>O-</option>
                <option>A+</option>
                <option>B+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground/50 mb-1">Tamanho Macacão</label>
              <select className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary">
                <option>M</option>
                <option>G</option>
                <option>GG</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
          <h2 className="text-lg font-medium text-foreground mb-4 border-b border-border pb-2">Documentos e Contratos</h2>
          <div className="flex flex-col gap-3">
            <label className="block text-xs font-medium text-foreground/50">Contrato de Locação Assinado Digitalmente (PDF)</label>
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
              <Upload className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm font-medium text-foreground">Clique para enviar ou arraste o arquivo</p>
              <p className="text-xs text-foreground/50 mt-1">Aceita apenas arquivos em .PDF (Máximo 5MB)</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button className="px-5 py-2 text-sm font-medium text-foreground/70 bg-background border border-border rounded-lg hover:bg-input transition-colors">Cancelar</button>
          <button className="px-5 py-2 text-sm font-bold text-background bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">Salvar Alterações</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
