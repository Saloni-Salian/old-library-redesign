import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "../components/PageShell";
import heroImg from "../assets/hero-interior.jpg";
import bartenderImg from "../assets/bartender.jpg";
import booksImg from "../assets/books.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — The Old Library" },
      { name: "description", content: "Twelve years of long nights, hand-written recipes, and slow conversation. The story of The Old Library, Dubai." },
      { property: "og:title", content: "Our Story — The Old Library" },
      { property: "og:description", content: "Twelve years of long nights and hand-written recipes." },
    ],
  }),
  component: Story,
});

const milestones = [
  { y: "2014", t: "First chapter", d: "Opened as a fourteen-seat cocktail room hidden behind a bookshelf." },
  { y: "2016", t: "The Kitchen opens", d: "Chef Amir joins and adds a fourteen-plate menu." },
  { y: "2019", t: "Fifty Best debut", d: "Recognised on the Middle East's leading bar lists." },
  { y: "2022", t: "The expansion", d: "Second floor added: the Reading Room and Author's Study." },
  { y: "2026", t: "Twelfth volume", d: "Anniversary menu revisits every signature since 2014." },
];

function Story() {
  return (
    <PageShell>
      <PageHeader eyebrow="Volume I" title="Our Story" />

      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="display text-3xl md:text-4xl leading-tight text-ink">
            <span className="float-left font-serif text-8xl leading-[0.8] pr-3 pt-2 text-gold">I</span>
            n the winter of 2014, three friends took over a dim room above a
            bookshop in old Dubai and started serving cocktails to whoever
            knocked. There was no sign — only a shelf of first editions and a
            small brass bell. Twelve years later, the bell is still there.
          </p>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            We built The Old Library for the long conversation — the kind that
            begins with a single pour and ends four hours later on a subject
            neither of you saw coming. Every recipe is written by hand. Every
            plate is designed to be shared. Every night is a chapter we hope
            you'll want to reread.
          </p>
        </div>

        {/* PORTRAITS */}
        <div className="mx-auto max-w-6xl mt-24 grid md:grid-cols-3 gap-8">
          {[
            { name: "Karim Halabi", role: "Founder & Head Bar", img: bartenderImg },
            { name: "Amir Osei", role: "Executive Chef", img: heroImg },
            { name: "Layla Ashour", role: "Creative & Events", img: booksImg },
          ].map((p) => (
            <div key={p.name}>
              <div className="arched aspect-[3/4] gold-frame overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-serif text-2xl">{p.name}</h3>
                <div className="eyebrow mt-2">{p.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* PULL QUOTE */}
        <div className="mx-auto max-w-3xl mt-32 text-center">
          <p className="font-serif italic text-3xl md:text-4xl text-emerald-deep">
            "A cocktail is a short story you drink in twelve minutes. We just try
            to write good ones."
          </p>
          <div className="eyebrow mt-6">— Karim Halabi, Founder</div>
        </div>

        {/* TIMELINE */}
        <div className="mx-auto max-w-3xl mt-32">
          <div className="text-center mb-12">
            <div className="eyebrow">Twelve years</div>
            <h2 className="display text-4xl mt-3">Chapter by chapter</h2>
          </div>
          <ol className="relative border-l border-gold/50 pl-8 space-y-10">
            {milestones.map((m) => (
              <li key={m.y}>
                <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-gold" />
                <div className="font-serif text-3xl text-emerald-deep">{m.y}</div>
                <div className="eyebrow mt-1">{m.t}</div>
                <p className="mt-2 text-muted-foreground">{m.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
