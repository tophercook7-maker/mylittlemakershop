import type { ReactNode } from "react";
import Image from "next/image";

const HERO_IMAGE = "/images/hero-banner.png";
const heroDimensions = { width: 1024, height: 418 } as const;

/** My Little Maker Shop — homepage (components colocated until split into files) */

type Product = {
  name: string;
  price: string;
  emoji: string;
  tag?: string;
};

type Review = {
  quote: string;
  author: string;
  location: string;
  emoji: string;
  rating: number;
};

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Shop", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Custom Orders", href: "#custom-print" },
  { label: "Contact", href: "#footer" },
  { label: "Cart", href: "#cart", note: "coming soon" as const },
] as const;

const featuredProducts: Product[] = [
  {
    name: "Silk Ribbon Bookmark — Peony",
    price: "$14",
    emoji: "🎀",
    tag: "New",
  },
  {
    name: "Sage Vine Page Marker Set",
    price: "$22",
    emoji: "🌿",
  },
  {
    name: "Cottage Rose 3D Bookmark",
    price: "$18",
    emoji: "🌸",
    tag: "3D printed",
  },
  {
    name: "Honeybee Cozy Charm",
    price: "$12",
    emoji: "🐝",
  },
];

const bestSellers: Product[] = [
  { name: "Pressed Flower Ribbon Trio", price: "$32", emoji: "🌼" },
  { name: "Mini Mushroom Shelf Buddy", price: "$16", emoji: "🍄" },
  { name: "Linen & Lace Gift Bundle", price: "$48", emoji: "🎁" },
];

const reviews: Review[] = [
  {
    quote:
      "The ribbon bookmark arrived smelling like lilac and sunshine. It feels like something from a fairy tale.",
    author: "Ellie R.",
    location: "Portland, OR",
    emoji: "💮",
    rating: 5,
  },
  {
    quote:
      "I sent my STL and they matched the cottage vibe perfectly — soft edges and the prettiest blush tone.",
    author: "Marcus V.",
    location: "Austin, TX",
    emoji: "🌷",
    rating: 5,
  },
  {
    quote:
      "Every package has little floral touches. You can tell it was packed with love.",
    author: "Naomi K.",
    location: "Toronto, ON",
    emoji: "🌺",
    rating: 5,
  },
];

/* ——— pink-forward · sage accents only · no stark white ——— */
const shell = {
  gutter: "w-full px-6 sm:px-10 md:px-14 lg:px-[4.25rem] xl:px-[5.75rem] 2xl:px-28",
  inner:
    "mx-auto w-full max-w-[min(100%,1680px)]",
};

const surface = {
  card:
    "relative rounded-[1.375rem] border-2 border-[#BBDABB]/88 bg-[linear-gradient(145deg,#FFF6FB_0%,#FBEBF6_52%,#F5DCEE_118%)] shadow-[inset_0_2px_0_rgba(255,252,255,0.75),0_16px_48px_-28px_rgba(160,112,146,0.22)] backdrop-blur-md",
  cardHover:
    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[inset_0_2px_0_rgba(255,252,255,0.9),0_22px_54px_-28px_rgba(150,112,146,0.26)] hover:border-[#9CC9A7]/93",
  muted: "#7A6272",
  ink: "#493648",
  sage: "#5E8668",
  blush: "#C888A5",
};

function SoftCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${surface.card} ${surface.cardHover} ${className}`}>
      {children}
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  description,
  variant = "default",
}: {
  kicker: string;
  title: string;
  description?: string;
  variant?: "default" | "lit";
}) {
  const isLit = variant === "lit";
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={`text-[0.72rem] font-semibold tracking-[0.28em] uppercase sm:text-xs ${isLit ? "text-[#608E6F]" : ""}`}
        style={isLit ? undefined : { color: surface.sage }}
      >
        {kicker}
      </p>
      <h2
        className={
          "mt-2 font-semibold tracking-tight text-balance " +
          (isLit
            ? "text-[1.675rem] text-[#493648] sm:text-[2rem] md:text-[2.0625rem]"
            : "text-2xl text-[#493648] sm:text-3xl")
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 text-pretty leading-relaxed ${isLit ? "text-[#6B556A] font-medium md:text-[1.08rem]" : ""}`}
          style={isLit ? undefined : { color: surface.muted }}
        >
          {description}
        </p>
      ) : null}
      <CssFloralDivider className={`mt-6 justify-center ${isLit ? "opacity-[0.95]" : ""}`} />
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span style={{ color: surface.blush }} aria-hidden>
      {"★".repeat(count)}
    </span>
  );
}

