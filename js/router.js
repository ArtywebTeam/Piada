/**
 * Piada Bar - Vanilla SPA Router
 * Supports URL path & hash navigation without page reload
 */

const PiadaRouter = {
  routes: {},
  currentRoute: "",

  register(path, renderFunction) {
    this.routes[path] = renderFunction;
  },

  init() {
    window.addEventListener("popstate", () => this.handleRoute());
    window.addEventListener("hashchange", () => this.handleRoute());

    // Intercept internal link clicks
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a[data-link]");
      if (link) {
        e.preventDefault();
        const href = link.getAttribute("href");
        this.navigate(href);
      }
    });

    this.handleRoute();
  },

  navigate(url) {
    if (url.startsWith("#")) {
      const el = document.querySelector(url);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
      window.location.hash = url;
      return;
    }

    if (url.includes("/#")) {
      const parts = url.split("/#");
      const page = parts[0] || "/";
      const anchor = parts[1];
      
      this.navigate(page);
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    window.history.pushState(null, "", url);
    this.handleRoute();
  },

  getPath() {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#/")) {
      return hash.replace("#", "");
    }
    const path = window.location.pathname;
    // Normalize path for local file or server root
    if (path.endsWith("index.html") || path === "" || path === "/") {
      return "/";
    }
    return path;
  },

  handleRoute() {
    let path = this.getPath();
    
    // Handle anchor on home
    if (window.location.hash && !window.location.hash.startsWith("#/")) {
      const anchor = window.location.hash.replace("#", "");
      path = "/";
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }

    this.currentRoute = path;

    // Update active nav links
    document.querySelectorAll(".gold-thread, .mobile-menu-drawer a").forEach((el) => {
      const href = el.getAttribute("href");
      if (href === path || (path === "/" && (href === "/" || href === "/#locations"))) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });

    const viewContainer = document.getElementById("app-view");
    if (!viewContainer) return;

    const render = this.routes[path] || this.routes["*"] || this.routes["/"];
    viewContainer.innerHTML = render();

    window.scrollTo(0, 0);

    // Trigger page-specific initializers
    if (window.PiadaApp && window.PiadaApp.onViewMounted) {
      window.PiadaApp.onViewMounted(path);
    }
  }
};

window.PiadaRouter = PiadaRouter;
