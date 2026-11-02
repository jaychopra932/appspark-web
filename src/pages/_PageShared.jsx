import { ArrowRight, Check, Sparkles } from "lucide-react";

const links = [
  ["Creator marketing", "/creator-marketing"],
  ["UGC video production", "/ugc-video-production"],
  ["Mobile app marketing", "/mobile-app-marketing"],
  ["Pricing", "/pricing"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="shrink-0 text-2xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-pink-500 bg-clip-text text-transparent">
            AppSpark
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-slate-600 transition hover:text-violet-700"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-violet-700 sm:px-5"
        >
          Let’s talk <ArrowRight size={16} />
        </a>
      </div>

      <nav className="flex gap-2 overflow-x-auto px-4 pb-3 lg:hidden">
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} AppSpark. Creator-led content for
          consumer apps.
        </span>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-violet-700">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/80 p-4 text-sm font-medium leading-6 text-slate-700 shadow-sm"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
            <Check size={15} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ContactBand({ title = "Have an app story worth sharing?" }) {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-200">
          <Sparkles />
        </div>

        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Tell us what you’re building, who you want to reach and what you need
          to create. We’ll help shape a practical project scope.
        </p>

        <a
          href="/#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-violet-100"
        >
          Start a conversation <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}