/** Lightweight CSS “peony” blobs + petal arcs (no external assets) */
function CssPeony({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dim =
    size === "sm" ? "h-24 w-24" : size === "lg" ? "h-48 w-48" : "h-36 w-36";
  return (
    <div
      className={`relative ${dim} ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,#FDF2FA_118%,#EEC8DC_682%,transparent_118%)] opacity-95 blur-[2px]" />
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_62%_40%,#FFEFFB_118%,#E8BED2_962%,transparent_118%)] opacity-85 mix-blend-multiply blur-[1px]" />
      <div className="animate-cottage-slow-spin absolute inset-0">
        {[0, 45, 90, 135].map((deg) => (
          <span
            key={deg}
            className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-[58%] w-[38%] rounded-[999px] bg-[linear-gradient(180deg,#FFE4EF_0%,#DCA7BE_92%)] opacity-74 mix-blend-multiply shadow-[inset_0_-8px_16px_rgba(255,230,246,0.55)]"
            style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
          />
        ))}
      </div>
    </div>
  );
}

function CssFloralDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-2 opacity-85 ${className}`}
      aria-hidden
    >
      <span className="inline-block h-px min-w-[2.5rem] flex-1 bg-[linear-gradient(90deg,transparent,#B8DDC2,transparent)]" />
      <span className="text-lg">❀</span>
      <span className="inline-block size-2 rounded-full bg-[#D9A9C2] opacity-95 shadow-[0_0_0_7px_rgba(188,217,182,0.45)] ring-2 ring-[#C9E8CE]/93" />
      <span className="text-lg">✿</span>
      <span className="inline-block h-px min-w-[2.5rem] flex-1 bg-[linear-gradient(90deg,transparent,#EAC4D9,transparent)]" />
    </div>
  );
}

function FloralHero() {
  return (
    <header
      id="top"
      className="relative w-full overflow-hidden border-b-[3px] border-[#A8D1B8]/93 bg-[linear-gradient(180deg,#FAEAF4_42%,#F3DCEB_144%)] shadow-[inset_0_-16px_40px_-16px_rgba(200,150,178,0.18),0_14px_40px_-24px_rgba(150,120,146,0.15)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_14%_18%,rgba(255,252,255,0.55),transparent_58%),radial-gradient(ellipse_72%_50%_at_90%_-2%,rgba(196,226,204,0.38),transparent_58%)]"
      />
      {/* Banner art includes visible titles; duplicate for screen readers only */}
      <h1 className="sr-only">My Little Maker Shop</h1>
      <p className="sr-only">
        Little treasures, lovingly made. Handmade ribbon bookmarks, 3D printed
        bookmarks, cozy gifts, and little creations made with heart.
      </p>
      <div className="relative w-full bg-[linear-gradient(92deg,rgba(239,218,236,0.9)_24%,rgba(255,246,251,0.6)_112%)]">
        <div className={`${shell.gutter} ${shell.inner} py-3 sm:py-5`}>
          <div className="overflow-hidden rounded-[1.25rem] border-2 border-[#BADCC2]/93 shadow-[0_18px_50px_-28px_rgba(160,138,154,0.28),inset_0_0_0_1px_rgba(255,246,251,0.55)]">
            <Image
              src={HERO_IMAGE}
              alt="MY LITTLE Maker Shop — watercolor banner with peonies, ribbon spools, scissors, brushes, cottage, and handcrafted tagline CREATE · CRAFT · INSPIRE with quality pillars along a sage-green ribbon."
              width={heroDimensions.width}
              height={heroDimensions.height}
              sizes="100vw"
              priority
              className="h-auto w-full select-none object-cover sm:object-contain"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full border-t-[2px] border-[#BFDEC7]/93 bg-[linear-gradient(176deg,#EED7E9_112%,#E7CDDF_278%)] py-7 sm:py-8">
        <div className={`${shell.gutter} ${shell.inner}`}>
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="max-w-2xl text-[0.88rem] font-medium tracking-wide text-[#5E4A62] italic sm:text-[0.95rem]">
              Handmade with heart, made for you — explore our nook below.
            </p>
            <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-5">
              <a
                href="#featured"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,#92C4A8_108%,#6FA985_228%)] px-10 py-3.5 text-[0.98rem] font-semibold tracking-wide text-[#FFFBFD] shadow-[0_14px_32px_-16px_rgba(90,130,118,0.32),inset_0_1px_0_rgba(226,246,237,0.6)] ring-2 ring-[#C6E9D8]/93 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:brightness-[1.02] active:translate-y-0"
              >
                Browse the shop
              </a>
              <a
                href="#custom-print"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#AACFBA]/93 bg-[#FFF2F9]/93 px-10 py-3.5 text-[0.98rem] font-semibold tracking-wide text-[#493648] shadow-[inset_0_2px_0_rgba(255,255,255,0.7),0_12px_36px_-22px_rgba(160,138,154,0.22)] backdrop-blur-sm transition-colors duration-300 hover:border-[#B8E2C9]/93 hover:bg-[#FFF9FD]/94"
              >
                Upload a print file
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function SiteNav() {
  return (
    <nav
      className="sticky top-0 z-20 w-full border-b-[3px] border-[#BEDDC8]/93 bg-[linear-gradient(95deg,#FDF2F9_118%,#F6E8F5_278%)] shadow-[0_12px_40px_-26px_rgba(150,128,154,0.25),inset_0_-1px_0_rgba(167,207,172,0.35)] backdrop-blur-lg supports-[backdrop-filter]:bg-[linear-gradient(95deg,#FDF6FB_118%,rgba(247,237,246,0.93)_274%)]"
      aria-label="Main"
    >
      <div
        className={`flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between ${shell.gutter} ${shell.inner}`}
      >
        <div className="flex items-center justify-between gap-3">
          <a
            href="#top"
            className="text-lg font-semibold tracking-tight text-[#38222E] drop-shadow-sm"
          >
            <span className="mr-2 text-[#5E8668]" aria-hidden>
              ✿
            </span>
            My Little Maker Shop
          </a>

          <details className="group relative sm:hidden">
            <summary className="list-none rounded-full bg-[rgba(239,218,236,0.65)] px-3.5 py-2 text-sm font-semibold text-[#493648] ring-2 ring-[#BFDEC7]/93 [&::-webkit-details-marker]:hidden cursor-pointer transition-colors hover:bg-[#F7EAF4]/93">
              Menu ☰
            </summary>
            <div className="absolute top-full right-0 z-30 mt-2 w-[min(100vw-2rem,300px)] rounded-[1rem] border-2 border-[#C9E9D6]/93 bg-[linear-gradient(160deg,#FFF9FD_142%,#F2E8F4_362%)] p-5 shadow-[0_22px_50px_-24px_rgba(150,128,154,0.3)] backdrop-blur-lg">
              <ul className="flex flex-col gap-0.5 text-sm font-semibold tracking-wide">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block rounded-xl px-3 py-2.5 text-[#493648] transition-colors hover:bg-[#FDF0F9]/93"
                    >
                      {link.label}
                      {"note" in link && link.note === "coming soon" ? (
                        <span className="ml-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#5E8668]">
                          (soon)
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>

        <ul className="hidden flex-wrap items-center justify-end gap-x-6 gap-y-2 text-[0.8rem] font-semibold uppercase tracking-[0.18em] sm:flex md:gap-x-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#493648] transition-colors hover:text-[#558268]"
              >
                {link.label}
                {"note" in link && link.note === "coming soon" ? (
                  <span className="ml-2 text-[0.65rem] font-semibold lowercase tracking-normal text-[#5E8668]">
                    (soon)
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <SoftCard className="flex flex-col overflow-hidden p-6 sm:p-7">
      <div className="pointer-events-none absolute inset-px rounded-[1.125rem] border border-[rgba(255,226,239,0.45)] opacity-95" aria-hidden />
      <div className="flex items-start justify-between gap-3">
        <div
          className="relative flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(165deg,#FFEBF8_138%,#E8C9DC_392%)] text-4xl shadow-[inset_0_-8px_20px_rgba(255,230,246,0.55),inset_0_1px_0_rgba(206,229,216,0.45)] ring-2 ring-[#C4E9D8]/93"
          aria-hidden
        >
          {product.emoji}
        </div>
        {product.tag ? (
          <span className="rounded-full border border-[#A8D1B8]/93 bg-[#F1FAF6]/93 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#4F6F5C] shadow-[inset_0_1px_0_rgba(255,253,251,0.75)]">
            {product.tag}
          </span>
        ) : null}
      </div>
      <h3 className="relative mt-5 font-semibold leading-snug text-[#39242F] text-[1.05rem] tracking-tight sm:text-[1.08rem]">
        {product.name}
      </h3>
      <p className="relative mt-2 text-lg font-semibold tracking-tight text-[#5F8570]">{product.price}</p>
      <button
        type="button"
        className="relative mt-auto mt-8 w-full rounded-xl border-2 border-[#D4B9CC]/93 bg-[linear-gradient(180deg,#F8E0EE_148%,#E9C9DC_392%)] py-3 text-[0.86rem] font-bold uppercase tracking-[0.22em] text-[#4A3948] opacity-93 shadow-[inset_0_2px_0_rgba(255,248,253,0.88),0_12px_32px_-20px_rgba(170,146,164,0.22)] ring-2 ring-transparent transition-[transform,opacity] hover:opacity-100"
        disabled
        title="Checkout coming soon"
      >
        Add to cart — soon
      </button>
    </SoftCard>
  );
}

function FeaturedSection() {
  return (
    <section
      id="featured"
      className="relative w-full scroll-mt-28 bg-[linear-gradient(182deg,#F3E7F6_228%,#E9DFEF_478%)] py-16 pb-24 pt-14 sm:py-24 sm:pb-28 sm:pt-16 md:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_74%_50%_at_10%_-4%,rgba(255,253,254,0.65),transparent_58%),linear-gradient(90deg,rgba(172,219,178,0.22),transparent_30%,transparent_70%,rgba(172,219,178,0.15))]"
      />
      <div className={`relative flex flex-col ${shell.gutter} ${shell.inner}`}>
        <SectionHeading
          kicker="Featured collection"
          title="Fresh petals from our workbench"
          description="Ribbon layers, sculpted blooms, and honey-sweet trims — lovingly finished for bloom-filled shelves."
          variant="lit"
        />
        <div className="mt-14 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {featuredProducts.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellersSection() {
  return (
    <section className="relative w-full overflow-hidden border-y-[3px] border-[#BEDDCB]/93 bg-[linear-gradient(175deg,#E9DBEB_382%,#E2D6E9_698%)] py-16 pb-28 sm:py-24 lg:pb-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_-4%,rgba(255,251,253,0.55),transparent_48%),linear-gradient(-12deg,rgba(173,217,172,0.2),transparent_52%)]"
      />
      <div className={`relative flex flex-col ${shell.gutter} ${shell.inner} py-8 sm:py-10`}>
        <SectionHeading
          kicker="Best sellers"
          title="Shelf favorites folks reach for twice"
          description="Community-softened picks — dreamy for gifting, even dreamier tucked into your journal."
          variant="lit"
        />
        <div className="mt-16 grid w-full gap-7 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {bestSellers.map((p, i) => (
            <SoftCard
              key={p.name}
              className={`relative overflow-hidden p-8 xl:p-9 ${i === 1 ? "lg:translate-y-[-12px]" : ""}`}
            >
              <span className="absolute top-7 right-7 rounded-full border border-[#A8CFB6]/93 bg-[#F2FAF8]/93 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-[#52705E] shadow-[inset_0_1px_0_rgba(255,254,253,0.75)]">
                #{i + 1}
              </span>
              <div
                className="mb-6 flex size-[4.125rem] items-center justify-center rounded-[1.15rem] bg-[linear-gradient(152deg,#FFF2FA_392%,#E7CADA_962%)] text-4xl ring-[5px] ring-[#D4EFDC]/93 shadow-[inset_0_-8px_26px_rgba(255,230,246,0.45),inset_0_3px_0_rgba(255,252,255,0.65)] xl:text-[2.625rem]"
                aria-hidden
              >
                {p.emoji}
              </div>
              <h3 className="text-[1.18rem] font-semibold leading-snug tracking-tight text-[#39242F]">
                {p.name}
              </h3>
              <p className="mt-3 text-xl font-semibold tracking-tight text-[#5F8570]">{p.price}</p>
              <p className="mt-5 text-[0.92rem] font-medium leading-relaxed text-[#6F5C70]">
                Wrapped with botanical confetti, sage wax seals, &amp; handwritten
                petals tied in silk twine.
              </p>
            </SoftCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomPrintCTA() {
  return (
    <section id="custom-print" className="relative w-full scroll-mt-28 bg-[linear-gradient(176deg,#F1E9F9_682%,#E9E2F2_962%)] py-16 pb-28 sm:py-24 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_-8%,rgba(255,251,253,0.65),transparent_44%),linear-gradient(-80deg,rgba(173,217,174,0.18),transparent_48%)]"
      />
      <div className={`relative ${shell.gutter} ${shell.inner}`}>
        <SoftCard className="border-[3px] border-dashed border-[#C4E9D9]/93 p-10 sm:border-[4px] sm:p-14 lg:p-16 xl:p-[4.125rem]">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_-20%,rgba(255,252,255,0.55),transparent_42%),linear-gradient(128deg,rgba(250,237,246,0.5)_118%,transparent_108%,rgba(175,226,206,0.15)_392%)]"
            aria-hidden
          />
          <div className="relative grid gap-12 xl:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] xl:items-center xl:gap-16">
            <div className="max-w-xl lg:max-w-none">
              <p className="text-[0.72rem] font-bold tracking-[0.32em] text-[#588268] uppercase sm:text-xs">
                Custom Cottage Printing
              </p>
              <h2 className="mt-3 font-semibold tracking-tight text-[#493648] text-[1.8rem] leading-[1.15] text-balance sm:text-[2rem] xl:text-[2.25rem]">
                Upload your STL / 3MF — we soften edges in peony resin finishes.
              </h2>
              <p className="mt-5 text-[1.05rem] font-medium leading-relaxed text-[#6F5C72] xl:text-[1.08rem]">
                Send us your sculpted file — we marry it with rose-mist palettes,
                sage-trim seams, biodegradable ribbon, &amp; hand-sanded tenderness.
              </p>
              <ul className="mt-10 space-y-4 border-l-[3px] border-[#BFDECF]/93 pl-6 font-medium text-[1.015rem] text-[#544050] xl:text-[1.05rem]">
                <li className="flex gap-3 leading-snug">
                  <span aria-hidden className="shrink-0 text-[1.1rem] leading-none opacity-92">
                    🌸
                  </span>
                  <span>.stl · .3mf — one adored file whisper per cottage request</span>
                </li>
                <li className="flex gap-3 leading-snug">
                  <span aria-hidden className="shrink-0 text-[1.05rem] leading-none opacity-90">
                    🍃
                  </span>
                  <span>We letter you before filament ever kisses warmth</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[1.375rem] border-[3px] border-dashed border-[#CCEADD]/93 bg-[linear-gradient(160deg,#FFF7FB_962%,#EED6EA_392%)] p-11 text-center ring-[10px] ring-[#FBDFF2]/93 shadow-[inset_0_0_48px_-12px_rgba(255,240,251,0.65),inset_0_-2px_0_rgba(173,217,174,0.28)] xl:p-[3rem] xl:shadow-[inset_0_0_56px_-16px_rgba(255,240,251,0.55)]">
              <div className="mx-auto mb-8 flex justify-center rounded-full border-2 border-[#CDE9DA]/93 bg-[#FFF5FA]/96 p-[1rem] shadow-[inset_0_-4px_16px_rgba(255,230,246,0.45)] lg:max-w-fit">
                <span className="text-[4rem]" aria-hidden>
                  📎
                </span>
              </div>
              <p className="text-[1.35rem] font-semibold tracking-tight text-[#493648] xl:text-[1.425rem]">
                Upload nook (opening soon!)
              </p>
              <p className="mx-auto mt-4 max-w-sm text-[0.95rem] font-medium leading-relaxed text-[#71607A] xl:max-w-md">
                Drop your sweetest STL beside rosy ribbon swatches — circuitry is blooming under our hoopskirts.
              </p>
              <button
                type="button"
                className="mt-10 cursor-not-allowed rounded-full bg-[linear-gradient(188deg,#8CC5A8_962%,#6FA98C_478%)] px-11 py-[0.775rem] text-[0.85rem] font-bold uppercase tracking-[0.3em] text-[#FFFDFE]/94 shadow-[inset_0_2px_0_rgba(230,246,238,0.55),0_16px_32px_-16px_rgba(110,150,138,0.28)] ring-4 ring-[#D5F6E9]/93"
                disabled
              >
                Choose ✿ soon
              </button>
            </div>
          </div>
        </SoftCard>
      </div>
    </section>
  );
}

function PhotoFrame({
  initials,
}: {
  initials: string;
}) {
  return (
    <div className="flex aspect-[5/6] flex-col justify-between rounded-[17px] border-2 border-[#C5E9D9]/93 bg-[linear-gradient(152deg,#FFEEF8_962%,#E9D8EB_682%)] p-6 shadow-[inset_0_0_48px_-14px_rgba(255,240,251,0.55)] ring-[6px] ring-[#FACFE8]/93">
      <CssFloralDivider className="justify-start gap-1 pb-6 opacity-[0.94]" />
      <div className="flex flex-1 flex-col justify-center rounded-[15px] border-2 border-dashed border-[#DAAEC7]/93 bg-[rgba(255,246,251,0.72)] p-[1.675rem] text-[2.15rem] shadow-[inset_0_-8px_24px_-6px_rgba(232,200,226,0.22)] backdrop-blur-sm">
        <span className="text-center">{initials}</span>
      </div>
      <CssFloralDivider className="justify-end pt-6 opacity-[0.94]" />
    </div>
  );
}

function ReviewsSection() {
  return (
    <section className="relative w-full overflow-hidden border-t-[3px] border-[#C5EADD]/93 bg-[linear-gradient(168deg,#E6DFEA_962%,#DED9E9_682%)] py-14 pb-[5.625rem] shadow-[inset_0_-24px_48px_-32px_rgba(180,160,178,0.15)] sm:py-[4.875rem] sm:pb-[6.875rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_108%_-6%,rgba(255,251,253,0.6),transparent_46%),linear-gradient(-18deg,rgba(173,217,174,0.22),transparent_46%)]"
      />
      <div className={`relative flex flex-col ${shell.gutter} ${shell.inner}`}>
        <SectionHeading
          kicker="Stories from the bookshelf"
          title="Photos & dreamy reviews"
          description="Ribbon shadows on blush mornings — merci for tagging us beneath sunlight-drenched pages."
          variant="lit"
        />
        <div className="mt-16 grid w-full gap-[1.6875rem] lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {reviews.map((r) => (
            <SoftCard
              key={r.author}
              className="grid gap-9 p-[1.9rem] sm:flex sm:flex-col sm:p-[2.125rem] xl:p-10"
            >
              <div className="grid gap-8 sm:grid-cols-[minmax(132px,1fr)_minmax(0,1fr)] sm:gap-9">
                <PhotoFrame initials={r.emoji} />
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-[3.35rem] items-center justify-center rounded-full bg-[linear-gradient(168deg,#FFEBFA_962%,#E6CADA_962%)] text-[1.835rem] shadow-[inset_0_-4px_14px_rgba(255,230,246,0.45)] ring-[3px] ring-[#C8EAD8]/93"
                      aria-hidden
                    >
                      {r.emoji}
                    </div>
                    <div>
                      <p className="text-[1.05rem] font-semibold text-[#493648]">{r.author}</p>
                      <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#7A6978]">{r.location}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-[0.95rem] tracking-[0.12em]">
                    <Stars count={r.rating} />
                  </div>
                  <blockquote className="mt-8 flex-1 rounded-[1.275rem] border-2 border-[#CCEDD9]/93 bg-[linear-gradient(186deg,#FFF8FC_962%,#F1E7F2_382%)] p-[1.4rem] text-[1.005rem] font-medium leading-relaxed text-[#594658] italic shadow-[inset_0_-6px_24px_-4px_rgba(232,210,226,0.18)] xl:p-7 xl:text-[1.025rem]">
                    “{r.quote}”
                  </blockquote>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-full border-2 border-[#CDECE0]/93 bg-[#EFFAF6]/96 px-[1.125rem] py-[0.55rem] text-[0.65rem] font-extrabold tracking-[0.28em] text-[#4F695C] uppercase shadow-[inset_0_1px_0_rgba(254,253,251,0.75)] md:text-[0.68rem]">
                <span aria-hidden>📸</span>
                Gallery opens 🌙
              </div>
            </SoftCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section
      id="about"
      className="relative w-full scroll-mt-28 bg-[linear-gradient(176deg,#EFDFEB_962%,#E7D9E9_962%)] py-16 pb-24 pt-14 sm:py-24 lg:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_6%_-6%,rgba(255,251,253,0.6),transparent_44%),linear-gradient(120deg,rgba(173,217,174,0.18),transparent_46%)]"
      />
      <div className={`relative ${shell.gutter} ${shell.inner}`}>
        <SoftCard className="grid gap-[2.0625rem] p-8 sm:grid-cols-2 sm:items-center sm:gap-x-14 sm:p-11 lg:gap-x-24 xl:p-[3.5625rem]">
          <div className="max-w-xl lg:max-w-none">
            <p className="text-[0.715rem] font-bold tracking-[0.32em] text-[#5E8670] uppercase sm:text-[0.75rem]">
              About preview
            </p>
            <h2 className="mt-3 font-semibold tracking-tight text-[#493648] text-[1.8rem] leading-[1.15] text-balance sm:text-[2.05rem] lg:text-[2.16rem]">
              One velvet studio — floss, filament &amp; sugared violet leaflets.
            </h2>
            <p className="mt-[1.0625rem] text-[1.015rem] font-medium leading-relaxed text-[#6B5A72] xl:text-[1.07rem]">
              My Little Maker Shop began beside copper kettles and peony tinsel:
              heirloom ribbons braided by dusk, filament vines softened with sanded suede,
              and parcels cloaked in handwritten ink.
            </p>
            <a
              href="#footer"
              className="mt-11 inline-flex items-center gap-2 text-[0.85rem] font-bold uppercase tracking-[0.38em] text-[#5E8670] underline-offset-[12px] transition-colors hover:underline hover:text-[#4E735A]"
            >
              Full cottage story ✿ 🌿
            </a>
          </div>
          <div
            className="relative flex pb-2 pt-10 sm:min-h-[356px] sm:pb-8 sm:pt-2"
            aria-hidden
          >
            <div className="pointer-events-none absolute inset-0 rounded-[1.775rem] bg-[radial-gradient(circle_at_24%_20%,rgba(246,229,239,0.65),transparent_52%),radial-gradient(circle_at_86%_84%,rgba(141,205,157,0.34),transparent_53%)]" />
            <div className="relative flex w-full flex-col items-center justify-center gap-[1.725rem] rounded-[1.775rem] border-[3px] border-[#CDEEDF]/93 bg-[linear-gradient(154deg,#FFEFFA_962%,#CDE8E2_1322%)] p-12 pb-14 pt-14 text-center shadow-[inset_0_0_72px_-18px_rgba(255,245,251,0.65),inset_0_-2px_0_rgba(173,217,174,0.26)] xl:gap-[1.965rem]">
              <CssPeony size="sm" className="absolute top-[1.0625rem] left-[1.0625rem] opacity-86" />
              <CssPeony size="sm" className="absolute right-[1.0625rem] bottom-[2.0625rem] opacity-74" />
              <span className="relative translate-y-[-2px] text-[4.9375rem] drop-shadow-[0_6px_24px_rgba(160,146,174,0.18)] xl:text-[5.0625rem]">
                🏡
              </span>
              <div className="flex justify-center gap-12 pt-1 text-[1.9625rem] xl:gap-[3.5rem]">
                <span>🎀</span>
                <span>🖨️</span>
                <span>🕯️</span>
              </div>
            </div>
          </div>
        </SoftCard>
      </div>
    </section>
  );
}

function CartRibbon() {
  return (
    <div
      id="cart"
      className="-mt-[2px] w-full scroll-mt-28 border-y-[3px] border-[#C7EADB]/93 bg-[linear-gradient(91deg,#F1E1EF_962%,#DCF0E9_962%)] py-[1.3rem]"
    >
      <div className={`${shell.gutter} ${shell.inner}`}>
        <p className="text-center font-extrabold uppercase tracking-[0.38em] text-[#5A4E66] md:text-[0.88rem]">
          🛒 Cart &amp; checkout cultivating soon ☘️
        </p>
      </div>
      <span className="sr-only">
        Checkout is not wired yet — anchor for cart navigation placeholder.
      </span>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden border-t-[3px] border-[#CDE9DC]/93 bg-[linear-gradient(182deg,#DCC6D7_962%,#CFB8CC_962%)] pb-[3.75rem] pt-[3.25rem] lg:pb-[4rem] lg:pt-[4.25rem]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(226,246,239,0.35),transparent)] md:h-[6.875rem]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_14%_-2%,rgba(255,251,253,0.55),transparent_46%),linear-gradient(-45deg,rgba(173,226,206,0.22),transparent_49%)]"
      />
      <div className={`relative ${shell.gutter} ${shell.inner}`}>
        <div className="flex flex-col gap-16 xl:flex-row xl:justify-between xl:gap-[4.0625rem]">
          <div className="max-w-md">
            <p className="text-[1.35rem] font-semibold tracking-tight text-[#493648] xl:text-[1.465rem]">
              <span className="mr-2 text-[#5F8574]" aria-hidden>
                ✿
              </span>
              My Little Maker Shop
            </p>
            <p className="mt-[0.9625rem] text-[1.015rem] font-medium leading-[1.7] text-[#5E4C60] xl:text-[1.06rem]">
              Little treasures, lovingly made — from our hearth to your heirloom ledge vignette.
            </p>
            <p className="mt-[1.0625rem] text-2xl tracking-[0.4em]" aria-hidden>
              🌸 🌿 🌷 💌 ✨
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-14 gap-y-14 text-[0.985rem] font-medium leading-relaxed text-[#5A4860] sm:grid-cols-3 sm:gap-y-14 lg:flex lg:max-w-4xl lg:flex-nowrap lg:justify-between lg:gap-x-24">
            <div>
              <p className="text-[0.72rem] font-extrabold tracking-[0.36em] text-[#5F8578] uppercase">
                Wander
              </p>
              <ul className="mt-[1.425rem] space-y-[0.65rem]">
                <li>
                  <a
                    href="#featured"
                    className="border-b-[2px] border-transparent pb-px font-semibold text-[#493648] transition-colors hover:border-[#9CCDAD]/93 hover:text-[#3C2F44]"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="border-b-[2px] border-transparent pb-px font-semibold text-[#493648] transition-colors hover:border-[#9CCDAD]/93 hover:text-[#3C2F44]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#custom-print"
                    className="border-b-[2px] border-transparent pb-px font-semibold text-[#493648] transition-colors hover:border-[#9CCDAD]/93 hover:text-[#3C2F44]"
                  >
                    Custom orders
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[0.72rem] font-extrabold tracking-[0.36em] text-[#5F8578] uppercase">
                Tender help
              </p>
              <ul className="mt-[1.425rem] space-y-[0.65rem]">
                <li>
                  <span className="opacity-98">Shipping</span>
                  <span className="ml-3 text-[0.66rem] font-bold uppercase tracking-[0.34em] text-[#5F8578] md:ml-[0.9rem]">soon</span>
                </li>
                <li>
                  <span className="opacity-98">Returns</span>
                  <span className="ml-3 text-[0.66rem] font-bold uppercase tracking-[0.34em] text-[#5F8578] md:ml-[0.9rem]">soon</span>
                </li>
                <li>
                  <a
                    href="mailto:hello@mylittlemakershop.example"
                    className="border-b-[2px] border-transparent pb-px font-semibold text-[#493648] transition-colors hover:border-[#9CCDAD]/93 hover:text-[#3C2F44]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1 lg:max-w-sm">
              <p className="text-[0.72rem] font-extrabold tracking-[0.36em] text-[#5F8578] uppercase">
                Visiting hours
              </p>
              <p className="mt-[1.425rem] font-medium leading-relaxed text-[#5A4860]/98">
                Sun-dusted online conservatory — snail mail bouquets inside every blush parcel kissed sealed.
              </p>
            </div>
          </div>
        </div>
        <CssFloralDivider className="mx-auto my-[clamp(3.0625rem,5vw,3.965rem)] max-w-xl opacity-[0.86]" />
        <p className="text-center text-[0.64rem] font-bold uppercase tracking-[0.355em] text-[#5F8578]/95 md:text-[0.68rem]">
          © {new Date().getFullYear()} My Little Maker Shop · Minted blush mist &amp; ribbon dusk ✨
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden text-[#3A2432]">
      <FloralHero />

      <SiteNav />

      <main className="w-full">
        <FeaturedSection />
        <BestSellersSection />
        <CustomPrintCTA />
        <ReviewsSection />
        <AboutPreview />
      </main>

      <CartRibbon />

      <SiteFooter />
    </div>
  );
}
