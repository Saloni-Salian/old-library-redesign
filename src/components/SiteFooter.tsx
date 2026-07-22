import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-emerald-deep text-cream/85 pt-24 pb-10 border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-gold/15">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
                <span className="font-serif text-gold text-lg">OL</span>
              </div>
              <div>
                <div className="font-serif text-cream text-lg">The Old Library</div>
                <div className="text-[0.6rem] tracking-[0.3em] text-gold/70 uppercase mt-1">
                  Dubai
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-cream/60 max-w-xs">
              A literary cocktail salon where every drink begins with a story and every night
              closes a chapter.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-5">Visit</div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={14} className="mt-1 text-gold" />
                Dubai Marina Walk<br />Dubai, UAE
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
            <ul className="space-y-2 text-sm text-cream/70">
              <li className="flex justify-between"><span>Sun – Thu</span><span>6pm – 1am</span></li>
              <li className="flex justify-between"><span>Fri – Sat</span><span>6pm – 3am</span></li>
              <li className="flex justify-between text-gold/90 pt-2"><span>Kitchen</span><span>until 11pm</span></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-5">Chapters</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/menu" className="hover:text-gold">Menu</Link></li>
              <li><Link to="/reservations" className="hover:text-gold">Reservations</Link></li>
              <li><Link to="/events" className="hover:text-gold">Events</Link></li>
              <li><Link to="/private-dining" className="hover:text-gold">Private Dining</Link></li>
              <li><Link to="/story" className="hover:text-gold">Story</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} The Old Library. All chapters reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-gold"><Facebook size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
