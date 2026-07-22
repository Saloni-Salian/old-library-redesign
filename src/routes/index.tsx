import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import heroImg from "../assets/hero-interior.jpg";
import cocktail1 from "../assets/cocktail-1.jpg";
import cocktail2 from "../assets/cocktail-2.jpg";
import cocktail3 from "../assets/cocktail-3.jpg";
import dish1 from "../assets/dish-1.jpg";
import bartenderImg from "../assets/bartender.jpg";
import booksImg from "../assets/books.jpg";
import eventJazz from "../assets/event-jazz.jpg";
import privateImg from "../assets/private-dining.jpg";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Old Library — Literary Cocktail Salon, Dubai" },
      { name: "description", content: "A dim-lit literary sanctuary in Dubai. Signature cocktails, seasonal kitchen, live jazz nightly. Reserve your chapter." },
      { property: "og:title", content: "The Old Library — Literary Cocktail Salon" },
      { property: "og:description", content: "Where every cocktail begins with a story." },
    ],
  }),
  component: Home,
});

const cocktails = [
  { name: "The Hemingway", note: "Rum · Grapefruit · Maraschino", img: cocktail1 },
  { name: "Fitzgerald's Fold", note: "Rye · Smoked Bitters · Orange", img: cocktail2 },
  { name: "Kerouac Green", note: "Gin · Chartreuse · Sage", img: cocktail3 },
];

