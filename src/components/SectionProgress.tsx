import { useLayoutEffect, useRef, useState, type MouseEvent } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function SectionProgress() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const lockedSectionRef = useRef<string | null>(null);

  useLayoutEffect(() => {
    document.documentElement.dataset.activeSection = activeSection;
  }, [activeSection]);

  useLayoutEffect(() => {
    let resizeObserver: ResizeObserver | null = null;

    const updateActiveSection = () => {
      const lockedSection = lockedSectionRef.current;
      if (lockedSection) {
        const target = document.getElementById(lockedSection);
        const targetTop = target?.getBoundingClientRect().top ?? 0;
        const scrollMarginTop = target ? Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0 : 0;

        if (target && Math.abs(targetTop - scrollMarginTop) > 8) {
          setActiveSection(lockedSection);
          return;
        }

        lockedSectionRef.current = null;
      }

      setActiveSection((currentActiveSection) => {
        const nextActiveSection = getActiveSection();
        return currentActiveSection === nextActiveSection ? currentActiveSection : nextActiveSection;
      });
    };

    const clearProgrammaticLock = () => {
      lockedSectionRef.current = null;
      updateActiveSection();
    };

    const hashSection = getHashSection();
    if (hashSection) {
      lockedSectionRef.current = hashSection;
      setActiveSection(hashSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    document.addEventListener("scroll", updateActiveSection, { passive: true, capture: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("load", updateActiveSection);
    window.addEventListener("wheel", clearProgrammaticLock, { passive: true });
    window.addEventListener("touchstart", clearProgrammaticLock, { passive: true });
    window.addEventListener("keydown", clearProgrammaticLock);
    document.fonts?.ready.then(updateActiveSection).catch(() => undefined);

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(updateActiveSection);
      resizeObserver.observe(document.body);
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) resizeObserver?.observe(element);
      });
    }

    const pollTimers = [50, 150, 400, 1000, 2000].map((delay) =>
      window.setTimeout(updateActiveSection, delay),
    );

    return () => {
      resizeObserver?.disconnect();
      pollTimers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("scroll", updateActiveSection);
      document.removeEventListener("scroll", updateActiveSection, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("load", updateActiveSection);
      window.removeEventListener("wheel", clearProgrammaticLock);
      window.removeEventListener("touchstart", clearProgrammaticLock);
      window.removeEventListener("keydown", clearProgrammaticLock);
    };
  }, []);

  return (
    <nav
      aria-label="Section progress"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-4 left-1/2 z-0 w-px -translate-x-1/2 bg-primary/20"
      />
      {sections.map((section) => {
        const active = activeSection === section.id;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active ? "location" : undefined}
            onClick={(event) => {
              scrollToSection(event, section.id, lockedSectionRef);
              setActiveSection(section.id);
            }}
            className="section-progress-link group relative z-10 flex h-8 w-8 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span
              className="section-progress-dot h-2.5 w-2.5 rounded-full border border-primary/40 bg-background group-hover:border-primary"
            />
            <span className="pointer-events-none absolute right-9 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs font-medium text-popover-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {section.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

function scrollToSection(
  event: MouseEvent<HTMLAnchorElement>,
  id: string,
  lockedSectionRef: { current: string | null },
) {
  event.preventDefault();

  const target = document.getElementById(id);
  if (!target) return;

  lockedSectionRef.current = id;
  window.history.replaceState(null, "", `#${id}`);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getActiveSection() {
  const documentElement = document.documentElement;
  const maxScrollTop = Math.max(0, documentElement.scrollHeight - window.innerHeight);

  if (window.scrollY >= maxScrollTop - 4) {
    return sections[sections.length - 1].id;
  }

  const indicatorLine = Math.min(window.innerHeight * 0.28, 280);
  let activeSection = sections[0].id;

  for (const section of sections) {
    const element = document.getElementById(section.id);
    if (!element) continue;
    if (element.getBoundingClientRect().top > indicatorLine) break;
    activeSection = section.id;
  }

  return activeSection;
}

function getHashSection() {
  const hash = window.location.hash.replace("#", "");
  return sections.some((section) => section.id === hash) ? hash : null;
}