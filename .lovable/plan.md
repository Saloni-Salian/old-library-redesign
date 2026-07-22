# The Old Library — Modern Redesign

A high-fidelity visual mockup (not low-fi wireframe) of the full site, reimagined as a refined literary-cocktail destination. Emerald green + gold on warm cream, with editorial typography and generous whitespace.

## Design System

- **Palette**: Deep emerald `#064e3b` (bg), rich green `#0d7a5f` (surfaces), antique gold `#c9a84c` (accent), cream `#f5f0e0` (text/light bg)
- **Typography**: Cormorant / Playfair-style serif for display + headings; clean sans (Inter/DM Sans) for body & UI. Small-caps for eyebrows.
- **Feel**: Emerald-prestige — leather-bound library meets modern speakeasy. Gold hairlines, arched frames, subtle grain texture, restrained motion (fade + slow parallax).
- **Motif**: Arched book-spine frames for imagery, gold rule dividers, drop-cap intros.

## Site Map (routes)

```text
/                  Home
/menu              Menu (food + drinks with tabs)
/reservations      Reservations (booking form)
/events            Events & live music
/private-dining    Private dining / venue hire
/gallery           Gallery
/story             Our Story / About
/contact           Contact & location
```

Shared: sticky translucent nav with logo mark, footer with hours/address/socials/newsletter.

## Page Content

### Home
- Full-bleed hero: dim library interior, serif headline "Where stories are poured", gold CTA "Reserve a table", secondary "Explore the menu"
- Intro block with drop-cap paragraph + signature quote
- Signature cocktails carousel (3 arched cards, gold frames)
- Menu preview split: Kitchen / Bar with sample dishes
- Live at the Library — upcoming events strip (3 cards, dates in gold)
- Press / accolades marquee
- Instagram-style gallery grid (6 tiles)
- Reservation CTA band

### Menu
- Sticky category tabs: Small Plates · Mains · Desserts · Cocktails · Wine · Spirits
- Two-column editorial list (name + price dot-leader, description, allergen chips)
- Featured pairing callout every few sections

### Reservations
- Split screen: left = booking form (date, time, party size, occasion, notes), right = hero image + policy notes
- Confirmation states styled

### Events
- Featured upcoming event hero
- Chronological list with date blocks, genre tags (Jazz, Poetry, DJ)
- "Host your event" cross-link

### Private Dining
- Hero + capacity stats (seated/standing/AV)
- Three room cards with photo + specs
- Inquiry form

### Gallery
- Masonry grid, category filter (Interior · Food · Drinks · Nights)

### Story
- Long-form editorial: founding, chef, mixologist bios
- Timeline of milestones
- Pull-quotes in gold

### Contact
- Map, address, hours table, phone/email, socials, contact form

## Technical Notes

- TanStack Start file-based routes; one file per page under `src/routes/`
- Each route sets its own `head()` (title, description, og:title/description, og:type=website, twitter:card). Leaf routes with a hero absolute image URL also set og:image + twitter:image.
- Design tokens (emerald, gold, cream, radius, shadows, gradients) added to `src/styles.css` `:root` in oklch + registered in `@theme inline`. No hardcoded color utilities in components.
- Fonts loaded via `<link>` in `__root.tsx` head (Cormorant Garamond + Inter). Family names referenced via `--font-*` tokens.
- Reusable components in `src/components/`: `SiteNav`, `SiteFooter`, `SectionHeading`, `ArchedImage`, `GoldDivider`, `EventCard`, `MenuItem`, `ReservationForm`, `InquiryForm`.
- shadcn primitives (Button, Input, Tabs, Select, Calendar) restyled via variants — no direct color overrides.
- Images generated via imagegen (interior, cocktails, dishes, event, portraits) saved to `src/assets/` and imported as ES modules.
- Replace placeholder `src/routes/index.tsx` with the new Home page.
- Contact form and reservation form are UI-only (no backend) — submissions show a toast; note in code for future wiring.

## Out of Scope

- Backend / Lovable Cloud, real booking system, payment, CMS. Purely presentational mockup.
