import Seo from "../components/Seo";
import {
  ArrowRight,
  BadgeCheck,
  Clapperboard,
  Target,
  Users,
  WandSparkles,
} from "lucide-react";
import { SiteHeader, SiteFooter, CheckList, ContactBand } from "./_PageShared";

const points = [
  "Audience and creator-fit research",
  "Campaign concepts, hooks and briefs",
  "UGC-style short-form video planning",
  "Creative variations for testing",
  "Delivery-ready assets and campaign handoff",
];

export default function CreatorMarketing() {
  return (
    <>
      <Seo
        title="Creator Marketing for Consumer Apps | AppSpark"
        description="Plan creator-led campaigns for consumer apps with short-form video concepts, UGC-style production and creative testing from AppSpark."
        path="/creator-marketing"
      />

      <div className="min-h-screen bg-[#fbfaff] text-slate-900">
        <SiteHeader />

        <main>
          <section className="relative isolate overflow-hidden bg-gradient-to-br from-violet-100 via-white to-pink-100">
            <div className="absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />

            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-extrabold tracking-[.16em] text-violet-700">
                  <Users size={15} /> CREATOR-LED GROWTH
                </span>

                <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                  Make your app{" "}
                  <span className="text-violet-700">
                    part of the conversation.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Creator marketing for consumer apps, built around real product
                  value, relatable stories and short-form content people can
                  understand.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-800"
                  >
                    Plan a campaign <ArrowRight size={17} />
                  </a>

                  <a
                    href="/#portfolio"
                    className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-center font-bold text-slate-700 hover:border-violet-400"
                  >
                    Explore creative
                  </a>
                </div>

                <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                  <span className="flex items-center gap-2">
                    <BadgeCheck className="text-violet-600" size={17} />
                    Clear campaign scope
                  </span>
                  <span className="flex items-center gap-2">
                    <Target className="text-violet-600" size={17} />
                    Goal-led concepts
                  </span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-lg">
                <div className="rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-violet-200/70">
                  <div className="rounded-[1.5rem] bg-gradient-to-br from-violet-600 via-indigo-500 to-pink-500 p-6 text-white sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest text-white/75">
                        CAMPAIGN PLAYBOOK
                      </span>
                      <WandSparkles />
                    </div>

                    <div className="mt-12 text-3xl font-black leading-tight sm:text-4xl">
                      One product.
                      <br />
                      Many stories.
                    </div>

                    <p className="mt-4 max-w-xs text-sm leading-6 text-white/80">
                      Turn features and everyday use cases into creator-ready
                      ideas.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                        <Clapperboard />
                        <p className="mt-3 text-sm font-bold">Short-form</p>
                        <p className="mt-1 text-xs text-white/70">
                          Video concepts
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                        <Users />
                        <p className="mt-3 text-sm font-bold">Creator fit</p>
                        <p className="mt-1 text-xs text-white/70">
                          Audience first
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-8">
                  <p className="text-xs font-bold text-slate-400">
                    THE STARTING POINT
                  </p>
                  <p className="mt-1 font-extrabold text-slate-900">
                    Your audience, not a trend
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-extrabold tracking-[.2em] text-violet-700">
                THE APPROACH
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Creator campaigns with a clear job to do.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Creators can demonstrate an app in a real-life context, explain
                a feature in plain language and give potential users a reason to
                explore it. The right campaign starts with your audience,
                product value and distribution goal—not simply a list of
                influencer posts.
              </p>
            </div>

            <div className="rounded-[2rem] bg-violet-50 p-6 sm:p-9">
              <h3 className="text-xl font-extrabold">
                What we can scope together
              </h3>
              <CheckList items={points} />
            </div>
          </section>

          <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-extrabold tracking-[.2em] text-violet-700">
                A SIMPLE WORKFLOW
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  [
                    "01",
                    "Understand",
                    "Align on your app, audience, message and campaign objective.",
                  ],
                  [
                    "02",
                    "Create",
                    "Shape creator profiles, hooks, briefs and production requirements.",
                  ],
                  [
                    "03",
                    "Deliver",
                    "Review approved content and hand off assets with agreed usage terms.",
                  ],
                ].map(([n, t, d]) => (
                  <article
                    key={n}
                    className="rounded-3xl border border-slate-200 p-6 sm:p-8"
                  >
                    <span className="text-sm font-black text-violet-600">
                      {n}
                    </span>
                    <h3 className="mt-5 text-2xl font-black">{t}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{d}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <ContactBand />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
