import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "../components/PageShell";
import eventJazz from "../assets/event-jazz.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Live Music — The Old Library" },
      { name: "description", content: "Jazz, poetry, and vinyl nights at Dubai's literary cocktail salon." },
      { property: "og:title", content: "Events at The Old Library" },
      { property: "og:description", content: "Live music, spoken word, and vinyl nights." },
    ],
  }),
  component: Events,
});

const events = [
  { d: "24", m: "Jul", title: "Late Night Jazz Quartet", tag: "Live Music", time: "9:30 pm", by: "The Karim Trio + Guest" },
  { d: "26", m: "Jul", title: "Weekend Vinyl: Deep Cuts", tag: "DJ Set", time: "11:00 pm", by: "DJ Sable" },
  { d: "31", m: "Jul", title: "Spoken Word: Summer Editions", tag: "Poetry", time: "8:00 pm", by: "Curated by Layla A." },
  { d: "03", m: "Aug", title: "Piano & Whiskey", tag: "Live Music", time: "9:00 pm", by: "Solomon Reyes" },
  { d: "07", m: "Aug", title: "Vinyl Nights", tag: "DJ Set", time: "11:00 pm", by: "DJ Sable" },
  { d: "14", m: "Aug", title: "Manuscripts: Cocktail Tasting", tag: "Tasting", time: "7:30 pm", by: "Head Bar" },
  { d: "21", m: "Aug", title: "Author in Residence: Feature", tag: "Poetry", time: "8:30 pm", by: "TBA" },
];

function Events() {
  const [featured, ...rest] = events;
  return (
    <PageShell>
      <PageHeader eyebrow="Volume IV" title="Live at the Library" intro="A rotating cast of jazz, poetry, DJs and tastings — most nights, always free of a cover." />

      <section className="bg-cream py-20 px-6">
        <div className="mx-auto max-w-7xl">
          {/* FEATURED */}
          <article className="grid md:grid-cols-2 gap-10 items-center bg-emerald-deep text-cream p-8 md:p-12">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={eventJazz} alt={featured.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="eyebrow">Featured · {featured.tag}</div>
              <h2 className="display text-4xl md:text-5xl mt-4 text-cream">{featured.title}</h2>
              <p className="mt-4 text-cream/70">{featured.by}</p>
              <div className="mt-8 flex items-baseline gap-6">
                <div>
                  <div className="display text-6xl text-gold">{featured.d}</div>
                  <div className="text-xs tracking-widest uppercase text-cream/60 mt-1">{featured.m} · {featured.time}</div>
                </div>
                <Link to="/reservations" className="ml-auto inline-flex items-center gap-3 px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-emerald-deep text-xs tracking-[0.25em] uppercase transition-colors">
                  Reserve <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </article>

          {/* LIST */}
          <ul className="mt-20 divide-y divide-border">
            {rest.map((e) => (
              <li key={e.title + e.d} className="grid grid-cols-[80px_1fr_auto] gap-8 py-8 items-center group">
                <div className="text-center border-r border-gold/40 pr-4">
                  <div className="display text-4xl text-emerald-deep">{e.d}</div>
                  <div className="text-[0.65rem] tracking-widest uppercase text-muted-foreground">{e.m}</div>
                </div>
                <div>
                  <div className="eyebrow text-gold/80">{e.tag}</div>
                  <h3 className="font-serif text-2xl mt-1 text-ink group-hover:text-emerald transition-colors">{e.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{e.by} · {e.time}</p>
                </div>
                <Link to="/reservations" className="text-xs tracking-[0.2em] uppercase text-emerald-deep border-b border-gold pb-1 hover:text-emerald">
                  Reserve
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-24 text-center bg-ink text-cream py-16 px-6">
            <div className="eyebrow">Host</div>
            <h3 className="display text-4xl mt-4">Bringing an event to us?</h3>
            <p className="mt-4 max-w-lg mx-auto text-cream/70">Book readings, launches, and residencies in the private library room.</p>
            <Link to="/private-dining" className="mt-8 inline-flex items-center gap-3 text-gold text-xs tracking-[0.25em] uppercase border-b border-gold pb-1">
              Private hire <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
