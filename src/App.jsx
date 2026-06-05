import { useMemo, useState } from "react";

const editorialImages = {
  hero:
    "https://images.unsplash.com/photo-1780685127026-f18b1bc9c449?auto=format&fit=crop&w=1400&q=80",
  boutiqueRack:
    "https://images.unsplash.com/photo-1780685126969-fe68fb1f59cb?auto=format&fit=crop&w=1200&q=80",
  apparel:
    "https://images.unsplash.com/photo-1780685126959-25e11114cd80?auto=format&fit=crop&w=1200&q=80",
  accessories:
    "https://images.unsplash.com/photo-1780685127015-7b40636a6ab1?auto=format&fit=crop&w=1200&q=80",
  handmade:
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
  packaging:
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80",
};

const categories = [
  {
    name: "Personalized Apparel",
    description: "Custom shirts and wearable pieces designed around names, occasions, and meaningful details.",
    image: "https://images.unsplash.com/photo-1780685127090-618501db5df7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Boutique Finds",
    description: "Easy everyday fashion pieces selected for comfort, softness, and giftable style.",
    image: "https://images.unsplash.com/photo-1780685126969-fe68fb1f59cb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Accessories",
    description: "Simple add-ons that complete the look without making the shopping experience feel complicated.",
    image: "https://images.unsplash.com/photo-1780685126890-8fbde3b8ed76?auto=format&fit=crop&w=900&q=80",
  },
];

const products = [
  {
    name: "Custom Graphic Tee",
    category: "Personalized Apparel",
    price: "From $24",
    description: "A personalized shirt made for birthdays, family events, gifts, or everyday statements.",
    image: "https://images.unsplash.com/photo-1780685127036-8415e75e4c7a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Faith-Inspired Shirt",
    category: "Personalized Apparel",
    price: "From $26",
    description: "A meaningful apparel piece with custom wording and soft boutique styling.",
    image: "https://images.unsplash.com/photo-1780685127044-188d6a11d170?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Everyday Boutique Top",
    category: "Boutique Finds",
    price: "From $32",
    description: "A soft, easy-to-style piece for casual outfits, errands, and relaxed weekends.",
    image: "https://images.unsplash.com/photo-1780685126868-f3d8fd83c111?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Seasonal Style Pick",
    category: "Boutique Finds",
    price: "From $28",
    description: "A rotating boutique favorite for holidays, gifting, and fresh seasonal looks.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Accent Accessory Set",
    category: "Accessories",
    price: "From $18",
    description: "Gift-ready accessories chosen to pair with personalized and boutique pieces.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Painted Gift Piece",
    category: "Handmade Gifts",
    price: "From $20",
    description: "Handmade-style decor and custom gifts with a warm, personal touch.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=900&q=80",
  },
];

