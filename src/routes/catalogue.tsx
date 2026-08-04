import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageShell, PageHeader } from "../components/PageShell";
import shelvesImg from "../assets/shelves.jpg";
import childrenImg from "../assets/children-corner.jpg";
import readingRoomImg from "../assets/reading-room.jpg";
import librarianImg from "../assets/librarian-portrait.jpg";
import heroImg from "../assets/hero-library.jpg";
import storytimeImg from "../assets/event-storytime.jpg";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Online Catalogue — The Old Library" },
      { name: "description", content: "Browse 32,000 books across children's, young adult, fiction, non-fiction, and reference. Reserve online, collect in person." },
      { property: "og:title", content: "Online Catalogue — The Old Library" },
      { property: "og:description", content: "Search and reserve books from our lending collection." },
    ],
  }),
  component: Catalogue,
});

type Book = {
  title: string;
  author: string;
  category: "Children" | "Young Adult" | "Fiction" | "Non-fiction" | "Reference";
  age: "0-6" | "7-12" | "13-17" | "Adult";
  available: boolean;
  img: string;
};

const covers = [shelvesImg, childrenImg, readingRoomImg, librarianImg, heroImg, storytimeImg];
const c = (i: number) => covers[i % covers.length];

const catalogue: Book[] = [
  { title: "The Wandering Ink", author: "Nadia Al-Shami", category: "Fiction", age: "Adult", available: true, img: c(0) },
  { title: "Small Songs", author: "Idris Yusuf", category: "Children", age: "0-6", available: true, img: c(1) },
  { title: "A History of Quiet", author: "Marion Ellwood", category: "Non-fiction", age: "Adult", available: false, img: c(2) },
  { title: "The Cartographer's Daughter", author: "Rania Kassab", category: "Young Adult", age: "13-17", available: true, img: c(3) },
  { title: "Owls in the Attic", author: "P.L. Farrow", category: "Children", age: "7-12", available: true, img: c(4) },
  { title: "Dune", author: "Frank Herbert", category: "Fiction", age: "Adult", available: false, img: c(5) },
  { title: "Kitab al-Hayawan", author: "al-Jahiz", category: "Reference", age: "Adult", available: true, img: c(0) },
  { title: "The Night Diary", author: "Veera Hiranandani", category: "Young Adult", age: "13-17", available: true, img: c(1) },
  { title: "Where the Wild Things Are", author: "Maurice Sendak", category: "Children", age: "0-6", available: true, img: c(2) },
  { title: "Sapiens", author: "Yuval Noah Harari", category: "Non-fiction", age: "Adult", available: false, img: c(3) },
  { title: "Piranesi", author: "Susanna Clarke", category: "Fiction", age: "Adult", available: true, img: c(4) },
  { title: "Matilda", author: "Roald Dahl", category: "Children", age: "7-12", available: true, img: c(5) },
  { title: "The Song of Achilles", author: "Madeline Miller", category: "Fiction", age: "Adult", available: true, img: c(0) },
  { title: "A Little History of the World", author: "E.H. Gombrich", category: "Reference", age: "Adult", available: true, img: c(1) },
  { title: "The Book Thief", author: "Markus Zusak", category: "Young Adult", age: "13-17", available: false, img: c(2) },
  { title: "Guess How Much I Love You", author: "Sam McBratney", category: "Children", age: "0-6", available: true, img: c(3) },
  { title: "The Boy, the Mole, the Fox…", author: "Charlie Mackesy", category: "Fiction", age: "Adult", available: true, img: c(4) },
  { title: "Wonder", author: "R.J. Palacio", category: "Young Adult", age: "13-17", available: true, img: c(5) },
  { title: "Braiding Sweetgrass", author: "Robin Wall Kimmerer", category: "Non-fiction", age: "Adult", available: true, img: c(0) },
  { title: "The Gruffalo", author: "Julia Donaldson", category: "Children", age: "0-6", available: false, img: c(1) },
  { title: "Circe", author: "Madeline Miller", category: "Fiction", age: "Adult", available: true, img: c(2) },
  { title: "The Arabic Grammar", author: "W. Wright", category: "Reference", age: "Adult", available: true, img: c(3) },
  { title: "Charlotte's Web", author: "E.B. White", category: "Children", age: "7-12", available: true, img: c(4) },
  { title: "The Perks of Being a Wallflower", author: "Stephen Chbosky", category: "Young Adult", age: "13-17", available: true, img: c(5) },
];

