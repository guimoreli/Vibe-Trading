import { createBrowserRouter } from "react-router";
import { Layout } from "@/components/layout/Layout";
import { Agent } from "@/pages/Agent";
import { Guide } from "@/pages/Guide";
import { OptionsLab } from "@/pages/OptionsLab";
import { Settings } from "@/pages/Settings";
import { Runtime } from "@/pages/Runtime";
import { Home } from "@/pages/Home";
import { Scheduled } from "@/pages/Scheduled";
import { Reports } from "@/pages/Reports";
import { Portfolio } from "@/pages/Portfolio";
import { Correlation } from "@/pages/Correlation";
import { AlphaZoo } from "@/pages/AlphaZoo";
import { RunDetail } from "@/pages/RunDetail";
import { Compare } from "@/pages/Compare";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Agent /> },
      { path: "/about", element: <Home /> },
      { path: "/guide", element: <Guide /> },
      { path: "/guia", element: <Guide /> },
      { path: "/manual", element: <Guide /> },
      { path: "/agent", element: <Agent /> },
      { path: "/runtime", element: <Runtime /> },
      { path: "/options", element: <OptionsLab /> },
      { path: "/settings", element: <Settings /> },
      { path: "/scheduled", element: <Scheduled /> },
      { path: "/reports", element: <Reports /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/runs/:runId", element: <RunDetail /> },
      { path: "/compare", element: <Compare /> },
      { path: "/correlation", element: <Correlation /> },
      { path: "/alpha-zoo", element: <AlphaZoo /> },
      { path: "/alpha-zoo/bench", element: <AlphaZoo /> },
      { path: "/alpha-zoo/compare", element: <AlphaZoo /> },
      { path: "/alpha-zoo/:alphaId", element: <AlphaZoo /> },
    ],
  },
]);
