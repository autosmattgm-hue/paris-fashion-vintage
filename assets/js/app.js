(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const storagePrefix = "fvp-";
  const imageFallback = "assets/images/fashion-vintage-paris-shop.jpg";
  const originalTextNodes = new WeakMap();

  const translations = {
    fr: {
      "Skip to content": "Aller au contenu",
      "Home": "Accueil",
      "Collection": "Collection",
      "About": "A propos",
      "Reviews": "Avis",
      "Gallery": "Galerie",
      "Contact": "Contact",
      "Booking": "Rendez-vous",
      "Switch theme": "Changer de theme",
      "Switch to light theme": "Passer au theme clair",
      "Switch to dark theme": "Passer au theme sombre",
      "Paris luxury consignment boutique": "Boutique de luxe vintage a Paris",
      "Authentic Luxury Vintage Fashion in Paris": "Mode vintage de luxe authentique a Paris",
      "Discover timeless designer pieces, iconic handbags, and curated Parisian elegance.": "Decouvrez des pieces de createurs intemporelles, des sacs iconiques et une elegance parisienne soigneusement selectionnee.",
      "Explore Collection": "Explorer la collection",
      "Book Appointment": "Prendre rendez-vous",
      "Rated by luxury shoppers": "Note par des clients luxe",
      "Public customer reviews": "Avis clients publics",
      "Rue des Petits Champs, Paris": "Rue des Petits Champs, Paris",
      "Scroll": "Defiler",
      "The boutique": "La boutique",
      "Curated vintage fashion with Parisian discretion.": "Mode vintage selectionnee avec discretion parisienne.",
      "Fashion Vintage Paris welcomes collectors, stylists, travelers, and loyal clients seeking authenticated designer pieces with character. Each visit is intimate, considered, and led by a boutique team that understands rarity, condition, provenance, and personal style.": "Fashion Vintage Paris accueille collectionneurs, stylistes, voyageurs et clients fideles a la recherche de pieces de createurs authentifiees et pleines de caractere. Chaque visite est intime, soignee et accompagnee par une equipe qui comprend la rarete, l'etat, la provenance et le style personnel.",
      "Located near Pyramides at 15 Rue des Petits Champs, the boutique pairs archival fashion knowledge with the warmth of a private Paris appointment.": "Situee pres de Pyramides au 15 Rue des Petits Champs, la boutique associe expertise mode archivee et chaleur d'un rendez-vous prive a Paris.",
      "Discover Our Story": "Decouvrir notre histoire",
      "Visit the boutique": "Visiter la boutique",
      "Private vintage sourcing": "Sourcing vintage prive",
      "Authenticated handbags, accessories, jewelry, and rare designer finds.": "Sacs, accessoires, bijoux et trouvailles de createurs rares, tous authentifies.",
      "Fashion Vintage Paris boutique": "Boutique Fashion Vintage Paris",
      "The real shopfront at 15 Rue des Petits Champs in central Paris.": "La vraie devanture au 15 Rue des Petits Champs, dans le centre de Paris.",
      "Fashion Vintage Paris shop exterior at 15 Rue des Petits Champs": "Devanture de Fashion Vintage Paris au 15 Rue des Petits Champs",
      "Fashion Vintage Paris shop preview": "Apercu de la boutique Fashion Vintage Paris",
      "Reviews": "Avis",
      "Rating": "Note",
      "Vintage Pieces": "Pieces vintage",
      "Paris Luxury Boutique": "Boutique luxe a Paris",
      "Signature collection": "Collection signature",
      "Designer pieces selected for permanence.": "Pieces de createurs choisies pour durer.",
      "Browse a living preview of vintage handbags, accessories, jewelry, and rare fashion pieces available for private viewing.": "Parcourez un apercu vivant de sacs vintage, accessoires, bijoux et pieces rares disponibles en presentation privee.",
      "Product categories": "Categories de produits",
      "All": "Tout",
      "Chanel Bags": "Sacs Chanel",
      "Givenchy Bags": "Sacs Givenchy",
      "Accessories": "Accessoires",
      "Jewelry": "Bijoux",
      "Rare Pieces": "Pieces rares",
      "Designer": "Createur",
      "Vintage": "Vintage",
      "Rare": "Rare",
      "Archive": "Archive",
      "Authenticated lambskin shoulder bag with gold-tone hardware and archive appeal.": "Sac epaule en agneau authentifie avec finitions dorees et charme archive.",
      "Structured vintage silhouette for dinners, events, and collector wardrobes.": "Silhouette vintage structuree pour diners, evenements et garde-robes de collection.",
      "Soft silk accessory with painterly detail and timeless styling range.": "Accessoire en soie douce aux details picturaux et au style intemporel.",
      "Sculptural jewelry designed to finish evening looks with Paris polish.": "Bijoux sculpturaux concus pour sublimer les looks du soir avec une touche parisienne.",
      "View Details": "Voir les details",
      "A cinematic view inside the boutique.": "Une vision cinematographique de la boutique.",
      "Open full gallery": "Ouvrir la galerie",
      "Parisian silhouettes": "Silhouettes parisiennes",
      "Styling notes": "Notes de style",
      "Collector atmosphere": "Atmosphere de collection",
      "Client reviews": "Avis clients",
      "Trusted by luxury fashion clients in Paris.": "Approuvee par les clients de mode luxe a Paris.",
      "4.6 stars across 28 reviews, with boutique service praised by visitors and collectors.": "4,6 etoiles sur 28 avis, avec un service boutique apprecie par visiteurs et collectionneurs.",
      "Pretty little boutique in Paris near Pyramides, excellent customer service.": "Jolie petite boutique a Paris pres de Pyramides, excellent service client.",
      "Wonderful collection of luxury fashion products in Paris.": "Magnifique collection de produits de mode luxe a Paris.",
      "Stylish boutique with unique vintage pieces.": "Boutique elegante avec des pieces vintage uniques.",
      "Luxury shopper": "Cliente luxe",
      "Collector client": "Cliente collectionneuse",
      "Vintage fashion client": "Cliente mode vintage",
      "Contact": "Contact",
      "Plan your private visit.": "Preparez votre visite privee.",
      "Name": "Nom",
      "Email": "E-mail",
      "Phone": "Telephone",
      "Message": "Message",
      "Send Message": "Envoyer le message",
      "Fashion Vintage Paris will reply shortly.": "Fashion Vintage Paris vous repondra rapidement.",
      "Directions": "Itineraire",
      "Closed · Opens 11 AM Saturday": "Ferme · Ouvre samedi a 11 h",
      "Social atelier": "Atelier social",
      "Follow the newest arrivals.": "Suivez les dernieres arrivees.",
      "Luxury outfit preview": "Apercu tenue luxe",
      "Vintage fashion styling preview": "Apercu styling mode vintage",
      "Paris fashion detail preview": "Apercu detail mode parisienne",
      "Designer accessories preview": "Apercu accessoires createur",
      "Luxury boutique preview": "Apercu boutique luxe",
      "Authentic luxury vintage fashion, curated in Paris for collectors, stylists, and modern wardrobes.": "Mode vintage de luxe authentique, selectionnee a Paris pour collectionneurs, stylistes et garde-robes modernes.",
      "Authentic luxury vintage fashion, curated in Paris.": "Mode vintage de luxe authentique, selectionnee a Paris.",
      "Boutique": "Boutique",
      "Appointments": "Rendez-vous",
      "Visit": "Visiter",
      "Staff login": "Connexion equipe",
      "Location code V88Q+G6": "Code localisation V88Q+G6",
      "All rights reserved.": "Tous droits reserves.",
      "SEO, booking, analytics, and luxury commerce ready.": "Pret pour SEO, rendez-vous, analytics et commerce luxe.",
      "Our story": "Notre histoire",
      "Parisian vintage expertise with modern luxury service.": "Expertise vintage parisienne et service luxe moderne.",
      "About": "A propos",
      "Fashion Vintage Paris": "Fashion Vintage Paris",
      "A boutique built on trust, taste, and provenance.": "Une boutique fondee sur la confiance, le gout et la provenance.",
      "Fashion Vintage Paris is a luxury vintage boutique and consignment shop for clients who value authenticity as much as beauty. The boutique curates designer handbags, archival accessories, jewelry, and rare fashion pieces selected for condition, silhouette, and timeless relevance.": "Fashion Vintage Paris est une boutique vintage de luxe et depot-vente pour les clients qui valorisent l'authenticite autant que la beaute. La boutique selectionne sacs de createurs, accessoires d'archive, bijoux et pieces rares selon leur etat, leur silhouette et leur pertinence intemporelle.",
      "Every appointment is designed to feel private and efficient. Clients can browse quietly, request styling guidance, or bring pieces for consignment review with a team that understands resale value, collector demand, and the emotional life of vintage fashion.": "Chaque rendez-vous est concu pour etre prive et efficace. Les clients peuvent parcourir la selection en toute tranquillite, demander des conseils de style ou presenter des pieces a evaluer avec une equipe qui comprend la valeur de revente, la demande des collectionneurs et la dimension emotionnelle de la mode vintage.",
      "From Chanel bags to Givenchy evening pieces, the boutique blends Parisian atmosphere with a rigorous eye for lasting luxury.": "Des sacs Chanel aux pieces de soiree Givenchy, la boutique mele atmosphere parisienne et regard exigeant sur le luxe durable.",
      "Authentication-first curation": "Selection priorisant l'authentification",
      "Condition, provenance, craftsmanship, and resale potential guide every acquisition.": "L'etat, la provenance, le savoir-faire et le potentiel de revente guident chaque acquisition.",
      "Paris Address": "Adresse parisienne",
      "Boutique standards": "Standards boutique",
      "Luxury service that protects confidence.": "Un service luxe qui protege la confiance.",
      "Every part of the buying journey is structured around trust, discretion, and high-retention client relationships.": "Chaque etape du parcours d'achat est structuree autour de la confiance, de la discretion et de relations clients durables.",
      "Authentication": "Authentification",
      "Pieces are assessed for materials, hardware, construction, date markers, and condition before presentation.": "Les pieces sont evaluees selon les matieres, finitions, construction, marqueurs de date et etat avant presentation.",
      "Private Appointments": "Rendez-vous prives",
      "Clients can reserve calm boutique time for collection viewing, gifting, styling, or consignment conversations.": "Les clients peuvent reserver un moment calme en boutique pour voir la collection, offrir, styliser ou discuter depot-vente.",
      "Consignment Mindset": "Esprit depot-vente",
      "Inventory is selected for desirability, pricing discipline, and long-term brand value.": "L'inventaire est choisi pour son desir, sa coherence de prix et sa valeur de marque a long terme.",
      "Location": "Localisation",
      "In the heart of Paris, near Pyramides.": "Au coeur de Paris, pres de Pyramides.",
      "Find Fashion Vintage Paris at 15 Rue des Petits Champs, 75001 Paris, France. The boutique is positioned for international shoppers, local collectors, and stylists moving between the Louvre, Palais Royal, and central Paris hotels.": "Retrouvez Fashion Vintage Paris au 15 Rue des Petits Champs, 75001 Paris, France. La boutique est ideale pour acheteurs internationaux, collectionneurs locaux et stylistes circulant entre le Louvre, le Palais Royal et les hotels du centre de Paris.",
      "Address": "Adresse",
      "Opening": "Horaires",
      "Contact Boutique": "Contacter la boutique",
      "Luxury resale and appointment-ready commerce.": "Revente luxe et parcours rendez-vous prets.",
      "The collection": "La collection",
      "Authenticated vintage icons for modern collectors.": "Icones vintage authentifiees pour collectionneurs modernes.",
      "Product showcase": "Selection produits",
      "Luxury pieces selected for rarity and wearability.": "Pieces luxe choisies pour leur rarete et leur portabilite.",
      "Filter by category, save favorites, and request details before booking a private boutique appointment.": "Filtrez par categorie, enregistrez vos favoris et demandez des details avant de reserver un rendez-vous prive.",
      "Authenticated lambskin shoulder bag with gold-tone hardware.": "Sac epaule en agneau authentifie avec finitions dorees.",
      "Collector accessory with statement links and Paris evening polish.": "Accessoire de collection aux maillons affirmes et a l'allure parisienne du soir.",
      "Structured vintage evening bag sourced for private occasions.": "Sac de soiree vintage structure selectionne pour les occasions privees.",
      "Polished silhouette with practical day-to-evening carrying power.": "Silhouette elegante et pratique du jour au soir.",
      "Sculptural gold-tone jewelry for polished evening looks.": "Bijoux sculpturaux dores pour des looks du soir raffines.",
      "Tailored vintage silhouette chosen for editorial and collector value.": "Silhouette vintage taillee choisie pour sa valeur editoriale et de collection.",
      "Elegant accessory set for bridal, evening, and heritage styling.": "Ensemble d'accessoires elegant pour mariage, soiree et styling heritage.",
      "Private sourcing": "Sourcing prive",
      "Searching for a specific designer piece?": "Vous recherchez une piece de createur precise ?",
      "Book a consultation and the boutique team can guide you through current inventory, upcoming consignments, and sourcing opportunities.": "Reservez une consultation et l'equipe vous guidera dans l'inventaire actuel, les prochains depots et les opportunites de sourcing.",
      "Request Details": "Demander des details",
      "Authenticated designer collection.": "Collection de createurs authentifiee.",
      "Visual archive": "Archive visuelle",
      "Boutique details, vintage textures, and Paris fashion mood.": "Details boutique, textures vintage et atmosphere mode parisienne.",
      "Masonry gallery": "Galerie masonry",
      "Luxury atmosphere designed for discovery.": "Atmosphere luxe concue pour la decouverte.",
      "Open any image for a fullscreen preview of the boutique mood, product details, and vintage fashion environment.": "Ouvrez une image pour un apercu plein ecran de l'ambiance boutique, des details produit et de l'univers mode vintage.",
      "Vintage editorial": "Editorial vintage",
      "Cinematic styling": "Styling cinematographique",
      "Collector portrait": "Portrait collectionneur",
      "Boutique rail": "Portant boutique",
      "Paris styling": "Styling parisien",
      "Handbag detail": "Detail sac",
      "Jewelry detail": "Detail bijou",
      "Designer silhouette": "Silhouette createur",
      "Boutique atmosphere": "Atmosphere boutique",
      "Fashion Vintage Paris shop exterior": "Devanture de Fashion Vintage Paris",
      "Fashion Vintage Paris shopfront": "Devanture Fashion Vintage Paris",
      "Fashion Vintage Paris boutique facade": "Facade de la boutique Fashion Vintage Paris",
      "Real boutique facade": "Vraie facade de la boutique",
      "Private viewing": "Presentation privee",
      "Experience the collection in person.": "Decouvrez la collection en personne.",
      "Appointments help the team prepare pieces that match your designer preferences, size needs, and styling goals.": "Les rendez-vous aident l'equipe a preparer des pieces selon vos preferences de createurs, tailles et objectifs de style.",
      "Browse Collection": "Parcourir la collection",
      "Gallery and lightbox ready.": "Galerie et lightbox pretes.",
      "Client trust": "Confiance client",
      "Luxury clients praise the boutique experience.": "Les clients luxe saluent l'experience boutique.",
      "Testimonials": "Temoignages",
      "Rated 4.6 stars by Paris boutique visitors.": "Notee 4,6 etoiles par les visiteurs de la boutique parisienne.",
      "Real review highlights reinforce confidence before clients book an appointment or request collection details.": "Les avis renforcent la confiance avant qu'un client reserve un rendez-vous ou demande des details sur la collection.",
      "Average Rating": "Note moyenne",
      "Total Reviews": "Total des avis",
      "Paris boutique visitor": "Visiteuse boutique Paris",
      "Luxury fashion client": "Cliente mode luxe",
      "Vintage collector": "Collectionneur vintage",
      "Why reviews convert": "Pourquoi les avis convertissent",
      "Proof points for high-intent luxury shoppers.": "Preuves pour acheteurs luxe a forte intention.",
      "Luxury clients need confidence before visiting, consigning, or buying. The site places trust signals close to booking and product discovery actions.": "Les clients luxe ont besoin de confiance avant de visiter, deposer ou acheter. Le site place les signaux de confiance pres des actions de reservation et de decouverte produit.",
      "4.6 Star Rating": "Note de 4,6 etoiles",
      "Clear social proof for visitors comparing boutiques in central Paris.": "Preuve sociale claire pour les visiteurs comparant les boutiques du centre de Paris.",
      "Review Volume": "Volume d'avis",
      "Visible credibility for appointment conversion and local SEO relevance.": "Credibilite visible pour convertir les rendez-vous et renforcer le SEO local.",
      "Verified Experience": "Experience verifiee",
      "Review copy emphasizes customer service, collection quality, and unique pieces.": "Les avis soulignent le service client, la qualite de la collection et les pieces uniques.",
      "Customer trust and review SEO ready.": "Confiance client et SEO avis prets.",
      "Contact the boutique": "Contacter la boutique",
      "Visit Fashion Vintage Paris near Pyramides.": "Visitez Fashion Vintage Paris pres de Pyramides.",
      "Fashion Vintage Paris shop exterior in Paris": "Devanture de Fashion Vintage Paris a Paris",
      "Send a message": "Envoyer un message",
      "Ask about pieces, visits, or consignment.": "Posez une question sur les pieces, visites ou depot-vente.",
      "Thank you. The boutique team will respond shortly.": "Merci. L'equipe de la boutique vous repondra rapidement.",
      "Boutique information": "Informations boutique",
      "Opening Hours": "Horaires d'ouverture",
      "Location Code": "Code localisation",
      "Google Maps": "Google Maps",
      "Find the boutique in central Paris.": "Trouvez la boutique dans le centre de Paris.",
      "The boutique is near Pyramides and within easy reach of Paris luxury shopping routes.": "La boutique est pres de Pyramides et facilement accessible depuis les parcours shopping luxe de Paris.",
      "Contact and local SEO ready.": "Contact et SEO local prets.",
      "Private appointment": "Rendez-vous prive",
      "Reserve a luxury boutique experience in Paris.": "Reservez une experience boutique luxe a Paris.",
      "Appointment calendar": "Calendrier de rendez-vous",
      "Select a time": "Choisir une heure",
      "Sunday dates are unavailable. The boutique team confirms every request before the appointment is final.": "Les dimanches ne sont pas disponibles. L'equipe confirme chaque demande avant la validation definitive.",
      "Appointment details": "Details du rendez-vous",
      "Tell us what you want to view.": "Dites-nous ce que vous souhaitez voir.",
      "Appointment Type": "Type de rendez-vous",
      "Private Collection Viewing": "Presentation privee de la collection",
      "Designer Handbag Consultation": "Consultation sacs de createur",
      "Consignment Consultation": "Consultation depot-vente",
      "Styling Appointment": "Rendez-vous styling",
      "Pieces or goals": "Pieces ou objectifs",
      "Confirm Booking Request": "Confirmer la demande",
      "Appointment types": "Types de rendez-vous",
      "Designed for buying, styling, and consignment.": "Concu pour acheter, styliser et deposer.",
      "Each appointment creates a higher-quality experience and helps the boutique prepare pieces that fit your brief.": "Chaque rendez-vous cree une experience plus qualitative et aide la boutique a preparer des pieces adaptees a votre demande.",
      "Buyer Appointment": "Rendez-vous achat",
      "View Chanel bags, Givenchy pieces, accessories, and jewelry with private guidance.": "Decouvrez sacs Chanel, pieces Givenchy, accessoires et bijoux avec un accompagnement prive.",
      "Styling Appointment": "Rendez-vous styling",
      "Build looks around rare vintage pieces, travel wardrobes, or event dressing.": "Construisez des looks autour de pieces vintage rares, garde-robes de voyage ou tenues d'evenement.",
      "Consignment Review": "Evaluation depot-vente",
      "Discuss potential resale pieces, condition notes, and boutique fit.": "Discutez des pieces a revendre, de leur etat et de leur adequation avec la boutique.",
      "Booking system and admin workflow ready.": "Systeme de rendez-vous et workflow admin prets.",
      "Back to top": "Retour en haut",
      "Contact Fashion Vintage Paris on WhatsApp": "Contacter Fashion Vintage Paris sur WhatsApp",
      "Open navigation menu": "Ouvrir le menu",
      "Close image preview": "Fermer l'aperçu image",
      "This field is required.": "Ce champ est obligatoire.",
      "Enter a valid email address.": "Saisissez une adresse e-mail valide.",
      "Enter a valid phone number.": "Saisissez un numero de telephone valide.",
      "Please review the highlighted fields.": "Veuillez verifier les champs surlignes.",
      "Message received. Our boutique team will respond shortly.": "Message recu. Notre equipe vous repondra rapidement.",
      "Message received. Fashion Vintage Paris will reply shortly.": "Message recu. Fashion Vintage Paris vous repondra rapidement.",
      "Added to wishlist.": "Ajoute a la wishlist.",
      "Removed from wishlist.": "Retire de la wishlist.",
      "Choose an appointment date and time.": "Choisissez une date et une heure.",
      "Please complete your booking details.": "Veuillez completer les details du rendez-vous.",
      "Appointment request confirmed.": "Demande de rendez-vous confirmee.",
      "Dark luxury mode enabled.": "Mode luxe sombre active.",
      "Light atelier mode enabled.": "Mode atelier clair active.",
      "French translation enabled.": "Traduction francaise activee.",
      "English translation enabled.": "Version anglaise activee.",
      "Sending...": "Envoi...",
      "Fashion Vintage Paris | Luxury Vintage Boutique in Paris": "Fashion Vintage Paris | Boutique vintage de luxe a Paris",
      "About | Fashion Vintage Paris": "A propos | Fashion Vintage Paris",
      "Collection | Fashion Vintage Paris": "Collection | Fashion Vintage Paris",
      "Gallery | Fashion Vintage Paris": "Galerie | Fashion Vintage Paris",
      "Reviews | Fashion Vintage Paris": "Avis | Fashion Vintage Paris",
      "Contact | Fashion Vintage Paris": "Contact | Fashion Vintage Paris",
      "Book Appointment | Fashion Vintage Paris": "Prendre rendez-vous | Fashion Vintage Paris"
    }
  };

  const currentLanguage = () => localStorage.getItem(storagePrefix + "language") || "fr";

  const translatePhrase = (text, lang = currentLanguage()) => {
    if (lang === "fr") return translations.fr[text] || text;
    return text;
  };

  const readStore = (key, fallback) => {
    try {
      const value = localStorage.getItem(storagePrefix + key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      return fallback;
    }
  };

  const writeStore = (key, value) => {
    try {
      localStorage.setItem(storagePrefix + key, JSON.stringify(value));
    } catch (error) {
      console.warn("Local storage is unavailable.", error);
    }
  };

  const showToast = (message) => {
    let toast = $(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }

    toast.textContent = translatePhrase(message);
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
  };

  const setButtonLoading = (button, isLoading, loadingText = "Sending...") => {
    if (!button) return;
    if (isLoading) {
      button.dataset.originalText = button.textContent;
      button.textContent = translatePhrase(loadingText);
      button.disabled = true;
    } else {
      button.textContent = button.dataset.originalText || button.textContent;
      button.disabled = false;
    }
  };

  const shouldIgnoreTranslation = (node) => {
    const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    return Boolean(element?.closest("script, style, noscript, svg, [data-i18n-ignore]"));
  };

  const translateAttributes = (lang) => {
    const attrs = ["aria-label", "title", "alt", "placeholder"];
    $$("*").forEach((element) => {
      if (shouldIgnoreTranslation(element)) return;
      attrs.forEach((attr) => {
        if (!element.hasAttribute(attr)) return;
        const storeAttr = `data-i18n-original-${attr}`;
        if (!element.hasAttribute(storeAttr)) element.setAttribute(storeAttr, element.getAttribute(attr));
        const original = element.getAttribute(storeAttr);
        element.setAttribute(attr, translatePhrase(original, lang));
      });
    });
  };

  const translateTextNodes = (lang) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim() || shouldIgnoreTranslation(node)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue.trim());
      const original = originalTextNodes.get(node);
      const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
      const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
      node.nodeValue = `${leading}${translatePhrase(original, lang)}${trailing}`;
    });
  };

  const applyLanguage = (lang) => {
    if (!document.documentElement.dataset.originalTitle) document.documentElement.dataset.originalTitle = document.title;
    document.title = translatePhrase(document.documentElement.dataset.originalTitle, lang);
    document.documentElement.lang = lang === "fr" ? "fr" : "en";
    document.documentElement.dataset.language = lang;
    translateTextNodes(lang);
    translateAttributes(lang);
    $$(".language-toggle").forEach((button) => {
      button.textContent = lang === "fr" ? "EN" : "FR";
      button.setAttribute("aria-label", lang === "fr" ? "Translate site to English" : "Traduire le site en francais");
      button.setAttribute("title", lang === "fr" ? "English" : "Francais");
    });
    window.dispatchEvent(new CustomEvent("fvp:languagechange", { detail: { lang } }));
  };

  const initLanguage = () => {
    const navActions = $(".nav-actions");
    if (navActions && !$(".language-toggle", navActions)) {
      const button = document.createElement("button");
      button.className = "language-toggle";
      button.type = "button";
      button.setAttribute("data-i18n-ignore", "true");
      navActions.insertBefore(button, $(".theme-toggle", navActions) || navActions.firstChild);
      button.addEventListener("click", () => {
        const next = currentLanguage() === "fr" ? "en" : "fr";
        localStorage.setItem(storagePrefix + "language", next);
        applyLanguage(next);
        showToast(next === "fr" ? "French translation enabled." : "English translation enabled.");
      });
    }

    applyLanguage(currentLanguage());
  };

  const initTheme = () => {
    const stored = localStorage.getItem(storagePrefix + "theme") || "dark";
    document.documentElement.dataset.theme = stored;

    $$(".theme-toggle").forEach((button) => {
      button.setAttribute("aria-label", stored === "dark" ? "Switch to light theme" : "Switch to dark theme");
      button.addEventListener("click", () => {
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        localStorage.setItem(storagePrefix + "theme", next);
        button.setAttribute("aria-label", next === "dark" ? "Switch to light theme" : "Switch to dark theme");
        showToast(next === "dark" ? "Dark luxury mode enabled." : "Light atelier mode enabled.");
      });
    });
  };

  const initNavigation = () => {
    const nav = $(".site-nav");
    const toggle = $(".nav-toggle");
    const links = $$(".nav-links a");
    const current = window.location.pathname.split("/").pop() || "index.html";

    const onScroll = () => {
      nav?.classList.toggle("is-scrolled", window.scrollY > 24);
      $(".back-to-top")?.classList.toggle("is-visible", window.scrollY > 520);
    };

    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      const target = href.split("#")[0] || "index.html";
      if (target === current) link.classList.add("is-active");
      link.addEventListener("click", () => {
        nav?.classList.remove("is-open");
        document.body.classList.remove("is-locked");
        toggle?.setAttribute("aria-expanded", "false");
      });
    });

    toggle?.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      document.body.classList.toggle("is-locked", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        nav?.classList.remove("is-open");
        document.body.classList.remove("is-locked");
        toggle?.setAttribute("aria-expanded", "false");
        closeLightbox();
      }
    });

    $(".back-to-top")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  const initParticles = () => {
    const field = $(".particle-field");
    if (!field || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const count = window.innerWidth < 480 ? 10 : window.innerWidth < 700 || lowPower ? 16 : 38;
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < count; index += 1) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * -12}s`;
      particle.style.animationDuration = `${9 + Math.random() * 10}s`;
      particle.style.setProperty("--drift", `${-40 + Math.random() * 80}px`);
      fragment.appendChild(particle);
    }
    field.appendChild(fragment);
  };

  const initReveal = () => {
    const revealItems = $$(".reveal");
    if (!revealItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  };

  const initCounters = () => {
    const counters = $$("[data-counter]");
    if (!counters.length) return;

    const animateCounter = (counter) => {
      const target = Number(counter.dataset.counter || "0");
      const decimals = Number(counter.dataset.decimals || "0");
      const suffix = counter.dataset.suffix || "";
      const prefix = counter.dataset.prefix || "";
      const duration = 1300;
      const startTime = performance.now();

      const tick = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        counter.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.45 }
    );

    counters.forEach((counter) => observer.observe(counter));
  };

  const initProductFiltering = () => {
    const buttons = $$(".filter-btn");
    const products = $$(".product-card[data-category]");
    if (!buttons.length || !products.length) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        products.forEach((product) => {
          const categories = (product.dataset.category || "").split(" ");
          product.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
        });
      });
    });
  };

  const initWishlist = () => {
    const saved = new Set(readStore("wishlist", []));
    $$(".wishlist").forEach((button) => {
      const id = button.dataset.productId || button.closest(".product-card")?.dataset.productId || crypto.randomUUID();
      button.dataset.productId = id;
      button.classList.toggle("is-active", saved.has(id));
      button.setAttribute("aria-pressed", String(saved.has(id)));

      button.addEventListener("click", () => {
        if (saved.has(id)) {
          saved.delete(id);
          showToast("Removed from wishlist.");
        } else {
          saved.add(id);
          showToast("Added to wishlist.");
        }
        button.classList.toggle("is-active", saved.has(id));
        button.setAttribute("aria-pressed", String(saved.has(id)));
        writeStore("wishlist", Array.from(saved));
      });
    });

    $$("[data-product-detail]").forEach((button) => {
      button.addEventListener("click", () => {
        const name = button.closest(".product-card")?.querySelector("h3")?.textContent || "This piece";
        showToast(
          currentLanguage() === "fr"
            ? `Les details de ${name} sont prets pour une consultation privee.`
            : `${name} details are ready for a private consultation.`
        );
      });
    });
  };

  const initTestimonials = () => {
    const shell = $(".review-shell");
    const track = $(".testimonial-track");
    const slides = $$(".review-card", track || document);
    const dots = $$(".testimonial-dots button");
    if (!shell || !track || !slides.length) return;

    let index = 0;
    let timer;
    let touchStartX = 0;
    let touchStartY = 0;

    const goTo = (next) => {
      index = (next + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === index);
        slide.setAttribute("aria-hidden", String(slideIndex !== index));
      });
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === index);
        dot.setAttribute("aria-selected", String(dotIndex === index));
      });
    };

    const start = () => {
      timer = window.setInterval(() => goTo(index + 1), 5200);
    };

    const stop = () => window.clearInterval(timer);

    dots.forEach((dot, dotIndex) => dot.addEventListener("click", () => goTo(dotIndex)));
    shell.addEventListener("mouseenter", stop);
    shell.addEventListener("mouseleave", start);
    shell.addEventListener("focusin", stop);
    shell.addEventListener("focusout", start);
    shell.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.changedTouches[0].clientX;
        touchStartY = event.changedTouches[0].clientY;
        stop();
      },
      { passive: true }
    );
    shell.addEventListener(
      "touchend",
      (event) => {
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        if (Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY)) {
          goTo(deltaX < 0 ? index + 1 : index - 1);
        }
        start();
      },
      { passive: true }
    );
    goTo(0);
    start();
  };

  let lightbox;

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
  };

  const initLightbox = () => {
    const triggers = $$("[data-lightbox]");
    if (!triggers.length) return;

    lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.innerHTML = `
      <button class="icon-button lightbox-close" type="button" aria-label="Close image preview">x</button>
      <img src="${imageFallback}" alt="Fashion Vintage Paris gallery preview" />
    `;
    document.body.appendChild(lightbox);

    const image = $("img", lightbox);
    $(".lightbox-close", lightbox).addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        image.src = trigger.dataset.full || trigger.querySelector("img")?.src || "";
        image.alt = trigger.dataset.caption || trigger.querySelector("img")?.alt || "Fashion Vintage Paris gallery image";
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("is-locked");
        $(".lightbox-close", lightbox).focus();
      });
    });
  };

  const validateForm = (form) => {
    let isValid = true;
    $$(".field", form).forEach((field) => {
      const input = $("input, textarea, select", field);
      const error = $(".field-error", field);
      if (!input) return;

      let message = "";
      if (input.required && !input.value.trim()) message = "This field is required.";
      if (input.type === "email" && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        message = "Enter a valid email address.";
      }
      if (input.type === "tel" && input.value && input.value.replace(/[^\d+]/g, "").length < 8) {
        message = "Enter a valid phone number.";
      }

      field.classList.toggle("has-error", Boolean(message));
      if (error) error.textContent = message;
      if (message) isValid = false;
    });
    return isValid;
  };

  const initForms = () => {
    $$(".luxury-form[data-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!validateForm(form)) {
          showToast("Please review the highlighted fields.");
          return;
        }

        const button = form.querySelector("button[type='submit']");
        setButtonLoading(button, true);
        window.setTimeout(() => {
          setButtonLoading(button, false);
          form.reset();
          showToast(form.dataset.success || "Message received. Our boutique team will respond shortly.");
        }, 720);
      });
    });
  };

  const initBooking = () => {
    const calendar = $("[data-calendar]");
    const monthLabel = $("[data-month-label]");
    const prev = $("[data-prev-month]");
    const next = $("[data-next-month]");
    const timeButtons = $$("[data-time]");
    const form = $("[data-booking-form]");
    const confirmation = $("[data-booking-confirmation]");
    if (!calendar || !monthLabel || !form) return;

    let viewDate = new Date();
    viewDate.setDate(1);
    let selectedDate = "";
    let selectedTime = "";

    const isoDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const render = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const year = viewDate.getFullYear();
      const month = viewDate.getMonth();
      const firstDay = new Date(year, month, 1);
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const startOffset = (firstDay.getDay() + 6) % 7;
      const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

      monthLabel.textContent = firstDay.toLocaleDateString(undefined, { month: "long", year: "numeric" });
      calendar.innerHTML = "";
      labels.forEach((label) => {
        const item = document.createElement("span");
        item.textContent = label;
        calendar.appendChild(item);
      });

      for (let blank = 0; blank < startOffset; blank += 1) {
        const spacer = document.createElement("span");
        spacer.setAttribute("aria-hidden", "true");
        calendar.appendChild(spacer);
      }

      for (let day = 1; day <= daysInMonth; day += 1) {
        const date = new Date(year, month, day);
        const button = document.createElement("button");
        const value = isoDate(date);
        button.type = "button";
        button.textContent = String(day);
        button.dataset.date = value;
        button.disabled = date < today || date.getDay() === 0;
        button.classList.toggle("is-selected", value === selectedDate);
        button.setAttribute("aria-label", `Select ${date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}`);
        button.addEventListener("click", () => {
          selectedDate = value;
          form.elements.date.value = value;
          render();
        });
        calendar.appendChild(button);
      }
    };

    prev?.addEventListener("click", () => {
      viewDate.setMonth(viewDate.getMonth() - 1);
      render();
    });

    next?.addEventListener("click", () => {
      viewDate.setMonth(viewDate.getMonth() + 1);
      render();
    });

    timeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        selectedTime = button.dataset.time;
        form.elements.time.value = selectedTime;
        timeButtons.forEach((item) => item.classList.toggle("is-selected", item === button));
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!selectedDate || !selectedTime) {
        showToast("Choose an appointment date and time.");
        return;
      }
      if (!validateForm(form)) {
        showToast("Please complete your booking details.");
        return;
      }

      const formData = new FormData(form);
      const bookings = readStore("bookings", []);
      bookings.unshift({
        id: `BKG-${Date.now()}`,
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        date: selectedDate,
        time: selectedTime,
        notes: formData.get("notes"),
        status: "pending",
        createdAt: new Date().toISOString()
      });
      writeStore("bookings", bookings);

      if (confirmation) {
        confirmation.textContent =
          currentLanguage() === "fr"
            ? `Votre demande de rendez-vous prive pour le ${selectedDate} a ${selectedTime} a bien ete recue.`
            : `Your private appointment request for ${selectedDate} at ${selectedTime} has been received.`;
        confirmation.classList.add("is-visible");
      }
      form.reset();
      selectedDate = "";
      selectedTime = "";
      timeButtons.forEach((item) => item.classList.remove("is-selected"));
      render();
      showToast("Appointment request confirmed.");
    });

    render();
  };

  const initLazyImages = () => {
    $$("img").forEach((image) => {
      const useFallback = () => {
        if (!image.src.includes("fashion-vintage-paris-shop")) {
          image.src = imageFallback;
        }
      };
      image.addEventListener("error", useFallback, { once: true });
      if (image.complete && image.naturalWidth === 0) useFallback();

      const isPriority = Boolean(image.closest(".hero, .sub-hero"));
      if (!image.hasAttribute("loading")) image.setAttribute("loading", isPriority ? "eager" : "lazy");
      if (!image.hasAttribute("decoding")) image.setAttribute("decoding", "async");
      if (isPriority) image.setAttribute("fetchpriority", "high");
      if (!image.hasAttribute("sizes")) {
        if (image.closest(".product-card")) {
          image.setAttribute("sizes", "(max-width: 360px) 100vw, (max-width: 900px) 50vw, 25vw");
        } else if (image.closest(".gallery-item, .instagram-tile")) {
          image.setAttribute("sizes", "(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw");
        } else if (image.closest(".media-panel")) {
          image.setAttribute("sizes", "(max-width: 900px) 100vw, 45vw");
        } else {
          image.setAttribute("sizes", "100vw");
        }
      }
    });
  };

  const initVivienne = () => {
    if ($(".vivienne-shell")) return;

    const copy = {
      fr: {
        nav: "Vivienne",
        open: "Ouvrir Vivienne",
        close: "Fermer Vivienne",
        title: "Vivienne",
        subtitle: "Concierge luxe privee",
        intro:
          "Bonjour, je suis Vivienne. Je peux vous guider sur la collection, les rendez-vous, l'adresse de la boutique et les pieces vintage de luxe.",
        placeholder: "Demandez a Vivienne...",
        send: "Envoyer",
        thinking: "Vivienne prepare une reponse...",
        voiceOn: "Voix activee",
        voiceOff: "Voix coupee",
        book: "Rendez-vous",
        chanel: "Sacs Chanel",
        address: "Adresse",
        whatsapp: "WhatsApp",
        error:
          "Je peux deja vous aider avec les informations de la boutique. Pour une demande tres specifique, contactez-nous aussi sur WhatsApp.",
        fallbackBooking:
          "Vous pouvez reserver un rendez-vous prive depuis la page Booking. Les horaires proposes sont 11:00, 12:30, 14:00, 15:30, 17:00 et 18:00, hors dimanche. La boutique confirme chaque demande.",
        fallbackProducts:
          "La selection presente Chanel Classic Flap 1997 a 6800 EUR, Chanel Chain Belt a 1650 EUR, Givenchy Evening Bag a 2450 EUR, Givenchy Structured Tote a 3200 EUR, Paris Silk Scarf Archive a 420 EUR, Art Deco Gold Earrings a 980 EUR, Rare Couture Jacket a 4900 EUR et Pearl Evening Set a 760 EUR.",
        fallbackVisit:
          "Fashion Vintage Paris se trouve au 15 Rue des Petits Champs, 75001 Paris, pres de Pyramides. Note publique: 4.6 etoiles sur 28 avis. Telephone: +33 6 61 98 49 86.",
        fallbackDefault:
          "Fashion Vintage Paris est une boutique vintage de luxe et depot-vente a Paris. Je peux vous aider a choisir une categorie, preparer un rendez-vous prive, trouver l'adresse ou contacter la boutique sur WhatsApp."
      },
      en: {
        nav: "Vivienne",
        open: "Open Vivienne",
        close: "Close Vivienne",
        title: "Vivienne",
        subtitle: "Private luxury concierge",
        intro:
          "Hello, I am Vivienne. I can guide you through the collection, appointments, the boutique address, and luxury vintage pieces.",
        placeholder: "Ask Vivienne...",
        send: "Send",
        thinking: "Vivienne is preparing a reply...",
        voiceOn: "Voice on",
        voiceOff: "Voice off",
        book: "Appointment",
        chanel: "Chanel bags",
        address: "Address",
        whatsapp: "WhatsApp",
        error:
          "I can still help with boutique information. For a very specific request, WhatsApp is also available.",
        fallbackBooking:
          "You can request a private appointment on the Booking page. Available times are 11:00, 12:30, 14:00, 15:30, 17:00, and 18:00, except Sundays. The boutique confirms every request.",
        fallbackProducts:
          "The featured edit includes Chanel Classic Flap 1997 at EUR 6,800, Chanel Chain Belt at EUR 1,650, Givenchy Evening Bag at EUR 2,450, Givenchy Structured Tote at EUR 3,200, Paris Silk Scarf Archive at EUR 420, Art Deco Gold Earrings at EUR 980, Rare Couture Jacket at EUR 4,900, and Pearl Evening Set at EUR 760.",
        fallbackVisit:
          "Fashion Vintage Paris is located at 15 Rue des Petits Champs, 75001 Paris, near Pyramides. Public rating: 4.6 stars across 28 reviews. Phone: +33 6 61 98 49 86.",
        fallbackDefault:
          "Fashion Vintage Paris is a luxury vintage boutique and consignment shop in Paris. I can help you choose a category, prepare a private appointment, find the address, or contact the boutique on WhatsApp."
      }
    };

    const getCopy = () => copy[currentLanguage()] || copy.fr;
    const history = [];
    const femaleVoiceHints = {
      fr: ["denise", "hortense", "audrey", "aurelie", "amelie", "chantal", "celine", "lea", "julie", "marie", "female", "woman"],
      en: [
        "jenny",
        "aria",
        "samantha",
        "victoria",
        "karen",
        "zira",
        "sonia",
        "susan",
        "eva",
        "emma",
        "olivia",
        "moira",
        "tessa",
        "allison",
        "ava",
        "serena",
        "shelley",
        "natasha",
        "joanna",
        "kendra",
        "kimberly",
        "salli",
        "amy",
        "linda",
        "female",
        "woman"
      ]
    };
    const maleVoiceHints = ["thomas", "daniel", "david", "george", "mark", "fred", "alex", "guy", "male", "man"];
    const preferredVoices = { fr: null, en: null };
    let voiceEnabled = Boolean(readStore("vivienne-voice", false));
    let isOpen = false;
    let isBusy = false;

    const shell = document.createElement("section");
    shell.className = "vivienne-shell";
    shell.setAttribute("data-i18n-ignore", "true");
    shell.setAttribute("aria-label", "Vivienne AI concierge");
    shell.innerHTML = `
      <button class="vivienne-launcher" type="button" aria-expanded="false">
        <span class="vivienne-orb" aria-hidden="true">V</span>
        <span class="vivienne-launcher-text"></span>
      </button>
      <div class="vivienne-panel" role="dialog" aria-modal="false" aria-hidden="true" aria-labelledby="vivienneTitle">
        <div class="vivienne-head">
          <div>
            <p class="vivienne-kicker"></p>
            <h2 id="vivienneTitle"></h2>
          </div>
          <div class="vivienne-head-actions">
            <button class="vivienne-voice" type="button"></button>
            <button class="icon-button vivienne-close" type="button"></button>
          </div>
        </div>
        <div class="vivienne-messages" role="log" aria-live="polite"></div>
        <div class="vivienne-prompts" aria-label="Suggested concierge prompts">
          <button type="button" data-vivienne-prompt="booking"></button>
          <button type="button" data-vivienne-prompt="chanel"></button>
          <button type="button" data-vivienne-prompt="address"></button>
          <a href="https://wa.me/33661984986" target="_blank" rel="noopener"></a>
        </div>
        <form class="vivienne-form">
          <label class="sr-only" for="vivienneInput">Ask Vivienne</label>
          <textarea id="vivienneInput" rows="1" maxlength="700"></textarea>
          <button class="btn btn-primary" type="submit"></button>
        </form>
      </div>
    `;
    document.body.appendChild(shell);

    const navActions = $(".nav-actions");
    if (navActions && !$(".vivienne-nav-button", navActions)) {
      const navButton = document.createElement("button");
      navButton.className = "vivienne-nav-button";
      navButton.type = "button";
      navButton.setAttribute("data-i18n-ignore", "true");
      navActions.insertBefore(navButton, $(".language-toggle", navActions) || $(".theme-toggle", navActions) || navActions.firstChild);
      navButton.addEventListener("click", () => setOpen(true));
    }

    const navButton = $(".vivienne-nav-button");
    const launcher = $(".vivienne-launcher", shell);
    const panel = $(".vivienne-panel", shell);
    const closeButton = $(".vivienne-close", shell);
    const voiceButton = $(".vivienne-voice", shell);
    const messages = $(".vivienne-messages", shell);
    const form = $(".vivienne-form", shell);
    const input = $("#vivienneInput", shell);
    const submitButton = $(".vivienne-form button", shell);
    const compactVivienneQuery = window.matchMedia("(max-width: 640px)");

    const syncVivienneLock = () => {
      document.body.classList.toggle("vivienne-open", isOpen && compactVivienneQuery.matches);
    };

    const addMessage = (role, text, options = {}) => {
      const item = document.createElement("div");
      item.className = `vivienne-message ${role}`;
      item.textContent = text;
      if (options.pending) item.dataset.pending = "true";
      messages.appendChild(item);
      messages.scrollTop = messages.scrollHeight;
      return item;
    };

    const cleanForSpeech = (text) => text.replace(/https?:\/\/\S+/g, "").replace(/\s+/g, " ").trim();

    const chooseVivienneVoice = () => {
      if (!("speechSynthesis" in window)) return null;
      const langKey = currentLanguage() === "fr" ? "fr" : "en";
      if (preferredVoices[langKey]) return preferredVoices[langKey];

      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return null;

      const targetPrefix = langKey === "fr" ? "fr" : "en";
      const exactLocale = langKey === "fr" ? "fr-fr" : "en-us";
      const hints = femaleVoiceHints[langKey];

      const ranked = voices
        .map((voice) => {
          const name = voice.name.toLowerCase();
          const locale = (voice.lang || "").toLowerCase();
          const isLocaleMatch = locale.startsWith(targetPrefix);
          const isExactLocale = locale === exactLocale;
          const hasFemaleHint = hints.some((hint) => name.includes(hint));
          const hasMaleHint = maleVoiceHints.some((hint) => name.includes(hint)) && !name.includes("female");
          let score = 0;
          if (isLocaleMatch) score += 60;
          if (isExactLocale) score += 20;
          if (hasFemaleHint) score += 100;
          if (voice.localService) score += 6;
          if (hasMaleHint) score -= 120;
          return { voice, score, hasFemaleHint, isLocaleMatch, hasMaleHint };
        })
        .sort((first, second) => second.score - first.score);

      const selected =
        ranked.find((item) => item.hasFemaleHint && item.isLocaleMatch)?.voice ||
        ranked.find((item) => item.hasFemaleHint)?.voice ||
        ranked.find((item) => item.isLocaleMatch && !item.hasMaleHint)?.voice ||
        null;

      preferredVoices[langKey] = selected;
      return selected;
    };

    const speak = (text) => {
      if (!voiceEnabled || !("speechSynthesis" in window) || !text) return;
      window.speechSynthesis.cancel();
      const langCode = currentLanguage() === "fr" ? "fr-FR" : "en-US";
      const voice = chooseVivienneVoice();
      const utterance = new SpeechSynthesisUtterance(cleanForSpeech(text));
      utterance.lang = voice?.lang || langCode;
      if (voice) utterance.voice = voice;
      utterance.rate = currentLanguage() === "fr" ? 0.9 : 0.92;
      utterance.pitch = voice ? 1.04 : 1.16;
      window.speechSynthesis.speak(utterance);
    };

    const updateLabels = () => {
      const c = getCopy();
      navButton && (navButton.textContent = c.nav);
      $(".vivienne-launcher-text", shell).textContent = c.nav;
      launcher.setAttribute("aria-label", c.open);
      $(".vivienne-kicker", shell).textContent = c.subtitle;
      $("#vivienneTitle", shell).textContent = c.title;
      closeButton.setAttribute("aria-label", c.close);
      closeButton.textContent = "x";
      voiceButton.textContent = voiceEnabled ? c.voiceOn : c.voiceOff;
      voiceButton.setAttribute("aria-pressed", String(voiceEnabled));
      input.placeholder = c.placeholder;
      submitButton.textContent = c.send;
      $("[data-vivienne-prompt='booking']", shell).textContent = c.book;
      $("[data-vivienne-prompt='chanel']", shell).textContent = c.chanel;
      $("[data-vivienne-prompt='address']", shell).textContent = c.address;
      $(".vivienne-prompts a", shell).textContent = c.whatsapp;
    };

    const localReply = (message) => {
      const text = message.toLowerCase();
      const c = getCopy();
      if (/book|booking|appointment|rendez|reservation|reserve/.test(text)) return c.fallbackBooking;
      if (/chanel|givenchy|bag|sac|collection|price|prix|jewel|bijou|scarf|foulard|piece|produit/.test(text)) return c.fallbackProducts;
      if (/address|adresse|where|ou|map|direction|phone|telephone|hours|horaire|open|ouvert|avis|review|rating/.test(text)) {
        return c.fallbackVisit;
      }
      return c.fallbackDefault;
    };

    const sendToVivienne = async (message) => {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 26000);
      try {
        const response = await fetch("/api/vivienne", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message,
            language: currentLanguage(),
            page: window.location.pathname.split("/").pop() || "index.html",
            history: history.slice(-8)
          }),
          signal: controller.signal
        });
        if (!response.ok) throw new Error("Vivienne endpoint unavailable.");
        const data = await response.json();
        return String(data.reply || "").trim() || localReply(message);
      } catch (error) {
        return localReply(message);
      } finally {
        window.clearTimeout(timeout);
      }
    };

    const submitMessage = async (rawMessage) => {
      const message = rawMessage.trim();
      if (!message || isBusy) return;

      const c = getCopy();
      isBusy = true;
      input.value = "";
      input.style.height = "";
      submitButton.disabled = true;
      addMessage("user", message);
      history.push({ role: "user", content: message });
      const pending = addMessage("assistant", c.thinking, { pending: true });

      const reply = await sendToVivienne(message);
      pending.textContent = reply;
      pending.removeAttribute("data-pending");
      history.push({ role: "assistant", content: reply });
      while (history.length > 10) history.shift();
      speak(reply);
      isBusy = false;
      submitButton.disabled = false;
      input.focus();
    };

    const setOpen = (next) => {
      isOpen = next;
      shell.classList.toggle("is-open", isOpen);
      launcher.setAttribute("aria-expanded", String(isOpen));
      panel.setAttribute("aria-hidden", String(!isOpen));
      syncVivienneLock();
      if (isOpen) {
        if (!messages.childElementCount) addMessage("assistant", getCopy().intro);
        window.setTimeout(() => input.focus(), 120);
      }
    };

    launcher.addEventListener("click", () => setOpen(!isOpen));
    closeButton.addEventListener("click", () => setOpen(false));
    voiceButton.addEventListener("click", () => {
      voiceEnabled = !voiceEnabled;
      writeStore("vivienne-voice", voiceEnabled);
      updateLabels();
      if (voiceEnabled) speak(getCopy().intro);
      else if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    });

    $$(".vivienne-prompts button", shell).forEach((button) => {
      button.addEventListener("click", () => {
        const kind = button.dataset.viviennePrompt;
        const prompts =
          currentLanguage() === "fr"
            ? {
                booking: "Comment prendre un rendez-vous prive ?",
                chanel: "Quels sacs Chanel sont disponibles ?",
                address: "Quelle est l'adresse de la boutique ?"
              }
            : {
                booking: "How can I book a private appointment?",
                chanel: "Which Chanel bags are available?",
                address: "What is the boutique address?"
              };
        submitMessage(prompts[kind] || button.textContent);
      });
    });

    input.addEventListener("input", () => {
      input.style.height = "auto";
      input.style.height = `${Math.min(input.scrollHeight, 132)}px`;
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        form.requestSubmit();
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitMessage(input.value);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen) setOpen(false);
    });

    if (compactVivienneQuery.addEventListener) {
      compactVivienneQuery.addEventListener("change", syncVivienneLock);
    } else {
      compactVivienneQuery.addListener(syncVivienneLock);
    }

    window.addEventListener("pagehide", () => document.body.classList.remove("vivienne-open"));

    if ("speechSynthesis" in window) {
      window.speechSynthesis.addEventListener("voiceschanged", () => {
        preferredVoices.fr = null;
        preferredVoices.en = null;
        chooseVivienneVoice();
      });
      chooseVivienneVoice();
    }

    window.addEventListener("fvp:languagechange", updateLabels);
    updateLabels();
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");
    const year = $("[data-year]");
    if (year) year.textContent = String(new Date().getFullYear());

    initTheme();
    initLanguage();
    initNavigation();
    initParticles();
    initReveal();
    initCounters();
    initProductFiltering();
    initWishlist();
    initTestimonials();
    initLightbox();
    initForms();
    initBooking();
    initVivienne();
    initLazyImages();
  });
})();
