import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Calendar, Clock, Users, MessageSquare } from "lucide-react";
import { PageShell } from "../components/PageShell";
import heroImg from "../assets/hero-interior.jpg";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — The Old Library" },
      { name: "description", content: "Reserve your table at Dubai's literary cocktail salon. Tables released four weeks in advance." },
      { property: "og:title", content: "Reservations — The Old Library" },
      { property: "og:description", content: "Reserve your chapter." },
    ],
  }),
  component: Reservations,
});

function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageShell>
      <section className="pt-24 grid md:grid-cols-2 min-h-screen">
        <div className="relative bg-emerald-deep hidden md:block">
          <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/70 to-ink/90" />
          <div className="relative h-full flex flex-col justify-between p-12 text-cream">
            <div>
              <div className="eyebrow">Volume III</div>
              <h1 className="display text-6xl mt-6">Reserve<br />your <em className="text-gold not-italic">chapter</em></h1>
              <p className="mt-6 text-cream/70 max-w-md leading-relaxed">
                Tables released four weeks in advance. Walk-ins welcome at the bar
                after 10pm on weeknights. Parties of eight or more, please write to us.
              </p>
            </div>
            <div className="border-t border-gold/30 pt-6 space-y-2 text-sm text-cream/60">
              <div className="flex justify-between"><span>Dress code</span><span className="text-gold">Smart casual</span></div>
              <div className="flex justify-between"><span>Age</span><span className="text-gold">21 and over</span></div>
              <div className="flex justify-between"><span>Hold</span><span className="text-gold">15 minutes</span></div>
            </div>
          </div>
        </div>

        <div className="bg-cream py-20 px-6 md:px-16 flex items-center">
          {submitted ? (
            <div className="max-w-md">
              <div className="eyebrow text-gold">Confirmed</div>
              <h2 className="display text-4xl mt-4">We'll see you soon.</h2>
              <p className="mt-4 text-muted-foreground">
                A confirmation has been sent to your email. Please write to us if plans change —
                the seat is yours until fifteen minutes past the hour.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-xs tracking-[0.25em] uppercase text-emerald-deep border-b border-gold pb-1"
              >
                New reservation
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="w-full max-w-md space-y-6">
              <div>
                <div className="eyebrow">Book a table</div>
                <h2 className="display text-4xl mt-4">Tell us the details.</h2>
              </div>

              <Field icon={<Users size={14} />} label="Guests">
                <select className="input" defaultValue="2">
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}
                </select>
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field icon={<Calendar size={14} />} label="Date">
                  <input type="date" className="input" required />
                </Field>
                <Field icon={<Clock size={14} />} label="Time">
                  <select className="input" defaultValue="20:00">
                    {["18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"].map(t => <option key={t}>{t}</option>)}
                  </select>
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Name">
                  <input className="input" required />
                </Field>
                <Field label="Phone">
                  <input type="tel" className="input" required />
                </Field>
              </div>

              <Field label="Email">
                <input type="email" className="input" required />
              </Field>

              <Field icon={<MessageSquare size={14} />} label="Occasion / notes (optional)">
                <textarea rows={3} className="input resize-none" placeholder="Birthday, allergies, seating preference…" />
              </Field>

              <button
                type="submit"
                className="w-full bg-emerald-deep text-cream hover:bg-emerald py-4 text-xs tracking-[0.25em] uppercase transition-colors"
              >
                Request reservation
              </button>
              <p className="text-xs text-muted-foreground">
                By reserving you agree to our 15-minute grace policy.
              </p>

              <style>{`
                .input {
                  width: 100%;
                  background: transparent;
                  border: none;
                  border-bottom: 1px solid var(--color-border);
                  padding: 8px 0;
                  font-family: var(--font-sans);
                  font-size: 0.95rem;
                  color: var(--color-foreground);
                  outline: none;
                }
                .input:focus { border-color: var(--color-gold); }
              `}</style>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground mb-1">
        {icon && <span className="text-gold">{icon}</span>}
        {label}
      </div>
      {children}
    </label>
  );
}
