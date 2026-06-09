"use client";

import { useRouter } from "next/navigation";
import { User, ShieldCheck, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const handleBypass = (role: "admin" | "pilot") => {
    if (role === "admin") {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/fotos/galeria-1.jpg')] bg-cover bg-center bg-no-repeat relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0"></div>

      <div className="z-10 w-full max-w-md p-8 bg-card/60 backdrop-blur-md rounded-2xl border border-border shadow-2xl relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-8 relative">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20 shadow-[0_0_15px_rgba(118,251,0,0.2)]">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Acesso ao Portal</h1>
          <p className="text-sm text-foreground/60 mt-2">
            Modo de Apresentação Ativo
          </p>
          <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg text-xs text-primary/80">
            <p><strong>Aviso de Demonstração:</strong></p>
            <p>A autenticação está liberada para testes.</p>
            <p>Escolha o perfil abaixo para acessar o painel.</p>
          </div>
        </div>

        <div className="space-y-4 relative">
          <button
            onClick={() => handleBypass("admin")}
            className="w-full text-background bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/30 font-bold rounded-lg text-sm px-5 py-4 text-center flex justify-between items-center transition-all shadow-lg"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5" />
              <span>Entrar como Administrador</span>
            </div>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => handleBypass("pilot")}
            className="w-full text-foreground bg-input/80 hover:bg-input border border-border focus:ring-4 focus:outline-none focus:ring-border font-medium rounded-lg text-sm px-5 py-4 text-center flex justify-between items-center transition-all"
          >
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-primary" />
              <span>Entrar como Piloto Cliente</span>
            </div>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
