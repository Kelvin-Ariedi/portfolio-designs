/**
 * ═══════════════════════════════════════════════════════
 *  PORTFOLIO DATA — edit this file to add/update projects
 * ═══════════════════════════════════════════════════════
 *
 *  WEBSITES
 *  - thumbnail : path to screenshot image (relative to work/ folder)
 *  - url       : live Vercel/hosted URL (use "#" if not yet live)
 *  - tags      : tech stack or keywords
 *
 *  LOGOS
 *  - image     : path to primary logo file (shown by default)
 *  - variants  : array of { image, bg, label } — wired to the colour toggle dots
 *  - bg        : fallback card background colour (hex)
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
      name: "Air Housing",
      description: "An online real estate platform with curated property listings and a dedicated landlord dashboard for managing properties end-to-end.",
      thumbnail: "../work/img/websites/air_housing.png",
      url: "#",
      tags: ["React", "CSS", "JavaScript"]
    },
    {
      name: "Corium Connect",
      description: "A polished portfolio website for a forward-thinking IT company — showcasing their services, capabilities, and sample projects.",
      thumbnail: "../work/img/websites/corium_connect.png",
      url: "#",
      tags: ["React", "CSS", "JavaScript"]
    },
    {
      name: "Tasty",
      description: "A vibrant restaurant, food, and health blog built for discovery — covering recipes, dining guides, and wellness content.",
      thumbnail: "../work/img/websites/tasty_landing_page.png",
      url: "#",
      tags: ["React", "CSS", "JavaScript"]
    }
  ],

  /* ── LOGOS ────────────────────────────────────────── */
  logos: [
    {
      name: "Air Housing",
      industry: "Real Estate",
      description: "A clean, modern identity for a property listing and landlord management platform — confident lines, calm palette, built to scale.",
      bg: "#3d3a3a",
      image: "../work/img/logos/air-black.png",
      variants: [
        { image: "../work/img/logos/air-black.png",  bg: "#faf9f7", label: "Dark"  },
        { image: "../work/img/logos/air-white.png",  bg: "#3d3a3a", label: "Light" },
        { image: "../work/img/logos/air-yellow.png", bg: "#2a2622", label: "Warm"  }
      ]
    },
    {
      name: "CultiCulture",
      industry: "AgriTech",
      description: "A fresh, grounded identity for a farming app connecting modern agriculture with technology, resources, and community.",
      bg: "#2a4a3a",
      image: "../work/img/logos/culture_green_logo.png",
      variants: [
        { image: "../work/img/logos/culture_green_logo.png",  bg: "#f1f8f4", label: "Dark"  },
        { image: "../work/img/logos/culture_black_logo.png",  bg: "#f1f8f4", label: "Light" },
        { image: "../work/img/logos/culture_green_white.png", bg: "#1a3a2e", label: "Brand" }
      ]
    },
    {
      name: "Dronlytics",
      industry: "Drone & AgriTech",
      description: "A bold, technical identity for a drone-first company using aerial systems, AI, and big data to transform crop and irrigation management across Africa.",
      bg: "#1f3f52",
      image: "../work/img/logos/dronlytics_blue.png",
      variants: [
        { image: "../work/img/logos/dronlytics_blue.png",   bg: "#f5f7fa", label: "Dark"  },
        { image: "../work/img/logos/dronlytics_green.png",  bg: "#f5f7fa", label: "Brand" },
        { image: "../work/img/logos/dronlytics_yellow.png", bg: "#1a3a4a", label: "Alt"   }
      ]
    },
    {
      name: "Pawsitive",
      industry: "Pet Care",
      description: "A warm, playful identity for an all-in-one pet app — covering the pet store, care blog, and everything a pet owner needs.",
      bg: "#5a3a32",
      image: "../work/img/logos/pawsitive_red.png",
      variants: [
        { image: "../work/img/logos/pawsitive_red.png",    bg: "#faf8f5", label: "Dark"  },
        { image: "../work/img/logos/pawsitive_orange.png", bg: "#2a2622", label: "Brand" },
        { image: "../work/img/logos/pawsitive_white.png",  bg: "#4a3a32", label: "Light" }
      ]
    },
    {
      name: "Tasty",
      industry: "Food & Health",
      description: "A fresh, appetising identity for a restaurant and health blog — inviting, modern, and built for both print and digital.",
      bg: "#2f4a3a",
      image: "../work/img/logos/tasty_logo_green.png",
      variants: [
        { image: "../work/img/logos/tasty_logo_green.png", bg: "#f9f8f5", label: "Dark"  },
        { image: "../work/img/logos/tasty_logo_black.png", bg: "#f9f8f5", label: "Light" },
        { image: "../work/img/logos/tasty_logo_white.png", bg: "#1a3a2e", label: "Brand" }
      ]
    },
    {
      name: "Corium Connect",
      industry: "IT & Tech",
      description: "A sharp, professional identity for an IT company — clean geometry, confident typography, engineered for trust.",
      bg: "#1f3f52",
      image: "../work/img/logos/corium_logo_blue.jpg",
      variants: [
        { image: "../work/img/logos/corium_logo_blue.jpg",  bg: "#f5f7fa", label: "Dark"  },
        { image: "../work/img/logos/corium_logo_white.jpg", bg: "#1a3a52", label: "Light" }
      ]
    }
  ],

  /* ── MOBILE APPS ──────────────────────────────────── */
  mobile: [
    {
      name: "Pawsitive",
      description: "An all-in-one pet companion app — browse the pet store, read care guides, track vet appointments, and connect with other pet owners.",
      mockup: "../work/img/mobile/pawsitive_mockup.png",
      platform: ["Android", "iOS"],
      link: "#"
    },
    {
      name: "CultiCulture",
      description: "A smart farming app giving African farmers access to agri-tech tools, crop guides, weather insights, and a thriving farming community.",
      mockup: "../work/img/mobile/culticulture_mockup.png",
      platform: ["Android", "iOS"],
      link: "#"
    }
  ],

  /* ── UI COMPONENTS ───────────────────────────────── */
  ui: [
    {
      name: "QR Code Component",
      description: "A clean, minimal card component built with pure HTML & CSS — centred layout, soft shadows, and crisp typography.",
      url: "https://qr-code-component-sigma-bay.vercel.app/",
      innerW: 500, innerH: 420,
      tags: ["HTML", "CSS", "Component"],
      difficulty: "Newbie",
      source: "Frontend Mentor"
    },
    {
      name: "Blog Preview Card",
      description: "A polished blog card with category tag, publication date, title, excerpt, and author avatar — pixel-perfect from a design spec.",
      url: "https://blog-preview-card-main-zeta-flax.vercel.app/",
      innerW: 500, innerH: 440,
      tags: ["HTML", "CSS", "Card UI"],
      difficulty: "Newbie",
      source: "Frontend Mentor"
    },
    {
      name: "Recipe Page",
      description: "A full recipe page layout with prep-time callout box, ingredient list, step-by-step instructions, and a nutrition table.",
      url: "https://recipe-page-main-one-ashy.vercel.app/",
      innerW: 900, innerH: 580,
      tags: ["HTML", "CSS", "Layout"],
      difficulty: "Newbie",
      source: "Frontend Mentor"
    },
    {
      name: "Social Links Profile",
      description: "A dark-themed profile card featuring an avatar, name, location, bio, and a stack of interactive social link buttons with hover states.",
      url: "https://social-links-profile-main-opal.vercel.app/",
      innerW: 500, innerH: 520,
      tags: ["HTML", "CSS", "Profile Card"],
      difficulty: "Newbie",
      source: "Frontend Mentor"
    }
  ],

  /* ── PRINT / BUSINESS CARDS ───────────────────────── */
  print: [
    {
      name: "Air Housing Cards",
      description: "Refined double-sided business cards for the Air Housing brand — minimal layout, deep navy stock, with a subtle spot UV finish on the logo.",
      mockup: "../work/img/print/air_housing_cards.jpg",
      spec: "85×55mm · 400gsm · Spot UV",
      link: "#"
    },
    {
      name: "Corium Connect Kit",
      description: "Full print collateral set for Corium Connect — business cards, letterhead, and branded envelope in a clean monochromatic system.",
      mockup: "../work/img/print/corium_print_kit.jpg",
      spec: "85×55mm · 350gsm · Gloss Laminate",
      link: "#"
    },
    {
      name: "Pawsitive Brand Cards",
      description: "Bold, tactile personal branding cards for the Pawsitive identity — warm tones, rounded corners, and a soft-touch matte finish.",
      mockup: "../work/img/print/pawsitive_cards.jpg",
      spec: "90×50mm · 600gsm · Soft-Touch Matte",
      link: "#"
    }
  ]

};
