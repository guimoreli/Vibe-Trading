import { Suspense, lazy, type ComponentType } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "@/components/layout/Layout";

function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  name?: string
) {
  return lazy(async () => {
    try {
      return await factory();
    } catch (error: unknown) {
      console.warn(`Dynamic chunk load retry for ${name || "component"}:`, error);
      const msg = error instanceof Error ? error.message : String(error);
      
      // If it's a CSS preload failure or chunk mismatch after new deploy / Cloudflare Access refresh
      if (msg.includes("Unable to preload CSS") || msg.includes("Failed to fetch dynamically imported module")) {
        try {
          return await factory();
        } catch {
          const retryKey = `vibe_route_retry_${name || "chunk"}`;
          if (!sessionStorage.getItem(retryKey)) {
            sessionStorage.setItem(retryKey, "1");
            window.location.reload();
          }
        }
      }
      throw error;
    }
  });
}

const Home = lazyWithRetry(() => import("@/pages/Home").then((m) => ({ default: m.Home })), "Home");
const Agent = lazyWithRetry(() => import("@/pages/Agent").then((m) => ({ default: m.Agent })), "Agent");
const RunDetail = lazyWithRetry(
  () => import("@/pages/RunDetail").then((m) => ({ default: m.RunDetail })),
  "RunDetail"
);
const Compare = lazyWithRetry(
  () => import("@/pages/Compare").then((m) => ({ default: m.Compare })),
  "Compare"
);
const Settings = lazyWithRetry(
  () => import("@/pages/Settings").then((m) => ({ default: m.Settings })),
  "Settings"
);
const Runtime = lazyWithRetry(
  () => import("@/pages/Runtime").then((m) => ({ default: m.Runtime })),
  "Runtime"
);
const Scheduled = lazyWithRetry(
  () => import("@/pages/Scheduled").then((m) => ({ default: m.Scheduled })),
  "Scheduled"
);
const Reports = lazyWithRetry(
  () => import("@/pages/Reports").then((m) => ({ default: m.Reports })),
  "Reports"
);
const Portfolio = lazyWithRetry(
  () => import("@/pages/Portfolio").then((m) => ({ default: m.Portfolio })),
  "Portfolio"
);
const Correlation = lazyWithRetry(
  () => import("@/pages/Correlation").then((m) => ({ default: m.Correlation })),
  "Correlation"
);
const AlphaZoo = lazyWithRetry(
  () => import("@/pages/AlphaZoo").then((m) => ({ default: m.AlphaZoo })),
  "AlphaZoo"
);
const OptionsLab = lazyWithRetry(
  () => import("@/pages/OptionsLab").then((m) => ({ default: m.OptionsLab })),
  "OptionsLab"
);
const Guide = lazyWithRetry(
  () => import("@/pages/Guide").then((m) => ({ default: m.Guide })),
  "Guide"
);

function PageLoader() {
  return (
    <div className="flex h-[60vh] items-center justify-center text-muted-foreground">
      Loading…
    </div>
  );
}

function wrap(Component: ComponentType) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: wrap(Agent) },
      { path: "/about", element: wrap(Home) },
      { path: "/guide", element: wrap(Guide) },
      { path: "/guia", element: wrap(Guide) },
      { path: "/manual", element: wrap(Guide) },
      { path: "/agent", element: wrap(Agent) },
      { path: "/runtime", element: wrap(Runtime) },
      { path: "/scheduled", element: wrap(Scheduled) },
      { path: "/reports", element: wrap(Reports) },
      { path: "/portfolio", element: wrap(Portfolio) },
      { path: "/settings", element: wrap(Settings) },
      { path: "/runs/:runId", element: wrap(RunDetail) },
      { path: "/compare", element: wrap(Compare) },
      { path: "/correlation", element: wrap(Correlation) },
      { path: "/options", element: wrap(OptionsLab) },
      { path: "/alpha-zoo", element: wrap(AlphaZoo) },
      { path: "/alpha-zoo/bench", element: wrap(AlphaZoo) },
      { path: "/alpha-zoo/compare", element: wrap(AlphaZoo) },
      { path: "/alpha-zoo/:alphaId", element: wrap(AlphaZoo) },
    ],
  },
]);
