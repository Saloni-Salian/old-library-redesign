import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { BookOpen, Heart, HandHelping } from "lucide-react";
import { PageShell, PageHeader } from "../components/PageShell";
import shelvesImg from "../assets/shelves.jpg";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support the Library — The Old Library" },
      { name: "description", content: "Three ways to give back to a non-profit lending library: donate books, contribute funds, or volunteer your time." },
      { property: "og:title", content: "Support the Library" },
      { property: "og:description", content: "Every book on our shelves was given." },
    ],
  }),
  component: Support,
});

const ways = [
  { icon: BookOpen, title: "Donate books", desc: "Drop off gently-loved books at the front desk any opening hour. We accept most titles for readers of all ages; anything we can't shelve goes to partner schools." },
  { icon: Heart, title: "Give funds", desc: "One-off or monthly. Every dirham goes to new stock, children's programming, and keeping the reading room lamp-lit." },
  { icon: HandHelping, title: "Volunteer", desc: "Two hours a week is enough. Shelvers, storytime helpers, tea-makers, and Saturday hosts all welcome." },
];

const tiers = [
  { name: "Friend", price: "50", perks: ["A thank-you card", "Name in our annual list", "One free event ticket"] },
  { name: "Patron", price: "500", perks: ["All Friend perks", "Two hardback dedications", "Invite to the annual dinner", "Reserved storytime seats"], featured: true },
  { name: "Benefactor", price: "2,500", perks: ["All Patron perks", "A named shelf plaque", "Sponsor one children's programme", "Private tour of the archives"] },
];

const impact = [
  { n: "32,000", l: "Books on our shelves" },
  { n: "1,840", l: "Active family members" },
  { n: "43", l: "Events last year" },
  { n: "12", l: "Years of lending" },
];

function Support() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell>
      <PageHeader
        eyebrow="Volume V"
        title="Support the Library"
        intro="The Old Library is a non-profit. Every book on our shelves was given; every event we run was paid for by a member or a friend."
      />

      {/* THREE WAYS */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-10">
          {ways.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border-t border-gold pt-8">
              <Icon className="text-gold" size={28} />
              <h3 className="font-serif text-2xl mt-6 text-ink">{title}</h3>
              <p className="mt-3 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section
        className="relative py-24 px-6"
        style={{ backgroundImage: `linear-gradient(rgba(6,78,59,0.9), rgba(6,78,59,0.9)), url(${shelvesImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-y-12 text-cream text-center">
          {impact.map((s) => (
            <div key={s.l}>
              <div className="display text-5xl md:text-6xl text-gold">{s.n}</div>
              <div className="mt-3 eyebrow text-cream/80">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DONATION TIERS */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="eyebrow">Give what you can</div>
            <h2 className="display text-4xl md:text-5xl mt-4">Donation tiers</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Suggested annual contributions — every amount is welcome and every amount is acknowledged.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((t) => (
              <article
                key={t.name}
                className={`p-10 flex flex-col ${
                  t.featured ? "bg-emerald-deep text-cream gold-frame" : "bg-cream border border-border"
                }`}
              >
                <div className={`eyebrow ${t.featured ? "text-gold" : ""}`}>{t.name}</div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className={`display text-5xl ${t.featured ? "text-cream" : "text-emerald-deep"}`}>{t.price}</span>
                  <span className={`text-xs tracking-widest uppercase ${t.featured ? "text-cream/60" : "text-muted-foreground"}`}>AED / year</span>
                </div>
                <ul className={`mt-8 space-y-3 flex-1 ${t.featured ? "text-cream/85" : "text-muted-foreground"}`}>
                  {t.perks.map((p) => (
                    <li key={p} className="text-sm flex gap-2">
                      <span className="text-gold">·</span> {p}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-10 py-4 text-xs tracking-[0.25em] uppercase font-medium ${
                    t.featured
                      ? "bg-gold text-emerald-deep hover:bg-gold-soft"
                      : "border border-emerald-deep text-emerald-deep hover:bg-emerald-deep hover:text-cream"
                  } transition-colors`}
                >
                  Give {t.name}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section className="bg-emerald-deep text-cream py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="eyebrow">Volunteer</div>
              <h2 className="display text-4xl md:text-5xl text-cream mt-4">Give an hour, or two.</h2>
              <p className="mt-4 text-cream/70 max-w-md">
                Tell us a little about you and how you'd like to help. We'll
                write back within a week with the next volunteer induction.
              </p>
            </div>
            {sent ? (
              <div>
                <div className="eyebrow text-gold">Received</div>
                <p className="font-serif text-2xl mt-4 text-cream">Thank you — we'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <input required className="vinput" placeholder="Name" />
                <input required type="email" className="vinput" placeholder="Email" />
                <select className="vinput" defaultValue="">
                  <option value="" disabled>How would you like to help?</option>
                  <option>Shelving & sorting</option>
                  <option>Storytime helper</option>
                  <option>Event host</option>
                  <option>Book repair</option>
                  <option>Anything you need</option>
                </select>
                <textarea rows={4} className="vinput resize-none" placeholder="A little about you (optional)" />
                <button className="w-full bg-gold text-emerald-deep hover:bg-gold-soft py-4 text-xs tracking-[0.25em] uppercase font-medium">
                  Sign up to volunteer
                </button>
                <style>{`
                  .vinput{width:100%;background:transparent;border:none;border-bottom:1px solid oklch(1 0 0 / 0.2);padding:10px 0;color:var(--color-cream);font-family:var(--font-sans);outline:none;}
                  .vinput::placeholder{color:oklch(1 0 0 / 0.4);}
                  .vinput:focus{border-color:var(--color-gold);}
                  .vinput option{background:var(--color-emerald-deep);color:var(--color-cream);}
                `}</style>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
