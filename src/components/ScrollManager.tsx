import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Handles scroll behavior on route changes:
 * - If URL has a hash (e.g. /#portfolio), smoothly scroll to that section
 * - Otherwise, scroll to top of page
 * Works for both in-app navigation and direct URL loads.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the target element to render, then scroll to it.
      const id = hash.replace("#", "");
      // Try a few times — the home page is heavy, sections may not be mounted yet.
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
        } else if (attempts < 10) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
}
