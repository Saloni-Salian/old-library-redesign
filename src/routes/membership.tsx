import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { PageShell, PageHeader } from "../components/PageShell";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — The Old Library" },
      { name: "description", content: "Family, individual, and student memberships. Borrow up to eight books at a time and attend every event free." },
      { property: "og:title", content: "Membership — The Old Library" },
      { property: "og:description", content: "Three ways to join the library." },
    ],
  }),
  component: Membership,
});

const tiers = [
  {
    name: "Individual",
    price: "240",
    per: "AED / year",
    borrow: "4 books",
    perks: ["Reserve online", "All events free", "Reading room access", "Monthly reading list"],
  },
  {
    name: "Family",
    price: "420",
    per: "AED / year",
    borrow: "8 books",
    perks: ["One card per household", "Kids under 12 free", "Priority storytime seats", "Reserve online", "All events free"],
    featured: true,
  },
  {
    name: "Student",
    price: "120",
    per: "AED / year",
    borrow: "4 books",
    perks: ["Under-25 rate", "Study room booking", "Reserve online", "All events free"],
  },
];

const faqs = [
  {
    q: "How long can I borrow a book for?",
    a: "Three weeks by default, renewable twice if nobody has reserved the title after you.",
  },
  {
    q: "Do children need their own card?",
    a: "No — under-twelves are included on the family membership. Teenagers can either share the family card or take their own student card.",
  },
  {
    q: "What happens if I lose a book?",
    a: "We ask for a replacement copy or the retail price of the book. We are gentle about it.",
  },
  {
    q: "Can I join for a shorter period?",
    a: "We run three-month trial memberships for new residents — ask at the desk.",
  },
];

function Membership() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Volume III"
        title="Membership"
        intro="One annual fee. Every reader in the household. Every book on our shelves."
      />

      {/* TIERS */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`p-10 flex flex-col ${
                t.featured
                  ? "bg-emerald-deep text-cream gold-frame relative"
                  : "bg-cream border border-border"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-emerald-deep text-[0.6rem] tracking-[0.25em] uppercase px-3 py-1">
                  Most Loved
                </div>
              )}
              <div className={`eyebrow ${t.featured ? "text-gold" : ""}`}>{t.name}</div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className={`display text-6xl ${t.featured ? "text-cream" : "text-emerald-deep"}`}>
                  {t.price}
                </span>
                <span className={`text-xs tracking-widest uppercase ${t.featured ? "text-cream/60" : "text-muted-foreground"}`}>
                  {t.per}
                </span>
              </div>
              <div className={`mt-2 font-serif italic ${t.featured ? "text-gold" : "text-gold"}`}>
                Borrow up to {t.borrow}
              </div>

              <ul className={`mt-8 space-y-3 flex-1 ${t.featured ? "text-cream/85" : "text-muted-foreground"}`}>
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-gold shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>

              <Link
                to="/login"
                className={`mt-10 inline-flex justify-center items-center py-4 text-xs tracking-[0.25em] uppercase font-medium ${
                  t.featured
                    ? "bg-gold text-emerald-deep hover:bg-gold-soft"
                    : "border border-emerald-deep text-emerald-deep hover:bg-emerald-deep hover:text-cream"
                } transition-colors`}
              >
                Join {t.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section className="bg-emerald-deep text-cream py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="eyebrow">Three simple steps</div>
            <h2 className="display text-4xl md:text-5xl text-cream mt-4">How to join</h2>
          </div>
          <ol className="grid md:grid-cols-3 gap-10">
            {[
              { n: "01", t: "Create an account", d: "Fill in a short form — takes about two minutes. No card details yet." },
              { n: "02", t: "Choose a tier", d: "Individual, family, or student. Change or cancel anytime in the first month." },
              { n: "03", t: "Collect your card", d: "Pop in to the library to sign the register and pick up your card. Coffee is on us." },
            ].map((s) => (
              <li key={s.n} className="border-t border-gold/30 pt-6">
                <div className="display text-4xl text-gold">{s.n}</div>
                <h3 className="font-serif text-2xl mt-3">{s.t}</h3>
                <p className="mt-3 text-cream/70 text-sm">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <div className="eyebrow">Questions</div>
            <h2 className="display text-4xl md:text-5xl mt-4">Frequently asked</h2>
          </div>
          <ul className="divide-y divide-border">
            {faqs.map((f, i) => (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-xl text-ink">{f.q}</span>
                  <ChevronDown
                    className={`text-gold transition-transform ${open === i ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                {open === i && (
                  <p className="pb-6 text-muted-foreground max-w-prose">{f.a}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
