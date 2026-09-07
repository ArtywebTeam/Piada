/**
 * Piada Bar | Paradise.of.taste - Multi-page Vanilla JS Interactions
 */

const PiadaApp = {
  currentFilter: "All",
  adminTab: "Order",

  init() {
    this.initTheme();
    if (typeof PiadaI18n !== "undefined") {
      PiadaI18n.init();
    }
    this.bindGlobalEvents();
    this.initPageInteractions();
  },

  /* --------------------------------------------------------------------------
     Language Management (IT / EN)
     -------------------------------------------------------------------------- */
  toggleLanguage() {
    if (typeof PiadaI18n !== "undefined") {
      PiadaI18n.toggleLanguage();
    }
  },

  /* --------------------------------------------------------------------------
     Theme Management (Dark / Light)
     -------------------------------------------------------------------------- */
  initTheme() {
    const isDark = localStorage.getItem("piada-theme") === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    this.updateThemeIcon(isDark);
  },

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("piada-theme", isDark ? "dark" : "light");
    this.updateThemeIcon(isDark);
  },

  updateThemeIcon(isDark) {
    const btn = document.getElementById("theme-toggle-btn");
    if (!btn) return;
    btn.innerHTML = isDark
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  },

  /* --------------------------------------------------------------------------
     Global Event Listeners
     -------------------------------------------------------------------------- */
  bindGlobalEvents() {
    // Theme toggle
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => this.toggleTheme());
    }

    // Mobile menu toggle
    const mobileBtn = document.getElementById("mobile-menu-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener("click", () => {
        const isOpen = mobileDrawer.classList.toggle("open");
        mobileBtn.innerHTML = isOpen
          ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
          : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
      });

      mobileDrawer.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
          mobileDrawer.classList.remove("open");
          mobileBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
        });
      });
    }

    // Highlight active nav link based on current page pathname
    this.highlightActiveNavLink();
  },

  highlightActiveNavLink() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-desktop a, .mobile-menu-drawer a");
    links.forEach(link => {
      const href = link.getAttribute("href") || "";
      const linkFile = href.split("/").pop().split("#")[0] || "index.html";

      if (linkFile === currentPath || (currentPath === "" && linkFile === "index.html")) {
        if (!href.includes("#locations")) {
          link.classList.add("active");
        }
      }
    });
  },

  /* --------------------------------------------------------------------------
     Page Specific Interactions Initializer
     -------------------------------------------------------------------------- */
  initPageInteractions() {
    // If on Menu page
    if (document.getElementById("menu-products-grid")) {
      this.renderMenuPageItems("All");
    }

    // If on Order page
    if (document.getElementById("order-products-grid")) {
      this.renderOrderPageItems();
      this.refreshCartSidebar();
    }

    // If on Admin page
    if (document.getElementById("admin-data-list")) {
      this.renderAdminDataList();
    }
  },

  /* --------------------------------------------------------------------------
     Product Card Component Helper
     -------------------------------------------------------------------------- */
  renderProductCard(item, showAddButton = true) {
    const desc = typeof PiadaI18n !== "undefined" ? PiadaI18n.getItemDesc(item.id, item.description) : item.description;
    const addText = typeof PiadaI18n !== "undefined" ? PiadaI18n.t("btn_add_to_cart") : "Add to Cart";

    return `
      <article class="product-card" data-category="${item.category}">
        <div class="product-image-wrap">
          <img src="${item.image_url}" alt="${item.name}" loading="lazy" />
          ${showAddButton ? `
            <div class="product-add-overlay" onclick="PiadaApp.handleAddToCart('${item.id}')">
              ${addText}
            </div>
          ` : ''}
        </div>
        <div class="product-info">
          <div class="product-header">
            <h3 class="product-title">${item.name}</h3>
            <span class="product-price">€${Number(item.price).toFixed(2)}</span>
          </div>
          <p class="product-desc" data-i18n-desc="${item.id}">${desc}</p>
        </div>
      </article>
    `;
  },

  handleAddToCart(itemId) {
    const items = PiadaStorage.getMenuItems();
    const item = items.find(i => i.id === itemId);
    if (!item) return;

    const promptText = typeof PiadaI18n !== "undefined" ? PiadaI18n.t("customize_prompt") : "Personalizza ingredienti (es. + prosciutto, - rucola):";
    const noModText = typeof PiadaI18n !== "undefined" ? PiadaI18n.t("no_modifications") : "Nessuna modifica";

    const extras = window.prompt(promptText, "") || noModText;
    PiadaStorage.addToCart(item, extras);

    // Refresh if cart sidebar is present on the page
    if (document.getElementById("cart-sidebar-container")) {
      this.refreshCartSidebar();
    } else {
      const addedText = typeof PiadaI18n !== "undefined" ? PiadaI18n.t("added_to_cart") : "aggiunto al carrello! Vuoi completare l'ordine adesso?";
      if (confirm(`"${item.name}" ${addedText}`)) {
        window.location.href = "order.html";
      }
    }
  },

  /* --------------------------------------------------------------------------
     Menu Page Category Filters
     -------------------------------------------------------------------------- */
  filterMenu(category) {
    this.currentFilter = category;

    // Update active filter buttons
    document.querySelectorAll(".menu-filter-btn").forEach(btn => {
      if (btn.getAttribute("data-category") === category) {
        btn.classList.add("filter-active");
      } else {
        btn.classList.remove("filter-active");
      }
    });

    this.renderMenuPageItems(category);
  },

  renderMenuPageItems(category) {
    const grid = document.getElementById("menu-products-grid");
    if (!grid) return;

    const allItems = PiadaStorage.getMenuItems();
    const filtered = category === "All"
      ? allItems
      : allItems.filter(i => i.category === category);

    grid.innerHTML = filtered.map(item => this.renderProductCard(item, true)).join('');
  },

  /* --------------------------------------------------------------------------
     Order Page Initializer & Cart
     -------------------------------------------------------------------------- */
  renderOrderPageItems() {
    const grid = document.getElementById("order-products-grid");
    if (!grid) return;
    const allItems = PiadaStorage.getMenuItems();
    grid.innerHTML = allItems.map(item => this.renderProductCard(item, true)).join('');
  },

  renderCartSidebarHTML() {
    const cart = PiadaStorage.getCart();
    const total = PiadaStorage.getCartTotal();
    const t = key => typeof PiadaI18n !== "undefined" ? PiadaI18n.t(key) : key;

    return `
      <h2 class="font-heading" style="font-size: 2rem; margin-bottom: 1.25rem;">${t("cart_title")}</h2>
      
      ${cart.length === 0 ? `
        <p style="margin: 2rem 0; opacity: 0.6;">${t("cart_empty")}</p>
      ` : `
        <div style="margin: 1.5rem 0; max-height: 240px; overflow-y: auto;">
          ${cart.map((item, index) => `
            <div class="cart-item">
              <div class="cart-item-header">
                <span>${item.name}</span>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                  <span>€${Number(item.price).toFixed(2)}</span>
                  <button onclick="PiadaApp.handleRemoveCartItem(${index})" style="color: #EF4444; font-weight: bold; font-size: 1.1rem;">×</button>
                </div>
              </div>
              <small class="cart-item-extras">${item.extras}</small>
            </div>
          `).join('')}
        </div>
      `}

      <div class="cart-total-row">
        <span>${t("cart_total")}</span>
        <span class="text-gold">€${total.toFixed(2)}</span>
      </div>

      <form onsubmit="PiadaApp.handleOrderCheckout(event)" class="form-grid" style="margin-top: 1.25rem;">
        <input type="text" name="customer_name" required placeholder="${t("form_name")}" data-i18n-placeholder="form_name" />
        <input type="tel" name="phone" required placeholder="${t("form_phone")}" data-i18n-placeholder="form_phone" />
        <select name="fulfillment" onchange="PiadaApp.handleFulfillmentChange(this)">
          <option value="pickup">${t("cart_pickup")}</option>
          <option value="delivery">${t("cart_delivery")}</option>
        </select>
        <div id="delivery-address-field" style="display: none;">
          <input type="text" name="address" placeholder="${t("cart_address_placeholder")}" data-i18n-placeholder="cart_address_placeholder" />
        </div>
        <button type="submit" class="btn-gold" ${cart.length === 0 ? 'disabled' : ''} style="margin-top: 0.5rem;">
          ${t("cart_checkout_btn")}
        </button>
      </form>

      <a href="${window.PIADA_DATA.restaurant.whatsapp}" target="_blank" rel="noreferrer" class="text-link" style="display: block; text-align: center; margin-top: 1rem; font-size: 0.85rem;">
        ${t("cart_whatsapp_btn")}
      </a>
    `;
  },

  handleFulfillmentChange(selectEl) {
    const addressField = document.getElementById("delivery-address-field");
    const input = addressField ? addressField.querySelector("input") : null;
    if (addressField) {
      if (selectEl.value === "delivery") {
        addressField.style.display = "block";
        if (input) input.required = true;
      } else {
        addressField.style.display = "none";
        if (input) input.required = false;
      }
    }
  },

  handleRemoveCartItem(index) {
    PiadaStorage.removeFromCart(index);
    this.refreshCartSidebar();
  },

  refreshCartSidebar() {
    const container = document.getElementById("cart-sidebar-container");
    if (container) {
      container.innerHTML = this.renderCartSidebarHTML();
    }
  },

  handleOrderCheckout(e) {
    e.preventDefault();
    const cart = PiadaStorage.getCart();
    if (cart.length === 0) return;

    const form = e.target;
    const formData = new FormData(form);

    const order = {
      customer_name: formData.get("customer_name"),
      phone: formData.get("phone"),
      fulfillment: formData.get("fulfillment"),
      address: formData.get("address") || "",
      items: cart,
      total: PiadaStorage.getCartTotal()
    };

    PiadaStorage.addOrder(order);
    PiadaStorage.clearCart();

    const successMsg = document.getElementById("order-success-msg");
    if (successMsg) {
      successMsg.style.display = "block";
      successMsg.scrollIntoView({ behavior: "smooth" });
    }

    this.refreshCartSidebar();
  },

  /* --------------------------------------------------------------------------
     Reservation Form Handler
     -------------------------------------------------------------------------- */
  handleReservationSubmit(e, containerId) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const reservation = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      time: formData.get("time"),
      guests: Number(formData.get("guests"))
    };

    PiadaStorage.addReservation(reservation);

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = `
        <div class="form-success-box reveal">
          <h3>Tavolo richiesto</h3>
          <p style="margin-top: 0.5rem; opacity: 0.75;">Ti contatteremo al ${reservation.phone} per la conferma.</p>
          <button class="text-gold" onclick="window.location.reload()" style="margin-top: 1.5rem; font-weight: 600;">
            Nuova prenotazione
          </button>
        </div>
      `;
    }
  },

  /* --------------------------------------------------------------------------
     Inquiry Form Handler (Contact, Franchise, Careers)
     -------------------------------------------------------------------------- */
  handleInquirySubmit(e, type, containerId) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const inquiry = {
      type: type,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message")
    };

    PiadaStorage.addInquiry(inquiry);

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = `
        <div class="form-success-box reveal">
          <h3>Grazie!</h3>
          <p style="margin-top: 0.5rem; opacity: 0.75;">Il tuo messaggio è arrivato. Ti risponderemo al più presto.</p>
        </div>
      `;
    }
  },

  /* --------------------------------------------------------------------------
     Admin Dashboard Handlers
     -------------------------------------------------------------------------- */
  setAdminTab(tab) {
    this.adminTab = tab;
    document.querySelectorAll(".admin-tab-btn").forEach(btn => {
      if (btn.getAttribute("data-tab") === tab) {
        btn.classList.add("filter-active");
      } else {
        btn.classList.remove("filter-active");
      }
    });
    this.renderAdminActionButtons();
    this.renderAdminDataList();
  },

  renderAdminActionButtons() {
    const container = document.getElementById("admin-actions-container");
    if (!container) return;
    const t = (k) => typeof PiadaI18n !== "undefined" ? PiadaI18n.t(k) : k;

    if (this.adminTab === "MenuItem") {
      container.innerHTML = `<button class="btn-gold" onclick="PiadaApp.adminCreateMenuItem()">${t("admin_btn_add_item")}</button>`;
    } else if (this.adminTab === "Promotion") {
      container.innerHTML = `<button class="btn-gold" onclick="PiadaApp.adminCreatePromotion()">${t("admin_btn_add_promo")}</button>`;
    } else if (this.adminTab === "RestaurantSettings") {
      container.innerHTML = `<button class="btn-gold" onclick="PiadaApp.adminEditSettings()">${t("admin_btn_edit_settings")}</button>`;
    } else {
      container.innerHTML = '';
    }
  },

  renderAdminDataList() {
    const container = document.getElementById("admin-data-list");
    if (!container) return;
    const t = (k) => typeof PiadaI18n !== "undefined" ? PiadaI18n.t(k) : k;

    let items = [];
    if (this.adminTab === "Order") items = PiadaStorage.getOrders();
    else if (this.adminTab === "Reservation") items = PiadaStorage.getReservations();
    else if (this.adminTab === "Inquiry") items = PiadaStorage.getInquiries();
    else if (this.adminTab === "MenuItem") items = PiadaStorage.getMenuItems();
    else if (this.adminTab === "Promotion") items = PiadaStorage.getPromotions();
    else if (this.adminTab === "RestaurantSettings") {
      const s = PiadaStorage.getSettings();
      container.innerHTML = `
        <div class="admin-card">
          <div>
            <strong>${s.name} — ${s.tagline}</strong>
            <p class="opacity-75" style="margin-top: 0.25rem;">${s.address} | ${s.phone} | ${s.hours}</p>
          </div>
          <button class="text-gold" onclick="PiadaApp.adminEditSettings()">${t("admin_edit")}</button>
        </div>
      `;
      return;
    }

    if (!items || items.length === 0) {
      container.innerHTML = `<p style="padding: 2.5rem 0; opacity: 0.5;">${t("admin_empty")}</p>`;
      return;
    }

    const statusList = ["new", "preparing", "ready", "completed", "cancelled", "pending", "confirmed", "closed"];

    container.innerHTML = items.map(item => `
      <article class="admin-card">
        <div>
          <strong>${item.name || item.customer_name || item.title || item.email || item.id}</strong>
          <p style="font-size: 0.85rem; opacity: 0.65; margin-top: 0.25rem;">
            ${item.category || item.phone || (item.status ? t("status_" + item.status) : '') || item.description || ''}
            ${item.total ? ` — ${t("admin_total")}: €${Number(item.total).toFixed(2)}` : ''}
            ${item.date ? ` — ${t("admin_date")}: ${item.date} ${item.time || ''} (${item.guests || 2} ${t("admin_pax")})` : ''}
          </p>
        </div>
        <div class="admin-actions">
          ${item.status ? `
            <select onchange="PiadaApp.adminUpdateStatus('${this.adminTab}', '${item.id}', this.value)">
              <option value="${item.status}">${t("status_" + item.status) || item.status}</option>
              ${statusList
          .filter(s => s !== item.status)
          .map(s => `<option value="${s}">${t("status_" + s)}</option>`).join('')}
            </select>
          ` : ''}
          <button class="text-gold" onclick="PiadaApp.adminEditItem('${this.adminTab}', '${item.id}')">${t("admin_edit")}</button>
          <button style="color: #EF4444;" onclick="PiadaApp.adminDeleteItem('${this.adminTab}', '${item.id}')">${t("admin_delete")}</button>
        </div>
      </article>
    `).join('');
  },

  adminUpdateStatus(tab, id, newStatus) {
    if (tab === "Order") PiadaStorage.updateOrder(id, { status: newStatus });
    else if (tab === "Reservation") PiadaStorage.updateReservation(id, { status: newStatus });
    this.renderAdminDataList();
  },

  adminDeleteItem(tab, id) {
    const t = (k) => typeof PiadaI18n !== "undefined" ? PiadaI18n.t(k) : k;
    if (!confirm(t("admin_confirm_delete"))) return;
    if (tab === "Order") PiadaStorage.deleteOrder(id);
    else if (tab === "Reservation") PiadaStorage.deleteReservation(id);
    else if (tab === "Inquiry") PiadaStorage.deleteInquiry(id);
    else if (tab === "MenuItem") PiadaStorage.deleteMenuItem(id);
    else if (tab === "Promotion") PiadaStorage.deletePromotion(id);
    this.renderAdminDataList();
  },

  adminCreateMenuItem() {
    const t = (k) => typeof PiadaI18n !== "undefined" ? PiadaI18n.t(k) : k;
    const name = prompt(t("admin_prompt_name"));
    if (!name) return;
    const category = prompt(t("admin_prompt_category"), "Piadine Classiche");
    const description = prompt(t("admin_prompt_desc"), "");
    const price = Number(prompt(t("admin_prompt_price"), "8.50")) || 8.50;
    const image_url = prompt(t("admin_prompt_image"), "assets/images/classica.jpg") || "assets/images/classica.jpg";

    PiadaStorage.addMenuItem({ name, category, description, price, image_url });
    this.renderAdminDataList();
  },

  adminCreatePromotion() {
    const t = (k) => typeof PiadaI18n !== "undefined" ? PiadaI18n.t(k) : k;
    const title = prompt(t("admin_prompt_promo_title"));
    if (!title) return;
    const description = prompt(t("admin_prompt_promo_desc"), "");
    PiadaStorage.addPromotion({ title, description });
    this.renderAdminDataList();
  },

  adminEditSettings() {
    const t = (k) => typeof PiadaI18n !== "undefined" ? PiadaI18n.t(k) : k;
    const current = PiadaStorage.getSettings();
    const address = prompt(t("admin_prompt_address"), current.address);
    const phone = prompt(t("admin_prompt_phone"), current.phone);
    const hours = prompt(t("admin_prompt_hours"), current.hours);

    if (address && phone && hours) {
      PiadaStorage.saveSettings({ ...current, address, phone, hours });
      this.renderAdminDataList();
    }
  },

  adminEditItem(tab, id) {
    const t = (k) => typeof PiadaI18n !== "undefined" ? PiadaI18n.t(k) : k;
    if (tab === "MenuItem") {
      const items = PiadaStorage.getMenuItems();
      const item = items.find(i => i.id === id);
      if (!item) return;

      const name = prompt(t("admin_prompt_name"), item.name);
      const price = Number(prompt(t("admin_prompt_price"), item.price));
      const description = prompt(t("admin_prompt_desc"), item.description);
      if (name && !isNaN(price)) {
        PiadaStorage.updateMenuItem(id, { name, price, description });
      }
    } else if (tab === "Promotion") {
      const active = confirm(t("admin_prompt_promo_active"));
      PiadaStorage.updatePromotion(id, { active });
    }
    this.renderAdminDataList();
  }
};

window.PiadaApp = PiadaApp;

// Auto boot on DOM load
document.addEventListener("DOMContentLoaded", () => {
  PiadaApp.init();
});
