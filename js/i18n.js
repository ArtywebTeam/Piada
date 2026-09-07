/**
 * Piada Bar - Internationalization (i18n) Module
 * Supports: Italian (it, default) & English (en)
 * Clean, lightweight, zero-dependency bilingual translation system.
 */

window.PiadaI18n = {
  currentLang: "it",

  translations: {
    it: {
      // Navigation & Global Header
      nav_home: "Home",
      nav_menu: "Menu",
      nav_about: "Chi siamo",
      nav_gallery: "Galleria",
      nav_locations: "Dove siamo",
      nav_contact: "Contatti",
      nav_franchise: "Franchising",
      nav_careers: "Lavora con noi",
      nav_privacy: "Informativa Privacy",
      nav_terms: "Termini e Condizioni",
      btn_order_now: "Ordina ora",

      // Hero Section (index.html)
      hero_eyebrow: "Paradise.of.taste · Brescia",
      hero_title: "Piadine artigianali fresche,<br><em>preparate ogni giorno.</em>",
      hero_subtitle: "Autentici sapori italiani, preparati a mano con ingredienti freschi.",
      hero_btn_menu: "Scopri il Menu",
      hero_btn_order: "Ordina ora",
      hero_explore_full: "Scopri il menu completo →",

      // Menu Teaser & Section Headers
      menu_eyebrow: "Il nostro menu",
      menu_title: "Pochi gesti. Sapori infiniti.",
      menu_subtitle: "Piadine, aperitivi e caffè preparati con cura, ogni giorno.",
      btn_add_to_cart: "Aggiungi al carrello",

      // Menu Categories (menu.html)
      menu_page_eyebrow: "Menu Completo",
      menu_page_title: "Preparato al momento",
      menu_page_subtitle: "Ogni piada nasce da impasto fresco e ingredienti scelti.",
      cat_all: "Tutti",
      cat_classiche: "Piadine Classiche",
      cat_speciali: "Piadine Speciali",
      cat_vegetariane: "Vegetariane",
      cat_dolci: "Piadine Dolci",
      cat_bevande: "Bevande",

      // Story Section
      story_eyebrow: "La nostra storia",
      story_title: "La strada italiana, servita con eleganza.",
      story_p1: "Piada Bar porta il vero street food italiano a tutti. Ogni piada è fatta a mano con impasto fresco e ingredienti di prima scelta.",
      story_link: "Scopri la nostra storia →",

      // 4 Features Pillars
      feat_ingredients_title: "Ingredienti Freschi",
      feat_ingredients_desc: "Solo ingredienti freschi e selezionati.",
      feat_handmade_title: "Fatto a Mano Ogni Giorno",
      feat_handmade_desc: "Impasto preparato e steso ogni giorno.",
      feat_recipes_title: "Ricette Autentiche",
      feat_recipes_desc: "Ricette italiane, anima romagnola.",
      feat_service_title: "Servizio Rapido",
      feat_service_desc: "Qualità artigianale senza lunghe attese.",

      // Gallery Teaser (index.html) & Page (gallery.html)
      gallery_eyebrow: "Galleria",
      gallery_title: "Uno spettacolo per gli occhi",
      gallery_link: "Guarda la galleria →",
      gallery_page_eyebrow: "Galleria",
      gallery_page_title: "Scatti dal paradiso",
      gallery_page_subtitle: "Ogni piadina è un'opera d'arte culinaria preparata con cura artigianale e passione italiana.",

      // Reviews
      reviews_eyebrow: "Dicono di noi",
      reviews_title: "Amore al primo morso",
      review_1: "“La piadina più buona di Brescia: ingredienti freschi e accoglienza splendida.”",
      review_2: "“Impasto leggero, farcitura generosa e servizio velocissimo. Tornerò sicuramente.”",
      review_3: "“Un piccolo paradiso vicino alla metro. Anche le piade dolci sono incredibili!”",

      // Reservation Section
      reserve_eyebrow: "Prenotazione",
      reserve_title: "Il tuo tavolo in paradiso",
      reserve_btn: "Prenota un tavolo",

      // Locations & Map Section
      locations_eyebrow: "Trova il tuo paradiso",
      locations_title: "Nel cuore di Mompiano",
      locations_address: "Via Bligny 42, Brescia",
      locations_sub: "Vicino Metro Mompiano · UNIBS",
      locations_hours: "Lunedì–Venerdì 12:00–15:00 · Sabato–Domenica chiuso",
      locations_maps_btn: "Apri in Google Maps",

      // About Page (about.html)
      about_eyebrow: "Chi Siamo",
      about_title: "Tradizione in movimento",
      about_subtitle: "Una storia semplice: farina, mani esperte e il desiderio di condividere il gusto autentico italiano.",
      about_grid_title: "Paradise.of.taste",
      about_grid_p1: "Piada Bar porta l'autentico street food italiano a tutti. Ogni piada è fatta a mano utilizzando impasti freschi e ingredienti selezionati.",
      about_grid_p2: "Da Brescia, trasformiamo un classico della tradizione in un’esperienza contemporanea: veloce, calorosa e sempre preparata al momento.",

      // Contact Page (contact.html)
      contact_write_us: "Scrivici",
      contact_send_btn: "Invia richiesta",
      contact_reserve_title: "Prenota un tavolo",

      // Order Page & Cart (order.html)
      order_eyebrow: "Ordina Online",
      order_title: "La tua piada, come vuoi tu",
      order_subtitle: "Scegli le tue specialità preferite, personalizza gli ingredienti e ordina comodamente online.",
      order_received_title: "Ordine ricevuto!",
      order_received_p: "Ti contatteremo a breve per confermare il tuo ordine.",
      cart_title: "Il tuo carrello",
      cart_empty: "Il carrello è vuoto.",
      cart_total: "Totale",
      cart_pickup: "Pickup (Ritiro al locale)",
      cart_delivery: "Delivery (Consegna a domicilio)",
      cart_address_placeholder: "Indirizzo di consegna",
      cart_checkout_btn: "Completa l'ordine",
      cart_whatsapp_btn: "Ordina via WhatsApp",
      customize_prompt: "Personalizza ingredienti (es. + prosciutto, - rucola):",
      no_modifications: "Nessuna modifica",
      added_to_cart: "aggiunto al carrello! Vuoi completare l'ordine adesso?",

      // Franchise Page (franchise.html)
      franchise_eyebrow: "Cresci con noi",
      franchise_title: "Porta il paradiso nella tua città.",
      franchise_desc: "Un format contemporaneo, una tradizione amata e un’identità riconoscibile.",
      franchise_talk: "Parliamone",

      // Careers Page (careers.html)
      careers_eyebrow: "Lavora con noi",
      careers_title: "Fai parte del gusto.",
      careers_desc: "Cerchiamo persone curiose, accoglienti e appassionate di qualità. Raccontaci chi sei e perché vuoi unirti a Piada Bar.",
      careers_form_title: "Candidatura spontanea",
      careers_form_name: "Nome e Cognome",
      careers_form_exp: "Esperienze precedenti e disponibilità",
      careers_btn_send: "Invia candidatura",

      // Privacy & Terms
      privacy_title: "Informativa sulla Privacy",
      privacy_p1: "I dati inviati tramite i moduli vengono utilizzati esclusivamente per rispondere alle richieste, gestire prenotazioni e ordini. Non vengono ceduti né venduti a terzi.",
      privacy_p2: "Puoi richiedere la cancellazione dei tuoi dati in qualsiasi momento contattandoci direttamente al ristorante o tramite email.",
      terms_title: "Termini e Condizioni",
      terms_p1: "Ordini e prenotazioni sono soggetti a conferma del ristorante. Prezzi, disponibilità e orari possono variare; contattaci per informazioni aggiornate.",
      terms_p2: "Tutti i prodotti sono preparati freschi ogni giorno nel rispetto delle normative igienico-sanitarie vigenti.",

      // Admin Dashboard (admin.html)
      admin_eyebrow: "Area riservata staff",
      admin_title: "Pannello di Controllo",
      admin_tab_orders: "Ordini",
      admin_tab_reservations: "Prenotazioni",
      admin_tab_inquiries: "Richieste",
      admin_tab_menu_items: "Voci Menu",
      admin_tab_promotions: "Promozioni",
      admin_tab_settings: "Impostazioni",
      admin_btn_add_item: "Aggiungi voce menu",
      admin_btn_add_promo: "Aggiungi promozione",
      admin_btn_edit_settings: "Modifica impostazioni",
      admin_empty: "Nessun elemento presente.",
      admin_edit: "Modifica",
      admin_delete: "Elimina",
      admin_total: "Totale",
      admin_date: "Data",
      admin_pax: "persone",
      admin_confirm_delete: "Sei sicuro di voler eliminare questo elemento?",
      status_new: "Nuovo",
      status_preparing: "In preparazione",
      status_ready: "Pronto",
      status_completed: "Completato",
      status_cancelled: "Annullato",
      status_pending: "In attesa",
      status_confirmed: "Confermato",
      status_closed: "Chiuso",
      admin_prompt_name: "Nome Piada/Piatto:",
      admin_prompt_category: "Categoria (Piadine Classiche, Piadine Speciali, Vegetariane, Piadine Dolci, Bevande):",
      admin_prompt_desc: "Descrizione ingredienti:",
      admin_prompt_price: "Prezzo (€):",
      admin_prompt_image: "URL immagine:",
      admin_prompt_promo_title: "Titolo promozione:",
      admin_prompt_promo_desc: "Descrizione offerta:",
      admin_prompt_address: "Indirizzo:",
      admin_prompt_phone: "Telefono:",
      admin_prompt_hours: "Orari:",
      admin_prompt_promo_active: "Promozione attiva?",

      // Form Placeholders & Labels
      form_name: "Nome",
      form_email: "Email",
      form_phone: "Telefono",
      form_message: "Messaggio",
      form_guests: "Numero persone",

      // Footer
      footer_brand_desc: "Piadine · Aperitivi · Caffè<br />In un’atmosfera paradisiaca.",
      footer_copy: "© 2026 Piada Bar — Paradise.of.taste",

      // Product Item Descriptions (fallback)
      desc_c1: "Prosciutto cotto, squacquerone e rucola fresca.",
      desc_c2: "Crudo di Parma, squacquerone e rucola.",
      desc_c3: "Salame nostrano, formaggio fresco e verdure grigliate.",
      desc_s1: "Salsiccia, cipolla caramellata e crema di formaggio.",
      desc_s2: "Hummus, zucchine, pomodorini e lattuga.",
      desc_s3: "Bresaola della Valtellina, scaglie di Grana e glassa balsamica.",
      desc_d1: "Nutella, Kinder Bueno, Oreo e granella di nocciole.",
      desc_d2: "Pistacchio di Bronte e cioccolato bianco.",
      desc_b1: "Spritz artigianale servito con stuzzichini.",
      desc_b2: "Birra artigianale alla spina 33cl."
    },

    en: {
      // Navigation & Global Header
      nav_home: "Home",
      nav_menu: "Menu",
      nav_about: "About Us",
      nav_gallery: "Gallery",
      nav_locations: "Locations",
      nav_contact: "Contact",
      nav_franchise: "Franchise",
      nav_careers: "Careers",
      nav_privacy: "Privacy Policy",
      nav_terms: "Terms",
      btn_order_now: "Order Now",

      // Hero Section (index.html)
      hero_eyebrow: "Paradise.of.taste · Brescia",
      hero_title: "Fresh Italian Piadas,<br><em>Made Every Day.</em>",
      hero_subtitle: "Authentic Italian street food flavours, handcrafted with the freshest ingredients.",
      hero_btn_menu: "View Menu",
      hero_btn_order: "Order Now",
      hero_explore_full: "Explore the full menu →",

      // Menu Teaser & Section Headers
      menu_eyebrow: "Our Menu",
      menu_title: "Simple gestures. Infinite flavours.",
      menu_subtitle: "Handcrafted piadinas, aperitivos, and Italian coffee prepared with care every day.",
      btn_add_to_cart: "Add to Cart",

      // Menu Categories (menu.html)
      menu_page_eyebrow: "Full Menu",
      menu_page_title: "Made for the moment",
      menu_page_subtitle: "Every piada is born from freshly kneaded dough and selected Italian ingredients.",
      cat_all: "All",
      cat_classiche: "Classic Piadas",
      cat_speciali: "Signature Piadas",
      cat_vegetariane: "Vegetarian",
      cat_dolci: "Sweet Piadas",
      cat_bevande: "Drinks",

      // Story Section
      story_eyebrow: "Our Story",
      story_title: "The Italian street, served with grace.",
      story_p1: "Piada Bar brings authentic Italian street food to everyone. Every piada is handmade using fresh dough and premium ingredients.",
      story_link: "Discover our story →",

      // 4 Pillars of Quality
      feat_ingredients_title: "Fresh Ingredients",
      feat_ingredients_desc: "Only freshly sourced and carefully selected ingredients.",
      feat_handmade_title: "Handmade Daily",
      feat_handmade_desc: "Dough mixed, kneaded, and rolled out fresh every single day.",
      feat_recipes_title: "Authentic Recipes",
      feat_recipes_desc: "Traditional Italian recipes with true Romagnolo soul.",
      feat_service_title: "Fast Service",
      feat_service_desc: "Artisanal culinary quality without the long wait.",

      // Gallery Section
      gallery_eyebrow: "Gallery",
      gallery_title: "A feast for the eyes",
      gallery_link: "View the gallery →",
      gallery_page_eyebrow: "Gallery",
      gallery_page_title: "Snapshots from paradise",
      gallery_page_subtitle: "Every piadina is a culinary work of art handcrafted with passion and care.",

      // Reviews Section
      reviews_eyebrow: "Testimonials",
      reviews_title: "Love at first bite",
      review_1: "“The finest piadina in Brescia: incredibly fresh ingredients and warm Italian hospitality.”",
      review_2: "“Light dough, generous filling, and lightning fast service. I will definitely come back!”",
      review_3: "“A hidden gem near the metro station. The sweet Nutella piadas are simply heavenly!”",

      // Reservation Section
      reserve_eyebrow: "Reservation",
      reserve_title: "Your table in paradise",
      reserve_btn: "Reserve a Table",

      // Locations & Map Section
      locations_eyebrow: "Find your paradise",
      locations_title: "In the heart of Mompiano",
      locations_address: "Via Bligny 42, Brescia",
      locations_sub: "Near Mompiano Metro · UNIBS",
      locations_hours: "Monday–Friday 12:00–15:00 · Saturday–Sunday Closed",
      locations_maps_btn: "Open in Google Maps",

      // About Page (about.html)
      about_eyebrow: "About Us",
      about_title: "Heritage in motion",
      about_subtitle: "A simple story: flour, expert hands and the passion to share authentic Italian taste.",
      about_grid_title: "Paradise.of.taste",
      about_grid_p1: "Piada Bar brings authentic Italian street food to everyone. Every piada is handmade using fresh dough and premium ingredients.",
      about_grid_p2: "From Brescia, we turn a classic Italian tradition into a contemporary experience: quick, warm, and always made to order.",

      // Contact Page (contact.html)
      contact_write_us: "Write to Us",
      contact_send_btn: "Send Inquiry",
      contact_reserve_title: "Reserve a table",

      // Order Page & Cart (order.html)
      order_eyebrow: "Order Online",
      order_title: "Your piada, your way",
      order_subtitle: "Choose your favorite specialties, customize ingredients, and order online with ease.",
      order_received_title: "Order Received!",
      order_received_p: "We will contact you shortly to confirm your order details.",
      cart_title: "Your Cart",
      cart_empty: "Your cart is empty.",
      cart_total: "Total",
      cart_pickup: "Pickup (Pick up in-store)",
      cart_delivery: "Delivery (Home delivery)",
      cart_address_placeholder: "Delivery address",
      cart_checkout_btn: "Checkout",
      cart_whatsapp_btn: "Order via WhatsApp",
      customize_prompt: "Customize ingredients (e.g. + prosciutto, - arugula):",
      no_modifications: "No modifications",
      added_to_cart: "added to cart! Proceed to checkout now?",

      // Franchise Page (franchise.html)
      franchise_eyebrow: "Grow with us",
      franchise_title: "Bring paradise to your city.",
      franchise_desc: "A contemporary format, a beloved Italian tradition, and a recognizable identity.",
      franchise_talk: "Let's Talk",

      // Careers Page (careers.html)
      careers_eyebrow: "Careers",
      careers_title: "Be part of the taste.",
      careers_desc: "We look for passionate, welcoming, and curious team members. Tell us who you are and why you want to join Piada Bar.",
      careers_form_title: "Spontaneous Application",
      careers_form_name: "Full Name",
      careers_form_exp: "Previous experiences and availability",
      careers_btn_send: "Submit Application",

      // Privacy & Terms
      privacy_title: "Privacy Policy",
      privacy_p1: "Data submitted through our forms is used solely to respond to inquiries and manage bookings/orders. It is never sold or shared with third parties.",
      privacy_p2: "You can request the deletion of your data at any time by contacting the restaurant directly or via email.",
      terms_title: "Terms & Conditions",
      terms_p1: "Orders and reservations are subject to restaurant confirmation. Prices, availability and hours may vary.",
      terms_p2: "All products are prepared fresh daily in strict compliance with food safety regulations.",

      // Admin Dashboard (admin.html)
      admin_eyebrow: "Staff workspace",
      admin_title: "Admin Dashboard",
      admin_tab_orders: "Orders",
      admin_tab_reservations: "Reservations",
      admin_tab_inquiries: "Inquiries",
      admin_tab_menu_items: "Menu Items",
      admin_tab_promotions: "Promotions",
      admin_tab_settings: "Settings",
      admin_btn_add_item: "Add New Menu Item",
      admin_btn_add_promo: "Add New Promotion",
      admin_btn_edit_settings: "Edit Restaurant Settings",
      admin_empty: "No items found.",
      admin_edit: "Edit",
      admin_delete: "Delete",
      admin_total: "Total",
      admin_date: "Date",
      admin_pax: "guests",
      admin_confirm_delete: "Are you sure you want to delete this item?",
      status_new: "New",
      status_preparing: "Preparing",
      status_ready: "Ready",
      status_completed: "Completed",
      status_cancelled: "Cancelled",
      status_pending: "Pending",
      status_confirmed: "Confirmed",
      status_closed: "Closed",
      admin_prompt_name: "Item/Dish Name:",
      admin_prompt_category: "Category (Classic Piadas, Signature Piadas, Vegetarian, Sweet Piadas, Drinks):",
      admin_prompt_desc: "Ingredients description:",
      admin_prompt_price: "Price (€):",
      admin_prompt_image: "Image URL:",
      admin_prompt_promo_title: "Promotion title:",
      admin_prompt_promo_desc: "Offer description:",
      admin_prompt_address: "Address:",
      admin_prompt_phone: "Phone:",
      admin_prompt_hours: "Hours:",
      admin_prompt_promo_active: "Active promotion?",

      // Form Placeholders & Labels
      form_name: "Name",
      form_email: "Email",
      form_phone: "Phone",
      form_message: "Message",
      form_guests: "Number of guests",

      // Footer
      footer_brand_desc: "Piadas · Aperitivos · Coffee<br />In a paradisiacal atmosphere.",
      footer_copy: "© 2026 Piada Bar — Paradise.of.taste",

      // Product Item Descriptions (fallback)
      desc_c1: "Cooked ham, fresh squacquerone cheese, and crisp arugula.",
      desc_c2: "Prosciutto di Parma, squacquerone cheese, and fresh arugula.",
      desc_c3: "Italian salami, fresh soft cheese, and grilled vegetables.",
      desc_s1: "Italian sausage, caramelized onions, and gourmet cheese spread.",
      desc_s2: "Creamy hummus, grilled zucchini, cherry tomatoes, and crisp lettuce.",
      desc_s3: "Valtellina bresaola, shaved Grana Padano, and aged balsamic glaze.",
      desc_d1: "Nutella, Kinder Bueno, Oreo crumbs, and roasted hazelnuts.",
      desc_d2: "Bronte pistachio cream and velvety white chocolate.",
      desc_b1: "Artisanal Italian Aperol Spritz served with assorted appetizers.",
      desc_b2: "Italian craft draft beer 33cl."
    }
  },

  init() {
    const saved = localStorage.getItem("piada_lang");
    this.currentLang = (saved === "en" || saved === "it") ? saved : "it";
    this.applyLanguage(this.currentLang);
    this.bindButtons();
  },

  toggleLanguage() {
    const nextLang = this.currentLang === "it" ? "en" : "it";
    this.currentLang = nextLang;
    localStorage.setItem("piada_lang", nextLang);
    this.applyLanguage(nextLang);
  },

  bindButtons() {
    const handleToggle = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.toggleLanguage();
    };

    const btn = document.getElementById("lang-toggle-btn");
    if (btn) {
      btn.onclick = handleToggle;
    }

    const mobileBtn = document.getElementById("mobile-lang-btn");
    if (mobileBtn) {
      mobileBtn.onclick = handleToggle;
    }
  },

  t(key) {
    const dict = this.translations[this.currentLang] || this.translations.it;
    return dict[key] || this.translations.it[key] || key;
  },

  getItemDesc(itemId, defaultDesc) {
    const key = "desc_" + itemId;
    const dict = this.translations[this.currentLang] || this.translations.it;
    return dict[key] || defaultDesc;
  },

  applyLanguage(lang) {
    this.currentLang = lang;
    const dict = this.translations[lang] || this.translations.it;

    // Set HTML lang attribute
    document.documentElement.lang = lang;

    // Update Language Toggle Button text:
    // When current is "it", button shows "EN".
    // When current is "en", button shows "IT".
    const nextLabel = lang === "it" ? "EN" : "IT";
    const nextAria = lang === "it" ? "Switch to English" : "Passa all'italiano";

    const btn = document.getElementById("lang-toggle-btn");
    if (btn) {
      btn.textContent = nextLabel;
      btn.setAttribute("aria-label", nextAria);
    }

    const mobileBtn = document.getElementById("mobile-lang-btn");
    if (mobileBtn) {
      mobileBtn.textContent = nextLabel;
      mobileBtn.setAttribute("aria-label", nextAria);
    }

    this.bindButtons();

    // Update all text elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] !== undefined) {
        if (dict[key].includes("<") && dict[key].includes(">")) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update all input/textarea placeholders with data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // Update product descriptions with data-i18n-desc
    document.querySelectorAll("[data-i18n-desc]").forEach(el => {
      const id = el.getAttribute("data-i18n-desc");
      const key = "desc_" + id;
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Refresh dynamic product cards and cart if active
    if (window.PiadaApp) {
      if (typeof window.PiadaApp.refreshCartSidebar === "function" && document.getElementById("cart-sidebar-container")) {
        window.PiadaApp.refreshCartSidebar();
      }
      if (typeof window.PiadaApp.renderAdminDataList === "function" && document.getElementById("admin-data-list")) {
        window.PiadaApp.renderAdminActionButtons();
        window.PiadaApp.renderAdminDataList();
      }
    }
  }
};

// Automatically apply language on DOM load
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => window.PiadaI18n && window.PiadaI18n.init());
  } else {
    if (window.PiadaI18n) window.PiadaI18n.init();
  }
}
