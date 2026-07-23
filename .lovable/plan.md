# The Old Library — Community Lending Library

Pivot the existing site from a cocktail salon to a **community lending library**. Keep the emerald `#064e3b` + gold `#c9a84c` + cream `#f5f0e0` palette, Cormorant serif + Inter, arched frames, and gold dividers — the literary aesthetic still fits perfectly.

## New site map

Replaces the current 8 routes.

```text
/                Home
/catalogue       Online Catalogue (browse/search books)
/membership      Membership (tiers & join)
/events          Events (kept, re-scoped to library programs)
/support         Support the Library (donate / volunteer)
/about           About Us
/login           Member Login
/contact         Contact & visit
```

Routes to delete: `menu.tsx`, `reservations.tsx`, `private-dining.tsx`, `gallery.tsx`, `story.tsx` (Story content folded into About).
Routes to add: `catalogue.tsx`, `membership.tsx`, `support.tsx`, `about.tsx`, `login.tsx`.
Routes to rewrite: `index.tsx`, `events.tsx`, `contact.tsx`.

## Page content

### Home (`/`)
- Hero: warm library interior, headline "Where every family finds their next story", CTAs "Browse the catalogue" + "Become a member"
- Intro with drop-cap: mission of the library, founding family note
- "New on the shelves" — 4 arched book cards (cover, title, author, availability chip)
- Collections strip: Children · Young Adult · Fiction · Non-fiction · Reference · Local History
- Upcoming events (3 cards: Storytime, Book Club, Author Visit)
- Membership CTA band
- Support / donate teaser
- Hours & visit block

### Online Catalogue (`/catalogue`)
- Search bar (title / author / ISBN) — UI only
- Filter sidebar: Category, Age group, Availability, Language
- Grid of ~24 book cards with cover, title, author, "Available" / "On loan" chip, "Reserve" button (toast)
- Pagination

### Membership (`/membership`)
- Three tiers in arched cards: Family · Individual · Student (annual fee, borrow limits, perks)
- Comparison table
- "How to join" 3-step flow
- FAQ accordion
- Join CTA → login/signup page

### Events (`/events`)
- Rewritten copy: Storytime, Book Clubs, Author Talks, Workshops, School Holiday programs
- Date-block list with age-group tags (Kids, Teens, Adults, All ages) instead of Jazz/Poetry/DJ
- Register-interest form

### Support the Library (`/support`)
- Hero + mission statement
- Three ways to give: Donate books · Financial contribution · Volunteer time
- Impact stats (books lent, members, programs run)
- Donation tier cards (Friend, Patron, Benefactor)
- Volunteer sign-up form (UI only)

### About Us (`/about`)
- Founding family story (long-form editorial, drop caps, pull quotes in gold)
- Timeline of milestones
- Team: Head Librarian, Children's Librarian, Community Coordinator
- Values / community pledge

### Login (`/login`)
- Split screen: form left (email + password, "Remember me", "Forgot password"), hero image right
- Tabs: Sign in / Join (signup fields: name, email, password, membership tier)
- UI-only, no backend — submissions show toast. Marked in code for future Lovable Cloud wiring.

### Contact (`/contact`)
- Map, address, hours table, phone/email, socials, contact form (kept largely as-is, copy tweaked)

## Shared chrome updates

- `SiteNav` links → Catalogue, Membership, Events, Support, About, Contact; primary CTA button "Join" (→ `/membership`) instead of "Reserve"; secondary "Sign in" link → `/login`
- `SiteFooter`: replace "Chapters" links, keep hours/address, add newsletter signup ("Monthly reading list"); remove bar-specific copy
- All copy scrubbed of "cocktails / speakeasy / bar / kitchen / mixologist" — replaced with library language (shelves, collections, chapters, borrowing, members)

## Visual system

Unchanged: emerald/gold/cream tokens in `src/styles.css`, Cormorant + Inter fonts, arched image frames, gold hairline dividers, drop caps, small-caps eyebrows. Only imagery and copy change.

## Imagery

Regenerate/replace with library-appropriate images (imagegen, saved to `src/assets/`):
- `hero-interior.jpg` → warm lending-library reading room with families
- `books.jpg` → close-up of shelved books (keep if suitable, otherwise regenerate)
- New: `children-corner.jpg`, `reading-room.jpg`, `librarian-portrait.jpg`, `event-storytime.jpg`, a set of 24 book-cover thumbnails for the catalogue (or one composite image reused)
- Delete cocktail/dish images no longer referenced

Per-route `head()` metadata rewritten with library-specific title/description/og tags. Home og:image points to the new hero.

## Out of scope

- Real catalogue backend, real auth, real payments/donations. All forms are UI-only with toast confirmations; comments in code flag where Lovable Cloud would wire in later.
