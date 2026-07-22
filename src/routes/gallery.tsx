import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "../components/PageShell";
import heroImg from "../assets/hero-interior.jpg";
import cocktail1 from "../assets/cocktail-1.jpg";
import cocktail2 from "../assets/cocktail-2.jpg";
import cocktail3 from "../assets/cocktail-3.jpg";
import dish1 from "../assets/dish-1.jpg";
import bartenderImg from "../assets/bartender.jpg";
import booksImg from "../assets/books.jpg";
import eventJazz from "../assets/event-jazz.jpg";
import privateImg from "../assets/private-dining.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Old Library" },
      { name: "description", content: "Interiors, plates, pours, and nights at The Old Library, Dubai." },
      { property: "og:title", content: "Gallery — The Old Library" },
      { property: "og:description", content: "A visual index of nights past." },
    ],
  }),
  component: Gallery,
});

type Cat = "All" | "Interior" | "Drinks" | "Food" | "Nights";

const items: { src: string; cat: Exclude<Cat, "All">; span: string }[] = [
  { src: heroImg, cat: "Interior", span: "row-span-2 aspect-[3/4]" },
  { src: cocktail2, cat: "Drinks", span: "aspect-square" },
  { src: dish1, cat: "Food", span: "aspect-square" },
  { src: eventJazz, cat: "Nights", span: "col-span-2 aspect-[2/1]" },
  { src: cocktail1, cat: "Drinks", span: "aspect-square" },
  { src: booksImg, cat: "Interior", span: "aspect-square" },
  { src: bartenderImg, cat: "Drinks", span: "row-span-2 aspect-[3/4]" },
  { src: privateImg, cat: "Interior", span: "col-span-2 aspect-[2/1]" },
  { src: cocktail3, cat: "Drinks", span: "aspect-square" },
];

function Gallery() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? items : items.filter(i => i.cat === cat);

  return (
    <PageShell>
      <PageHeader eyebrow="Volume VI" title="Gallery" />

      <section className="bg-cream pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center gap-8 mb-16 flex-wrap">
            {(["All","Interior","Drinks","Food","Nights"] as Cat[]).map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`text-xs tracking-[0.25em] uppercase pb-2 border-b transition-colors ${
                  cat === c ? "border-gold text-emerald-deep" : "border-transparent text-muted-foreground hover:text-emerald-deep"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-auto">
            {filtered.map((it, i) => (
              <div key={i} className={`overflow-hidden ${cat === "All" ? it.span : "aspect-square"}`}>
                <img src={it.src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
