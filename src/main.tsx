import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./styles.css";
import { HomePage } from "@/pages/HomePage";
import { ScrollManager } from "@/components/ScrollManager";

const BlogPage = lazy(() => import("@/pages/BlogPage").then((m) => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import("@/pages/BlogPostPage").then((m) => ({ default: m.BlogPostPage })));
const OnlineStorePage = lazy(() => import("@/pages/OnlineStorePage").then((m) => ({ default: m.OnlineStorePage })));
const TermsPage = lazy(() => import("@/pages/TermsPage").then((m) => ({ default: m.TermsPage })));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollManager />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/online-store" element={<OnlineStorePage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
