import Seo from "../components/Seo";

const pages = {
  creatorMarketing: {
    path: "/creator-marketing",
    title: "Creator Marketing for Consumer Apps | AppSpark",
    description: "Plan creator-led campaigns for consumer apps with short-form video concepts, UGC-style production and creative testing from AppSpark.",
    eyebrow: "CREATOR-LED GROWTH",
    heading: "Creator marketing for consumer apps",
    intro: "Turn your app’s strongest use cases into short-form stories people want to watch. AppSpark helps consumer app teams plan creator-led content, develop clear creative concepts and prepare videos for social channels.",
    sections: [
      ["What creator marketing can do for an app", "Creators can demonstrate an app in a real-life context, explain a feature in plain language and give potential users a reason to explore it. The right campaign starts with your audience, product value and distribution goal—not simply a list of influencer posts."],
      ["Our campaign approach", "We begin by understanding your app, audience and campaign objective. From there, we shape creator profiles and content angles, develop hooks and scripts, coordinate production where agreed, and prepare final assets for review and publishing."],
      ["Creative built for short-form platforms", "Content can be planned for TikTok, Instagram Reels and YouTube Shorts. Each platform has its own audience and creative conventions, so concepts should be adapted rather than copied blindly."],
      ["Who this is for", "This service is designed for consumer app startups and growth teams in categories such as AI, productivity, fitness, wellness, lifestyle and entertainment. We agree scope, creator involvement, usage rights and timelines before work begins."]
    ],
    bullets: ["Audience and creator-fit research", "Campaign concepts, hooks and briefs", "UGC-style short-form video planning", "Creative variations for testing", "Delivery-ready assets and campaign handoff"]
  },
  ugcVideo: {
    path: "/ugc-video-production",
    title: "UGC Video Production for Apps | AppSpark",
    description: "Create UGC-style short-form videos for mobile apps. AppSpark helps shape scripts, hooks, product demos and platform-ready creative assets.",
    eyebrow: "SHORT-FORM CREATIVE",
    heading: "UGC video production for mobile apps",
    intro: "Show people what your app does through clear, relatable video. AppSpark develops UGC-style creative concepts that make product features easier to understand and give your team assets to test across social channels.",
    sections: [
      ["What is UGC-style app video?", "UGC-style videos use a natural, creator-led presentation—such as a product walkthrough, personal-style demonstration, problem-and-solution story or feature explanation. The style can feel conversational while still following a clear creative brief."],
      ["Video formats we can plan", "Potential formats include app walkthroughs, first-impression concepts, feature demonstrations, problem/solution stories, list-style tips, onboarding explainers and scripted creator testimonials. Any testimonial must reflect a real person’s genuine experience; scripted actors should never be presented as actual customers."],
      ["From brief to final asset", "A typical workflow includes a discovery brief, creative angles, scripts or talking points, production coordination, editing, captions and delivery. Exact deliverables, creator fees, revision rounds, turnaround and paid usage rights are confirmed in the proposal."],
      ["Designed for testing", "Instead of relying on one idea, teams can test different opening hooks, calls to action, demonstrations and edits. Results depend on the offer, audience, distribution, budget and platform; no view, install or revenue outcome is guaranteed."]
    ],
    bullets: ["Creative brief and video concepts", "Hooks, scripts and talking points", "UGC-style app demonstrations", "Editing, captions and aspect-ratio exports", "Agreed revisions and usage-rights handoff"]
  },
  mobileAppMarketing: {
    path: "/mobile-app-marketing",
    title: "Mobile App Marketing for Consumer Apps | AppSpark",
    description: "Explore creator-led mobile app marketing: short-form content strategy, UGC creative, campaign concepts and creative testing for consumer apps.",
    eyebrow: "MARKETING FOR APPS",
    heading: "Mobile app marketing through creator-led content",
    intro: "A useful app still needs a clear story. AppSpark helps consumer app teams translate product value into creator-led short-form content that can introduce features, answer common questions and support campaign testing.",
    sections: [
      ["Start with the product story", "Before making content, identify the audience, the problem your app solves, the feature that matters most and the action you want viewers to take. A focused message gives every creative concept a clear job."],
      ["Build a repeatable creative system", "Develop multiple angles around real user needs: demonstrations, use cases, comparisons, tutorials and feature spotlights. Keep claims accurate and make sure any product screenshots or demonstrations reflect the current app experience."],
      ["Creator content and distribution", "Creator-led content can support organic social publishing and, where permissions allow, paid social testing. Creator selection, compensation, disclosure requirements, whitelisting and usage duration should be agreed in writing."],
      ["Measure what matters", "Choose metrics based on the campaign objective. Awareness campaigns may look at reach and video retention; traffic campaigns may track clicks; acquisition campaigns may track installs and downstream activation. Use platform analytics and your app analytics together."]
    ],
    bullets: ["Audience and positioning workshop", "Content pillars and campaign angles", "Creator-led video concepts", "Creative testing recommendations", "Measurement and next-step review"]
  },
  pricing: {
    path: "/pricing",
    title: "Creator Marketing & UGC Video Pricing | AppSpark",
    description: "Discuss a creator marketing or UGC video production scope with AppSpark. Pricing is based on video quantity, creator requirements, usage rights and campaign complexity.",
    eyebrow: "SCOPE & PRICING",
    heading: "Creator marketing pricing for your app",
    intro: "Every app has a different brief. AppSpark scopes projects around the number of videos, creative variations, creator involvement, editing requirements, turnaround and usage rights. Request a tailored proposal before committing.",
    sections: [
      ["What affects the project cost?", "Key factors include the number and length of videos, number of creative concepts, creator fees, filming complexity, editing and revision rounds, paid advertising usage, exclusivity and delivery timeline."],
      ["Pilot projects", "A focused pilot can help your team assess creative fit before committing to a larger campaign. A pilot brief should define the target audience, deliverables, deadlines, approval process, usage rights and success metrics."],
      ["Ongoing content", "For recurring work, scope a monthly content plan with agreed production volume, concept refreshes, review cycles and reporting. Volume discounts or retainers should be based on the actual delivery plan, not assumed in advance."],
      ["Request a proposal", "Share your app link, audience, target platforms, desired deliverables and launch timeline. AppSpark can then confirm feasibility, scope and a written quote. No package price or performance result is guaranteed until the scope is agreed."]
    ],
    bullets: ["One-time pilot or ongoing monthly scope", "Clear video and concept quantities", "Creator and production costs itemized", "Usage rights and revision terms stated", "Written timeline and deliverables"]
  }
};