const faqs = [
  {
    q: "How do I place a personalized order?",
    a: "Choose the product, select your preferred size or style, then provide the wording, theme, color direction, or special details before checkout.",
  },
  {
    q: "What should be shown on each product page?",
    a: "Each product page should include photos, price, available options, personalization instructions, processing expectations, shipping details, and contact support.",
  },
  {
    q: "Why does a boutique store need reviews and UGC?",
    a: "Personalized products need confidence. Customer photos and reviews help shoppers feel safer before ordering something custom.",
  },
  {
    q: "Is this the official live store?",
    a: "This is a concept redesign created as a portfolio sample to show how the store could be rebuilt with better branding, structure, and conversion flow.",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl px-1 text-center">
      <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-[#9a6b4f] sm:text-xs sm:tracking-[0.32em]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-light leading-tight tracking-[-0.04em] text-[#251813] sm:text-5xl" style={{ fontFamily: "Georgia, serif" }}>
        {title}
      </h2>
      {text && <p className="mt-4 text-sm leading-7 text-[#6f625b] sm:mt-5 sm:text-base sm:leading-8">{text}</p>}
    </div>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <article className="group bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#efe8dc]">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-full bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3b2921] backdrop-blur sm:left-4 sm:top-4 sm:px-4 sm:text-[11px] sm:tracking-[0.18em]">
          {product.category}
        </div>
      </div>
      <div className="border-x border-b border-[#e2d6c8] p-4 sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <h3 className="text-lg font-light leading-snug tracking-[-0.03em] text-[#251813] sm:text-xl" style={{ fontFamily: "Georgia, serif" }}>
            {product.name}
          </h3>
          <p className="whitespace-nowrap text-sm font-semibold text-[#251813]">{product.price}</p>
        </div>
        <p className="mt-3 text-sm leading-6 text-[#6f625b] sm:min-h-14">{product.description}</p>
        <button
          onClick={() => onAdd(product)}
          className="mt-5 flex w-full items-center justify-center gap-2 border border-[#251813] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#251813] transition hover:bg-[#251813] hover:text-white sm:px-5 sm:text-xs sm:tracking-[0.22em]"
        >
          Add to concept cart <ArrowIcon className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const filters = ["All", "Personalized Apparel", "Boutique Finds", "Accessories", "Handmade Gifts"];

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const navLinks = [
    { label: "Shop", href: "#shop" },
    { label: "Lookbook", href: "#lookbook" },
    { label: "Custom Orders", href: "#custom" },
    { label: "Story", href: "#story" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f2ea] text-[#251813]">
      <div className="bg-[#251813] px-4 py-2 text-center text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-[#f8f2ea] sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.24em]">
        Special Blessings Shop concept redesign · Boutique apparel and personalized gifts
      </div>

      <header className="sticky top-0 z-50 border-b border-[#e2d6c8] bg-[#f8f2ea]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-5 sm:py-5 lg:px-8">
          <a href="#top" className="leading-none">
            <p className="text-xl font-light tracking-[-0.04em] sm:text-2xl sm:tracking-[-0.05em]" style={{ fontFamily: "Georgia, serif" }}>
              Special Blessings
            </p>
            <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-[0.18em] text-[#9a6b4f] sm:text-[10px] sm:tracking-[0.32em]">Boutique & Custom Apparel</p>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5b4b42] transition hover:text-[#251813]">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#contact" className="border border-[#cdbdaa] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-[#251813]">
              Ask a Question
            </a>
            <a href="#shop" className="bg-[#251813] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#9a6b4f]">
              Shop Concept
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="shrink-0 border border-[#cdbdaa] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] lg:hidden">
            Menu
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#e2d6c8] px-4 py-4 lg:hidden">
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="bg-white px-4 py-3 text-sm font-semibold text-[#251813]">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:gap-8 sm:px-5 sm:py-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
        <div className="flex flex-col justify-between bg-[#eadfd2] p-6 sm:p-10 lg:min-h-[720px] lg:p-12">
          <div>
            <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-[#9a6b4f] sm:text-xs sm:tracking-[0.32em]">Nicholasville, Kentucky</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-light leading-[0.96] tracking-[-0.055em] text-[#251813] sm:mt-8 sm:text-7xl sm:tracking-[-0.07em] lg:text-8xl" style={{ fontFamily: "Georgia, serif" }}>
              Boutique pieces with a personal touch.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#5b4b42] sm:mt-8 sm:text-lg sm:leading-8">
              A fashion-forward e-commerce concept for Special Blessings Shop, designed to make personalized apparel, boutique clothing, accessories, and gifts feel easier to browse and safer to buy.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a href="#shop" className="inline-flex items-center justify-center gap-3 bg-[#251813] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#9a6b4f] sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.24em]">
                Shop the edit <ArrowIcon className="h-4 w-4" />
              </a>
              <a href="#custom" className="inline-flex items-center justify-center border border-[#bca78e] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#251813] transition hover:border-[#251813] sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.24em]">
                Custom order guide
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-[#cdbdaa] pt-6 sm:mt-12 sm:grid-cols-3 sm:gap-3 sm:pt-8">
            {[
              ["01", "Clear categories"],
              ["02", "Custom order steps"],
              ["03", "Trust before checkout"],
            ].map(([num, text]) => (
              <div key={num}>
                <p className="text-sm font-semibold text-[#9a6b4f]">{num}</p>
                <p className="mt-2 text-sm leading-5 text-[#5b4b42]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
          <div className="relative min-h-[360px] overflow-hidden sm:min-h-[520px] lg:min-h-[720px]">
            <img src={editorialImages.hero} alt="Boutique shopping editorial" className="h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a6b4f]">Featured direction</p>
              <p className="mt-2 text-xl font-light leading-tight tracking-[-0.04em] sm:text-2xl" style={{ fontFamily: "Georgia, serif" }}>
                Soft neutrals, clean product stories, and editorial shopping moments.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <img src={editorialImages.boutiqueRack} alt="Boutique clothing rack" className="h-full min-h-[220px] w-full object-cover sm:min-h-[250px]" />
            <div className="bg-white p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a6b4f]">Concept cart</p>
              <p className="mt-3 text-5xl font-light" style={{ fontFamily: "Georgia, serif" }}>
                {cart.length}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#6f625b]">items added while previewing the product flow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-5 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Curated collections"
            title="Give shoppers a clearer place to start."
            text="Instead of a plain catalog, the store should guide customers through visual departments that match how boutique buyers browse."
          />

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
            {categories.map((category) => (
              <a key={category.name} href="#shop" onClick={() => setActiveCategory(category.name)} className="group block bg-white">
                <div className="aspect-[3/4] overflow-hidden bg-[#eadfd2]">
                  <img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="border-x border-b border-[#e2d6c8] p-5 sm:p-6">
                  <h3 className="text-2xl font-light leading-tight tracking-[-0.04em] sm:text-3xl" style={{ fontFamily: "Georgia, serif" }}>
                    {category.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#6f625b]">{category.description}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a6b4f] sm:text-xs sm:tracking-[0.22em]">
                    View category <ArrowIcon className="h-4 w-4" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="bg-white px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-[#9a6b4f] sm:text-xs sm:tracking-[0.32em]">Shop the edit</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-light leading-tight tracking-[-0.05em] sm:text-6xl sm:tracking-[-0.06em]" style={{ fontFamily: "Georgia, serif" }}>
                Product cards built for clarity, not clutter.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#6f625b]">
              Each product area uses stronger photos, clearer categories, benefit-focused descriptions, and a direct buying action.
            </p>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:mt-10 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveCategory(filter)}
                className={`shrink-0 border px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition sm:px-5 sm:text-xs sm:tracking-[0.2em] ${
                  activeCategory === filter
                    ? "border-[#251813] bg-[#251813] text-white"
                    : "border-[#cdbdaa] bg-white text-[#5b4b42] hover:border-[#251813]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} product={product} onAdd={(item) => setCart((current) => [...current, item])} />
            ))}
          </div>
        </div>
      </section>

      <section id="lookbook" className="px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Fashion-first direction"
            title="A boutique site should feel styled before it feels technical."
            text="This section creates a lookbook feel so the brand can show product lifestyle, outfit ideas, handmade touches, and gift moments."
          />

          <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-4 lg:grid-rows-[260px_260px]">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <img src={editorialImages.apparel} alt="Fashion apparel lookbook" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em]">Apparel styling</p>
                <h3 className="mt-2 text-3xl font-light" style={{ fontFamily: "Georgia, serif" }}>
                  Show the product in context.
                </h3>
              </div>
            </div>
            <div className="aspect-[4/5] overflow-hidden lg:aspect-auto">
              <img src={editorialImages.accessories} alt="Boutique accessories" className="h-full min-h-[240px] w-full object-cover sm:min-h-[260px]" />
            </div>
            <div className="bg-[#eadfd2] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a6b4f]">Trust cue</p>
              <p className="mt-4 text-3xl font-light tracking-[-0.04em]" style={{ fontFamily: "Georgia, serif" }}>
                Use customer photos, reviews, and social proof once collected.
              </p>
            </div>
            <div className="bg-[#251813] p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9c6b3]">Backend note</p>
              <p className="mt-4 text-3xl font-light tracking-[-0.04em]" style={{ fontFamily: "Georgia, serif" }}>
                Organize products by category, occasion, and customization type.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden lg:aspect-auto">
              <img src={editorialImages.handmade} alt="Handmade gift process" className="h-full min-h-[240px] w-full object-cover sm:min-h-[260px]" />
            </div>
          </div>
        </div>
      </section>

      <section id="custom" className="bg-[#251813] px-4 py-12 text-white sm:px-5 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d9c6b3]">Custom order guide</p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.05em] sm:text-6xl sm:tracking-[-0.06em]" style={{ fontFamily: "Georgia, serif" }}>
              Make personalization feel simple.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#d9c6b3] sm:mt-6 sm:text-base sm:leading-8">
              Custom apparel needs clear steps. Shoppers should understand what to choose, what to submit, and what happens after the order is placed.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["01", "Choose the base", "Pick apparel type, size, color, and style."],
              ["02", "Add the details", "Submit names, wording, theme, or design notes."],
              ["03", "Confirm with confidence", "Review personalization, policies, and contact options."],
            ].map(([step, title, text]) => (
              <div key={step} className="border border-white/15 p-6 sm:p-7">
                <p className="text-sm font-semibold text-[#d9c6b3]">{step}</p>
                <h3 className="mt-6 text-2xl font-light leading-tight tracking-[-0.04em] sm:mt-8 sm:text-3xl" style={{ fontFamily: "Georgia, serif" }}>
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#d9c6b3]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img src={editorialImages.packaging} alt="Boutique packaging" className="h-[360px] w-full object-cover sm:h-[520px]" />
            <div className="grid gap-4 pt-0 sm:pt-16">
              <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80" alt="Boutique shirt detail" className="h-56 w-full object-cover sm:h-64" />
              <div className="bg-[#eadfd2] p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a6b4f]">Brand promise</p>
                <p className="mt-3 text-2xl font-light tracking-[-0.04em]" style={{ fontFamily: "Georgia, serif" }}>
                  Personal, warm, and easy to shop.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-[#9a6b4f] sm:text-xs sm:tracking-[0.32em]">Brand story</p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.05em] sm:text-6xl sm:tracking-[-0.06em]" style={{ fontFamily: "Georgia, serif" }}>
              More than products, the store needs a stronger boutique identity.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#6f625b] sm:mt-6 sm:text-base sm:leading-8">
              Special Blessings Shop should present its family-owned story, boutique selection, personalized apparel, and handmade gift angle in a way that feels intentional. The design direction moves away from a plain storefront and toward a warm fashion boutique experience.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {[
                "Clear homepage offer",
                "Consistent product imagery",
                "Visible policies and contact details",
                "Review and UGC sections",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-[#e2d6c8] bg-white p-4">
                  <CheckIcon className="h-5 w-5 text-[#9a6b4f]" />
                  <span className="text-sm font-semibold text-[#5b4b42]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionIntro eyebrow="FAQ" title="Remove hesitation before checkout." />
          <div className="mt-8 space-y-3 sm:mt-10">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="border border-[#e2d6c8]">
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 bg-[#f8f2ea] px-4 py-4 text-left sm:gap-6 sm:px-6 sm:py-5">
                  <span className="text-base font-light leading-snug tracking-[-0.03em] sm:text-lg" style={{ fontFamily: "Georgia, serif" }}>
                    {faq.q}
                  </span>
                  <span className="text-2xl font-light">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && <p className="px-4 pb-5 pt-1 text-sm leading-7 text-[#6f625b] sm:px-6 sm:pb-6">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-0 overflow-hidden bg-[#eadfd2] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-6 sm:p-10 lg:p-16">
            <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-[#9a6b4f] sm:text-xs sm:tracking-[0.32em]">Contact and policies</p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.05em] sm:text-6xl sm:tracking-[-0.06em]" style={{ fontFamily: "Georgia, serif" }}>
              Make support easy to find.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#5b4b42] sm:mt-6 sm:text-base sm:leading-8">
              A boutique store should make contact details, policies, and next steps visible so first-time shoppers feel confident before placing an order.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-[#5b4b42]">
              <p><strong className="text-[#251813]">Location:</strong> Nicholasville, Kentucky</p>
              <p><strong className="text-[#251813]">Phone:</strong> 859-227-6897</p>
              <p><strong className="text-[#251813]">Email:</strong> danitataylor141@windstream.net</p>
              <p><strong className="text-[#251813]">Social:</strong> Facebook connected to the shopping journey</p>
            </div>
          </div>

          <div className="bg-[#251813] p-6 text-white sm:p-10 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d9c6b3]">Recommended pages</p>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {["Shipping Policy", "Return & Refund Policy", "Privacy Policy", "Terms of Service", "FAQ", "Custom Order Guide"].map((page) => (
                <div key={page} className="border border-white/15 p-4 text-sm font-semibold text-[#f8f2ea] sm:p-5">
                  {page}
                </div>
              ))}
            </div>
            <a href="#shop" className="mt-8 inline-flex items-center justify-center gap-3 bg-white px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#251813] transition hover:bg-[#d9c6b3] sm:mt-10 sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.24em]">
              Return to shop <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e2d6c8] px-4 py-8 sm:px-5 sm:py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-light tracking-[-0.04em] sm:text-2xl sm:tracking-[-0.05em]" style={{ fontFamily: "Georgia, serif" }}>
              Special Blessings Shop
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6f625b]">
              Concept redesign for a warmer boutique shopping experience with stronger imagery, clearer custom-order flow, and trust-focused e-commerce structure.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6f625b] sm:gap-4 sm:text-xs sm:tracking-[0.22em]">
            <a href="#shop" className="hover:text-[#251813]">Shop</a>
            <a href="#lookbook" className="hover:text-[#251813]">Lookbook</a>
            <a href="#custom" className="hover:text-[#251813]">Custom</a>
            <a href="#contact" className="hover:text-[#251813]">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
