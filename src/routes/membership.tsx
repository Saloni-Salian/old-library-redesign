import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown, Gift, Users, MapPin } from "lucide-react";
import { PageShell, PageHeader } from "../components/PageShell";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — The Old Library" },
      {
        name: "description",
        content:
          "One membership, AED 200 a year, for the whole household. Refer a friend or gift a year and earn a free month. Sign up in person at the library.",
      },
      { property: "og:title", content: "Membership — The Old Library" },
      {
        property: "og:description",
        content: "AED 200 a year. Referrals and gift cards each earn you a free month.",
      },
    ],
  }),
  component: Membership,
});

const perks = [
  "Borrow up to eight books at a time",
  "One card per household — every reader included",
  "Reserve titles online before you visit",
  "All events and storytimes free",
  "Reading room and study table access",
  "Monthly newsletter and reading list",
];

const faqs = [
  {
    q: "How do I sign up?",
    a: "In person at the library. We do not process memberships online — pop in during opening hours, sign the register, and we will print your card while you wait.",
  },
  {
    q: "How long can I borrow a book for?",
    a: "Three weeks by default, renewable twice if nobody has reserved the title after you.",
  },
  {
    q: "How does the referral month work?",
    a: "When someone you refer signs up at the desk and names you, we add one free month to your membership. There is no cap — refer five families and earn five months.",
  },
  {
    q: "What is included in a gift card?",
    a: "A full year of membership at AED 200, presented as a printed card. The person buying it also receives one free month on their own membership.",
  },
  {
    q: "Do children need their own card?",
    a: "No — the household membership covers everyone living at the same address, children included.",
  },
  {
    q: "What happens if I lose a book?",
    a: "We ask for a replacement copy or the retail price of the book. We are gentle about it.",
  },
];

function Membership() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Volume III"
        title="Membership"
        intro="One membership. One annual fee. Every reader in the household, every book on our shelves."
      />

      {/* THE MEMBERSHIP */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-5xl grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <article className="bg-emerald-deep gold-frame p-12 relative">
            <div className="absolute -top-3 left-12 bg-gold text-cream text-[0.6rem] tracking-[0.25em] uppercase px-3 py-1">
              Household Membership
            </div>
            <div className="eyebrow">Annual</div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="display text-7xl">200</span>
              <span className="text-xs tracking-widest uppercase text-ink/60">
                AED / year
              </span>
            </div>
            <div className="mt-2 font-serif italic text-gold">
              Borrow up to eight books at a time
            </div>
            <ul className="mt-8 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-ink/80">
                  <Check size={16} className="text-gold shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </article>

          <div>
            <div className="eyebrow">Joining</div>
            <h2 className="display text-4xl md:text-5xl mt-4">
              We sign members up in person
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-prose">
              There is no online sign-up — and that is on purpose. We like to meet
              every family, walk you through the shelves, and hand you your card
              across the desk. It takes about ten minutes.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                {
                  t: "Visit the library",
                  d: "12 Al Wasl Road, Jumeirah. Mon – Fri 9am – 8pm, Sat – Sun 10am – 6pm.",
                },
                {
                  t: "Bring one ID",
                  d: "Emirates ID or passport for the adult named on the household card.",
                },
                {
                  t: "Pay at the desk",
                  d: "AED 200 for the year, by card or cash. Your card is printed on the spot.",
                },
              ].map((s) => (
                <li key={s.t} className="border-t border-border pt-4">
                  <h3 className="font-serif text-xl">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-gold text-cream hover:bg-gold-soft text-xs tracking-[0.25em] uppercase transition-colors"
              >
                <MapPin size={14} /> Plan your visit
              </Link>
              <Link
                to="/catalogue"
                className="inline-flex items-center px-7 py-4 border border-ink text-ink hover:bg-ink hover:text-cream text-xs tracking-[0.25em] uppercase transition-colors"
              >
                Browse the shelves
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REFERRAL + GIFT CARD */}
      <section className="bg-emerald-deep py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="eyebrow">Two ways to earn a free month</div>
            <h2 className="display text-4xl md:text-5xl mt-4">
              Share the library
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-cream p-10 flex flex-col">
              <Users className="text-gold" size={24} />
              <h3 className="font-serif text-2xl mt-5">Refer a friend</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-1">
                Send a family our way. When they join at the desk and name you, we
                add <span className="text-ink">one free month</span> to your
                membership. No limit on how many months you can collect.
              </p>
              <div className="mt-8 pt-6 border-t border-border text-[0.7rem] tracking-[0.22em] uppercase text-gold">
                +1 month free per referral
              </div>
            </article>

            <article className="bg-cream p-10 flex flex-col">
              <Gift className="text-gold" size={24} />
              <h3 className="font-serif text-2xl mt-5">Gift a year</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-1">
                A one-year gift card at AED 200 — the price of a full membership,
                printed and ready to hand over. The buyer also receives{" "}
                <span className="text-ink">one free month</span> on their own card.
              </p>
              <div className="mt-8 pt-6 border-t border-border text-[0.7rem] tracking-[0.22em] uppercase text-gold">
                AED 200 · +1 month free for you
              </div>
            </article>
          </div>
          <p className="mt-12 text-center text-sm text-ink/60">
            Referrals and gift cards are arranged at the library desk.
          </p>
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
