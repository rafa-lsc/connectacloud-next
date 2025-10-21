"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full flex justify-around items-center px-4 py-2 box-border bg-card text-foreground border-b border-border">
      <Link href={`/`} className="text-lg font-bold text-primary">ConnectaCloud Status</Link>
      <Button
        variant={"default"}
        size={"lg"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="border border-border rounded-lg px-3 py-1.5 bg-background text-foreground cursor-pointer transition-colors duration-200 flex-shrink-0 hover:border-primary hover:bg-card max-[400px]:px-2 max-[400px]:py-1 max-[400px]:text-sm"
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </Button>
    </header>
  );
}
