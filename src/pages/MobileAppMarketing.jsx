import Seo from "../components/Seo";
import {
  ArrowRight,
  BarChart3,
  Compass,
  Layers3,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";
import { SiteHeader, SiteFooter, CheckList, ContactBand } from "./_PageShared";

const items = [
  "Audience and positioning workshop",
  "Content pillars and campaign angles",
  "Creator-led video concepts",
  "Creative testing recommendations",
  "Measurement and next-step review",
];

export default function MobileAppMarketing() {
  return (
    <>
      <Seo
        title="Mobile App Marketing for Consumer Apps | AppSpark"
        description="Explore creator-led mobile app marketing: short-form content strategy, UGC creative, campaign concepts and creative testing for consumer apps."
        path="/mobile-app-marketing"
      />

      <div className="min-h-screen bg-[#f7fcff] text-slate-900">
        <SiteHeader />

        <main>
          <section className="relative overflow-hidden bg-gradient-to-br from-cyan-100 via-sky-50 to-indigo-100">
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
              <div className="max-w-4xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-extrabold tracking-widest text-sky-800">
                  <Target size={15} /> MARKETING FOR APPS
                </span>

                <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                  A better app deserves{" "}
                  <span className="text-sky-700">a clearer story.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Translate product value into creator-led short-form content
                  that introduces features, answers common questions and
                  supports thoughtful campaign testing.
                </p>

                <a
                  href="/#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-sky-200 hover:bg-sky-800"
                >
                  Talk about your app <ArrowRight size={17} />
                </a>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {[
                  [
                    Compass,
                    "Positioning",
                    "Start with the audience and the problem your app solves.",
                  ],
                  [
                    Layers3,
                    "Creative system",
                    "Build multiple angles around real user needs.",
                  ],
                  [
                    BarChart3,
                    "Measurement",
                    "Choose metrics that match your campaign goal.",
                  ],
                ].map(([Icon, title, description]) => (
                  <article
                    key={title}
                    className="rounded-3xl border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur"
                  >
                    <Icon className="text-sky-700" size={25} />
                    <h2 className="mt-5 text-xl font-extrabold">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_.9fr]">
            <div>
              <p className="text-xs font-black tracking-[.2em] text-sky-700">
                THE APP MARKETING SYSTEM
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Build the story before scaling the spend.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Before making content, identify the audience, the problem your
                app solves, the feature that matters most and the action you
                want viewers to take. A focused message gives every creative
                concept a clear job.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  [
                    "01 · Discover",
                    "Understand the product, audience and desired action.",
                  ],
                  [
                    "02 · Develop",
                    "Create demonstrations, use cases, tutorials and feature spotlights.",
                  ],
                  [
                    "03 · Test",
                    "Compare hooks, edits and calls to action against the right metrics.",
                  ],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
                  >
                    <span className="mt-1 text-sm font-black text-sky-700">
                      {title}
                    </span>
                    <p className="text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] bg-sky-50 p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-700">
                <Users />
              </div>

              <h3 className="mt-5 text-2xl font-black">What we can work on</h3>

              <CheckList items={items} />
            </aside>
          </section>

          <section className="bg-white px-5 py-16 sm:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-black tracking-[.2em] text-sky-700">
                MEASURE WITH INTENTION
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  ["Awareness", "Reach and video retention"],
                  ["Traffic", "Clicks and landing-page visits"],
                  ["Acquisition", "Installs and downstream activation"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-slate-200 p-6"
                  >
                    <MessageCircle className="text-sky-700" />
                    <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{description}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-500">
                Use platform analytics and your app analytics together. Creator
                selection, compensation, disclosures, whitelisting and usage
                duration should be agreed in writing. Campaign outcomes depend
                on the product, audience, offer, distribution and budget.
              </p>
            </div>
          </section>

          <ContactBand title="Ready to give your app a sharper story?" />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
