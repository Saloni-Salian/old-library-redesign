import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { PageShell, PageHeader } from "../components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — The Old Library" },
      { name: "description", content: "Find us on Al Wasl Road, Jumeirah. Opening hours, phone, email, and a note to the librarian." },
      { property: "og:title", content: "Contact & Visit — The Old Library" },
      { property: "og:description", content: "Address, hours, and how to reach the library." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent) { e.preventDefault(); setSent(true); }

  return (
    <PageShell>
      <PageHeader eyebrow="Volume VII" title="Contact & Visit" intro="For membership, donations, school outreach, press, and everything else — write, call, or come by." />

      <section className="bg-cream py-20 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
          <div>
            <div className="aspect-[4/3] bg-emerald-deep relative overflow-hidden">
              {/* Stylised map placeholder */}
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <rect width="400" height="300" fill="oklch(0.28 0.06 160)"/>
                <g stroke="oklch(0.55 0.09 160)" strokeWidth="0.5" fill="none">
                  {Array.from({length: 20}).map((_,i) => <line key={i} x1={i*20} y1={0} x2={i*20} y2={300}/>)}
                  {Array.from({length: 15}).map((_,i) => <line key={i} x1={0} y1={i*20} x2={400} y2={i*20}/>)}
                </g>
                <path d="M 20 180 Q 100 100 200 150 T 380 120" stroke="oklch(0.78 0.13 85)" strokeWidth="2" fill="none" opacity="0.6"/>
                <path d="M 50 250 L 350 40" stroke="oklch(0.55 0.09 160)" strokeWidth="3" fill="none"/>
                <circle cx="200" cy="150" r="8" fill="oklch(0.78 0.13 85)"/>
                <circle cx="200" cy="150" r="20" fill="none" stroke="oklch(0.78 0.13 85)" strokeWidth="1" opacity="0.5"/>
                <text x="215" y="145" fill="oklch(0.95 0.03 90)" fontFamily="Cormorant Garamond" fontSize="14" fontStyle="italic">The Old Library</text>
              </svg>
            </div>
            <div className="mt-10 space-y-6">
              <Row icon={<MapPin size={16} />} label="Address" value={<>12 Al Wasl Road<br />Jumeirah, Dubai, United Arab Emirates</>} />
              <Row icon={<Phone size={16} />} label="Front desk" value="+971 4 000 0000" />
              <Row icon={<Mail size={16} />} label="Email" value="hello@theoldlibrary.ae" />
              <Row icon={<Instagram size={16} />} label="Social" value="@theoldlibrary.ae" />
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <div className="eyebrow mb-4">Opening Hours</div>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border/60">
                  <tr><td className="py-2">Monday – Friday</td><td className="py-2 text-right text-ink">9:00 am – 8:00 pm</td></tr>
                  <tr><td className="py-2">Saturday – Sunday</td><td className="py-2 text-right text-ink">10:00 am – 6:00 pm</td></tr>
                  <tr><td className="py-2">Saturday Storytime</td><td className="py-2 text-right text-gold">10:30 am</td></tr>
                  <tr><td className="py-2">Public holidays</td><td className="py-2 text-right text-muted-foreground">Closed</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-emerald-deep text-ink p-10">
            {sent ? (
              <div>
                <div className="eyebrow text-gold">Sent</div>
                <h3 className="display text-3xl mt-4 text-ink">Thank you for writing.</h3>
                <p className="mt-4 text-ink/70">We'll reply within one working day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <div className="eyebrow text-gold">Write to us</div>
                  <h3 className="display text-3xl mt-3 text-ink">A note to the librarian.</h3>
                </div>
                <input required placeholder="Name" className="cinput" />
                <input required type="email" placeholder="Email" className="cinput" />
                <select className="cinput" defaultValue="general">
                  <option value="general">General inquiry</option>
                  <option>Membership</option>
                  <option>Book donation</option>
                  <option>Volunteering</option>
                  <option>School outreach</option>
                  <option>Press</option>
                </select>
                <textarea rows={5} required placeholder="Your message" className="cinput resize-none" />
                <button className="w-full bg-gold text-cream hover:bg-gold-soft py-4 text-xs tracking-[0.25em] uppercase font-medium">
                  Send message
                </button>
                <style>{`
                  .cinput{width:100%;background:transparent;border:none;border-bottom:1px solid oklch(1 0 0 / 0.2);padding:12px 0;color:var(--color-cream);font-family:var(--font-sans);outline:none;font-size:0.95rem;}
                  .cinput::placeholder{color:oklch(1 0 0 / 0.4);}
                  .cinput:focus{border-color:var(--color-gold);}
                  .cinput option{background:var(--color-emerald-deep);color:var(--color-cream);}
                `}</style>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="text-gold mt-1">{icon}</div>
      <div>
        <div className="eyebrow">{label}</div>
        <div className="font-serif text-xl mt-1 text-ink">{value}</div>
      </div>
    </div>
  );
}