function NotFound() {
  return <main className="min-h-screen bg-slate-50 px-6 py-24 text-center"><h1 className="text-4xl font-black text-slate-900">Page not found</h1><p className="mt-4 text-slate-600">The page you’re looking for doesn’t exist.</p><a className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white" href="/">Back to AppSpark</a></main>;
}

export default function SEOPage({ page }) {
  if (page === "notFound") return <NotFound />;
  const data = pages[page];
  if (!data) return <NotFound />;

  return (
    <>
      <Seo title={data.title} description={data.description} path={data.path} />
      <div className="min-h-screen bg-[#fafbfc] text-slate-800">
        <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <a href="/" className="text-2xl font-black tracking-tight"><span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 bg-clip-text text-transparent">AppSpark</span></a>
            <div className="hidden items-center gap-6 text-sm font-semibold md:flex">
              <a href="/creator-marketing" className="hover:text-indigo-600">Creator Marketing</a>
              <a href="/ugc-video-production" className="hover:text-indigo-600">UGC Videos</a>
              <a href="/mobile-app-marketing" className="hover:text-indigo-600">App Marketing</a>
              <a href="/pricing" className="hover:text-indigo-600">Pricing</a>
            </div>
            <a href="/#hero" className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-700">Back to Home</a>
          </nav>
        </header>
        <main>
          <section className="overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-pink-50">
            <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
              <p className="mb-5 text-xs font-extrabold tracking-[0.22em] text-indigo-600">{data.eyebrow}</p>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">{data.heading}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">{data.intro}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="/#pricing" className="rounded-xl bg-indigo-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700">Explore packages</a>
                <a href="/" className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 hover:border-indigo-300">View AppSpark homepage</a>
              </div>
            </div>
          </section>
          <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_0.8fr] md:py-20">
            <div className="space-y-10">
              {data.sections.map(([heading, body]) => <article key={heading}><h2 className="text-2xl font-extrabold tracking-tight text-slate-900">{heading}</h2><p className="mt-3 leading-8 text-slate-600">{body}</p></article>)}
            </div>
            <aside className="h-fit rounded-3xl border border-indigo-100 bg-white p-7 shadow-xl shadow-indigo-100/50">
              <p className="text-xs font-extrabold tracking-[0.18em] text-indigo-600">WHAT WE CAN SCOPE</p>
              <h2 className="mt-3 text-2xl font-black text-slate-900">A clear plan, built around your brief</h2>
              <ul className="mt-6 space-y-4">{data.bullets.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">✓</span>{item}</li>)}</ul>
              <a href="/#pricing" className="mt-8 block rounded-xl bg-slate-900 px-5 py-3 text-center font-bold text-white hover:bg-indigo-700">Discuss your project</a>
              <p className="mt-4 text-xs leading-5 text-slate-500">Final scope, pricing, creator availability and usage rights are confirmed in a written proposal.</p>
            </aside>
          </section>
          <section className="bg-slate-900 px-5 py-16 text-center text-white">
            <div className="mx-auto max-w-3xl"><p className="text-xs font-bold tracking-[0.2em] text-indigo-300">NEXT STEP</p><h2 className="mt-4 text-3xl font-black md:text-4xl">Have an app you want people to understand?</h2><p className="mt-4 leading-7 text-slate-300">Explore the AppSpark homepage and share your campaign requirements to discuss a practical scope.</p><a href="/" className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-slate-900 hover:bg-indigo-100">Explore AppSpark</a></div>
          </section>
        </main>
        <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} AppSpark. Creator-led content for consumer apps. <a className="ml-2 font-semibold text-indigo-600" href="/">Home</a></footer>
      </div>
    </>
  );
}
