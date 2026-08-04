import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { HandHelping, BookMarked, Mail, ArrowRight } from "lucide-react";
import { PageShell, PageHeader } from "../components/PageShell";
import shelvesImg from "../assets/shelves.jpg";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support the Library — The Old Library" },
      { name: "description", content: "Support our community lending library by becoming a member, volunteering your time, or joining the book-donation list." },
      { property: "og:title", content: "Support the Library" },
      { property: "og:description", content: "Three ways to keep the shelves open — membership, volunteering, and our occasional book-donation call." },
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
        intro="The Old Library is kept open by the people who use it. Three ways to keep the shelves stocked and the lamps lit — take out a membership, give us a few hours of your week, or join the list for our occasional book-donation calls."
      />

      {/* THREE WAYS */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
          {/* Become a member */}
          <article className="bg-emerald-deep text-ink p-10 gold-frame flex flex-col">
            <BookMarked className="text-gold" size={28} />
            <div className="eyebrow text-gold mt-6">The best way to help</div>
            <h3 className="display text-3xl mt-3 text-ink">Become a member</h3>
            <p className="mt-4 text-ink/75 flex-1">
              Every membership pays for new books, children's programming, and
              the quiet hours in between. One household membership, AED 200 a
              year — signed up in person at the desk.
            </p>
            <Link
              to="/membership"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-gold text-cream hover:bg-gold-soft py-4 text-xs tracking-[0.25em] uppercase font-medium"
            >
              View memberships <ArrowRight size={14} />
            </Link>
          </article>

          {/* Volunteer */}
          <article className="border border-border p-10 flex flex-col">
            <HandHelping className="text-gold" size={28} />
            <div className="eyebrow mt-6">Give an hour</div>
            <h3 className="display text-3xl mt-3 text-ink">Volunteer</h3>
            <p className="mt-4 text-muted-foreground flex-1">
              Two hours a week is enough. Shelvers, storytime helpers,
              tea-makers, and Saturday hosts all welcome — no library
              experience needed.
            </p>
            <a
              href="#volunteer"
              className="mt-8 inline-flex items-center justify-center gap-2 border border-ink text-ink hover:bg-ink hover:text-cream transition-colors py-4 text-xs tracking-[0.25em] uppercase font-medium"
            >
              Sign up below <ArrowRight size={14} />
            </a>
          </article>

          {/* Book donation list */}
          <article className="border border-border p-10 flex flex-col">
            <Mail className="text-gold" size={28} />
            <div className="eyebrow mt-6">Occasional letters</div>
            <h3 className="display text-3xl mt-3 text-ink">Book donation list</h3>
            <p className="mt-4 text-muted-foreground flex-1">
              We don't accept book donations year-round — our shelves are
              curated. A few times a year we send a short list of titles we're
              looking for. Add your name and we'll write when the next call
              goes out.
            </p>
            {listSent ? (
              <p className="mt-8 font-serif text-lg text-ink">
                Thank you — you're on the list.
              </p>
            ) : (
              <form onSubmit={onListSubmit} className="mt-8 space-y-3">
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-ink/40 focus:border-gold outline-none py-2 text-ink placeholder:text-muted-foreground/60"
                />
                <button className="w-full border border-ink text-ink hover:bg-ink hover:text-cream transition-colors py-4 text-xs tracking-[0.25em] uppercase font-medium">
                  Join the list
                </button>
              </form>
            )}
          </article>
        </div>
      </section>



      {/* IMPACT */}
      <section
        className="relative py-24 px-6"
        style={{ backgroundImage: `linear-gradient(rgba(6,78,59,0.9), rgba(6,78,59,0.9)), url(${shelvesImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-y-12 text-ink text-center">
          {impact.map((s) => (
            <div key={s.l}>
              <div className="display text-5xl md:text-6xl text-gold">{s.n}</div>
              <div className="mt-3 eyebrow text-ink/80">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section id="volunteer" className="bg-emerald-deep text-ink py-24 px-6 scroll-mt-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="eyebrow">Volunteer</div>
              <h2 className="display text-4xl md:text-5xl text-ink mt-4">Give an hour, or two.</h2>
              <p className="mt-4 text-ink/70 max-w-md">
                Tell us a little about you and how you'd like to help. We'll
                write back within a week with the next volunteer induction.
              </p>
            </div>
            {sent ? (
              <div>
                <div className="eyebrow text-gold">Received</div>
                <p className="font-serif text-2xl mt-4 text-ink">Thank you — we'll be in touch soon.</p>
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
                <button className="w-full bg-gold text-cream hover:bg-gold-soft py-4 text-xs tracking-[0.25em] uppercase font-medium">
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
