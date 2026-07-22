import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "../components/PageShell";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Old Library" },
      { name: "description", content: "Seasonal small plates, mains, desserts, and a forty-strong cocktail list across our five volumes." },
      { property: "og:title", content: "Menu — The Old Library" },
      { property: "og:description", content: "Small plates, mains, cocktails, wine, and spirits." },
    ],
  }),
  component: Menu,
});

type Item = { name: string; desc: string; price: string; tags?: string[] };

const sections: Record<string, Item[]> = {
  "Small Plates": [
    { name: "Burrata & Fig", desc: "Stracciatella, blackened fig, aged balsamic, sourdough", price: "68", tags: ["V"] },
    { name: "Seared Scallops", desc: "Cauliflower purée, brown butter, capers", price: "94" },
    { name: "Steak Tartare", desc: "Hand-cut wagyu, cured yolk, smoked oil, brioche crisp", price: "88" },
    { name: "Charred Octopus", desc: "Nduja, potato confit, salsa verde", price: "82" },
  ],
  "Mains": [
    { name: "Ribeye 300g", desc: "Grass-fed, bone marrow butter, chimichurri", price: "220" },
    { name: "Line-caught Sea Bass", desc: "Fennel, blood orange, saffron beurre blanc", price: "165" },
    { name: "Cavatelli Nero", desc: "Squid ink pasta, crab, chilli, garlic crumbs", price: "128" },
    { name: "Charred Cauliflower", desc: "Tahini, pomegranate, dukkah, mint", price: "78", tags: ["V", "GF"] },
  ],
  "Desserts": [
    { name: "Tiramisu 2014", desc: "The original recipe. Twelve layers.", price: "58" },
    { name: "Dark Chocolate Fondant", desc: "Salted caramel, olive oil ice cream", price: "62" },
    { name: "Cheese Board", desc: "Selection of three, honeycomb, oat crackers", price: "88" },
  ],
  "Cocktails · The Classics": [
    { name: "Old Fashioned", desc: "Bourbon, demerara, aromatic bitters, orange oil", price: "68" },
    { name: "Negroni", desc: "London dry, Campari, Antica Formula", price: "62" },
    { name: "Vesper", desc: "Gin, vodka, Lillet Blanc, lemon twist", price: "72" },
  ],
  "Cocktails · The Manuscripts": [
    { name: "The Hemingway", desc: "Aged rum, pink grapefruit, maraschino, absinthe rinse", price: "78" },
    { name: "Fitzgerald's Fold", desc: "Rye, smoked bitters, curaçao, orange peel", price: "82" },
    { name: "Kerouac Green", desc: "Gin, chartreuse verte, sage, lime cordial", price: "76" },
    { name: "Woolf's Waltz", desc: "Mezcal, hibiscus, lemon, chilli tincture", price: "84" },
  ],
  "Wine · By the Glass": [
    { name: "Chablis, Domaine Laroche", desc: "Burgundy, France · 2021", price: "58" },
    { name: "Barolo, Pio Cesare", desc: "Piedmont, Italy · 2018", price: "94" },
    { name: "Sancerre Rouge, Alphonse Mellot", desc: "Loire, France · 2020", price: "72" },
  ],
  "Spirits": [
    { name: "Yamazaki 18", desc: "Japanese single malt", price: "220" },
    { name: "Lagavulin 16", desc: "Islay single malt", price: "95" },
    { name: "Del Maguey Tobalá", desc: "Single village mezcal", price: "88" },
  ],
};

const tabs = Object.keys(sections);

function Menu() {
  const [active, setActive] = useState(tabs[0]);
  const items = sections[active];

  return (
    <PageShell>
      <PageHeader
        eyebrow="Volume II"
        title="The Menu"
        intro="Five volumes of drink. Three chapters of kitchen. Every recipe written by hand and revised each season."
      />

      <div className="sticky top-[72px] z-40 bg-cream/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 overflow-x-auto">
          <div className="flex gap-8 min-w-max">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`text-xs tracking-[0.2em] uppercase pb-2 border-b transition-colors whitespace-nowrap ${
                  active === t
                    ? "text-emerald-deep border-gold"
                    : "text-muted-foreground border-transparent hover:text-emerald-deep"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="display text-4xl md:text-5xl text-center mb-16">{active}</h2>
          <ul className="space-y-10">
            {items.map((it) => (
              <li key={it.name} className="grid grid-cols-[1fr_auto] gap-6 items-baseline">
                <div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-serif text-2xl text-ink">{it.name}</h3>
                    {it.tags?.map((tag) => (
                      <span key={tag} className="text-[0.6rem] tracking-widest text-gold border border-gold/60 px-1.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                    <span className="flex-1 border-b border-dotted border-border/70 self-end mb-1.5" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xl">{it.desc}</p>
                </div>
                <div className="font-serif text-2xl text-emerald-deep whitespace-nowrap">
                  {it.price} <span className="text-xs text-muted-foreground tracking-widest">AED</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-24 border-t border-b border-gold/40 py-10 text-center bg-cream">
            <div className="eyebrow">Pairing</div>
            <p className="font-serif italic text-2xl mt-3">
              Ask our sommelier about the tasting flight — five pours,
              paired to the season, 320 AED.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
