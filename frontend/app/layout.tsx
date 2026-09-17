import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SeguraMais | Consultoria em Segurança do Trabalho",
  description:
    "Consultoria especializada em Segurança e Saúde do Trabalho para empresas mais seguras, conformes e preparadas.",
  icons: { icon: "/icon.png", shortcut: "/icon.png" },
  openGraph: {
    title: "SeguraMais | Consultoria em Segurança do Trabalho",
    description: "Protegemos pessoas. Fortalecemos negócios.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
