(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const prefix = "fvp-";
  const passwordHash = "ccaa3428162aefdfc4d216dde9991f6846e9c074c008a1c09ca47feac8910099";
  const adminImageFallback = "../assets/images/fashion-vintage-paris-shop.jpg";
  const productImages = {
    "Chanel Classic Flap 1997": "../assets/images/product-chanel-classic-flap-1997.jpg",
    "Chanel Chain Belt": "../assets/images/product-chanel-chain-belt-correct.jpg",
    "Givenchy Evening Bag": "../assets/images/product-givenchy-evening-bag.jpg",
    "Givenchy Structured Tote": "../assets/images/product-givenchy-structured-tote-correct.jpg",
    "Paris Silk Scarf Archive": "../assets/images/product-paris-silk-scarf-archive.jpg",
    "Art Deco Gold Earrings": "../assets/images/product-art-deco-gold-earrings.jpg",
    "Rare Couture Jacket": "../assets/images/product-rare-couture-jacket.jpg",
    "Pearl Evening Set": "../assets/images/product-pearl-evening-set.jpg"
  };

  const seeds = {
    products: [
      {
        id: "PRD-1001",
        name: "Chanel Classic Flap 1997",
        category: "Chanel Bags",
        price: 6800,
        image: productImages["Chanel Classic Flap 1997"],
        description: "Authenticated lambskin shoulder bag with gold hardware.",
        status: "Active"
      },
      {
        id: "PRD-1005",
        name: "Chanel Chain Belt",
        category: "Vintage Accessories",
        price: 1650,
        image: productImages["Chanel Chain Belt"],
        description: "Collector accessory with statement links and Paris evening polish.",
        status: "Active"
      },
      {
        id: "PRD-1002",
        name: "Givenchy Evening Bag",
        category: "Givenchy Bags",
        price: 2450,
        image: productImages["Givenchy Evening Bag"],
        description: "Structured vintage evening bag sourced in Paris.",
        status: "Active"
      },
      {
        id: "PRD-1006",
        name: "Givenchy Structured Tote",
        category: "Givenchy Bags",
        price: 3200,
        image: productImages["Givenchy Structured Tote"],
        description: "Polished silhouette with day-to-evening carrying power.",
        status: "Active"
      },
      {
        id: "PRD-1004",
        name: "Paris Silk Scarf Archive",
        category: "Vintage Accessories",
        price: 420,
        image: productImages["Paris Silk Scarf Archive"],
        description: "Soft silk accessory with archive-inspired print.",
        status: "Reserved"
      },
      {
        id: "PRD-1003",
        name: "Art Deco Gold Earrings",
        category: "Luxury Jewelry",
        price: 980,
        image: productImages["Art Deco Gold Earrings"],
        description: "Statement jewelry for private fittings and styling.",
        status: "Active"
      },
      {
        id: "PRD-1007",
        name: "Rare Couture Jacket",
        category: "Rare Fashion Pieces",
        price: 4900,
        image: productImages["Rare Couture Jacket"],
        description: "Tailored vintage silhouette chosen for collector value.",
        status: "Active"
      },
      {
        id: "PRD-1008",
        name: "Pearl Evening Set",
        category: "Luxury Jewelry",
        price: 760,
        image: productImages["Pearl Evening Set"],
        description: "Elegant accessory set for bridal, evening, and heritage styling.",
        status: "Active"
      }
    ],
    bookings: [
      {
        id: "BKG-2061",
        name: "Monica Altisent",
        email: "monica@example.com",
        phone: "+33 6 00 00 00 01",
        service: "Private Collection Viewing",
        date: "2026-06-06",
        time: "11:00",
        notes: "Interested in Chanel and jewelry.",
        status: "pending",
        createdAt: "2026-05-15T12:00:00.000Z"
      },
      {
        id: "BKG-2062",
        name: "Mary Magdaleena",
        email: "mary@example.com",
        phone: "+33 6 00 00 00 02",
        service: "Consignment Consultation",
        date: "2026-06-08",
        time: "15:00",
        notes: "Designer accessories evaluation.",
        status: "approved",
        createdAt: "2026-05-15T13:00:00.000Z"
      }
    ],
    customers: [
      { id: "CUS-501", name: "Monica Altisent", email: "monica@example.com", phone: "+33 6 00 00 00 01", tier: "Collector", spend: 12400 },
      { id: "CUS-502", name: "Mary Magdaleena", email: "mary@example.com", phone: "+33 6 00 00 00 02", tier: "VIP", spend: 22100 },
      { id: "CUS-503", name: "T Cooper", email: "tcooper@example.com", phone: "+44 20 0000 0000", tier: "Stylist", spend: 7800 }
    ],
    orders: [
      { id: "ORD-9001", customer: "Mary Magdaleena", item: "Chanel Classic Flap 1997", total: 6800, status: "paid", date: "2026-05-11" },
      { id: "ORD-9002", customer: "T Cooper", item: "Art Deco Gold Earrings", total: 980, status: "pending", date: "2026-05-13" },
      { id: "ORD-9003", customer: "Monica Altisent", item: "Paris Silk Scarf Archive", total: 420, status: "refunded", date: "2026-05-14" }
    ],
    settings: {
      logo: "Fashion Vintage Paris",
      primaryColor: "#c7a15a",
      phone: "+33 6 61 98 49 86",
      address: "15 Rue des Petits Champs, 75001 Paris, France",
      instagram: "https://instagram.com/",
      tiktok: "https://tiktok.com/",
      facebook: "https://facebook.com/",
      pinterest: "https://pinterest.com/"
    }
  };

  const read = (key, fallback) => {
    try {
      const value = localStorage.getItem(prefix + key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      return fallback;
    }
  };

  const write = (key, value) => {
    try {
      localStorage.setItem(prefix + key, JSON.stringify(value));
    } catch (error) {
      console.warn("Storage write failed.", error);
    }
  };

  const escapeHtml = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const money = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(Number(value || 0));

  const showToast = (message) => {
    let toast = $(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
  };

  const ensureSeedData = () => {
    Object.entries(seeds).forEach(([key, value]) => {
      if (localStorage.getItem(prefix + key) === null) write(key, value);
    });

    const products = read("products", seeds.products);
    const normalizedProducts = products.map((product) => {
      const savedImage = product.image || "";
      const productImage = productImages[product.name];
      const shouldUseProductImage =
        productImage &&
        (!savedImage ||
          savedImage === adminImageFallback ||
          savedImage.startsWith("http") ||
          savedImage.includes("fashion-vintage-paris-shop") ||
          (savedImage.includes("/assets/images/product-") && savedImage !== productImage));

      return {
        ...product,
        image: shouldUseProductImage ? productImage : savedImage || adminImageFallback
      };
    });
    seeds.products.forEach((seedProduct) => {
      if (!normalizedProducts.some((product) => product.name === seedProduct.name)) normalizedProducts.push(seedProduct);
    });
    if (JSON.stringify(products) !== JSON.stringify(normalizedProducts)) write("products", normalizedProducts);
  };

  const writeSession = () => {
    const session = { authenticated: true, createdAt: Date.now() };
    write("admin-session", session);
    try {
      sessionStorage.setItem(prefix + "admin-session", JSON.stringify(session));
      document.cookie = `${prefix}admin-session=1; path=/; max-age=2592000; SameSite=Lax`;
    } catch (error) {
      console.warn("Fallback session storage is unavailable.", error);
    }
  };

  const hasAdminSession = () => {
    const stored = read("admin-session", null);
    if (stored?.authenticated) return true;
    try {
      const session = JSON.parse(sessionStorage.getItem(prefix + "admin-session") || "null");
      if (session?.authenticated) return true;
    } catch (error) {
      console.warn("Unable to read session storage.", error);
    }
    return document.cookie.includes(`${prefix}admin-session=1`);
  };

  const hashText = async (text) => {
    if (!window.crypto?.subtle) throw new Error("Browser crypto is unavailable.");
    const bytes = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  };

  const isLoginPage = () => location.pathname.endsWith("admin-login.html");

  const protectAdmin = () => {
    if (isLoginPage()) return;
    if (!hasAdminSession()) {
      window.location.replace("admin-login.html");
    }
  };

  const initLogin = () => {
    const form = $("[data-admin-login]");
    if (!form) return;
    if (hasAdminSession()) {
      window.location.replace("admin-dashboard.html");
      return;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const error = $(".login-error");
      const button = form.querySelector("button[type='submit']");
      const username = form.elements.username.value.trim();
      const password = form.elements.password.value;
      button.disabled = true;
      button.textContent = "Validating...";

      try {
        const digest = window.crypto?.subtle ? await hashText(password) : "";
        if (username === "admin" && (password === "FashionParis2026" || digest === passwordHash)) {
          writeSession();
          window.location.assign("admin-dashboard.html");
          return;
        }
        error.textContent = "Invalid administrator credentials.";
        error.classList.add("is-visible");
      } catch (cryptoError) {
        if (username === "admin" && password === "FashionParis2026") {
          writeSession();
          window.location.assign("admin-dashboard.html");
          return;
        }
        error.textContent = "Invalid administrator credentials.";
        error.classList.add("is-visible");
      } finally {
        button.disabled = false;
        button.textContent = "Access Dashboard";
      }
    });
  };

  const initShell = () => {
    const current = location.pathname.split("/").pop();
    $$(".admin-menu a").forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === current);
      link.addEventListener("click", () => document.body.classList.remove("sidebar-open"));
    });

    $("[data-sidebar-toggle]")?.addEventListener("click", () => {
      document.body.classList.toggle("sidebar-open");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") document.body.classList.remove("sidebar-open");
    });

    $$("[data-logout]").forEach((button) => {
      button.addEventListener("click", () => {
        localStorage.removeItem(prefix + "admin-session");
        sessionStorage.removeItem(prefix + "admin-session");
        document.cookie = `${prefix}admin-session=; path=/; max-age=0; SameSite=Lax`;
        window.location.href = "admin-login.html";
      });
    });
  };

  const setText = (selector, value) => {
    const element = $(selector);
    if (element) element.textContent = value;
  };

  const initMetrics = () => {
    const products = read("products", seeds.products);
    const bookings = read("bookings", seeds.bookings);
    const customers = read("customers", seeds.customers);
    const orders = read("orders", seeds.orders);
    const sales = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);

    setText("[data-metric='visitors']", "18,420");
    setText("[data-metric='products']", String(products.length));
    setText("[data-metric='bookings']", String(bookings.length));
    setText("[data-metric='sales']", money(sales));
    setText("[data-metric='customers']", String(customers.length));
  };

  const drawLineChart = (canvas, values, color = "#e7cc8a") => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.scale(ratio, ratio);
    ctx.clearRect(0, 0, width, height);

    const padding = 28;
    const max = Math.max(...values) * 1.12;
    const min = Math.min(...values) * 0.8;
    const points = values.map((value, index) => {
      const x = padding + (index / (values.length - 1)) * (width - padding * 2);
      const y = height - padding - ((value - min) / (max - min)) * (height - padding * 2);
      return { x, y };
    });

    ctx.strokeStyle = "rgba(247, 239, 226, 0.1)";
    ctx.lineWidth = 1;
    for (let row = 0; row < 5; row += 1) {
      const y = padding + (row / 4) * (height - padding * 2);
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    const gradient = ctx.createLinearGradient(0, padding, 0, height);
    gradient.addColorStop(0, "rgba(231, 204, 138, 0.36)");
    gradient.addColorStop(1, "rgba(231, 204, 138, 0)");
    ctx.beginPath();
    points.forEach((point, index) => (index ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y)));
    ctx.lineTo(points[points.length - 1].x, height - padding);
    ctx.lineTo(points[0].x, height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    points.forEach((point, index) => (index ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y)));
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();

    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#080807";
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  };

  const drawBarChart = (canvas, values, labels) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.scale(ratio, ratio);
    ctx.clearRect(0, 0, width, height);

    const max = Math.max(...values);
    const gap = 16;
    const padding = 32;
    const barWidth = (width - padding * 2 - gap * (values.length - 1)) / values.length;
    values.forEach((value, index) => {
      const barHeight = ((height - padding * 2) * value) / max;
      const x = padding + index * (barWidth + gap);
      const y = height - padding - barHeight;
      const gradient = ctx.createLinearGradient(0, y, 0, height);
      gradient.addColorStop(0, "#e7cc8a");
      gradient.addColorStop(1, "#c7a15a");
      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, barHeight);
      ctx.fillStyle = "rgba(247, 239, 226, 0.7)";
      ctx.font = "12px Inter";
      ctx.fillText(labels[index], x, height - 10);
    });
  };

  const initCharts = () => {
    drawLineChart($("#trafficChart"), [2100, 2800, 2400, 3600, 4100, 5200, 6100]);
    drawLineChart($("#salesChart"), [7200, 9400, 8800, 12300, 15900, 18400, 21100], "#8db7ff");
    drawBarChart($("#categoryChart"), [32, 24, 18, 14, 12], ["Chanel", "Givenchy", "Jewelry", "Rare", "Access"]);
    window.addEventListener("resize", () => {
      drawLineChart($("#trafficChart"), [2100, 2800, 2400, 3600, 4100, 5200, 6100]);
      drawLineChart($("#salesChart"), [7200, 9400, 8800, 12300, 15900, 18400, 21100], "#8db7ff");
      drawBarChart($("#categoryChart"), [32, 24, 18, 14, 12], ["Chanel", "Givenchy", "Jewelry", "Rare", "Access"]);
    });
  };

  const statusBadge = (status) => `<span class="status ${escapeHtml(String(status).toLowerCase())}">${escapeHtml(status)}</span>`;

  const renderRecentBookings = () => {
    const table = $("[data-recent-bookings]");
    if (!table) return;
    const bookings = read("bookings", seeds.bookings).slice(0, 5);
    table.innerHTML = bookings
      .map(
        (booking) => `
          <tr>
            <td>${escapeHtml(booking.name)}</td>
            <td>${escapeHtml(booking.service)}</td>
            <td>${escapeHtml(booking.date)} ${escapeHtml(booking.time)}</td>
            <td>${statusBadge(booking.status)}</td>
          </tr>
        `
      )
      .join("");
  };

  const renderProducts = () => {
    const table = $("[data-products-table]");
    if (!table) return;
    const query = ($("[data-product-search]")?.value || "").toLowerCase();
    const products = read("products", seeds.products).filter((product) =>
      [product.name, product.category, product.status].join(" ").toLowerCase().includes(query)
    );

    table.innerHTML = products
      .map(
        (product) => `
          <tr>
            <td><img class="preview-image" src="${escapeHtml(product.image || adminImageFallback)}" alt="${escapeHtml(product.name)}" onerror="this.onerror=null;this.src='../assets/images/fashion-vintage-paris-shop.jpg';"></td>
            <td><strong>${escapeHtml(product.name)}</strong><br><span>${escapeHtml(product.description)}</span></td>
            <td>${escapeHtml(product.category)}</td>
            <td>${money(product.price)}</td>
            <td>${escapeHtml(product.status)}</td>
            <td>
              <div class="action-row">
                <button class="admin-btn" type="button" data-edit-product="${escapeHtml(product.id)}">Edit</button>
                <button class="admin-btn danger" type="button" data-delete-product="${escapeHtml(product.id)}">Delete</button>
              </div>
            </td>
          </tr>
        `
      )
      .join("");
  };

  const initProducts = () => {
    const form = $("[data-product-form]");
    if (!form) return;
    let imageData = "";

    $("[data-product-search]")?.addEventListener("input", renderProducts);
    form.elements.imageFile?.addEventListener("change", () => {
      const file = form.elements.imageFile.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        imageData = String(reader.result);
        form.elements.image.value = imageData;
        showToast("Product image loaded.");
      });
      reader.readAsDataURL(file);
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const products = read("products", seeds.products);
      const id = data.get("id") || `PRD-${Date.now()}`;
      const product = {
        id,
        name: data.get("name"),
        category: data.get("category"),
        price: Number(data.get("price")),
        image: data.get("image") || imageData || seeds.products[0].image,
        description: data.get("description"),
        status: data.get("status")
      };
      const existing = products.findIndex((item) => item.id === id);
      if (existing >= 0) products[existing] = product;
      else products.unshift(product);
      write("products", products);
      form.reset();
      form.elements.id.value = "";
      imageData = "";
      renderProducts();
      initMetrics();
      showToast("Product saved.");
    });

    form.addEventListener("reset", () => {
      form.elements.id.value = "";
      imageData = "";
    });

    document.addEventListener("click", (event) => {
      const editButton = event.target.closest("[data-edit-product]");
      const deleteButton = event.target.closest("[data-delete-product]");
      const products = read("products", seeds.products);

      if (editButton) {
        const product = products.find((item) => item.id === editButton.dataset.editProduct);
        if (!product) return;
        Object.entries(product).forEach(([key, value]) => {
          if (form.elements[key]) form.elements[key].value = value;
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      if (deleteButton) {
        const next = products.filter((item) => item.id !== deleteButton.dataset.deleteProduct);
        write("products", next);
        renderProducts();
        initMetrics();
        showToast("Product deleted.");
      }
    });

    renderProducts();
  };

  const renderBookings = () => {
    const table = $("[data-bookings-table]");
    if (!table) return;
    const query = ($("[data-booking-search]")?.value || "").toLowerCase();
    const bookings = read("bookings", seeds.bookings).filter((booking) =>
      [booking.name, booking.service, booking.status, booking.date].join(" ").toLowerCase().includes(query)
    );

    table.innerHTML = bookings
      .map(
        (booking) => `
          <tr>
            <td><strong>${escapeHtml(booking.name)}</strong><br><span>${escapeHtml(booking.email)}</span></td>
            <td>${escapeHtml(booking.service)}</td>
            <td>${escapeHtml(booking.date)} ${escapeHtml(booking.time)}</td>
            <td>${escapeHtml(booking.phone)}</td>
            <td>${statusBadge(booking.status)}</td>
            <td>
              <div class="action-row">
                <button class="admin-btn success" type="button" data-booking-status="${escapeHtml(booking.id)}" data-status="approved">Approve</button>
                <button class="admin-btn danger" type="button" data-booking-status="${escapeHtml(booking.id)}" data-status="cancelled">Cancel</button>
              </div>
            </td>
          </tr>
        `
      )
      .join("");
  };

  const initBookings = () => {
    if (!$("[data-bookings-table]")) return;
    $("[data-booking-search]")?.addEventListener("input", renderBookings);
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-booking-status]");
      if (!button) return;
      const bookings = read("bookings", seeds.bookings).map((booking) =>
        booking.id === button.dataset.bookingStatus ? { ...booking, status: button.dataset.status } : booking
      );
      write("bookings", bookings);
      renderBookings();
      initMetrics();
      showToast(`Booking ${button.dataset.status}.`);
    });
    renderBookings();
  };

  const renderCustomers = () => {
    const table = $("[data-customers-table]");
    if (!table) return;
    const query = ($("[data-customer-search]")?.value || "").toLowerCase();
    const customers = read("customers", seeds.customers).filter((customer) =>
      [customer.name, customer.email, customer.tier].join(" ").toLowerCase().includes(query)
    );
    table.innerHTML = customers
      .map(
        (customer) => `
          <tr>
            <td><strong>${escapeHtml(customer.name)}</strong><br><span>${escapeHtml(customer.id)}</span></td>
            <td>${escapeHtml(customer.email)}</td>
            <td>${escapeHtml(customer.phone)}</td>
            <td>${escapeHtml(customer.tier)}</td>
            <td>${money(customer.spend)}</td>
          </tr>
        `
      )
      .join("");
  };

  const initCustomers = () => {
    if (!$("[data-customers-table]")) return;
    $("[data-customer-search]")?.addEventListener("input", renderCustomers);
    renderCustomers();
  };

  const renderOrders = () => {
    const table = $("[data-orders-table]");
    if (!table) return;
    const orders = read("orders", seeds.orders);
    table.innerHTML = orders
      .map(
        (order) => `
          <tr>
            <td><strong>${escapeHtml(order.id)}</strong><br><span>${escapeHtml(order.date)}</span></td>
            <td>${escapeHtml(order.customer)}</td>
            <td>${escapeHtml(order.item)}</td>
            <td>${money(order.total)}</td>
            <td>${statusBadge(order.status)}</td>
          </tr>
        `
      )
      .join("");
  };

  const initSettings = () => {
    const form = $("[data-settings-form]");
    if (!form) return;
    const settings = read("settings", seeds.settings);
    Object.entries(settings).forEach(([key, value]) => {
      if (form.elements[key]) form.elements[key].value = value;
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      write("settings", data);
      document.documentElement.style.setProperty("--gold", data.primaryColor || seeds.settings.primaryColor);
      showToast("Website settings saved.");
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    ensureSeedData();
    protectAdmin();
    initLogin();
    initShell();
    initMetrics();
    initCharts();
    renderRecentBookings();
    initProducts();
    initBookings();
    initCustomers();
    renderOrders();
    initSettings();
  });
})();
