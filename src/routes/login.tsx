import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell } from "../components/PageShell";
import heroImg from "../assets/hero-library.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Member Login — The Old Library" },
      { name: "description", content: "Sign in to your library account to reserve books, manage loans, and book events." },
      { property: "og:title", content: "Member Login — The Old Library" },
      { property: "og:description", content: "Sign in or create your library account." },
    ],
  }),
  component: Login,
});

// NOTE: UI-only. Wire to Lovable Cloud auth in a later pass.
function Login() {
  const [toast, setToast] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setToast("Signed in — welcome back.");
    setTimeout(() => setToast(null), 2600);
  }

  return (
    <PageShell>
      <section className="min-h-screen grid md:grid-cols-2 pt-24">
        {/* IMAGE */}
        <div className="relative hidden md:block">
          <img src={heroImg} alt="The Old Library" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-emerald-deep/60" />
          <div className="relative h-full flex flex-col justify-end p-16 text-ink">
            <div className="eyebrow text-gold">Member Login</div>
            <h1 className="display text-5xl mt-6 text-ink leading-tight">
              Welcome<br />
              <em className="text-gold not-italic">back to the shelves.</em>
            </h1>
            <p className="mt-6 text-ink/70 max-w-sm">
              Sign in to reserve books, renew loans, and register for events.
              New here? Take a moment to join.
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-cream flex items-center px-6 md:px-16 py-16">
          <div className="w-full max-w-md mx-auto">
            <h2 className="display text-3xl mb-8">Sign in to your account</h2>

            <form onSubmit={onSubmit} className="space-y-5">
              <Field label="Email" type="email" required placeholder="you@example.ae" />
              <Field label="Password" type="password" required placeholder="••••••••" />

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" className="accent-gold" /> Remember me
                </label>
                <button type="button" className="text-gold hover:text-gold-soft tracking-[0.15em] uppercase">
                  Forgot password?
                </button>
              </div>

              <button className="w-full bg-gold text-cream hover:bg-gold-soft py-4 text-xs tracking-[0.25em] uppercase font-medium mt-4">
                Sign in
              </button>

              <p className="text-xs text-muted-foreground text-center pt-4 leading-relaxed">
                Not a member yet? Memberships are arranged in person at the library
                desk — AED 200 for the year.{" "}
                <Link to="/membership" className="text-ink border-b border-gold">
                  How to join
                </Link>
                .
              </p>
            </form>


            <style>{`
              .linput{width:100%;background:transparent;border:none;border-bottom:1px solid var(--color-border);padding:10px 0;font-family:var(--font-sans);outline:none;color:var(--color-ink);font-size:0.95rem;}
              .linput:focus{border-color:var(--color-gold);}
              .linput::placeholder{color:oklch(0.6 0 0);}
            `}</style>
          </div>
        </div>
      </section>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-emerald-deep text-ink px-6 py-3 border border-gold/40 text-sm z-50 shadow-lg">
          {toast}
        </div>
      )}
    </PageShell>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}</label>
      <input className="linput" {...props} />
    </div>
  );
}
