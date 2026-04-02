const heroImage = document.getElementById("hero-image");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const progress = Math.min(scrollY / 900, 1);

  /* Bild wird quadratisch */
  const size = 100 - progress * 55; // 100vw -> 45vw

  /* nach rechts oben */
  const moveX = progress * 43;
  const moveY = progress * -34;

  /* weichere Ecken */
  const radius = progress * 22;

  heroImage.style.width = `${size}vw`;
  heroImage.style.height = `${size}vw`;
  heroImage.style.borderRadius = `${radius}px`;
  heroImage.style.transform =
    `translate(-50%, -50%) translate(${moveX}vw, ${moveY}vh)`;
});