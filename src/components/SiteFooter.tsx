import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-emerald-deep text-ink/85 pt-24 pb-10 border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-gold/15">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
                <span className="font-serif text-gold text-lg">OL</span>
              </div>
              <div>
                <div className="font-serif text-ink text-lg">The Old Library</div>
                <div className="text-[0.6rem] tracking-[0.3em] text-gold/70 uppercase mt-1">
                  Family Lending Library
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink/60 max-w-xs">
              A community lending library for readers of every age — where every
              family finds their next chapter.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center gap-2 border-b border-gold/30 pb-2"
            >
              <input
                type="email"
                placeholder="Monthly reading list"
                className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink/40 outline-none py-1"
              />
              <button className="text-gold text-xs tracking-[0.2em] uppercase hover:text-gold-soft">
                Join
              </button>
            </form>
          </div>

          <div>
            <div className="eyebrow mb-5">Visit</div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={14} className="mt-1 text-gold" />
                12 Al Wasl Road<br />Jumeirah, Dubai, UAE
              </li>
              <li className="flex gap-3">
                <Phone size={14} className="mt-1 text-gold" />
                +971 4 000 0000
              </li>
              <li className="flex gap-3">
                <Mail size={14} className="mt-1 text-gold" />
                hello@theoldlibrary.ae
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-5">Hours</div>
            <ul className="space-y-2 text-sm text-ink/70">
              <li className="flex justify-between"><span>Mon – Fri</span><span>9am – 8pm</span></li>
              <li className="flex justify-between"><span>Sat – Sun</span><span>10am – 6pm</span></li>
              <li className="flex justify-between text-gold/90 pt-2"><span>Storytime</span><span>Sat 10:30am</span></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-5">Chapters</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/catalogue" className="hover:text-gold">Catalogue</Link></li>
              <li><Link to="/membership" className="hover:text-gold">Membership</Link></li>
              <li><Link to="/events" className="hover:text-gold">Events</Link></li>
              <li><Link to="/newsletters" className="hover:text-gold">Newsletters</Link></li>
              <li><Link to="/support" className="hover:text-gold">Support the Library</Link></li>
              <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link to="/login" className="hover:text-gold">Member Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink/50">
          <div>© {new Date().getFullYear()} The Old Library. All chapters welcome.</div>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-gold"><Facebook size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
