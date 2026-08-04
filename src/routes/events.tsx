import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell, PageHeader } from "../components/PageShell";
import storytimeImg from "../assets/event-storytime.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — The Old Library" },
      { name: "description", content: "Saturday storytimes, book clubs, author visits, and holiday workshops. Free with membership." },
      { property: "og:title", content: "Events — The Old Library" },
      { property: "og:description", content: "The library's programme of talks, clubs, and storytimes." },
    ],
  }),
  component: Events,
});

const events = [
  { date: "26", month: "Jul", title: "Saturday Storytime for Under-Sevens", tag: "Kids", time: "10:30 am", desc: "Ms Reem reads two picture books, then a craft. Bring a cushion." },
  { date: "02", month: "Aug", title: "Book Club: Piranesi by Susanna Clarke", tag: "Adults", time: "7:30 pm", desc: "Our monthly adult book club, hosted in the Reading Room. Copies on reserve." },
  { date: "09", month: "Aug", title: "Author Visit — Reem Al-Kamali", tag: "All ages", time: "5:00 pm", desc: "A conversation and signing with the Emirati novelist, followed by tea." },
  { date: "16", month: "Aug", title: "Teen Writing Workshop", tag: "Teens", time: "3:00 pm", desc: "Four-part short-story workshop, led by playwright Farah Chamma. Ages 13–17." },
  { date: "23", month: "Aug", title: "Poetry Circle: In Translation", tag: "Adults", time: "7:00 pm", desc: "Bring one poem in Arabic, English, or another language, and one translation." },
  { date: "31", month: "Aug", title: "Summer Reading Prize Ceremony", tag: "Kids", time: "11:00 am", desc: "Certificates, cake, and every child's summer reading log stamped and signed." },
];

const tagColor: Record<string, string> = {
  Kids: "text-gold border-gold/40",
  Teens: "text-ink border-ink/40",
  Adults: "text-ink border-border",
  "All ages": "text-gold border-gold/40",
};

function Events() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell>
      <PageHeader
        eyebrow="Volume IV"
        title="Events"
        intro="Forty-plus events a year — storytimes, book clubs, author visits, and school-holiday workshops. Every event is free for members."
      />

      {/* FEATURED */}
      <section className="bg-cream py-20 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 aspect-[4/3] overflow-hidden">
            <img
              src={storytimeImg}
              alt="Saturday storytime"
              width={1600}
              height={1200}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-5">
            <div className="eyebrow">This Saturday</div>
            <h2 className="display text-4xl md:text-5xl mt-4">Storytime for Under-Sevens</h2>
            <p className="mt-4 text-muted-foreground">
              Every Saturday at 10:30 am, Ms Reem reads two picture books to a
              circle of children in the Little Room. Followed by a small craft
              project and squash for the readers, coffee for the parents.
            </p>
            <div className="mt-6 flex items-center gap-6 text-xs tracking-[0.2em] uppercase">
              <span className="text-gold">Free · All welcome</span>
              <span className="text-muted-foreground">No booking needed</span>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="bg-cream py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <ul className="divide-y divide-border">
            {events.map((e) => (
              <li key={e.title} className="grid md:grid-cols-[120px_1fr_auto] gap-6 md:gap-10 py-8 items-baseline">
                <div className="flex items-baseline gap-3">
                  <span className="display text-5xl text-gold leading-none">{e.date}</span>
                  <span className="font-serif text-lg text-ink uppercase tracking-widest">{e.month}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-[0.6rem] tracking-widest uppercase border px-1.5 py-0.5 ${tagColor[e.tag]}`}>
                      {e.tag}
                    </span>
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {e.time}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 text-ink">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{e.desc}</p>
                </div>
                <button className="text-xs tracking-[0.2em] uppercase text-ink border-b border-gold pb-1 self-center whitespace-nowrap">
                  Register interest
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REGISTER INTEREST */}
      <section className="bg-emerald-deep text-ink py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="eyebrow">Stay in the loop</div>
              <h2 className="display text-4xl md:text-5xl text-ink mt-4">Never miss a session.</h2>
              <p className="mt-4 text-ink/70 max-w-md">
                One short email each month — this month's events, next month's
                book club pick, and any new arrivals we think you'll like.
              </p>
            </div>
            {sent ? (
              <div>
                <div className="eyebrow text-gold">Subscribed</div>
                <p className="font-serif text-2xl mt-4 text-ink">Thank you — the next dispatch goes out Sunday.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <input required className="einput" placeholder="Name" />
                <input required type="email" className="einput" placeholder="Email" />
                <select className="einput" defaultValue="all">
                  <option value="all">All events</option>
                  <option>Kids only</option>
                  <option>Teens only</option>
                  <option>Adults only</option>
                </select>
                <button className="w-full bg-gold text-cream hover:bg-gold-soft py-4 text-xs tracking-[0.25em] uppercase font-medium">
                  Subscribe
                </button>
                <style>{`
                  .einput{width:100%;background:transparent;border:none;border-bottom:1px solid oklch(1 0 0 / 0.2);padding:10px 0;color:var(--color-cream);font-family:var(--font-sans);outline:none;}
                  .einput::placeholder{color:oklch(1 0 0 / 0.4);}
                  .einput:focus{border-color:var(--color-gold);}
                  .einput option{background:var(--color-emerald-deep);color:var(--color-cream);}
                `}</style>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
