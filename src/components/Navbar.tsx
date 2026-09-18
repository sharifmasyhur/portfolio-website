import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./ui";
import { NAV_ITEMS } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b border-line">
      <Container>
        <nav className="flex items-center justify-between h-16" aria-label="Primary">
          <a
            href="#"
            className="font-display text-lg font-semibold text-ink"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileOpen(false);
            }}
          >
            Sharif Masyhur
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm transition-colors duration-[150ms] ${
                    activeId === item.id
                      ? "text-indigo font-medium"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-ink"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {/* Mobile panel */}
      {mobileOpen && (
        <div id="mobile-nav-panel" className="md:hidden border-t border-line bg-paper">
          <Container>
            <ul className="py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={handleLinkClick}
                    className={`block py-3 text-base ${
                      activeId === item.id ? "text-indigo font-medium" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
