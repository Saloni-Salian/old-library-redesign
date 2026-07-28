import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { HandHelping, Mail } from "lucide-react";
import { PageShell, PageHeader } from "../components/PageShell";
import shelvesImg from "../assets/shelves.jpg";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support the Library — The Old Library" },
      { name: "description", content: "Volunteer your time at our community lending library, and join the mailing list to hear when we're calling for book donations." },
      { property: "og:title", content: "Support the Library" },
      { property: "og:description", content: "Volunteer with us, or join the list for our occasional donation drives." },
    ],
  }),
  component: Support,
});

const impact = [
  { n: "32,000", l: "Books on our shelves" },
  { n: "1,840", l: "Active family members" },
  { n: "43", l: "Events last year" },
  { n: "12", l: "Years of lending" },
];

function Support() {
  const [sent, setSent] = useState(false);
  const [listSent, setListSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  function onListSubmit(e: FormEvent) {
    e.preventDefault();
    setListSent(true);
  }

  return (
    <PageShell>
      <PageHeader
        eyebrow="Volume V"
        title="Support the Library"
        intro="The Old Library runs on the hours our members give it. We don't rely on donations day-to-day — but a few times a year we call for specific books, and volunteers keep every shelf in order."
      />

      {/* TWO WAYS */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
          <div className="border-t border-gold pt-8">
            <HandHelping className="text-gold" size={28} />
            <h3 className="font-serif text-2xl mt-6 text-ink">Volunteer</h3>
            <p className="mt-3 text-muted-foreground">
              Two hours a week is enough. Shelvers, storytime helpers,
              tea-makers, and Saturday hosts all welcome — no library
              experience needed.
            </p>
          </div>
          <div className="border-t border-gold pt-8">
            <Mail className="text-gold" size={28} />
            <h3 className="font-serif text-2xl mt-6 text-ink">Book donation list</h3>
            <p className="mt-3 text-muted-foreground">
              We don't accept book donations year-round — our shelves are
              curated. Once or twice a year we send a short list of titles we're
              looking for. Add your name and we'll write when the next call
              goes out.
            </p>
          </div>
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

      {/* MAILING LIST */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Occasional letters</div>
          <h2 className="display text-4xl md:text-5xl mt-4">Join the donation-call list</h2>
          <p className="mt-4 text-muted-foreground">
            A short email, only when we're looking for specific titles or
            collections. No more than three or four times a year, and never
            shared.
          </p>

          {listSent ? (
            <p className="mt-10 font-serif text-2xl text-emerald-deep">
              Thank you — you're on the list.
            </p>
          ) : (
            <form
              onSubmit={onListSubmit}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                required
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent border-b border-emerald-deep/40 focus:border-gold outline-none py-3 text-ink placeholder:text-muted-foreground/60 text-center sm:text-left"
              />
              <button className="bg-emerald-deep text-cream hover:bg-emerald-deep/90 px-8 py-3 text-xs tracking-[0.25em] uppercase font-medium">
                Join the list
              </button>
            </form>
          )}
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
