/**
 * Piada Bar - Static Data & Media Assets Configuration
 */

const PIADA_DATA = {
  restaurant: {
    name: "Piada Bar",
    tagline: "Paradise.of.taste",
    subtagline: "Piadine · Aperitivi · Caffè",
    description: "Fresh Italian Piadas, Made Every Day. Piadine, aperitivi e caffè a Brescia.",
    address: "Via Bligny 42, Brescia",
    addressDetail: "Vicino Metro Mompiano · UNIBS",
    phone: "+39 375 583 6888",
    phoneRaw: "+393755836888",
    whatsapp: "https://wa.me/393755836888",
    hours: "Lun–Ven 12:00–15:00 · Sab–Dom chiuso",
    instagram: "https://www.instagram.com/paradise.of.taste/",
    facebook: "https://www.facebook.com/",
    mapsUrl: "https://www.google.com/maps/place/Paradise+of+taste/@45.567097,10.2322558,17z/data=!3m1!4b1!4m6!3m5!1s0x4781774117832f9f:0x8e3d3a1f930feec9!8m2!3d45.567097!4d10.2348307!16s%2Fg%2F11k52v66pl",
    mapsEmbed: "https://www.google.com/maps?q=Via%20Bligny%2042%2C%20Brescia&output=embed"
  },
  
  media: {
    logo: "assets/images/logo.jpeg",
    heroVideo: "assets/videos/hero.mp4",
    photos: [
      "assets/images/romagnola.jpg",
      "assets/images/green_piada.jpg",
      "assets/images/paradise.jpg",
      "assets/images/aperitivo.jpg",
      "assets/images/craft_story.jpg",
      "assets/images/classica.jpg",
      "assets/images/surprise.jpg"
    ]
  },

  categories: [
    "Piadine Classiche",
    "Piadine Speciali",
    "Vegetariane",
    "Piadine Dolci",
    "Bevande"
  ],

  initialMenuItems: [
    {
      id: "c1",
      name: "La Classica",
      category: "Piadine Classiche",
      description: "Prosciutto cotto, squacquerone e rucola fresca.",
      price: 8.50,
      image_url: "assets/images/classica.jpg"
    },
    {
      id: "c2",
      name: "Romagnola",
      category: "Piadine Classiche",
      description: "Crudo di Parma, squacquerone e rucola.",
      price: 9.50,
      image_url: "assets/images/romagnola.jpg"
    },
    {
      id: "s1",
      name: "Paradise",
      category: "Piadine Speciali",
      description: "Salsiccia, cipolla caramellata e crema di formaggio.",
      price: 11.00,
      image_url: "assets/images/paradise.jpg"
    },
    {
      id: "s2",
      name: "Green Piada",
      category: "Vegetariane",
      description: "Hummus, zucchine, pomodorini e lattuga.",
      price: 9.00,
      image_url: "assets/images/green_piada.jpg"
    },
    {
      id: "d1",
      name: "Piada Surprise",
      category: "Piadine Dolci",
      description: "Nutella, Kinder Bueno, Oreo e granella di nocciole.",
      price: 7.50,
      image_url: "assets/images/surprise.jpg"
    },
    {
      id: "b1",
      name: "Aperitivo Italiano",
      category: "Bevande",
      description: "Spritz artigianale servito con stuzzichini.",
      price: 6.50,
      image_url: "assets/images/aperitivo.jpg"
    }
  ],

  features: [
    {
      icon: "utensils",
      title: "Ingredienti Freschi",
      desc: "Solo ingredienti freschi e selezionati."
    },
    {
      icon: "chef-hat",
      title: "Fatto a Mano Ogni Giorno",
      desc: "Impasto preparato e steso ogni giorno."
    },
    {
      icon: "sparkles",
      title: "Ricette Autentiche",
      desc: "Ricette italiane, anima romagnola."
    },
    {
      icon: "clock",
      title: "Servizio Rapido",
      desc: "Qualità artigianale senza lunghe attese."
    }
  ],

  reviews: [
    {
      author: "Sofia R.",
      source: "Google",
      quote: "La piadina più buona di Brescia: ingredienti freschi e accoglienza splendida."
    },
    {
      author: "Marco L.",
      source: "Google",
      quote: "Impasto leggero, farcitura generosa e servizio velocissimo. Tornerò sicuramente."
    },
    {
      author: "Giulia P.",
      source: "Google",
      quote: "Un piccolo paradiso vicino alla metro. Anche le piade dolci sono incredibili!"
    }
  ]
};

// Export to window for vanilla browser usage
window.PIADA_DATA = PIADA_DATA;