const categories = ["All", "Children", "Young Adult", "Fiction", "Non-fiction", "Reference"] as const;
const ages = ["All", "0-6", "7-12", "13-17", "Adult"] as const;

function Catalogue() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [age, setAge] = useState<(typeof ages)[number]>("All");
  const [availOnly, setAvailOnly] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return catalogue.filter((b) => {
      if (cat !== "All" && b.category !== cat) return false;
      if (age !== "All" && b.age !== age) return false;
      if (availOnly && !b.available) return false;
      if (q && !`${b.title} ${b.author}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, cat, age, availOnly]);

  function reserve(title: string) {
    setToast(`Reserved "${title}" — collect within 3 days.`);
    setTimeout(() => setToast(null), 2400);
  }

  return (
    <PageShell>
      <PageHeader
        eyebrow="Volume II"
        title="Online Catalogue"
        intro="Search thirty-two thousand books. Reserve online, collect in person. Members borrow free."
      />

      <section className="bg-cream py-20 px-6">
        <div className="mx-auto max-w-7xl">
          {/* SEARCH */}
          <div className="flex items-center gap-3 border-b-2 border-ink pb-4">
            <Search className="text-gold" size={22} />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by title, author, or ISBN…"
              className="flex-1 bg-transparent outline-none text-lg font-serif placeholder:text-muted-foreground"
            />
          </div>

          <div className="mt-12 grid md:grid-cols-[240px_1fr] gap-12">
            {/* FILTERS */}
            <aside className="space-y-10">
              <div>
                <div className="eyebrow mb-4">Category</div>
                <ul className="space-y-2">
                  {categories.map((v) => (
                    <li key={v}>
                      <button
                        onClick={() => setCat(v)}
                        className={`text-sm w-full text-left ${
                          cat === v ? "text-ink border-b border-gold" : "text-muted-foreground hover:text-cream"
                        }`}
                      >
                        {v}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="eyebrow mb-4">Age</div>
                <ul className="space-y-2">
                  {ages.map((v) => (
                    <li key={v}>
                      <button
                        onClick={() => setAge(v)}
                        className={`text-sm w-full text-left ${
                          age === v ? "text-ink border-b border-gold" : "text-muted-foreground hover:text-cream"
                        }`}
                      >
                        {v}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="eyebrow mb-4">Availability</div>
                <label className="flex items-center gap-3 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={availOnly}
                    onChange={(e) => setAvailOnly(e.target.checked)}
                    className="accent-emerald-deep"
                  />
                  Available now
                </label>
              </div>
            </aside>

            {/* GRID */}
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                {filtered.length} of {catalogue.length} titles
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filtered.map((b) => (
                  <article key={b.title} className="group">
                    <div className="aspect-[3/4] overflow-hidden bg-emerald-deep">
                      <img
                        src={b.img}
                        alt={b.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="text-[0.6rem] tracking-[0.2em] uppercase text-gold">
                        {b.category}
                      </div>
                      <h3 className="font-serif text-lg mt-1 text-ink leading-tight">{b.title}</h3>
                      <p className="text-xs text-muted-foreground italic mt-1">{b.author}</p>
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <span
                          className={`text-[0.6rem] tracking-[0.2em] uppercase px-1.5 py-0.5 border ${
                            b.available
                              ? "text-ink border-ink/40"
                              : "text-muted-foreground border-border"
                          }`}
                        >
                          {b.available ? "Available" : "On loan"}
                        </span>
                        <button
                          disabled={!b.available}
                          onClick={() => reserve(b.title)}
                          className="text-xs tracking-[0.2em] uppercase text-gold hover:text-cream disabled:text-muted-foreground/50 disabled:cursor-not-allowed"
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="border border-dashed border-border py-24 text-center">
                  <p className="font-serif italic text-xl text-muted-foreground">
                    No books match. Try a broader search.
                  </p>
                </div>
              )}

              {/* pagination — UI only */}
              <div className="mt-16 flex items-center justify-center gap-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                <button className="hover:text-cream">← Previous</button>
                <span className="text-ink">Page 1 of 84</span>
                <button className="hover:text-cream">Next →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-emerald-deep text-ink px-6 py-3 border border-gold/40 text-sm z-50 shadow-lg">
          {toast}
        </div>
      )}

      {/* NOTE: reserve is UI-only. Wire to Lovable Cloud later. */}
    </PageShell>
  );
}
