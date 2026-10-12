import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Users, Calendar, Heart, Quote } from "lucide-react";
import childrenImg from "../assets/children-corner.jpg";
import readingRoomImg from "../assets/reading-room.jpg";
import shelvesImg from "../assets/shelves.jpg";
import librarianImg from "../assets/librarian-portrait.jpg";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Old Library — Family Lending Library, Dubai" },
      { name: "description", content: "A community lending library in Dubai for readers of every age. Browse the catalogue, join for a year, or drop in for storytime." },
      { property: "og:title", content: "The Old Library — Family Lending Library" },
      { property: "og:description", content: "Where every family finds their next story." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const newArrivals = [
  { title: "The Wandering Ink", author: "Nadia Al-Shami", cat: "Fiction", img: shelvesImg },
  { title: "Small Songs for Small People", author: "Idris Yusuf", cat: "Picture Book", img: childrenImg },
  { title: "A History of Quiet Rooms", author: "Marion Ellwood", cat: "Non-fiction", img: readingRoomImg },
  { title: "The Cartographer's Daughter", author: "Rania Kassab", cat: "Young Adult", img: librarianImg },
];

const collections = [
  "Children",
  "Young Adult",
  "Fiction",
  "Non-fiction",
  "Reference",
  "Local History",
  "Arabic Language",
  "Audiobooks",
];

const events = [
  { date: "26", month: "Jul", title: "Saturday Storytime for Under-Sevens", tag: "Kids · All welcome" },
  { date: "02", month: "Aug", title: "Book Club: Piranesi by Susanna Clarke", tag: "Adults · Members" },
  { date: "09", month: "Aug", title: "Author Visit — Reem Al-Kamali", tag: "All ages" },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative h-screen min-h-[720px] overflow-hidden">
        <img
          src={heroImg}
          alt="Inside The Old Library"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/35 via-cream/55 to-cream/92" />

        <div className="relative h-full flex flex-col justify-end pb-24 px-6">
          <div className="mx-auto max-w-6xl w-full">
            <div className="max-w-3xl">
              <div className="eyebrow mb-6 text-gold">Est. 2014 · Jumeirah, Dubai</div>
              <h1 className="display text-ink text-6xl md:text-8xl lg:text-9xl">
                Where every family<br />
                <em className="text-gold not-italic font-light">finds their story.</em>
              </h1>
              <p className="mt-8 text-ink/75 max-w-xl text-lg leading-relaxed font-light">
                A community lending library of thirty-two thousand books —
                open to readers of every age, curated by hand, borrowed with love.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/catalogue"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-cream hover:bg-gold-soft text-xs tracking-[0.25em] uppercase font-medium transition-colors"
                >
                  Browse the catalogue <ArrowRight size={14} />
                </Link>
                <Link
                  to="/membership"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-ink/40 text-ink hover:border-gold hover:text-gold text-xs tracking-[0.25em] uppercase transition-colors"
                >
                  Become a member
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 text-ink/50 text-[0.65rem] tracking-[0.3em] uppercase rotate-90 origin-bottom-right">
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
              <span className="float-left font-serif text-7xl leading-[0.8] pr-3 pt-2 text-gold">B</span>
              built by one family, kept by many. The Old Library began as a
              front-room bookshelf shared with the neighbourhood — twelve years
              on, we lend across four rooms, one garden, and a Saturday storytime
              that has raised a whole generation of readers.
            </p>
            <div className="mt-10 flex items-start gap-4 text-muted-foreground">
              <Quote className="text-gold shrink-0 mt-1" size={20} />
              <p className="italic font-serif text-lg">
                "The kindest library in the city — and the only one where my
                four-year-old asks to go on a Saturday morning."
                <span className="not-italic text-xs tracking-[0.2em] uppercase text-gold/80 block mt-2">
                  — Time Out Dubai
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="bg-emerald-deep text-ink py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow">Chapter II</div>
              <h2 className="display text-5xl md:text-6xl text-ink mt-4">New on the Shelves</h2>
            </div>
            <Link to="/catalogue" className="text-gold hover:text-gold-soft text-xs tracking-[0.25em] uppercase flex items-center gap-2">
              Full catalogue <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {newArrivals.map((b, i) => (
              <article key={b.title} className="group">
                <div className="arched aspect-[3/4] overflow-hidden gold-frame bg-emerald">
                  <img
                    src={b.img}
                    alt={b.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="text-gold/70 text-xs tracking-[0.3em] uppercase">
                    №&nbsp;{String(i + 1).padStart(2, "0")} · {b.cat}
                  </div>
                  <h3 className="font-serif text-2xl mt-2 text-ink">{b.title}</h3>
                  <p className="text-ink/60 text-sm mt-1 italic">{b.author}</p>
                  <div className="mt-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold">
                    Available
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-cream py-24 px-6 border-y border-gold/20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="eyebrow">Our Collections</div>
          <h2 className="display text-4xl md:text-5xl mt-4">Eight rooms of reading</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {collections.map((c) => (
              <Link
                key={c}
                to="/catalogue"
                className="font-serif text-xl md:text-2xl text-ink hover:text-gold border-b border-transparent hover:border-gold pb-1 transition-colors"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TWO IMAGES SPLIT */}
      <section className="bg-cream py-32 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12">
          <div className="relative">
            <img src={childrenImg} alt="Children's corner" width={1200} height={1500} loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute bottom-0 left-0 bg-cream p-8 max-w-sm">
              <div className="eyebrow">The Little Room</div>
              <h3 className="display text-3xl mt-3">Little readers, big worlds</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Six thousand picture books, chapter books, and early readers —
                sorted by age, not by algorithm.
              </p>
              <Link to="/catalogue" className="mt-5 inline-flex items-center gap-2 text-ink border-b border-gold pb-1 text-xs tracking-[0.2em] uppercase">
                Browse children's <ArrowRight size={12} />
              </Link>
            </div>
          </div>
          <div className="relative md:mt-24">
            <img src={readingRoomImg} alt="Reading room" width={1600} height={1200} loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute bottom-0 right-0 bg-cream p-8 max-w-sm">
              <div className="eyebrow">The Reading Room</div>
              <h3 className="display text-3xl mt-3">A quiet place to sit</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Long tables, brass lamps, free wifi, and enough silence to
                finish a chapter. Members welcome any hour we are open.
              </p>
              <Link to="/membership" className="mt-5 inline-flex items-center gap-2 text-ink border-b border-gold pb-1 text-xs tracking-[0.2em] uppercase">
                Membership details <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-emerald-deep text-ink py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow">Chapter III</div>
              <h2 className="display text-5xl md:text-6xl mt-4 text-ink">This Month at the Library</h2>
            </div>
            <Link to="/events" className="text-gold hover:text-gold-soft text-xs tracking-[0.25em] uppercase flex items-center gap-2">
              All events <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gold/20">
            {events.map((e) => (
              <div key={e.title} className="bg-cream p-10 hover:bg-emerald transition-colors group">
                <div className="flex items-baseline gap-3">
                  <span className="display text-6xl text-gold">{e.date}</span>
                  <span className="font-serif text-xl text-ink/70 uppercase tracking-widest">{e.month}</span>
                </div>
                <div className="eyebrow mt-8">{e.tag}</div>
                <h3 className="font-serif text-2xl mt-3 text-ink">{e.title}</h3>
                <div className="mt-6 text-xs tracking-[0.25em] uppercase text-ink/50 group-hover:text-gold transition-colors">
                  Free with membership
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA BAND */}
      <section className="relative py-32 px-6 overflow-hidden">
        <img src={storytimeImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-cream/85" />
        <div className="relative mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow text-gold">Membership</div>
            <h2 className="display text-5xl md:text-6xl text-ink mt-6">
              Borrow up to <em className="text-gold not-italic">eight books</em> at a time.
            </h2>
            <p className="mt-6 text-ink/75 max-w-md">
              One household membership at AED 200 a year covers every reader under
              one roof — plus event access, reserved study time, and a monthly
              hand-picked reading list. Sign up in person at the library.
            </p>
            <Link
              to="/membership"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gold text-cream hover:bg-gold-soft text-xs tracking-[0.25em] uppercase font-medium"
            >
              How to become a member <ArrowRight size={14} />
            </Link>
          </div>
          <ul className="space-y-6 text-ink">
            {[
              { icon: BookOpen, label: "32,000 books", note: "across eight collections" },
              { icon: Users, label: "Family membership", note: "one card for every reader in the household" },
              { icon: Calendar, label: "40+ events a year", note: "storytimes, book clubs, author visits" },
              { icon: Heart, label: "Non-profit", note: "run by volunteers, supported by members" },
            ].map(({ icon: Icon, label, note }) => (
              <li key={label} className="flex items-start gap-4 border-b border-gold/20 pb-6">
                <Icon className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-serif text-xl">{label}</div>
                  <div className="text-ink/60 text-sm mt-1">{note}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SUPPORT TEASER */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="eyebrow">Epilogue</div>
          <h2 className="display text-4xl md:text-5xl mt-6">
            Every book on our shelves was <em className="text-gold not-italic">given</em>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            The Old Library runs on donated books, member fees, and volunteer
            hours. If the library has meant something to your family, there
            are three good ways to give back.
          </p>
          <Link
            to="/support"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 border border-ink text-ink hover:bg-ink hover:text-cream text-xs tracking-[0.25em] uppercase transition-colors"
          >
            Support the Library <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
