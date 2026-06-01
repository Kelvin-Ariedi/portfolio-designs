/**
 * ═══════════════════════════════════════════════════════
 *  PORTFOLIO DATA — edit this file to add/update projects
 * ═══════════════════════════════════════════════════════
 *
 *  WEBSITES
 *  - thumbnail : path to screenshot image (relative to work/ folder)
 *  - url       : live Vercel/hosted URL
 *  - tags      : tech stack or keywords
 *
 *  LOGOS
 *  - image     : path to primary logo file
 *  - bg        : card background colour (hex) — pick something that suits the logo
 *  - industry  : short label e.g. "Tech", "Food & Bev", "Fashion"
 *
 *  MOBILE
 *  - mockup    : path to device mockup image
 *  - platform  : array — ["Android"], ["iOS"], or ["Android","iOS"]
 *  - link      : demo / app store URL (or "#" if not yet live)
 *
 *  PRINT
 *  - mockup    : path to print mockup image
 *  - spec      : short print spec string e.g. "85×55mm · 350gsm"
 *  - link      : Behance / drive link or "#"
 */

const portfolioData = {

  /* ── WEBSITES ─────────────────────────────────────── */
  websites: [
    {
      name: "Project One",
      description: "A sleek landing page for a tech startup — built with React and deployed on Vercel.",
      thumbnail: "../img/work/websites/site1.jpg",
      url: "https://your-project-1.vercel.app",
      tags: ["React", "Tailwind CSS", "Vercel"]
    },
    {
      name: "Project Two",
      description: "Full e-commerce storefront with cart, checkout, and Stripe integration.",
      thumbnail: "../img/work/websites/site2.jpg",
      url: "https://your-project-2.vercel.app",
      tags: ["Next.js", "Stripe", "PostgreSQL"]
    },
    {
      name: "Project Three",
      description: "Portfolio site for a photographer — optimised for image-heavy layouts and fast load.",
      thumbnail: "../img/work/websites/site3.jpg",
      url: "https://your-project-3.vercel.app",
      tags: ["HTML", "CSS", "JavaScript"]
    }
  ],

  /* ── LOGOS ────────────────────────────────────────── */
  logos: [
    {
      name: "Brand One",
      image: "../img/work/logos/logo1.png",
      bg: "#0009DB",
      industry: "Technology",
      description: "Wordmark identity for a B2B SaaS platform — clean, confident, scalable."
    },
    {
      name: "Brand Two",
      image: "../img/work/logos/logo2.png",
      bg: "#00192D",
      industry: "Food & Beverage",
      description: "Playful logomark for a specialty coffee brand with a focus on community."
    },
    {
      name: "Brand Three",
      image: "../img/work/logos/logo3.png",
      bg: "#1a1a2e",
      industry: "Fashion",
      description: "Minimal typographic logo for a boutique clothing label — timeless and versatile."
    }
  ],

  /* ── MOBILE APPS ──────────────────────────────────── */
  mobile: [
    {
      name: "App One",
      description: "A productivity app for task management with a clean, distraction-free UI.",
      mockup: "../img/work/mobile/app1.png",
      platform: ["Android", "iOS"],
      link: "#"
    },
    {
      name: "App Two",
      description: "Fitness tracking app with real-time data visualisation and streak rewards.",
      mockup: "../img/work/mobile/app2.png",
      platform: ["Android"],
      link: "#"
    },
    {
      name: "App Three",
      description: "Local marketplace app connecting buyers and sellers within a 10km radius.",
      mockup: "../img/work/mobile/app3.png",
      platform: ["iOS"],
      link: "#"
    }
  ],

  /* ── PRINT / BUSINESS CARDS ───────────────────────── */
  print: [
    {
      name: "Studio Cards",
      description: "Minimalist double-sided business cards for a design studio — letterpress finish.",
      mockup: "../img/work/print/print1.jpg",
      spec: "85×55mm · 400gsm · Letterpress",
      link: "#"
    },
    {
      name: "Startup Kit",
      description: "Full print collateral set — cards, letterhead, and envelope for a fintech startup.",
      mockup: "../img/work/print/print2.jpg",
      spec: "85×55mm · 350gsm · Spot UV",
      link: "#"
    },
    {
      name: "Personal Brand",
      description: "Bold personal branding cards with a die-cut corner and foil stamp detail.",
      mockup: "../img/work/print/print3.jpg",
      spec: "90×50mm · 600gsm · Foil",
      link: "#"
    }
  ]

};
