import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { PageShell, PageHeader } from "../components/PageShell";
import librarianImg from "../assets/librarian-portrait.jpg";
import readingRoomImg from "../assets/reading-room.jpg";
import childrenImg from "../assets/children-corner.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Old Library" },
      { name: "description", content: "The story of a family front-room bookshelf that became Dubai's most-loved community lending library." },
      { property: "og:title", content: "About Us — The Old Library" },
      { property: "og:description", content: "Founded by the Al-Sayed family in 2014." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2014", t: "One shelf, one family", d: "The Al-Sayed family opens the front room of their villa on Al Wasl Road to neighbours, three afternoons a week." },
  { year: "2016", t: "A second room", d: "Membership reaches 200 families; the dining room becomes the Little Room, dedicated to picture books." },
  { year: "2019", t: "Non-profit registration", d: "The library is registered as a community non-profit. First Saturday storytime held under the mango tree." },
  { year: "2021", t: "Ten thousand books", d: "A local publisher donates its back-catalogue. Reading room built in the garden extension." },
  { year: "2024", t: "The full villa", d: "Every room of the original house is now a reading room, and thirty-two thousand books line the walls." },
];

const team = [
  { name: "Amal Al-Sayed", role: "Founder & Head Librarian", img: librarianImg, bio: "Started the library from her family's front room in 2014. Still shelves every Saturday." },
  { name: "Reem Farouk", role: "Children's Librarian", img: childrenImg, bio: "Runs storytime, the summer reading prize, and school outreach across Jumeirah." },
  { name: "Idris Yusuf", role: "Community Coordinator", img: readingRoomImg, bio: "Programmes events, trains volunteers, and keeps the coffee flowing on member nights." },
];

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Volume VI"
        title="About Us"
        intro="A community lending library built one book, one member, one Saturday at a time."
      />

      {/* STORY */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="display text-2xl md:text-3xl leading-relaxed text-ink">
            <span className="float-left font-serif text-7xl leading-[0.8] pr-3 pt-2 text-gold">I</span>
            in the summer of 2014, Amal Al-Sayed put a small handwritten sign on
            the gate of her family villa: <em className="italic">Books. Free to borrow. Please knock.</em> Twelve
            neighbours knocked that week. Two hundred came the following year.
            The front room filled, then the dining room, then the garden — and
            somewhere along the way the villa stopped being a house and became
            The Old Library.
          </p>

          <div className="my-16 gold-divider" />

          <p className="text-lg text-muted-foreground leading-relaxed">
            We are still a family library. Amal still shelves every Saturday.
            Her children still hold the storytime circle together. What has
            changed is the scale — thirty-two thousand books, one thousand
            eight hundred member families, and a rota of forty volunteers who
            make sure the doors stay open six days a week.
          </p>

          <div className="mt-12 flex items-start gap-4 border-l-2 border-gold pl-6">
            <Quote className="text-gold shrink-0 mt-1" size={20} />
            <p className="italic font-serif text-2xl text-emerald-deep leading-tight">
              "A library is a house of second chances. Every borrowed book
              comes back a little more loved."
              <span className="not-italic text-xs tracking-[0.2em] uppercase text-gold/80 block mt-3">
                — Amal Al-Sayed, Founder
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-emerald-deep text-cream py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="eyebrow">Milestones</div>
            <h2 className="display text-4xl md:text-5xl text-cream mt-4">Twelve years, one shelf at a time</h2>
          </div>
          <ol className="space-y-10">
            {timeline.map((t) => (
              <li key={t.year} className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-10 border-b border-gold/20 pb-10">
                <div className="display text-4xl text-gold">{t.year}</div>
                <div>
                  <h3 className="font-serif text-2xl text-cream">{t.t}</h3>
                  <p className="mt-2 text-cream/70">{t.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="eyebrow">The Keepers</div>
            <h2 className="display text-4xl md:text-5xl mt-4">The people at the desk</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((m) => (
              <article key={m.name} className="text-center">
                <div className="arched aspect-[3/4] overflow-hidden gold-frame mx-auto">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-2xl mt-6">{m.name}</h3>
                <div className="eyebrow mt-2">{m.role}</div>
                <p className="mt-4 text-sm text-muted-foreground max-w-xs mx-auto">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PLEDGE */}
      <section className="bg-cream pb-32 px-6">
        <div className="mx-auto max-w-3xl text-center border-t border-b border-gold/40 py-16">
          <div className="eyebrow">Our Pledge</div>
          <p className="font-serif italic text-2xl md:text-3xl mt-6 text-emerald-deep leading-tight">
            The Old Library will always be free to visit, gentle with late
            returns, and open to any reader who knocks.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
