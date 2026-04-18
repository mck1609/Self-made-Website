// ── Accordion ──────────────────────────────────────────────
function toggleAccordion(element) {
  element.classList.toggle("active");
  const content = element.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// ── Email request ───────────────────────────────────────────
function sendEmail(type) {
  const email = "maximilian-cassis@web.de";
  const isCV = type === "CV";

  const subject = isCV
    ? "Request: CV – Maximilian Cassis Krizmanic"
    : "Request: References – Maximilian Cassis Krizmanic";

  const body = `Hello Maximilian,\n\nI would like to request a copy of your ${isCV ? "CV" : "References"} for review.\n\n[Company]\n[Position]\n[Reason for interest]\n\nBest regards,\n[Your Name]`;

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// ── Active nav highlight on scroll ─────────────────────────
const sections = document.querySelectorAll(".content-section[id]");
const navLinks  = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "nav-link--active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((s) => observer.observe(s));