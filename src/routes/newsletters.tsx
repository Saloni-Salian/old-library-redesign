import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { PageShell, PageHeader } from "../components/PageShell";

export const Route = createFileRoute("/newsletters")({
  head: () => ({
    meta: [
      { title: "Newsletters — The Old Library" },
      {
        name: "description",
        content:
          "Read the monthly newsletter from The Old Library — new arrivals, storytime notes, member news, and a full archive of past issues.",
      },
      { property: "og:title", content: "Newsletters — The Old Library" },
      {
        property: "og:description",
        content: "One letter a month: new arrivals, events, and reading notes from the library desk.",
      },
    ],
  }),
  component: Newsletters,
});

const latest = {
  month: "August 2026",
  title: "Long afternoons, longer books",
  intro:
    "Our summer reading wall is nearly full, forty-one new titles have joined the shelves, and Saturday storytime moves indoors to the reading room until September.",
  sections: [
    "New on the shelves — forty-one titles across fiction, Arabic literature, and picture books.",
    "Storytime notes — what the under-sevens loved most this month.",
    "Member spotlight — the Haddad family on reading aloud at bedtime.",
    "Coming in September — the return of the evening book club.",
  ],
};

const archive = [
  { month: "July 2026", title: "A shelf for the summer" },
  { month: "June 2026", title: "Forty new picture books" },
  { month: "May 2026", title: "Reading in two languages" },
  { month: "April 2026", title: "The quiet hour experiment" },
  { month: "March 2026", title: "Notes from the mending table" },
  { month: "February 2026", title: "Short books, long evenings" },
  { month: "January 2026", title: "What we read last year" },
  { month: "December 2025", title: "Winter storytime, candlelit" },
];

function Newsletters() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Volume VI"
        title="Newsletters"
        intro="One letter a month from the library desk — new arrivals, event dates, and notes from our readers."
      />

      {/* LATEST */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-5xl grid lg:grid-cols-[1.4fr_1fr] gap-14 items-start">
          <article>
            <div className="eyebrow">Latest issue · {latest.month}</div>
            <h2 className="display text-4xl md:text-5xl mt-4">{latest.title}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-prose">
              {latest.intro}
            </p>
            <ul className="mt-8 divide-y divide-border">
              {latest.sections.map((s) => (
                <li key={s} className="py-4 flex gap-4 text-sm text-muted-foreground">
                  <FileText size={16} className="text-gold shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 bg-gold text-cream hover:bg-gold-soft text-xs tracking-[0.25em] uppercase transition-colors"
            >
              Read the August issue <ArrowUpRight size={14} />
            </a>
          </article>

          <aside className="bg-emerald-deep gold-frame p-10">
            <Mail className="text-gold" size={22} />
            <h3 className="font-serif text-2xl mt-5">Get it by email</h3>
            <p className="mt-3 text-sm text-ink/70">
              We send one newsletter a month — never more. Unsubscribe with a single
              click.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 space-y-4"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full bg-transparent border-b border-gold/40 py-3 text-sm placeholder:text-ink/40 outline-none focus:border-gold"
              />
              <button className="w-full py-4 bg-gold text-cream hover:bg-gold-soft text-xs tracking-[0.25em] uppercase transition-colors">
                Subscribe
              </button>
            </form>
          </aside>
        </div>
      </section>

      {/* ARCHIVE */}
      <section className="bg-emerald-deep py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <div className="eyebrow">The archive</div>
            <h2 className="display text-4xl md:text-5xl mt-4">Previous issues</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-x-12">
            {archive.map((n) => (
              <li key={n.month} className="border-b border-gold/25">
                <a
                  href="#"
                  className="group flex items-center justify-between gap-6 py-6"
                >
                  <span>
                    <span className="block text-[0.65rem] tracking-[0.25em] uppercase text-gold">
                      {n.month}
                    </span>
                    <span className="block font-serif text-xl mt-2 group-hover:text-gold transition-colors">
                      {n.title}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-gold shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center text-sm text-ink/60">
            Looking for something older? Bound copies of every newsletter since 2014
            live on the desk by the entrance.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
