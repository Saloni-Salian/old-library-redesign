import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-emerald-deep text-ink pt-40 pb-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div className="eyebrow mb-6">{eyebrow}</div>
        <h1 className="display text-5xl md:text-7xl text-ink">{title}</h1>
        {intro && (
          <p className="mt-8 text-ink/70 max-w-2xl mx-auto leading-relaxed">{intro}</p>
        )}
        <div className="mt-10 flex justify-center">
          <span className="rule" />
        </div>
      </div>
    </section>
  );
}
