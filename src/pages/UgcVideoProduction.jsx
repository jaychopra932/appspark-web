import Seo from "../components/Seo";
import {
  ArrowRight,
  Captions,
  Clapperboard,
  Film,
  Play,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SiteHeader, SiteFooter, CheckList, ContactBand } from "./_PageShared";

const deliverables = [
  "Creative brief and video concepts",
  "Hooks, scripts and talking points",
  "UGC-style app demonstrations",
  "Editing, captions and aspect-ratio exports",
  "Agreed revisions and usage-rights handoff",
];

export default function UgcVideoProduction() {
  return (
    <>
      <Seo
        title="UGC Video Production for Apps | AppSpark"
        description="Create UGC-style short-form videos for mobile apps. AppSpark helps shape scripts, hooks, product demos and platform-ready creative assets."
        path="/ugc-video-production"
      />

      <div className="min-h-screen bg-[#fffaf7] text-slate-900">
        <SiteHeader />

        <main>
          <section className="overflow-hidden bg-gradient-to-br from-orange-100 via-rose-50 to-white">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold tracking-widest text-orange-700 shadow-sm">
                  <Film size={15} /> SHORT-FORM CREATIVE
                </span>

                <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                  Videos that make your app{" "}
                  <span className="text-orange-600">click.</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  Show people what your app does through clear, relatable
                  UGC-style video concepts, product demos and creator-led
                  storytelling.
                </p>

                <a
                  href="/#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-orange-200 hover:bg-orange-700"
                >
                  Create your video brief <ArrowRight size={17} />
                </a>

                <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                  <span className="flex items-center gap-2">
                    <Play size={16} className="text-orange-600" />
                    Reels & Shorts
                  </span>
                  <span className="flex items-center gap-2">
                    <Captions size={16} className="text-orange-600" />
                    Captions & edits
                  </span>
                </div>
              </div>

              <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-4">
                <div className="translate-y-8 rounded-[2rem] bg-slate-950 p-3 shadow-xl">
                  <div className="flex aspect-[3/4] flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-rose-400 to-orange-500 p-5 text-white">
                    <Smartphone size={26} />
                    <div>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
                        FORMAT 01
                      </span>
                      <h3 className="mt-4 text-2xl font-black">App demo</h3>
                      <p className="mt-2 text-sm text-white/85">
                        Show the feature in action.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-white p-3 shadow-xl">
                  <div className="flex aspect-[3/4] flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-amber-100 to-pink-200 p-5 text-slate-900">
                    <Sparkles size={26} />
                    <div>
                      <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold">
                        FORMAT 02
                      </span>
                      <h3 className="mt-4 text-2xl font-black">
                        Problem / solution
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        Make the value easy to get.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black tracking-[.2em] text-orange-700">
                VIDEO PRODUCTION
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Useful creative, made for the way people watch.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Short-form video needs a strong opening, one clear message and a
                natural next step. We can shape concepts around product
                demonstrations, tutorials, everyday use cases and customer
                questions.
              </p>
            </div>

            <div className="rounded-[2rem] bg-orange-50 p-6 sm:p-9">
              <h3 className="text-xl font-extrabold">
                Possible project deliverables
              </h3>
              <CheckList items={deliverables} />
            </div>
          </section>

          <section className="bg-white px-5 py-16 sm:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-black tracking-[.2em] text-orange-700">
                CONTENT FORMATS
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {[
                  [
                    "Feature walkthrough",
                    "Show how a feature works with a clear, simple demonstration.",
                  ],
                  [
                    "Problem and solution",
                    "Connect a familiar user problem to a relevant app feature.",
                  ],
                  [
                    "Creator story",
                    "Use a relatable scenario to introduce the product naturally.",
                  ],
                ].map(([title, description]) => (
                  <article
                    key={title}
                    className="rounded-3xl border border-slate-200 p-6"
                  >
                    <Clapperboard className="text-orange-600" size={25} />
                    <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <ContactBand title="Let's create videos people understand." />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
