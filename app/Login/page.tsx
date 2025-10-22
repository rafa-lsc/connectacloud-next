"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 bg-background text-foreground">
      <h1 className="text-2xl font-bold">Página de Login</h1>

      <div className="flex flex-col gap-3 w-64">
        <input
          type="text"
          placeholder="Usuário"
          className="border border-border rounded-md px-3 py-2"
        />
        <input
          type="password"
          placeholder="Senha"
          className="border border-border rounded-md px-3 py-2"
        />
        <button
          className="bg-primary text-primary-foreground px-3 py-2 rounded-md hover:opacity-90 transition"
          onClick={() => alert("Simulação de login — definir o cookie manualmente ")}
        >
          Entrar
        </button>
      </div>
    </main>
  );
}

