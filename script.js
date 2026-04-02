const heroImage = document.getElementById("hero-image");

window.addEventListener("scroll", () => {
  if (!heroImage) return; // Sicherheitshalber, falls Bild fehlt

  const scrollY = window.scrollY;
  const progress = Math.min(scrollY / 900, 1);

  const size = 100 - progress * 55; 
  const moveX = progress * 43;
  const moveY = progress * -34;
  const radius = progress * 22;

  heroImage.style.width = `${size}vw`;
  heroImage.style.height = `${size}vw`;
  heroImage.style.borderRadius = `${radius}px`;
  
  // HIER WAR DER FEHLER: Das "=" hat gefehlt
  heroImage.style.transform = `translate(-50%, -50%) translate(${moveX}vw, ${moveY}vh)`;
});

function sendEmail(type) {
  const email = "Maximilian-cassis@web.de";
  let subject = "";
  let body = "";

  if (type === 'CV') {
    subject = "Anfrage: CV - Maximilian Cassis Krizmanic";
    body = `Hello Maximilian,\n\nI would like to request a copy of your CV for review.\n\n[Firm]\n[Position]\n[Reason for interest]\n\nBest regards,\n[Name]`;
  } else {
    subject = "Anfrage: References - Maximilian Cassis Krizmanic";
    body = `Hello Maximilian,\n\nI would like to request a copy of your References for review.\n\n[Firm]\n[Position]\n[Reason for interest]\n\nBest regards,\n[Name]`;
  }

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}