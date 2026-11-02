import Seo from "../components/Seo";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Layers3,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader, SiteFooter, ContactBand } from "./_PageShared";

const factors = [
  "Number of videos and creative concepts",
  "Creator selection and compensation",
  "Filming and editing complexity",
  "Usage rights and licensing duration",
  "Revision rounds and approval process",
  "Delivery timeline and approvals",
];

export default function Pricing() {
  return (
    <>
      <Seo
        title="Creator Marketing & UGC Video Pricing | AppSpark"
        description="Discuss a creator marketing or UGC video production scope with AppSpark. Pricing is based on video quantity, creator requirements, usage rights and campaign complexity."
        path="/pricing"
      />

      <div className="min-h-screen bg-[#fbfbff] text-slate-900">
        <SiteHeader />

        <main>
          <section className="bg-gradient-to-br from-indigo-100 via-white to-fuchsia-100">
            <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-24">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold tracking-widest text-indigo-700 shadow-sm">
                <ClipboardList size={15} /> SCOPE & PRICING
              </span>

              <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Clear scope.{" "}
                <span className="text-indigo-700">No guesswork.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Every app has a different brief. We shape a proposal around the
                content you need, the creators involved and how you plan to use
                the final assets.
              </p>

              <a
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-800"
              >
                Request a project quote <ArrowRight size={17} />
              </a>

              <p className="mt-4 text-xs text-slate-500">
                No fixed package or performance result is implied until a scope
                is agreed.
              </p>
            </div>
          </section>

          <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_.9fr]">
            <div>
              <p className="text-xs font-black tracking-[.2em] text-indigo-700">
                WHAT SHAPES YOUR QUOTE
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Pricing follows the actual work.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Project cost depends on the number of videos, creative concepts,
                creator involvement, filming complexity, editing requirements,
                revisions, usage rights and timeline. We confirm the
                deliverables and terms before work begins.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {factors.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700"
                  >
                    <Check className="shrink-0 text-indigo-600" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-200">
                <Layers3 />
              </div>

              <p className="mt-6 text-xs font-extrabold tracking-[.2em] text-indigo-300">
                A GOOD STARTING POINT
              </p>

              <h3 className="mt-3 text-3xl font-black">A focused pilot</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Start with a defined brief to assess creative fit before
                planning a larger campaign.
              </p>

              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                {[
                  "Target audience and campaign goal",
                  "Agreed video and concept quantities",
                  "Approval process and delivery dates",
                  "Usage rights, revisions and success metrics",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="shrink-0 text-indigo-300" size={17} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="/#contact"
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-extrabold text-slate-950 hover:bg-indigo-100"
              >
                Discuss a pilot <ArrowRight size={17} />
              </a>
            </aside>
          </section>

          <section className="bg-indigo-50 px-5 py-16 sm:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-black tracking-[.2em] text-indigo-700">
                HOW QUOTING WORKS
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {[
                  [
                    MessageSquareText,
                    "Share your brief",
                    "Send your app link, audience, platforms and timeline.",
                  ],
                  [
                    ClipboardList,
                    "Confirm the scope",
                    "Agree deliverables, creator costs, rights and revisions.",
                  ],
                  [
                    ShieldCheck,
                    "Get it in writing",
                    "Review the proposal, payment milestones and schedule.",
                  ],
                ].map(([Icon, title, description]) => (
                  <article key={title} className="rounded-3xl bg-white p-6">
                    <Icon className="text-indigo-700" size={25} />
                    <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <ContactBand title="Tell us what you need. We’ll help scope it." />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
