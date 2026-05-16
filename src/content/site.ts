// All content lives here. Edit this file to change the site.

export const site = {
  name: "Katinka Wodschow",
  role: "Artist",
  city: "Copenhagen",
  instagram: "katinkawodschow_art",
  instagramUrl: "https://www.instagram.com/katinkawodschow_art/",
} as const;

export const hero = {
  intro:
    "Copenhagen-based artist with more than twenty years of training behind every brushstroke. Educated at Hawai'i Pacific University and Lille Lottenborg. Multi-disciplinary working across acrylic, watercolor, charcoal, oil pastel, and ink on canvas and paper; with a practiced hand that moves between precision and intuition. Based in Atelier 17.",
  heroImage: "figur-01-tondo-bla.jpg",
  heroCaption: "Tondo in Blue, acrylic on canvas",
} as const;

export const series = [
  {
    slug: "flowers",
    title: "Flowers",
    eyebrow: "Current work",
    description:
      "Watercolor and ink on paper. Sunflowers, tulips, loose bouquets. The kind of summer arrangements that land on a kitchen table and catch the light just right. It starts with accurate pencil details; color leads; the brush follows.",
    works: [
      { file: "blomster-01-gul-lilla.jpg",      title: "Yellow and Purple",       medium: "Watercolor on paper" },
      { file: "blomster-02-lilla-solsikke.jpg", title: "Sunflower, Purple",       medium: "Watercolor on paper" },
      { file: "blomster-03-koral.jpg",          title: "Coral",                    medium: "Watercolor on paper" },
      { file: "blomster-04-stor-solsikke.jpg",  title: "Large Sunflower in Blue", medium: "Watercolor and ink" },
      { file: "blomster-05-tulipaner.jpg",      title: "Tulips in Vase",           medium: "Watercolor and ink" },
      { file: "blomster-06-lilla-baggrund.jpg", title: "Vase on Purple",          medium: "Watercolor and ink" },
      { file: "blomster-07-stor-vase.jpg",      title: "Large Vase",               medium: "Watercolor and ink" },
    ],
  },
  {
    slug: "figure",
    title: "Figure",
    eyebrow: "Series",
    description:
      "Naked bodies in motion, built through color rather than line. Loose, physical, somewhere between gesture and portrait — a study of what a figure becomes when you stop trying to pin it down.",
    works: [
      { file: "figur-01-tondo-bla.jpg",        title: "Tondo in Blue",           medium: "Acrylic on canvas" },
      { file: "figur-02-orange.jpg",           title: "The Back, Orange",         medium: "Acrylic on canvas" },
      { file: "figur-03-tondo-easel.jpg",      title: "Tondo, Study",             medium: "Acrylic on canvas" },
      { file: "figur-04-tondo-cirkel.jpg",     title: "Circle",                   medium: "Acrylic on canvas" },
      { file: "figur-05-lilla-rod.jpg",        title: "Purple on Red",            medium: "Acrylic on canvas" },
      { file: "figur-06-akvarel-ramme.jpg",    title: "Standing, Framed",         medium: "Watercolor on paper" },
      { file: "figur-07-to-lerreder.jpg",      title: "Two Canvases",             medium: "Acrylic on canvas" },
      { file: "figur-08-akvarel-farve.jpg",    title: "Watercolor, Colors",       medium: "Watercolor on paper" },
    ],
  },
  {
    slug: "abstract",
    title: "Abstract",
    eyebrow: "Series",
    description:
      "Pour painting and layered surfaces. Work where the color is given space to find its own form — less intention, more instinct.",
    works: [
      { file: "abstrakt-01-blaa-pink.jpg",      title: "Blue and Pink",            medium: "Acrylic on canvas" },
      { file: "abstrakt-02-roed-bla.jpg",       title: "Red and Blue",             medium: "Acrylic on canvas" },
      { file: "abstrakt-03-haengende.jpg",      title: "Hanging",                  medium: "Acrylic on canvas" },
      { file: "abstrakt-04-pink-bla.jpg",       title: "Pink and Blue II",         medium: "Acrylic on canvas" },
    ],
  },
] as const;

export const about = {
  heading: "About",
  paragraphs: [
    "Katinka Wodschow has drawn and painted for over two decades, and the training is visible in every piece. Look closely and you'll find it in the pencil work first — a practiced precision that anchors the composition before color enters.",
    "She works across acrylic on canvas and watercolor on paper, favoring small to mid-size formats. Her work doesn't demand a room — it belongs in one.",
    "If something catches your eye, or you'd just like to talk, reach out on Instagram.",
  ],
  profileImage: "profil-katinka.jpg",
} as const;

export const contact = {
  heading: "Contact",
  text: "For inquiries about available work or commissions, write via Instagram.",
} as const;
