import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell, PageHeader } from "../components/PageShell";
import privateImg from "../assets/private-dining.jpg";
import heroImg from "../assets/hero-interior.jpg";
import booksImg from "../assets/books.jpg";

export const Route = createFileRoute("/private-dining")({
  head: () => ({
    meta: [
      { title: "Private Dining — The Old Library" },
      { name: "description", content: "Three intimate rooms for private dinners, launches, and celebrations in Dubai." },
      { property: "og:title", content: "Private Dining — The Old Library" },
      { property: "og:description", content: "Book one of our three private rooms." },
    ],
  }),
  component: PrivateDining,
});

const rooms = [
  { name: "The Reading Room", img: privateImg, seated: 14, standing: 20, spec: "Long walnut table, brass chandelier, sound isolated." },
  { name: "The Author's Study", img: heroImg, seated: 8, standing: 12, spec: "Intimate cabinet room with fireplace and record player." },
  { name: "The Full Library", img: booksImg, seated: 60, standing: 120, spec: "Full venue buyout for launches, weddings, or after-parties." },
];

function PrivateDining() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent) { e.preventDefault(); setSent(true); }

  return (
    <PageShell>
      <PageHeader eyebrow="Volume V" title="Private Dining" intro="Three rooms, one full-venue buyout, endless configurations. Curated menus, dedicated bar teams, and a soundtrack of your choosing." />

      <section className="bg-cream py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-3 gap-4 border-y border-gold/40 py-10 text-center">
            <Stat label="Seated" value="Up to 60" />
            <Stat label="Standing" value="Up to 120" />
            <Stat label="Rooms" value="Three + full venue" />
          </div>

          <div className="mt-24 space-y-24">
            {rooms.map((r, i) => (
              <article key={r.name} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="md:col-span-7 aspect-[4/3] overflow-hidden">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="md:col-span-5">
                  <div className="eyebrow">Room {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="display text-4xl mt-3">{r.name}</h3>
                  <p className="mt-4 text-muted-foreground">{r.spec}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
                    <div><dt className="text-xs tracking-widest uppercase text-muted-foreground">Seated</dt><dd className="font-serif text-2xl text-emerald-deep mt-1">{r.seated}</dd></div>
                    <div><dt className="text-xs tracking-widest uppercase text-muted-foreground">Standing</dt><dd className="font-serif text-2xl text-emerald-deep mt-1">{r.standing}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>

          {/* INQUIRY */}
          <div className="mt-32 bg-emerald-deep text-cream p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="eyebrow">Inquire</div>
                <h3 className="display text-4xl md:text-5xl mt-4 text-cream">Plan your evening.</h3>
                <p className="mt-4 text-cream/70 max-w-md">Tell us the shape of the night and we'll write you back within 24 hours with rooms, menus, and pricing.</p>
              </div>
              {sent ? (
                <div>
                  <div className="eyebrow text-gold">Received</div>
                  <p className="font-serif text-2xl mt-4 text-cream">Thank you — we'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input className="pinput" placeholder="Name" required />
                    <input className="pinput" placeholder="Company (optional)" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input className="pinput" type="email" placeholder="Email" required />
                    <input className="pinput" placeholder="Phone" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input className="pinput" type="date" required />
                    <input className="pinput" type="number" placeholder="Guests" min={2} required />
                  </div>
                  <textarea rows={4} className="pinput resize-none" placeholder="Occasion, menu preferences, budget…" />
                  <button className="w-full bg-gold text-emerald-deep hover:bg-gold-soft py-4 text-xs tracking-[0.25em] uppercase font-medium">
                    Send inquiry
                  </button>
                  <style>{`
                    .pinput{width:100%;background:transparent;border:none;border-bottom:1px solid oklch(1 0 0 / 0.2);padding:10px 0;color:var(--color-cream);font-family:var(--font-sans);outline:none;}
                    .pinput::placeholder{color:oklch(1 0 0 / 0.4);}
                    .pinput:focus{border-color:var(--color-gold);}
                  `}</style>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="eyebrow">{label}</div>
      <div className="font-serif text-3xl md:text-4xl text-emerald-deep mt-2">{value}</div>
    </div>
  );
}
