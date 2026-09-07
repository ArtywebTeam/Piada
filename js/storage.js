/**
 * Piada Bar - Local Storage & State Management
 * Replaces Base44 cloud backend with independent client-side storage
 */

const PiadaStorage = {
  KEYS: {
    MENU: "piada_menu_items",
    CART: "piada_cart",
    RESERVATIONS: "piada_reservations",
    ORDERS: "piada_orders",
    INQUIRIES: "piada_inquiries",
    PROMOTIONS: "piada_promotions",
    SETTINGS: "piada_settings",
    THEME: "piada-theme"
  },

  init() {
    if (!localStorage.getItem(this.KEYS.MENU)) {
      localStorage.setItem(this.KEYS.MENU, JSON.stringify(window.PIADA_DATA.initialMenuItems));
    }
    if (!localStorage.getItem(this.KEYS.SETTINGS)) {
      localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(window.PIADA_DATA.restaurant));
    }
  },

  // Menu Items
  getMenuItems() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.MENU)) || window.PIADA_DATA.initialMenuItems;
    } catch {
      return window.PIADA_DATA.initialMenuItems;
    }
  },

  saveMenuItems(items) {
    localStorage.setItem(this.KEYS.MENU, JSON.stringify(items));
  },

  addMenuItem(item) {
    const items = this.getMenuItems();
    const newItem = { id: "item_" + Date.now(), ...item };
    items.push(newItem);
    this.saveMenuItems(items);
    return newItem;
  },

  updateMenuItem(id, updatedData) {
    const items = this.getMenuItems().map(item => item.id === id ? { ...item, ...updatedData } : item);
    this.saveMenuItems(items);
  },

  deleteMenuItem(id) {
    const items = this.getMenuItems().filter(item => item.id !== id);
    this.saveMenuItems(items);
  },

  // Cart Management
  getCart() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.CART)) || [];
    } catch {
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem(this.KEYS.CART, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("cart-updated", { detail: cart }));
  },

  addToCart(item, extras = "Nessuna modifica") {
    const cart = this.getCart();
    cart.push({
      cartId: "cart_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
      id: item.id,
      name: item.name,
      price: Number(item.price),
      extras: extras,
      qty: 1
    });
    this.saveCart(cart);
  },

  removeFromCart(index) {
    const cart = this.getCart();
    cart.splice(index, 1);
    this.saveCart(cart);
  },

  clearCart() {
    this.saveCart([]);
  },

  getCartTotal() {
    return this.getCart().reduce((acc, item) => acc + (Number(item.price) * (item.qty || 1)), 0);
  },

  // Reservations
  getReservations() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.RESERVATIONS)) || [];
    } catch {
      return [];
    }
  },

  addReservation(resData) {
    const reservations = this.getReservations();
    const newRes = {
      id: "res_" + Date.now(),
      created_date: new Date().toISOString(),
      status: "pending",
      ...resData
    };
    reservations.unshift(newRes);
    localStorage.setItem(this.KEYS.RESERVATIONS, JSON.stringify(reservations));
    return newRes;
  },

  updateReservation(id, updates) {
    const res = this.getReservations().map(r => r.id === id ? { ...r, ...updates } : r);
    localStorage.setItem(this.KEYS.RESERVATIONS, JSON.stringify(res));
  },

  deleteReservation(id) {
    const res = this.getReservations().filter(r => r.id !== id);
    localStorage.setItem(this.KEYS.RESERVATIONS, JSON.stringify(res));
  },

  // Orders
  getOrders() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.ORDERS)) || [];
    } catch {
      return [];
    }
  },

  addOrder(orderData) {
    const orders = this.getOrders();
    const newOrder = {
      id: "ord_" + Date.now(),
      created_date: new Date().toISOString(),
      status: "new",
      ...orderData
    };
    orders.unshift(newOrder);
    localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(orders));
    return newOrder;
  },

  updateOrder(id, updates) {
    const orders = this.getOrders().map(o => o.id === id ? { ...o, ...updates } : o);
    localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(orders));
  },

  deleteOrder(id) {
    const orders = this.getOrders().filter(o => o.id !== id);
    localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(orders));
  },

  // Inquiries (Contact, Franchise, Careers)
  getInquiries() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.INQUIRIES)) || [];
    } catch {
      return [];
    }
  },

  addInquiry(inquiryData) {
    const list = this.getInquiries();
    const newInquiry = {
      id: "inq_" + Date.now(),
      created_date: new Date().toISOString(),
      status: "new",
      ...inquiryData
    };
    list.unshift(newInquiry);
    localStorage.setItem(this.KEYS.INQUIRIES, JSON.stringify(list));
    return newInquiry;
  },

  deleteInquiry(id) {
    const list = this.getInquiries().filter(i => i.id !== id);
    localStorage.setItem(this.KEYS.INQUIRIES, JSON.stringify(list));
  },

  // Promotions
  getPromotions() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.PROMOTIONS)) || [];
    } catch {
      return [];
    }
  },

  getActivePromotion() {
    return this.getPromotions().find(p => p.active) || null;
  },

  addPromotion(promo) {
    const list = this.getPromotions();
    const newPromo = { id: "p_" + Date.now(), active: true, ...promo };
    list.unshift(newPromo);
    localStorage.setItem(this.KEYS.PROMOTIONS, JSON.stringify(list));
    return newPromo;
  },

  updatePromotion(id, updates) {
    const list = this.getPromotions().map(p => p.id === id ? { ...p, ...updates } : p);
    localStorage.setItem(this.KEYS.PROMOTIONS, JSON.stringify(list));
  },

  deletePromotion(id) {
    const list = this.getPromotions().filter(p => p.id !== id);
    localStorage.setItem(this.KEYS.PROMOTIONS, JSON.stringify(list));
  },

  // Settings
  getSettings() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.SETTINGS)) || window.PIADA_DATA.restaurant;
    } catch {
      return window.PIADA_DATA.restaurant;
    }
  },

  saveSettings(settings) {
    localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
  }
};

window.PiadaStorage = PiadaStorage;