const events = [
  { date: "24", month: "Jul", title: "Late Night Jazz Quartet", tag: "Live Music" },
  { date: "31", month: "Jul", title: "Spoken Word: Summer Editions", tag: "Poetry" },
  { date: "07", month: "Aug", title: "Vinyl Nights with DJ Sable", tag: "DJ Set" },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative h-screen min-h-[720px] overflow-hidden">
        <img
          src={heroImg}
          alt="The Old Library dim interior"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/70 via-emerald-deep/40 to-emerald-deep/90" />

        <div className="relative h-full flex flex-col justify-end pb-24 px-6">
          <div className="mx-auto max-w-6xl w-full">
            <div className="max-w-3xl">
              <div className="eyebrow mb-6 text-gold">Since 2014 · Dubai</div>
              <h1 className="display text-cream text-6xl md:text-8xl lg:text-9xl">
                Where stories<br />
                <em className="text-gold not-italic font-light">are poured.</em>
              </h1>
              <p className="mt-8 text-cream/75 max-w-xl text-lg leading-relaxed font-light">
                A dim-lit literary salon of cocktails, kitchen, and slow conversation —
                shelved between the pages of another world.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/reservations"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-emerald-deep hover:bg-gold-soft text-xs tracking-[0.25em] uppercase font-medium transition-colors"
                >
                  Reserve a table <ArrowRight size={14} />
                </Link>
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-cream/40 text-cream hover:border-gold hover:text-gold text-xs tracking-[0.25em] uppercase transition-colors"
                >
                  Explore the menu
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 text-cream/50 text-[0.65rem] tracking-[0.3em] uppercase rotate-90 origin-bottom-right">
          Chapter I · The Threshold
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-cream py-32 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <div className="eyebrow">Prologue</div>
            <div className="mt-6 h-px w-16 bg-gold" />
          </div>
          <div className="md:col-span-8">
            <p className="display text-3xl md:text-4xl text-ink leading-tight">
              <span className="float-left font-serif text-7xl leading-[0.8] pr-3 pt-2 text-gold">A</span>
              hidden salon behind a shelf of first editions — The Old Library was
              built for the long conversation. Twelve years on, our bartenders still
              write recipes like short stories, and our kitchen still plates them
              like poetry.
            </p>
            <div className="mt-10 flex items-start gap-4 text-muted-foreground">
              <Quote className="text-gold shrink-0 mt-1" size={20} />
              <p className="italic font-serif text-lg">
                "The best bar in Dubai for people who read the menu twice."
                <span className="not-italic text-xs tracking-[0.2em] uppercase text-gold/80 block mt-2">
                  — Time Out Dubai
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE COCKTAILS */}
      <section className="bg-emerald-deep text-cream py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow">Chapter II</div>
              <h2 className="display text-5xl md:text-6xl text-cream mt-4">Signature Pours</h2>
            </div>
            <Link to="/menu" className="text-gold hover:text-gold-soft text-xs tracking-[0.25em] uppercase flex items-center gap-2">
              Full list <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cocktails.map((c, i) => (
              <article key={c.name} className="group">
                <div className="arched aspect-[3/4] overflow-hidden gold-frame bg-emerald">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="text-gold/70 text-xs tracking-[0.3em] uppercase">
                    №&nbsp;{String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-3xl mt-2 text-cream">{c.name}</h3>
                  <p className="text-cream/60 text-sm mt-2">{c.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MENU SPLIT */}
      <section className="bg-cream py-32 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12">
          <div className="relative">
            <img src={dish1} alt="Kitchen" width={1200} height={900} loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute bottom-0 left-0 bg-cream p-8 max-w-sm">
              <div className="eyebrow">The Kitchen</div>
              <h3 className="display text-3xl mt-3">Small plates, long dinners</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Seasonal Mediterranean plates from Chef Amir, designed to be shared over hours.
              </p>
              <Link to="/menu" className="mt-5 inline-flex items-center gap-2 text-emerald-deep border-b border-gold pb-1 text-xs tracking-[0.2em] uppercase">
                Read the menu <ArrowRight size={12} />
              </Link>
            </div>
          </div>
          <div className="relative md:mt-24">
            <img src={bartenderImg} alt="Bar" width={1200} height={1400} loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute bottom-0 right-0 bg-cream p-8 max-w-sm">
              <div className="eyebrow">The Bar</div>
              <h3 className="display text-3xl mt-3">Recipes as short stories</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Forty pours across five volumes — the Classics, the Reprints, the Manuscripts, the Blind Editions, and the Nightcaps.
              </p>
              <Link to="/menu" className="mt-5 inline-flex items-center gap-2 text-emerald-deep border-b border-gold pb-1 text-xs tracking-[0.2em] uppercase">
                Turn the page <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-ink text-cream py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow">Chapter III</div>
              <h2 className="display text-5xl md:text-6xl mt-4 text-cream">Live at the Library</h2>
            </div>
            <Link to="/events" className="text-gold hover:text-gold-soft text-xs tracking-[0.25em] uppercase flex items-center gap-2">
              All events <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gold/20">
            {events.map((e) => (
              <div key={e.title} className="bg-ink p-10 hover:bg-emerald-deep transition-colors group">
                <div className="flex items-baseline gap-3">
                  <span className="display text-6xl text-gold">{e.date}</span>
                  <span className="font-serif text-xl text-cream/70 uppercase tracking-widest">{e.month}</span>
                </div>
                <div className="eyebrow mt-8">{e.tag}</div>
                <h3 className="font-serif text-2xl mt-3 text-cream">{e.title}</h3>
                <div className="mt-6 text-xs tracking-[0.25em] uppercase text-cream/50 group-hover:text-gold transition-colors">
                  9:30 pm · Free entry
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS MARQUEE */}
      <section className="bg-cream py-16 border-y border-border overflow-hidden">
        <div className="flex items-center justify-around flex-wrap gap-x-16 gap-y-6 opacity-70 max-w-7xl mx-auto px-6">
          {["TIME OUT", "CONDÉ NAST", "ESQUIRE", "GQ MIDDLE EAST", "GAULT&MILLAU", "50 BEST BARS"].map((p) => (
            <span key={p} className="font-serif italic text-xl text-emerald-deep tracking-widest">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-cream py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="eyebrow">Chapter IV</div>
            <h2 className="display text-5xl md:text-6xl mt-4">Between the Shelves</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[heroImg, cocktail2, dish1, booksImg, cocktail3, eventJazz, bartenderImg, privateImg].map((src, i) => (
              <div key={i} className={`overflow-hidden ${i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="relative py-40 px-6 overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-emerald-deep/85" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="eyebrow text-gold">Epilogue</div>
          <h2 className="display text-5xl md:text-7xl text-cream mt-6">
            Reserve your <em className="text-gold not-italic">chapter</em>
          </h2>
          <p className="mt-6 text-cream/70 max-w-xl mx-auto">
            Tables released four weeks in advance. Walk-ins welcome at the bar
            after 10pm on weeknights.
          </p>
          <Link
            to="/reservations"
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-gold text-emerald-deep hover:bg-gold-soft text-xs tracking-[0.25em] uppercase font-medium"
          >
            Book a table <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
