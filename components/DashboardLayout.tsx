"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ReceiptText, CalendarCheck, Settings, LogOut, Users, FileText, Activity, Wrench, Newspaper } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "admin" | "pilot";
  title: string;
}

export default function DashboardLayout({ children, role, title }: DashboardLayoutProps) {
  const pathname = usePathname();

  const pilotLinks = [
    { name: "Visão Geral", href: "/dashboard", icon: LayoutDashboard },
    { name: "Minhas Reservas", href: "/dashboard/reservations", icon: CalendarCheck },
    { name: "Pagamentos", href: "/dashboard/payments", icon: ReceiptText },
    { name: "Configurações", href: "/dashboard/settings", icon: Settings },
  ];

  const adminLinks = [
    { name: "Painel Geral", href: "/admin", icon: LayoutDashboard },
    { name: "Pilotos", href: "/admin/pilots", icon: Users },
    { name: "Treinos", href: "/admin/trainings", icon: Activity },
    { name: "Manutenção", href: "/admin/maintenance", icon: Wrench },
    { name: "Reservas", href: "/admin/reservations", icon: CalendarCheck },
    { name: "Financeiro", href: "/admin/finance", icon: ReceiptText },
    { name: "Jornal & Mídia", href: "/admin/journal", icon: Newspaper },
    { name: "Configurações", href: "/admin/settings", icon: Settings },
  ];

  const links = role === "admin" ? adminLinks : pilotLinks;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <span className="text-xl font-bold text-primary">OldMonkey</span>
          <span className="ml-2 text-sm text-foreground/50 border border-border px-2 py-0.5 rounded bg-background/50 uppercase tracking-widest">
            {role}
          </span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                  isActive 
                    ? "text-primary bg-primary/10 border border-primary/20" 
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5 border border-transparent"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border">
          <Link
            href="/login"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Sair da Conta</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center px-8 border-b border-border bg-card/50 backdrop-blur sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          <div className="ml-auto flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="text-sm font-medium text-primary">
                {role === "admin" ? "AD" : "PL"}
              </span>
            </div>
          </div>
        </header>
        <div className="p-8 overflow-y-auto flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
