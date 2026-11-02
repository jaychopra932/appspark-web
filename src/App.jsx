import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const CreatorMarketing = lazy(() => import("./pages/CreatorMarketing"));
const UgcVideoProduction = lazy(() => import("./pages/UgcVideoProduction"));
const MobileAppMarketing = lazy(() => import("./pages/MobileAppMarketing"));
const Pricing = lazy(() => import("./pages/Pricing"));

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-200 border-t-violet-700" />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-black">404 - Page Not Found</h1>
      <a href="/" className="mt-5 text-violet-700 underline">
        Back to Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creator-marketing" element={<CreatorMarketing />} />
        <Route path="/ugc-video-production" element={<UgcVideoProduction />} />
        <Route path="/mobile-app-marketing" element={<MobileAppMarketing />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
