"use client";

import Link from "next/link";
import { topics } from "./_data";
import { Menu, X } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  const NavList = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <ul className="grid md:block grid-cols-2 gap-1">
      {topics.map((t) => {
        const href = `/docs/${t.slug}`;
        const active = pathname === href;
        return (
          <li key={t.slug}>
            <Link
              href={href}
              onClick={() => onLinkClick?.()}
              className={`${
                active
                  ? "bg-white/10 border-white/20 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/5 border-transparent"
              } block px-3 py-2 rounded-md text-sm border`}
            >
              <div className="font-medium">{t.title}</div>
              <div className="hidden md:block text-xs text-white/50">{t.description}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="min-h-screen bg-[#0b0c0f] text-white flex flex-col">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0c0f]/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <button
            aria-label="Open sidebar"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 px-2.5 py-2 hover:bg-white/5"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={18} />
          </button>
          <Link href="/docs" className="font-semibold tracking-tight">Docs</Link>
          <div className="ml-auto text-sm text-white/60">v1 • Updated regularly</div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-80 bg-[#0b0c0f] border-r border-white/10 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold tracking-tight">Docs</div>
              <button
                aria-label="Close sidebar"
                className="inline-flex items-center justify-center rounded-md border border-white/15 px-2.5 py-2 hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <nav className="space-y-4">
              <div>
                <div className="px-1 text-xs uppercase tracking-wide text-white/40 mb-2">Guides</div>
                <NavList onLinkClick={() => setMobileOpen(false)} />
              </div>
            </nav>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0 md:gap-6 px-4 w-full flex-1">
        <aside className="hidden md:block md:sticky md:top-[57px] h-auto md:h-[calc(100vh-57px)] md:overflow-y-auto py-4 md:py-6">
          <nav className="space-y-6">
            <div>
              <div className="px-2 text-xs uppercase tracking-wide text-white/40 mb-2">Guides</div>
              <NavList />
            </div>
          </nav>
        </aside>

        <main className="min-w-0 py-6 md:py-8">
          <article className="space-y-6 text-white/90 leading-relaxed [&>h1]:text-3xl [&>h2]:text-xl [&>h3]:text-lg [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_pre]:bg-white/5 [&_pre]:border [&_pre]:border-white/10 [&_pre]:p-3 [&_pre]:rounded-md [&_pre]:overflow-x-auto">
            {children}
          </article>
        </main>
      </div>

      <footer className="mt-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-white/50">
          © {new Date().getFullYear()} Example Inc. • Built with Next.js • Accessibility-first
        </div>
      </footer>
    </div>
  );
}
