/**
 * TaskNext.AI — i18n system for static marketing pages
 * Reads NEXT_LOCALE cookie (shared with Next.js app), applies FR/ES translations.
 * Brand names (TaskNext.AI, Ory, Higgsfield, Buffer, Hootsuite, Later, ChatGPT,
 * Instagram, X, LinkedIn, TikTok) stay in English. Prices stay in GBP.
 */
(function () {
  'use strict';

  /* ── cookie reader ── */
  function getCookie(name) {
    var m = document.cookie.match('(^|;)\\s*' + name + '=([^;]*)');
    return m ? decodeURIComponent(m[2]) : null;
  }

  /* ── set cookie (same domain, 1 year, SameSite=Lax) ── */
  function setCookie(name, val) {
    document.cookie = name + '=' + encodeURIComponent(val) +
      ';path=/;max-age=31536000;SameSite=Lax';
  }

  /* ── detect current language ── */
  function getLang() {
    // 1. query param override  ?lang=fr
    var params = new URLSearchParams(location.search);
    if (params.has('lang')) return params.get('lang');
    // 2. NEXT_LOCALE cookie
    var c = getCookie('NEXT_LOCALE');
    if (c) return c;
    // 3. default
    return 'en';
  }

  /* ── translation dictionaries ── */
  /* Keys = data-i18n attribute values.
     Each key maps to {fr, es} objects.
     English is the HTML source — no EN dict needed. */

  var T = {};

  // ============================
  // SHARED: Navigation (index)
  // ============================
  T['nav-story'] = {
    fr: 'Histoire',
    es: 'Historia'
  };
  T['nav-features'] = {
    fr: 'Fonctionnalites',
    es: 'Funciones'
  };
  T['nav-pricing'] = {
    fr: 'Tarifs',
    es: 'Precios'
  };
  T['nav-about'] = {
    fr: 'A propos',
    es: 'Nosotros'
  };
  T['nav-faq'] = {
    fr: 'FAQ',
    es: 'FAQ'
  };
  T['nav-founding'] = {
    fr: '✦ Fondateur',
    es: '✦ Fundador'
  };
  T['nav-spots'] = {
    fr: 'places fondateur restantes',
    es: 'plazas de fundador disponibles'
  };
  T['nav-spots-mobile'] = {
    fr: 'places fondateur restantes',
    es: 'plazas de fundador disponibles'
  };
  T['nav-lock'] = {
    fr: 'Verrouiller mon prix',
    es: 'Fijar mi precio'
  };

  // Mobile menu
  T['mob-story'] = {
    fr: 'Histoire',
    es: 'Historia'
  };
  T['mob-features'] = {
    fr: 'Fonctionnalites',
    es: 'Funciones'
  };
  T['mob-pricing'] = {
    fr: 'Tarifs',
    es: 'Precios'
  };
  T['mob-about'] = {
    fr: 'A propos',
    es: 'Nosotros'
  };
  T['mob-faq'] = {
    fr: 'FAQ',
    es: 'FAQ'
  };
  T['mob-founding'] = {
    fr: '✦ Fondateur — verrouillez votre prix',
    es: '✦ Fundador — fija tu precio'
  };
  T['mob-lock'] = {
    fr: 'Verrouiller mon prix fondateur',
    es: 'Fijar mi precio de fundador'
  };

  // ============================
  // HERO SECTION (index)
  // ============================
  T['hero-badge'] = {
    fr: "Acces anticipe — places fondateur ouvertes",
    es: "Acceso anticipado — plazas de fundador abiertas"
  };
  T['hero-h1'] = {
    fr: "Il etait une fois, vos reseaux sociaux etaient le <span class=\"gradient-text\">chaos</span>",
    es: "Erase una vez, tus redes sociales eran un <span class=\"gradient-text\">caos</span>"
  };
  T['hero-desc'] = {
    fr: "Ory est une IA vivante qui apprend la voix de votre marque, cree du contenu sur 4 plateformes, planifie tout pendant que vous dormez — et s'ameliore chaque mois.",
    es: "Ory es una IA viva que aprende la voz de tu marca, crea contenido en 4 plataformas, programa todo mientras duermes — y se vuelve mas inteligente cada mes."
  };
  T['hero-launched'] = {
    fr: "Nous avons lance en mars 2026 et nous grandissons chaque semaine. De vrais createurs utilisent deja Ory au quotidien. Rejoignez-nous tot et aidez a faconner ce qu'il deviendra.",
    es: "Lanzamos en marzo de 2026 y crecemos cada semana. Creadores reales ya usan Ory a diario. Unete pronto y ayuda a moldear lo que sera."
  };
  T['hero-cta-mobile'] = {
    fr: "Verrouillez votre prix — a partir de £3.50/mois fondateur",
    es: "Fija tu precio — desde £3.50/mes fundador"
  };
  T['hero-cta-desktop'] = {
    fr: "Reclamez votre prix fondateur — a partir de £3.50/mois fondateur pour toujours",
    es: "Reclama tu precio de fundador — desde £3.50/mes fundador para siempre"
  };
  T['hero-demo'] = {
    fr: "Voir Ory en action",
    es: "Ver Ory en accion"
  };
  T['hero-spots-line'] = {
    fr: "Les <span class=\"text-white/70 font-medium\">100</span> premieres places fondateur — rejoignez tot et verrouillez votre prix pour toujours",
    es: "Las primeras <span class=\"text-white/70 font-medium\">100</span> plazas de fundador — unete pronto y fija tu precio para siempre"
  };
  T['hero-trust-trial'] = {
    fr: "7 jours d'essai gratuit · Remboursement 30 jours",
    es: "7 dias de prueba gratis · Reembolso 30 dias"
  };
  T['hero-trust-tokens'] = {
    fr: "Credits IA inclus",
    es: "Creditos IA incluidos"
  };
  T['hero-trust-lang'] = {
    fr: "Ory ecrit en 35+ langues",
    es: "Ory escribe en 35+ idiomas"
  };

  // ============================
  // SOCIAL PROOF BAR
  // ============================
  T['social-joining'] = {
    fr: "Des membres fondateurs rejoignent chaque semaine",
    es: "Miembros fundadores se unen cada semana"
  };
  T['social-since'] = {
    fr: "Createurs, agences & marques independantes — depuis mars 2026",
    es: "Creadores, agencias y marcas independientes — desde marzo 2026"
  };
  T['social-spots'] = {
    fr: "97 places fondateur",
    es: "97 plazas de fundador"
  };
  T['social-shape'] = {
    fr: "soyez parmi les premiers a faconner Ory",
    es: "se de los primeros en moldear a Ory"
  };

  // ============================
  // PRODUCT PROOF SECTION
  // ============================
  T['proof-label'] = {
    fr: "Voyez par vous-meme",
    es: "Velo en accion"
  };
  T['proof-h2'] = {
    fr: "Voici a quoi cela <span class=\"gradient-text\">ressemble vraiment</span>",
    es: "Asi es como <span class=\"gradient-text\">se ve realmente</span>"
  };
  T['proof-desc'] = {
    fr: "Pas de maquettes, pas de promesses en l'air. C'est le vrai produit, en acces anticipe maintenant.",
    es: "Sin maquetas, sin promesas vacias. Este es el producto real, en acceso anticipado ahora."
  };
  T['proof-browser'] = {
    fr: "Ory Dashboard — Calendrier de contenu",
    es: "Ory Dashboard — Calendario de contenido"
  };
  T['proof-scheduled'] = {
    fr: "8 publications programmees cette semaine",
    es: "8 publicaciones programadas esta semana"
  };
  T['proof-approve'] = {
    fr: "Tout approuver &rarr;",
    es: "Aprobar todo &rarr;"
  };
  T['proof-calendar-note'] = {
    fr: "Votre calendrier de contenu — rempli automatiquement par Ory, approuve par vous",
    es: "Tu calendario de contenido — completado automaticamente por Ory, aprobado por ti"
  };
  T['proof-before-label'] = {
    fr: "Avant & Apres — Brand Brain",
    es: "Antes y Despues — Brand Brain"
  };
  T['proof-before-tag'] = {
    fr: "Avant Ory",
    es: "Antes de Ory"
  };
  T['proof-before-sub'] = {
    fr: "Sortie IA generique",
    es: "Resultado IA generico"
  };
  T['proof-after-tag'] = {
    fr: "Apres 2 semaines avec Ory",
    es: "Despues de 2 semanas con Ory"
  };
  T['proof-after-sub'] = {
    fr: "Brand Brain adapte",
    es: "Brand Brain adaptado"
  };
  T['proof-same'] = {
    fr: "Meme createur, meme sujet — Ory apprend <em>votre</em> voix au fil du temps",
    es: "Mismo creador, mismo tema — Ory aprende <em>tu</em> voz con el tiempo"
  };
  T['proof-posts'] = {
    fr: "2 publications",
    es: "2 publicaciones"
  };
  T['proof-1post'] = {
    fr: "1 publication",
    es: "1 publicacion"
  };
  T['proof-rest'] = {
    fr: "Jour de repos",
    es: "Dia de descanso"
  };

  // ============================
  // ORGANISM SECTION
  // ============================
  T['org-label'] = {
    fr: "Decouvrez Ory",
    es: "Conoce a Ory"
  };
  T['org-h2'] = {
    fr: "Pas un outil. <span class=\"gradient-text\">Un organisme vivant.</span>",
    es: "No es una herramienta. <span class=\"gradient-text\">Un organismo vivo.</span>"
  };
  T['org-desc'] = {
    fr: "Ory n'est pas un autre planificateur de contenu avec une couche de peinture. C'est une IA vivante qui grandit avec votre marque — chaque jour, chaque publication, chaque idee.",
    es: "Ory no es otro programador de contenido con una capa de pintura. Es una IA viva que crece con tu marca — cada dia, cada publicacion, cada idea."
  };
  T['org-breathes'] = {
    fr: "Respire",
    es: "Respira"
  };
  T['org-breathes-desc'] = {
    fr: "Mises a jour silencieuses. De nouvelles fonctionnalites apparaissent comme par magie — vous vous reveillez avec plus de puissance.",
    es: "Actualizaciones silenciosas. Nuevas funciones aparecen como por arte de magia — te despiertas con mas poder."
  };
  T['org-learns'] = {
    fr: "Apprend",
    es: "Aprende"
  };
  T['org-learns-desc'] = {
    fr: "Brand Brain absorbe votre ton. Chaque publication vous ressemble davantage — pas un bot generique.",
    es: "Brand Brain absorbe tu tono. Cada publicacion suena mas a ti — no a un bot generico."
  };
  T['org-heals'] = {
    fr: "Guerit",
    es: "Sana"
  };
  T['org-heals-desc'] = {
    fr: "Token expire ? Connexion perdue ? Ory repare silencieusement. Vous ne voyez jamais une publication cassee.",
    es: "Token expirado? Conexion perdida? Ory lo repara en silencio. Nunca veras una publicacion rota."
  };
  T['org-grows'] = {
    fr: "Grandit",
    es: "Crece"
  };
  T['org-grows-desc'] = {
    fr: "Des mises a jour d'intelligence mensuelles. Votre QI Ory augmente — pas grace aux mises a jour, mais parce qu'il vous apprend <em>vous</em>.",
    es: "Actualizaciones de inteligencia mensuales. Tu IQ de Ory sube — no por actualizaciones, sino porque aprende de <em>ti</em>."
  };

  // ============================
  // FEATURES SECTION
  // ============================
  T['feat-label'] = {
    fr: "Fait pour se repandre",
    es: "Hecho para difundirse"
  };
  T['feat-h2'] = {
    fr: "Fait pour etre <span class=\"gradient-text\">partage</span>",
    es: "Hecho para ser <span class=\"gradient-text\">compartido</span>"
  };
  T['feat-desc'] = {
    fr: "Ory ne fait pas que creer du contenu — il vous aide a construire une presence que les gens remarquent vraiment.",
    es: "Ory no solo crea contenido — te ayuda a construir una presencia que la gente realmente nota."
  };
  T['feat-iq-h3'] = {
    fr: "Votre Carte QI Organisme",
    es: "Tu Tarjeta IQ de Organismo"
  };
  T['feat-iq-desc'] = {
    fr: "Entrez votre email ou @pseudo pour obtenir votre carte Ory personnalisee. Votre vrai score QI est calcule et vous attend — il se deverrouille des que vous vous inscrivez.",
    es: "Ingresa tu email o @usuario para obtener tu tarjeta Ory personalizada. Tu puntaje IQ real esta calculado y esperandote — se desbloquea en cuanto te registres."
  };
  T['feat-iq-btn'] = {
    fr: "Generer",
    es: "Generar"
  };
  T['feat-iq-card-label'] = {
    fr: "Carte QI Organisme",
    es: "Tarjeta IQ de Organismo"
  };
  T['feat-iq-score-label'] = {
    fr: "QI Organisme",
    es: "IQ Organismo"
  };
  T['feat-iq-posts'] = {
    fr: "Publications",
    es: "Publicaciones"
  };
  T['feat-iq-growth'] = {
    fr: "Croissance",
    es: "Crecimiento"
  };
  T['feat-iq-streak'] = {
    fr: "Jours consecutifs",
    es: "Dias seguidos"
  };
  T['feat-iq-msg'] = {
    fr: "\"Votre organisme est pret a evoluer.\"",
    es: "\"Tu organismo esta listo para evolucionar.\""
  };
  T['feat-iq-unlock'] = {
    fr: "Deverrouillez mon vrai score — devenez membre fondateur",
    es: "Desbloquea mi puntaje real — hazte miembro fundador"
  };
  T['feat-ig-post'] = {
    fr: "Arretez de faire defiler 12 outils. Commencez a creer avec un seul organisme. Glissez --> pour voir comment Ory a change tout mon flux de travail.",
    es: "Deja de navegar entre 12 herramientas. Empieza a crear con un solo organismo. Desliza --> para ver como Ory cambio todo mi flujo de trabajo."
  };
  T['feat-x-post'] = {
    fr: "J'ai remplace Buffer + Canva + ChatGPT + Later + Hootsuite par un seul organisme IA a £9/mois. Voici ce qui s'est passe en 8 semaines :",
    es: "Reemplace Buffer + Canva + ChatGPT + Later + Hootsuite con un solo organismo IA de £9/mes. Esto es lo que paso en 8 semanas:"
  };
  T['feat-x-sub'] = {
    fr: "Debut de thread — formate automatiquement",
    es: "Inicio de hilo — formateado automaticamente"
  };
  T['feat-li-post'] = {
    fr: "L'economie des createurs a un probleme de burnout. Et si vos reseaux sociaux pouvaient se gerer eux-memes ? Pas avec un autre outil — avec un organisme IA vivant qui apprend, s'adapte et grandit avec votre marque.",
    es: "La economia de creadores tiene un problema de agotamiento. Y si tus redes sociales pudieran gestionarse solas? No con otra herramienta — con un organismo de IA vivo que aprende, se adapta y crece con tu marca."
  };
  T['feat-li-sub'] = {
    fr: "Leadership d'opinion — ton professionnel",
    es: "Liderazgo de opinion — tono profesional"
  };

  // ============================
  // COMPETITOR COMPARISON
  // ============================
  T['comp-label'] = {
    fr: "Comparaison honnete",
    es: "Comparacion honesta"
  };
  T['comp-h2'] = {
    fr: "Arretez de payer pour <span class=\"gradient-text\">5 outils</span>",
    es: "Deja de pagar por <span class=\"gradient-text\">5 herramientas</span>"
  };
  T['comp-desc'] = {
    fr: "Ory remplace votre redacteur de contenu, planificateur, generateur d'images, tableau de bord analytique et guide de marque — en un seul abonnement.",
    es: "Ory reemplaza tu redactor de contenido, programador, generador de imagenes, panel de analiticas y guia de marca — en una sola suscripcion."
  };
  T['comp-feature'] = { fr: "Fonctionnalite", es: "Funcion" };
  T['comp-captions'] = { fr: "Legendes IA", es: "Subtitulos IA" };
  T['comp-basic'] = { fr: "Basique", es: "Basico" };
  T['comp-manual'] = { fr: "Manuel", es: "Manual" };
  T['comp-col-manual'] = { fr: '<span class="hidden sm:inline">ChatGPT + </span>Manuel', es: '<span class="hidden sm:inline">ChatGPT + </span>Manual' };
  T['comp-imagegen'] = { fr: "Generation d'images", es: "Generacion de imagenes" };
  T['comp-extra'] = { fr: "Supplement", es: "Extra" };
  T['comp-videogen'] = { fr: "Generation de videos", es: "Generacion de videos" };
  T['comp-scheduling'] = { fr: "Planification", es: "Programacion" };
  T['comp-strategy'] = { fr: "Strategie", es: "Estrategia" };
  T['comp-repurposing'] = { fr: "Reutilisation", es: "Reutilizacion" };
  T['comp-smarter'] = { fr: "S'ameliore", es: "Se vuelve mas inteligente" };
  T['comp-price'] = { fr: "Prix", es: "Precio" };
  T['comp-enterprise'] = { fr: '<span class="hidden sm:inline">Entreprise</span><span class="sm:hidden">$$$</span>', es: '<span class="hidden sm:inline">Empresarial</span><span class="sm:hidden">$$$</span>' };
  T['comp-footnote'] = {
    fr: "Tarifs en date d'avril 2026. Les prix des concurrents correspondent a leur forfait paye le plus bas. Le prix Ory affiche est le tarif fondateur Starter (£3.50/mois), verrouille pour toujours.",
    es: "Precios a abril de 2026. Los precios de la competencia son para su plan de pago mas bajo. El precio de Ory mostrado es la tarifa fundador Starter (£3.50/mes), fijada para siempre."
  };

  // ============================
  // SECURITY & PRIVACY
  // ============================
  T['sec-label'] = {
    fr: "Votre contenu, vos regles",
    es: "Tu contenido, tus reglas"
  };
  T['sec-h2'] = {
    fr: "Votre contenu reste <span class=\"gradient-text\">le votre. Toujours.</span>",
    es: "Tu contenido sigue siendo <span class=\"gradient-text\">tuyo. Siempre.</span>"
  };
  T['sec-desc'] = {
    fr: "Nous prenons cela au serieux. Voici exactement comment nous traitons vos donnees, votre contenu et votre vie privee.",
    es: "Nos tomamos esto en serio. Asi es exactamente como manejamos tus datos, tu contenido y tu privacidad."
  };
  T['sec-train-h'] = {
    fr: "Nous ne nous entrainons jamais sur votre contenu",
    es: "Nunca entrenamos con tu contenido"
  };
  T['sec-train-p'] = {
    fr: "Vos publications, votre voix de marque, vos donnees — tout est a vous. Nous ne les utilisons pas pour entrainer des modeles. Point final.",
    es: "Tus publicaciones, tu voz de marca, tus datos — todo es tuyo. No los usamos para entrenar modelos. Punto."
  };
  T['sec-own-h'] = {
    fr: "Vous possedez 100% de tout",
    es: "Eres dueno del 100% de todo"
  };
  T['sec-own-p'] = {
    fr: "Chaque legende, image et strategie creee par Ory — tout est a vous, pour toujours. Pleins droits commerciaux, sans conditions.",
    es: "Cada subtitulo, imagen y estrategia que Ory crea — todo es tuyo, para siempre. Derechos comerciales completos, sin condiciones."
  };
  T['sec-gdpr-h'] = {
    fr: "Conforme au RGPD",
    es: "Compatible con RGPD"
  };
  T['sec-gdpr-p'] = {
    fr: "Construit a Londres, pret pour le RGPD des le premier jour. Chiffrement des donnees au repos et en transit. Certification SOC 2 en cours.",
    es: "Construido en Londres, listo para RGPD desde el primer dia. Cifrado de datos en reposo y en transito. Certificacion SOC 2 en progreso."
  };
  T['sec-oauth-h'] = {
    fr: "OAuth uniquement — aucun mot de passe stocke",
    es: "Solo OAuth — sin contrasenas almacenadas"
  };
  T['sec-oauth-p'] = {
    fr: "Connectez vos comptes sociaux via OAuth officiel. Nous ne voyons et ne stockons jamais vos mots de passe.",
    es: "Conecta tus cuentas sociales via OAuth oficial. Nunca vemos ni almacenamos tus contrasenas."
  };

  // ============================
  // BE ONE OF THE FIRST
  // ============================
  T['first-label'] = {
    fr: "Soyez parmi les premiers",
    es: "Se de los primeros"
  };
  T['first-h2'] = {
    fr: "Aidez a faconner ce que <span class=\"gradient-text\">Ory deviendra</span>",
    es: "Ayuda a moldear lo que <span class=\"gradient-text\">Ory sera</span>"
  };
  T['first-desc'] = {
    fr: "Nous cherchons nos 100 premiers membres fondateurs. Acces direct a Jesse, influence sur la roadmap, et un prix qui n'augmente jamais.",
    es: "Buscamos a nuestros primeros 100 miembros fundadores. Acceso directo a Jesse, influencia en la hoja de ruta, y un precio que nunca sube."
  };
  T['first-access-h'] = {
    fr: "Acces direct au fondateur",
    es: "Acceso directo al fundador"
  };
  T['first-access-p'] = {
    fr: "Chaque membre fondateur recoit un message personnel de Jesse dans les 24 heures. Une vraie conversation, pas un modele.",
    es: "Cada miembro fundador recibe un mensaje personal de Jesse en 24 horas. Una conversacion real, no una plantilla."
  };
  T['first-roadmap-h'] = {
    fr: "Faconnez la roadmap",
    es: "Moldea la hoja de ruta"
  };
  T['first-roadmap-p'] = {
    fr: "Votez pour des fonctionnalites, demandez des integrations et voyez vos idees se concretiser. Les membres fondateurs obtiennent l'acces en premier a chaque nouvelle version.",
    es: "Vota por funciones, solicita integraciones y ve tus ideas hacerse realidad. Los miembros fundadores obtienen acceso primero a cada nueva version."
  };
  T['first-locked-h'] = {
    fr: "Prix verrouille pour toujours",
    es: "Precio fijado para siempre"
  };
  T['first-locked-p'] = {
    fr: "Votre tarif fondateur ne change jamais — meme si nous triplons nos prix plus tard. C'est notre merci pour avoir cru en nous tot.",
    es: "Tu tarifa de fundador nunca cambia — aunque tripliquemos los precios despues. Es nuestro agradecimiento por creer temprano."
  };
  T['first-credits-h'] = {
    fr: "Nom dans les credits",
    es: "Nombre en los creditos"
  };
  T['first-credits-p'] = {
    fr: "Liste sur tasknextai.one/founders de facon permanente — sauf si vous choisissez de ne pas y figurer.",
    es: "Apareces en tasknextai.one/founders de forma permanente — a menos que elijas no hacerlo."
  };

  // ============================
  // PRICING SECTION (index)
  // ============================
  T['price-label'] = {
    fr: "Tarification simple et honnete",
    es: "Precios simples y honestos"
  };
  T['price-h2'] = {
    fr: "Verrouillez votre <span class=\"gradient-text\">prix fondateur pour toujours</span>",
    es: "Fija tu <span class=\"gradient-text\">precio de fundador para siempre</span>"
  };
  T['price-desc'] = {
    fr: "Pas de frais caches. Pas de surprises. Annulez a tout moment. Votre prix fondateur reste verrouille meme si vous faites une pause et revenez.",
    es: "Sin cargos ocultos. Sin sorpresas. Cancela cuando quieras. Tu precio de fundador se mantiene fijado aunque hagas una pausa y regreses."
  };
  T['price-spots-remaining'] = {
    fr: "places fondateur restantes",
    es: "plazas de fundador disponibles"
  };
  T['price-monthly'] = {
    fr: "Mensuel",
    es: "Mensual"
  };
  T['price-annual'] = {
    fr: "Annuel",
    es: "Anual"
  };
  T['price-save-months'] = {
    fr: "Economisez 2 mois",
    es: "Ahorra 2 meses"
  };

  // Starter
  T['price-starter-label'] = { fr: "Starter", es: "Starter" };
  T['price-starter-sub'] = { fr: "Createurs solo", es: "Creadores individuales" };
  T['price-period-mo'] = { fr: "/mois pour toujours", es: "/mes para siempre" };
  T['price-period-yr'] = { fr: "/an pour toujours", es: "/ano para siempre" };
  T['price-starter-f1'] = { fr: "2 comptes sociaux", es: "2 cuentas sociales" };
  T['price-starter-f2'] = { fr: "30 publications par mois", es: "30 publicaciones al mes" };
  T['price-starter-f3'] = { fr: "25 000 credits IA/mois", es: "25.000 creditos IA/mes" };
  T['price-starter-f4'] = { fr: "Chat IA", es: "Chat IA" };
  T['price-starter-f5'] = { fr: "Analytique de base", es: "Analiticas basicas" };
  T['price-starter-cta'] = { fr: "Commencer a creer", es: "Empieza a crear" };

  // Growth
  T['price-growth-badge'] = { fr: "Le plus populaire", es: "Mas popular" };
  T['price-growth-label'] = { fr: "Growth", es: "Growth" };
  T['price-growth-sub'] = { fr: "Createurs serieux & entreprises", es: "Creadores serios y negocios" };
  T['price-growth-f1'] = { fr: "5 comptes sociaux", es: "5 cuentas sociales" };
  T['price-growth-f2'] = { fr: "90 publications par mois", es: "90 publicaciones al mes" };
  T['price-growth-f3'] = { fr: "100 000 credits IA/mois", es: "100.000 creditos IA/mes" };
  T['price-growth-f4'] = { fr: "Chat + agents de contenu", es: "Chat + agentes de contenido" };
  T['price-growth-f5'] = { fr: "Brand Brain", es: "Brand Brain" };
  T['price-growth-f6'] = { fr: "Calendrier de contenu 90 jours", es: "Calendario de contenido 90 dias" };
  T['price-growth-cta'] = { fr: "Verrouiller ce prix", es: "Fijar este precio" };

  // Pro
  T['price-pro-label'] = { fr: "Pro", es: "Pro" };
  T['price-pro-sub'] = { fr: "Equipes & agences", es: "Equipos y agencias" };
  T['price-pro-f1'] = { fr: "8 comptes connectes", es: "8 cuentas conectadas" };
  T['price-pro-f2'] = { fr: "Publications illimitees", es: "Publicaciones ilimitadas" };
  T['price-pro-f3'] = { fr: "300 000 credits IA/mois", es: "300.000 creditos IA/mes" };
  T['price-pro-f4'] = { fr: "Les 3 agents IA", es: "Los 3 agentes IA" };
  T['price-pro-f5'] = { fr: "Competitor Spy", es: "Competitor Spy" };
  T['price-pro-f6'] = { fr: "Marque blanche + support prioritaire", es: "Marca blanca + soporte prioritario" };
  T['price-pro-cta'] = { fr: "Passer Pro", es: "Ser Pro" };

  // Unlimited
  T['price-unlimited-label'] = { fr: "Unlimited", es: "Unlimited" };
  T['price-unlimited-sub'] = { fr: "Power users & studios", es: "Power users y estudios" };
  T['price-unlimited-f1'] = { fr: "10 comptes connectes", es: "10 cuentas conectadas" };
  T['price-unlimited-f2'] = { fr: "Publications illimitees", es: "Publicaciones ilimitadas" };
  T['price-unlimited-f3'] = { fr: "Tokens IA illimites", es: "Tokens IA ilimitados" };
  T['price-unlimited-f4'] = { fr: "Tout dans Pro", es: "Todo en Pro" };
  T['price-unlimited-f5'] = { fr: "Onboarding dedie", es: "Onboarding dedicado" };
  T['price-unlimited-f6'] = { fr: "Acces direct au fondateur", es: "Acceso directo al fundador" };
  T['price-unlimited-cta'] = { fr: "Passer Unlimited", es: "Ser Unlimited" };

  // Guarantee
  T['price-guarantee-h'] = {
    fr: "7 jours d'essai gratuit · Garantie de remboursement 30 jours",
    es: "7 dias de prueba gratis · Garantia de devolucion 30 dias"
  };
  T['price-guarantee-p'] = {
    fr: "Essayez Ory gratuitement pendant 7 jours. Si ce n'est pas pour vous dans les 30 jours suivant le premier paiement, envoyez-nous un email et nous rembourserons chaque centime. Sans questions, sans drame.",
    es: "Prueba Ory gratis durante 7 dias. Si no es para ti en los 30 dias siguientes al primer cobro, envianos un email y te reembolsaremos cada centimo. Sin preguntas, sin dramas."
  };

  // ============================
  // OUR STORY / FOUNDER
  // ============================
  T['story-label'] = {
    fr: "Notre histoire",
    es: "Nuestra historia"
  };
  T['story-building'] = {
    fr: "Construction en public",
    es: "Construyendo en publico"
  };
  T['story-h2'] = {
    fr: "Salut, je suis Jesse. J'ai construit ceci parce que j'en avais besoin.",
    es: "Hola, soy Jesse. Construi esto porque lo necesitaba."
  };
  T['story-p1'] = {
    fr: "J'etais nul pour suivre les reseaux sociaux. Ecrire des legendes a minuit, copier-coller la meme chose sur cinq applis — je detestais chaque minute.",
    es: "Era malo para mantener las redes sociales. Escribir subtitulos a medianoche, copiar y pegar lo mismo en cinco apps — odiaba cada minuto."
  };
  T['story-p2'] = {
    fr: "Alors j'ai construit un outil pour gerer ca. Je lui ai donne une personnalite. Et j'ai pense que d'autres en auraient besoin aussi.",
    es: "Asi que construi una herramienta para manejarlo. Le di personalidad. Y pense que otras personas podrian necesitar lo mismo."
  };
  T['story-p3'] = {
    fr: "C'est encore le debut. Mais ca marche — et ca travaille tout seul pour s'ameliorer.",
    es: "Todavia es temprano. Pero funciona — y trabaja solo para mejorar."
  };
  T['story-founder'] = { fr: "Jesse · Fondateur", es: "Jesse · Fundador" };
  T['story-company'] = { fr: "TaskNext AI Ltd", es: "TaskNext AI Ltd" };
  T['story-location'] = { fr: "Londres, Angleterre", es: "Londres, Inglaterra" };
  T['story-launched'] = { fr: "Lance en mars 2026", es: "Lanzado en marzo 2026" };

  // ============================
  // FAQ SECTION (index)
  // ============================
  T['faq-label'] = { fr: "Questions ?", es: "Preguntas?" };
  T['faq-h2'] = {
    fr: "Ory a des <span class=\"gradient-text\">reponses</span>",
    es: "Ory tiene <span class=\"gradient-text\">respuestas</span>"
  };
  T['faq1-q'] = { fr: "Qu'est-ce qu'Ory exactement ?", es: "Que es Ory exactamente?" };
  T['faq1-a'] = {
    fr: "Ory est votre compagnon IA pour les reseaux sociaux — pas un outil, pas un planificateur, pas un chatbot. C'est un organisme IA vivant qui apprend la voix de votre marque, cree du contenu sur jusqu'a 4 plateformes, planifie tout automatiquement et s'ameliore chaque mois. Pensez-y comme un ami brillant qui est aussi incroyable en reseaux sociaux.",
    es: "Ory es tu companero de IA para redes sociales — no una herramienta, no un programador, no un chatbot. Es un organismo de IA vivo que aprende la voz de tu marca, crea contenido en hasta 4 plataformas, programa todo automaticamente y se vuelve mas inteligente cada mes. Piensalo como un amigo brillante que tambien es increible en redes sociales."
  };
  T['faq2-q'] = { fr: "Que signifie \"prix fondateur pour toujours\" ?", es: "Que significa \"precio de fundador para siempre\"?" };
  T['faq2-a'] = {
    fr: "Exactement ce que ca dit. Le prix que vous verrouillez maintenant (£3.50, £19, £37 ou £79/mois) reste le votre pour toujours — meme si nous augmentons les prix plus tard. Meme si vous annulez et revenez des mois plus tard, votre tarif fondateur vous attend. C'est notre merci pour avoir cru en nous tot.",
    es: "Exactamente lo que dice. El precio que fijas ahora (£3.50, £19, £37 o £79/mes) es tuyo para siempre — aunque subamos los precios despues. Aunque canceles y regreses meses despues, tu tarifa de fundador te espera. Es nuestro agradecimiento por creer en nosotros pronto."
  };
  T['faq3-q'] = { fr: "Le contenu d'Ory ressemblera-t-il vraiment a moi ?", es: "El contenido de Ory realmente sonara como yo?" };
  T['faq3-a'] = {
    fr: "Oui — et ca s'ameliore avec le temps. Brand Brain analyse votre contenu existant, votre ton, votre vocabulaire et votre style. Apres environ 10-15 publications, la plupart des createurs disent que le contenu est presque indiscernable de ce qu'ils ecriraient eux-memes. Vous avez toujours l'approbation finale avant que quoi que ce soit ne soit publie.",
    es: "Si — y mejora con el tiempo. Brand Brain analiza tu contenido existente, tu tono, tu vocabulario y tu estilo. Despues de unas 10-15 publicaciones, la mayoria de los creadores dicen que el contenido es casi indistinguible de lo que ellos mismos escribirian. Siempre tienes la aprobacion final antes de que algo se publique."
  };
  T['faq4-q'] = { fr: "Mes donnees sont-elles en securite ? Qui possede ce qu'Ory cree ?", es: "Estan seguros mis datos? Quien es dueno de lo que Ory crea?" };
  T['faq4-a'] = {
    fr: "Vous possedez 100% de tout ce qu'Ory cree — pleins droits commerciaux, sans conditions. Nous n'entrainons jamais nos modeles sur votre contenu. Nous utilisons OAuth pour les connexions sociales (sans jamais stocker vos mots de passe), chiffrons toutes les donnees au repos et en transit, et sommes conformes au RGPD des le premier jour. Nous poursuivons egalement la certification SOC 2.",
    es: "Eres dueno del 100% de todo lo que Ory crea — derechos comerciales completos, sin condiciones. Nunca entrenamos nuestros modelos con tu contenido. Usamos OAuth para las conexiones sociales (sin almacenar tus contrasenas), ciframos todos los datos en reposo y en transito, y cumplimos con RGPD desde el primer dia. Tambien estamos buscando la certificacion SOC 2."
  };
  T['faq5-q'] = { fr: "Puis-je annuler a tout moment ?", es: "Puedo cancelar en cualquier momento?" };
  T['faq5-a'] = {
    fr: "Absolument. Annulez en un clic depuis votre tableau de bord — pas d'appels telephoniques, pas de culpabilisation. Vous beneficiez d'un essai gratuit de 7 jours plus d'une garantie de remboursement de 30 jours apres le premier paiement. Si Ory ne vous convient pas, envoyez-nous un email et nous rembourserons chaque centime.",
    es: "Absolutamente. Cancela con un clic desde tu panel — sin llamadas, sin culpas. Tienes una prueba gratis de 7 dias mas una garantia de devolucion de 30 dias despues del primer cobro. Si Ory no es para ti, envianos un email y te reembolsaremos cada centimo."
  };
  T['faq6-q'] = { fr: "Quelles plateformes Ory prend-il en charge ?", es: "Que plataformas soporta Ory?" };
  T['faq6-a'] = {
    fr: "Instagram, X (Twitter), LinkedIn et TikTok. Chaque plateforme recoit du contenu adapte a son format, son ton et les attentes de son audience — pas du copier-coller. Facebook, Threads et d'autres plateformes sont sur notre feuille de route selon les demandes des membres fondateurs.",
    es: "Instagram, X (Twitter), LinkedIn y TikTok. Cada plataforma recibe contenido adaptado a su formato, tono y expectativas de audiencia — no es copiar y pegar. Facebook, Threads y mas plataformas estan en nuestra hoja de ruta segun las solicitudes de los miembros fundadores."
  };
  T['faq7-q'] = { fr: "Qui est derriere TaskNext.AI ?", es: "Quien esta detras de TaskNext.AI?" };
  T['faq7-a'] = {
    fr: "TaskNext AI Ltd est une societe enregistree a Londres, en Angleterre, fondee par Jesse. Nous sommes une petite equipe independante qui construit Ory de maniere honnete — sans pression de VC, sans croissance a tout prix. Juste un groupe de createurs qui construisent l'outil qu'ils ont toujours souhaite. Vous pouvez nous contacter a tout moment a hello@tasknextai.one.",
    es: "TaskNext AI Ltd es una empresa registrada en Londres, Inglaterra, fundada por Jesse. Somos un equipo pequeno e independiente que construye Ory de forma honesta — sin presion de VCs, sin crecimiento a toda costa. Solo un grupo de creadores construyendo la herramienta que siempre desearon. Puedes contactarnos en cualquier momento en hello@tasknextai.one."
  };

  // ============================
  // FINAL CTA (index)
  // ============================
  T['final-h2'] = {
    fr: "Vos reseaux sociaux meritent un <span class=\"gradient-text\">organisme</span>, pas un autre outil",
    es: "Tus redes sociales merecen un <span class=\"gradient-text\">organismo</span>, no otra herramienta"
  };
  T['final-desc'] = {
    fr: "Les membres fondateurs beneficient de prix verrouilles, d'un acces direct a l'equipe et d'une voix dans ce que nous construisons ensuite. Venez construire avec nous.",
    es: "Los miembros fundadores obtienen precios fijados, acceso directo al equipo y voz en lo que construimos despues. Ven a construir con nosotros."
  };
  T['final-cta'] = {
    fr: "Reclamez votre place fondateur",
    es: "Reclama tu plaza de fundador"
  };
  T['final-spots'] = {
    fr: "places restantes · 7 jours d'essai gratuit · Remboursement 30 jours · Annulez a tout moment",
    es: "plazas restantes · 7 dias de prueba gratis · Reembolso 30 dias · Cancela cuando quieras"
  };

  // ============================
  // FOOTER (index)
  // ============================
  T['footer-product'] = { fr: "Produit", es: "Producto" };
  T['footer-features'] = { fr: "Fonctionnalites", es: "Funciones" };
  T['footer-pricing'] = { fr: "Tarifs", es: "Precios" };
  T['footer-faq'] = { fr: "FAQ", es: "FAQ" };
  T['footer-our-story'] = { fr: "Notre histoire", es: "Nuestra historia" };
  T['footer-company'] = { fr: "Entreprise", es: "Empresa" };
  T['footer-privacy'] = { fr: "Politique de confidentialite", es: "Politica de privacidad" };
  T['footer-terms'] = { fr: "Conditions generales", es: "Terminos y condiciones" };
  T['footer-tagline'] = {
    fr: "L'organisme IA vivant pour les createurs qui preferent creer que planifier. Construit avec amour a Londres.",
    es: "El organismo de IA vivo para creadores que prefieren crear que programar. Construido con amor en Londres."
  };
  T['footer-gdpr'] = {
    fr: "Conforme RGPD · SOC 2 en cours · OAuth uniquement",
    es: "Compatible RGPD · SOC 2 en progreso · Solo OAuth"
  };
  T['footer-updates'] = { fr: "Recevez les mises a jour :", es: "Recibe actualizaciones:" };
  T['footer-subscribe'] = { fr: "S'abonner", es: "Suscribirse" };
  T['footer-subscribed'] = { fr: "Vous etes inscrit !", es: "Estas en la lista!" };
  T['footer-copyright'] = {
    fr: "\u00a9 2026 TaskNext AI Ltd. Tous droits reserves. Societe enregistree en Angleterre.",
    es: "\u00a9 2026 TaskNext AI Ltd. Todos los derechos reservados. Empresa registrada en Inglaterra."
  };
  T['footer-systems'] = { fr: "Tous les systemes operationnels", es: "Todos los sistemas operativos" };
  T['footer-built'] = { fr: "Construit avec amour a Londres", es: "Construido con amor en Londres" };

  // ============================
  // EXIT INTENT
  // ============================
  T['exit-h3'] = {
    fr: "Attendez — Ory a calcule votre score",
    es: "Espera — Ory calculo tu puntaje"
  };
  T['exit-desc'] = {
    fr: "Entrez votre email pour sauvegarder votre QI Organisme et obtenez <span class=\"text-mint-400 font-semibold\">500 credits IA bonus</span> a l'inscription.",
    es: "Ingresa tu email para guardar tu IQ de Organismo y obtener <span class=\"text-mint-400 font-semibold\">500 creditos IA bonus</span> al registrarte."
  };
  T['exit-btn'] = {
    fr: "Sauvegarder mon score + obtenir 500 credits",
    es: "Guardar mi puntaje + obtener 500 creditos"
  };
  T['exit-nospam'] = {
    fr: "Pas de spam. Desabonnez-vous a tout moment.",
    es: "Sin spam. Cancela en cualquier momento."
  };
  T['exit-success-msg'] = { fr: "Vous etes inscrit !", es: "Estas en la lista!" };
  T['exit-success-desc'] = {
    fr: "Vos credits bonus vous attendent. Inscrivez-vous pour les reclamer.",
    es: "Tus creditos bonus te esperan. Registrate para reclamarlos."
  };
  T['exit-success-cta'] = {
    fr: "Reclamer ma place fondateur",
    es: "Reclamar mi plaza de fundador"
  };

  // ============================
  // STICKY CTA
  // ============================
  T['sticky-cta-text'] = {
    fr: "Verrouiller mon prix fondateur — a partir de £3.50/mois",
    es: "Fijar mi precio fundador — desde £3.50/mes"
  };
  T['sticky-cta-spots'] = {
    fr: "(97 places fondateur)",
    es: "(97 plazas de fundador)"
  };

  // ============================
  // COOKIE CONSENT
  // ============================
  T['cookie-text'] = {
    fr: "Nous utilisons uniquement des cookies essentiels — pour l'authentification et la gestion de session. Pas de suivi, pas de publicite.",
    es: "Solo usamos cookies esenciales — para autenticacion y gestion de sesion. Sin rastreo, sin anuncios."
  };
  T['cookie-btn'] = { fr: "Compris", es: "Entendido" };

  // ============================
  // PRIVACY MODAL
  // ============================
  T['modal-privacy-h'] = { fr: "Politique de confidentialite", es: "Politica de privacidad" };
  T['modal-terms-h'] = { fr: "Conditions generales", es: "Terminos y condiciones" };

  // =========================================================
  // FOUNDING PAGE TRANSLATIONS
  // =========================================================
  T['f-nav-signin'] = { fr: "Se connecter", es: "Iniciar sesion" };
  T['f-nav-cta'] = { fr: "Reclamer fondateur \u2192", es: "Reclamar fundador \u2192" };

  T['f-badge'] = {
    fr: "membre fondateur · limite aux 100 premiers",
    es: "miembro fundador · limitado a los primeros 100"
  };
  T['f-h1'] = {
    fr: "IA reseaux sociaux pour des cerveaux qui fonctionnent differemment.",
    es: "IA de redes sociales para cerebros que funcionan diferente."
  };
  T['f-hero-sub'] = {
    fr: "Arretez d'abandonner vos calendriers de contenu. TaskNext.AI ecrit avec votre voix, planifie les publications et ne vous harcele jamais — concu pour le stress, le chaos et les journees a 47 onglets.",
    es: "Deja de abandonar calendarios de contenido. TaskNext.AI escribe con tu voz, programa publicaciones y nunca te molesta — disenado para el estres, el caos y los dias de 47 pestanas."
  };
  T['f-hero-platforms'] = {
    fr: "<strong>Instagram · TikTok · LinkedIn · X</strong> — un seul endroit, votre voix, zero burnout.",
    es: "<strong>Instagram · TikTok · LinkedIn · X</strong> — un solo lugar, tu voz, cero agotamiento."
  };
  T['f-hero-tiers'] = {
    fr: "\u2193 Prix fondateur Starter ci-dessous · les 4 niveaux disponibles",
    es: "\u2193 Precio fundador Starter abajo · los 4 niveles disponibles"
  };

  T['f-ory-quote'] = {
    fr: "tu n'es pas en retard. tu es juste fatigue.<br>c'est un probleme different.",
    es: "no estas atrasado. solo estas cansado.<br>ese es un problema diferente."
  };
  T['f-ory-sig'] = {
    fr: "— Ory, votre compagnon TaskNext.AI",
    es: "— Ory, tu companero de TaskNext.AI"
  };

  T['f-price-label'] = {
    fr: "Plan Starter · prix fondateur",
    es: "Plan Starter · precio fundador"
  };
  T['f-price-per'] = {
    fr: "/ mois · pour toujours",
    es: "/ mes · para siempre"
  };
  T['f-price-lock'] = {
    fr: "Plus de 60% de reduction · verrouille a votre compte a vie · le prix n'augmente jamais · annulez a tout moment",
    es: "Mas del 60% de descuento · fijado a tu cuenta de por vida · el precio nunca sube · cancela cuando quieras"
  };
  T['f-spots-label'] = { fr: "Places fondateur reclamees", es: "Plazas de fundador reclamadas" };
  T['f-cta-primary'] = { fr: "Reclamer l'acces fondateur \u2192", es: "Reclamar acceso fundador \u2192" };
  T['f-trial'] = { fr: "7 jours d'essai gratuit", es: "7 dias de prueba gratis" };
  T['f-refund'] = { fr: "Remboursement 30 jours", es: "Reembolso 30 dias" };
  T['f-cancel'] = { fr: "Annulez a tout moment", es: "Cancela cuando quieras" };
  T['f-stripe'] = { fr: "Securise par Stripe", es: "Asegurado por Stripe" };

  // Product preview
  T['f-preview-h'] = { fr: "Voyez par vous-meme", es: "Velo en accion" };
  T['f-preview-title'] = { fr: "Ory — Generateur de legendes IA", es: "Ory — Generador de subtitulos IA" };
  T['f-preview-you'] = { fr: "VOUS", es: "TU" };
  T['f-preview-prompt'] = {
    fr: "Ecris-moi une legende pour un post motivation du lundi sur comment etre submerge m'a rendu meilleur dans mon travail.",
    es: "Escribeme un subtitulo para un post de motivacion del lunes sobre como estar abrumado me hizo mejor en mi trabajo."
  };
  T['f-preview-linkedin'] = { fr: "Version LinkedIn", es: "Version LinkedIn" };
  T['f-preview-xthread'] = { fr: "Thread X", es: "Hilo X" };

  // Metrics
  T['f-metric-saved'] = { fr: "economisees par semaine en moyenne", es: "ahorradas por semana en promedio" };
  T['f-metric-platforms'] = { fr: "plateformes, un seul endroit", es: "plataformas, un solo lugar" };
  T['f-metric-first'] = { fr: "pour votre premiere publication", es: "para tu primera publicacion" };

  // What founding members get
  T['f-trust-h'] = { fr: "Ce que les membres fondateurs obtiennent", es: "Lo que obtienen los miembros fundadores" };
  T['f-trust-1'] = {
    fr: "<strong>Plus de 60% de reduction pour toujours.</strong> Starter a £3.50/mois au lieu de £9/mois. Growth/Pro/Unlimited verrouilles aux tarifs equivalents annuels. Tous les prix fondateurs sont permanents.",
    es: "<strong>Mas del 60% de descuento para siempre.</strong> Starter a £3.50/mes en lugar de £9/mes. Growth/Pro/Unlimited fijados a tarifas equivalentes anuales. Todos los precios de fundador son permanentes."
  };
  T['f-trust-2'] = {
    fr: "<strong>Remboursement integral 30 jours.</strong> Pour n'importe quelle raison. Sans questions. Envoyez un email a jesse@tasknextai.one et c'est fait.",
    es: "<strong>Reembolso completo 30 dias.</strong> Cualquier razon. Sin preguntas. Envia un email a jesse@tasknextai.one y listo."
  };
  T['f-trust-3'] = {
    fr: "<strong>Acces direct au fondateur.</strong> Jesse envoie personnellement un message a chaque membre fondateur dans les 24h. Une vraie conversation, pas un modele.",
    es: "<strong>Acceso directo al fundador.</strong> Jesse envia un mensaje personal a cada miembro fundador en 24h. Una conversacion real, no una plantilla."
  };
  T['f-trust-4'] = {
    fr: "<strong>Prix verrouille a vie.</strong> Les futurs plans et augmentations de prix ne vous touchent pas. Jamais.",
    es: "<strong>Precio fijado de por vida.</strong> Los futuros planes y aumentos de precio no te afectan. Nunca."
  };
  T['f-trust-5'] = {
    fr: "<strong>Void Club.</strong> Communaute privee des membres fondateurs. Premier acces a chaque nouvelle fonctionnalite. Influence directe sur ce que nous construisons ensuite.",
    es: "<strong>Void Club.</strong> Comunidad privada de miembros fundadores. Primer acceso a cada nueva funcion. Influencia directa en lo que construimos despues."
  };
  T['f-trust-6'] = {
    fr: "<strong>Votre nom dans les credits.</strong> Les membres fondateurs sont listes sur <a href=\"https://tasknextai.one/founders\">tasknextai.one/founders</a> — de facon permanente, sauf si vous choisissez de ne pas y figurer.",
    es: "<strong>Tu nombre en los creditos.</strong> Los miembros fundadores aparecen en <a href=\"https://tasknextai.one/founders\">tasknextai.one/founders</a> — permanentemente, a menos que elijas no hacerlo."
  };

  // What TaskNext does
  T['f-features-h'] = { fr: "Ce que TaskNext.AI fait vraiment", es: "Lo que TaskNext.AI realmente hace" };
  T['f-feat-1'] = {
    fr: "<strong>Ecrit avec votre voix.</strong> Legendes, hashtags, carrousels et threads — adaptes automatiquement pour chaque plateforme.",
    es: "<strong>Escribe con tu voz.</strong> Subtitulos, hashtags, carruseles e hilos — adaptados automaticamente para cada plataforma."
  };
  T['f-feat-2'] = {
    fr: "<strong>Genere des images & courtes videos</strong> pour Instagram, TikTok, X et LinkedIn.",
    es: "<strong>Genera imagenes y videos cortos</strong> para Instagram, TikTok, X y LinkedIn."
  };
  T['f-feat-3'] = {
    fr: "<strong>Planifie tout.</strong> Vous rappelle. Ne vous harcele pas. Vous decidez quand — Ory s'occupe du reste.",
    es: "<strong>Programa todo.</strong> Te recuerda. No te molesta. Tu decides cuando — Ory se encarga del resto."
  };
  T['f-feat-4'] = {
    fr: "<strong>Brand Brain</strong> apprend votre ton, votre voix et votre style. Plus vous l'utilisez, plus il vous ressemble.",
    es: "<strong>Brand Brain</strong> aprende tu tono, tu voz y tu estilo. Cuanto mas lo usas, mejor suena como tu."
  };
  T['f-feat-5'] = {
    fr: "<strong>Concu pour la vraie vie.</strong> Pas de tableaux de bord ecrasants. Pas de workflows en 47 etapes. Teste les pires mardis apres-midi.",
    es: "<strong>Disenado para la vida real.</strong> Sin paneles abrumadores. Sin flujos de trabajo de 47 pasos. Probado en las peores tardes de martes."
  };

  // All founding tiers
  T['f-tiers-h'] = { fr: "Tous les niveaux fondateur", es: "Todos los niveles de fundador" };
  T['f-tier-monthly'] = { fr: "Mensuel", es: "Mensual" };
  T['f-tier-annual'] = { fr: "Annuel", es: "Anual" };
  T['f-tier-save'] = { fr: "economisez ~22%", es: "ahorra ~22%" };
  T['f-tier-plan'] = { fr: "Plan", es: "Plan" };
  T['f-tier-fprice'] = { fr: "Prix fondateur", es: "Precio fundador" };
  T['f-tier-regular'] = { fr: "Mensuel normal", es: "Mensual normal" };
  T['f-tier-yousave'] = { fr: "Economie", es: "Ahorro" };
  T['f-tier-claim'] = { fr: 'Reclamer \u2192<span class="sr-only"> (ouvre dans une nouvelle fenetre)</span>', es: 'Reclamar \u2192<span class="sr-only"> (abre en nueva ventana)</span>' };
  T['f-tier-note-starter'] = { fr: "25k credits · 30 publications · 2 comptes", es: "25k creditos · 30 publicaciones · 2 cuentas" };
  T['f-tier-note-growth'] = { fr: "100k credits · 90 publications · 5 comptes", es: "100k creditos · 90 publicaciones · 5 cuentas" };
  T['f-tier-note-pro'] = { fr: "300k credits · publications illimitees · 8 comptes", es: "300k creditos · publicaciones ilimitadas · 8 cuentas" };
  T['f-tier-note-unlimited'] = { fr: "Credits illimites · publications illimitees · comptes illimites", es: "Creditos ilimitados · publicaciones ilimitadas · cuentas ilimitadas" };
  T['f-tier-footer'] = {
    fr: "Tous les prix fondateurs verrouilles a vie · 7 jours d'essai gratuit · Remboursement 30 jours · 2\u00d7 credits IA en permanence",
    es: "Todos los precios de fundador fijados de por vida · 7 dias de prueba gratis · Reembolso 30 dias · 2\u00d7 creditos IA permanentes"
  };

  // Founder story (founding page)
  T['f-founder-h'] = { fr: "Construit par quelqu'un qui en avait besoin", es: "Construido por alguien que lo necesitaba" };
  T['f-founder-handle'] = { fr: "Fondateur, TaskNext.AI · Londres", es: "Fundador, TaskNext.AI · Londres" };
  T['f-founder-bio'] = {
    fr: "J'ai construit TaskNext.AI parce que tous les autres outils de reseaux sociaux supposaient que vous vous souviendriez de publier, que vous auriez le temps de planifier, et que vous pourriez rester assis assez longtemps pour ecrire une legende. Je ne pouvais faire aucune de ces choses de maniere fiable.<br><br>C'est l'outil dont j'avais besoin. Je le construis en public, je livre rapidement et je reste a 100 membres fondateurs avant d'augmenter les prix. Si vous etes dedans — je veux avoir de vos nouvelles.",
    es: "Construi TaskNext.AI porque todas las demas herramientas de redes sociales asumian que recordarias publicar, tendrias tiempo para planificar y podrias quedarte quieto el tiempo suficiente para escribir un subtitulo. No podia hacer ninguna de esas cosas de forma fiable.<br><br>Esta es la herramienta que necesitaba. La construyo en publico, lanzo rapido y me quedo en 100 miembros fundadores antes de subir precios. Si estas dentro — quiero saber de ti."
  };

  // Be one of the first (founding page)
  T['f-early-h'] = { fr: "Soyez parmi les premiers", es: "Se de los primeros" };
  T['f-early-p'] = {
    fr: "Nous cherchons nos 100 premiers membres fondateurs pour faconner TaskNext.AI des le premier jour. Acces direct a Jesse, influence sur la roadmap, et un prix qui n'augmente jamais.",
    es: "Buscamos a nuestros primeros 100 miembros fundadores para moldear TaskNext.AI desde el primer dia. Acceso directo a Jesse, influencia en la hoja de ruta, y un precio que nunca sube."
  };

  // FAQ (founding page)
  T['f-faq-h'] = { fr: "Questions", es: "Preguntas" };
  T['f-faq1-q'] = { fr: "Que se passe-t-il pendant l'essai de 7 jours ?", es: "Que pasa durante la prueba de 7 dias?" };
  T['f-faq1-a'] = {
    fr: "Vous obtenez un acces complet a TaskNext.AI — chaque fonctionnalite, sans limites. Votre prix fondateur de £3.50/mois ne commence qu'apres l'essai. Si vous annulez avant le 7e jour, vous ne payez rien. Sans friction.",
    es: "Obtienes acceso completo a TaskNext.AI — cada funcion, sin limites. Tu precio fundador de £3.50/mes solo comienza despues de la prueba. Si cancelas antes del dia 7, no se te cobra nada. Sin friccion."
  };
  T['f-faq2-q'] = { fr: "Et si je veux un remboursement apres l'essai ?", es: "Y si quiero un reembolso despues de la prueba?" };
  T['f-faq2-a'] = {
    fr: "Vous avez 30 jours a partir du premier paiement, sans questions. Envoyez un email a jesse@tasknextai.one — Jesse gere tous les remboursements personnellement et ils sont traites sous 24 heures.",
    es: "Tienes 30 dias desde el primer cobro, sin preguntas. Envia un email a jesse@tasknextai.one — Jesse maneja todos los reembolsos personalmente y se procesan en 24 horas."
  };
  T['f-faq3-q'] = { fr: "C'est vraiment plus simple que les autres outils ?", es: "Es realmente mas simple que otras herramientas?" };
  T['f-faq3-a'] = {
    fr: "Oui. Le produit est concu autour de workflows sans friction et de la realite que vous ne completerez pas un processus de contenu en 12 etapes. Pas de files d'attente, pas de tableaux de bord complexes, pas de \"piliers de contenu\" a definir. Vous l'ouvrez, vous dites a Ory quoi publier, il s'occupe du reste.",
    es: "Si. El producto esta disenado en torno a flujos de trabajo sin friccion y la realidad de que no completaras un proceso de contenido de 12 pasos. Sin colas masivas, sin paneles complejos, sin \"pilares de contenido\" que definir. Lo abres, le dices a Ory que publicar, y se encarga del resto."
  };
  T['f-faq4-q'] = { fr: "Quelles plateformes sociales supporte-t-il ?", es: "Que plataformas sociales soporta?" };
  T['f-faq4-a'] = {
    fr: "Instagram, TikTok, LinkedIn et X (Twitter). Generation de legendes, creation d'images, planification et analytique pour les quatre. Vous connectez vos comptes une fois et publiez depuis un seul endroit.",
    es: "Instagram, TikTok, LinkedIn y X (Twitter). Generacion de subtitulos, creacion de imagenes, programacion y analiticas para las cuatro. Conectas tus cuentas una vez y publicas desde un solo lugar."
  };
  T['f-faq5-q'] = { fr: "Que se passe-t-il apres que les 100 places fondateur sont epuisees ?", es: "Que pasa despues de que las 100 plazas de fundador se agoten?" };
  T['f-faq5-a'] = {
    fr: "L'offre fondateur se ferme et tous les plans passent aux tarifs mensuels normaux : Starter £9/mois, Growth £29/mois, Pro £49/mois, Unlimited £99/mois. Les membres fondateurs conservent leurs tarifs reduits (£3.50/£19/£37/£79) pour toujours — verrouilles dans votre compte, pas une periode promotionnelle.",
    es: "La oferta de fundador se cierra y todos los planes pasan a precios mensuales regulares: Starter £9/mes, Growth £29/mes, Pro £49/mes, Unlimited £99/mes. Los miembros fundadores mantienen sus tarifas con descuento (£3.50/£19/£37/£79) para siempre — fijadas en tu cuenta, no un periodo promocional."
  };
  T['f-faq6-q'] = { fr: "Quelle est la difference entre les niveaux ?", es: "Cual es la diferencia entre los niveles?" };
  T['f-faq6-a'] = {
    fr: "<strong>Starter (£3.50/mois) :</strong> 2 comptes sociaux, 30 publications/mois, 25k credits IA. Parfait pour les createurs solo qui debutent.<br><strong>Growth (£19/mois) :</strong> 5 comptes, 90 publications/mois, 100k credits, Brand Brain, calendrier de contenu. Pour les createurs serieux et petites entreprises.<br><strong>Pro (£37/mois) :</strong> 8 comptes, publications illimitees, 300k credits, Competitor Spy, les 3 agents IA. Pour les equipes et agences.<br><strong>Unlimited (£79/mois) :</strong> Tout en illimite plus onboarding dedie et acces direct au fondateur. Pour les power users et studios.",
    es: "<strong>Starter (£3.50/mes):</strong> 2 cuentas sociales, 30 publicaciones/mes, 25k creditos IA. Perfecto para creadores individuales que empiezan.<br><strong>Growth (£19/mes):</strong> 5 cuentas, 90 publicaciones/mes, 100k creditos, Brand Brain, calendario de contenido. Para creadores serios y pequenas empresas.<br><strong>Pro (£37/mes):</strong> 8 cuentas, publicaciones ilimitadas, 300k creditos, Competitor Spy, los 3 agentes IA. Para equipos y agencias.<br><strong>Unlimited (£79/mes):</strong> Todo ilimitado mas onboarding dedicado y acceso directo al fundador. Para power users y estudios."
  };
  T['f-faq7-q'] = { fr: "Comment fonctionne le verrouillage du prix ?", es: "Como funciona el bloqueo de precio?" };
  T['f-faq7-a'] = {
    fr: "Votre abonnement Stripe est fixe au tarif fondateur avec une surcharge de prix permanente. Meme quand nous augmentons les prix pour les nouveaux utilisateurs, le prix de votre abonnement ne change jamais. La seule facon qu'il change est si vous annulez et vous reabonnez — alors ne faites pas ca.",
    es: "Tu suscripcion de Stripe esta fijada a la tarifa de fundador con una anulacion de precio permanente. Aunque subamos los precios para nuevos usuarios, el precio de tu suscripcion nunca cambia. La unica forma de que cambie es si cancelas y te vuelves a suscribir — asi que no hagas eso."
  };

  // Final CTA (founding page)
  T['f-final-spots'] = {
    fr: "<strong style=\"color:var(--orchid)\">100 places au total.</strong> Ferme definitivement une fois complet.",
    es: "<strong style=\"color:var(--orchid)\">100 plazas en total.</strong> Se cierra permanentemente cuando se llene."
  };
  T['f-final-cta'] = { fr: "Devenir membre fondateur \u2192", es: "Ser miembro fundador \u2192" };

  // Footer (founding page)
  T['f-footer-home'] = { fr: "Accueil", es: "Inicio" };
  T['f-footer-signin'] = { fr: "Se connecter", es: "Iniciar sesion" };
  T['f-footer-founders'] = { fr: "Fondateurs", es: "Fundadores" };
  T['f-footer-contact'] = { fr: "Contact", es: "Contacto" };
  T['f-footer-privacy'] = { fr: "Confidentialite", es: "Privacidad" };
  T['f-footer-terms'] = { fr: "Conditions", es: "Terminos" };

  /* ── apply translations ── */
  function applyTranslations(lang) {
    if (lang === 'en' || !T) return;
    var dict = null;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var entry = T[key];
      if (!entry) return;
      var text = entry[lang];
      if (!text) return;
      // If translation contains HTML tags, use innerHTML; else textContent
      if (/<[a-z][\s\S]*>/i.test(text)) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });
  }

  /* ── language toggle — flags ── */
  var FLAGS = { en: '\ud83c\uddec\ud83c\udde7', fr: '\ud83c\uddeb\ud83c\uddf7', es: '\ud83c\uddea\ud83c\uddf8' };
  var NAMES = { en: 'English', fr: 'Fran\u00e7ais', es: 'Espa\u00f1ol' };

  /* ── inject language toggle into page nav ── */
  function injectToggle(currentLang) {
    // Remove any previous toggle
    var old = document.getElementById('tn-lang-toggle');
    if (old) old.remove();

    var wrap = document.createElement('div');
    wrap.id = 'tn-lang-toggle';
    wrap.style.cssText = 'position:relative;display:inline-flex;align-items:center;z-index:999;margin-left:8px;';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Language: ' + NAMES[currentLang]);
    btn.setAttribute('aria-expanded', 'false');
    btn.style.cssText = 'display:inline-flex;align-items:center;gap:5px;padding:5px 10px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.6);font-size:12px;font-weight:500;cursor:pointer;transition:all .15s;min-height:34px;font-family:inherit;';
    btn.innerHTML = '<span style="font-size:14px;line-height:1">' + FLAGS[currentLang] + '</span> ' + currentLang.toUpperCase() + ' <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="opacity:.4"><path d="M6 9l6 6 6-6"/></svg>';
    btn.onmouseenter = function(){ btn.style.background='rgba(255,255,255,0.08)'; btn.style.color='rgba(255,255,255,0.9)'; };
    btn.onmouseleave = function(){ btn.style.background='rgba(255,255,255,0.04)'; btn.style.color='rgba(255,255,255,0.6)'; };

    var dd = document.createElement('div');
    dd.style.cssText = 'display:none;position:absolute;right:0;top:100%;margin-top:4px;background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.4);overflow:hidden;min-width:130px;z-index:9999;';

    ['en','fr','es'].forEach(function(code) {
      if (code === currentLang) return;
      var opt = document.createElement('button');
      opt.type = 'button';
      opt.style.cssText = 'display:flex;align-items:center;gap:8px;width:100%;padding:9px 12px;font-size:12px;color:rgba(255,255,255,0.6);background:transparent;border:none;cursor:pointer;transition:all .15s;font-family:inherit;text-align:left;';
      opt.innerHTML = '<span style="font-size:14px;line-height:1">' + FLAGS[code] + '</span> ' + NAMES[code];
      opt.onmouseenter = function(){ opt.style.background='rgba(255,255,255,0.06)'; opt.style.color='#fff'; };
      opt.onmouseleave = function(){ opt.style.background='transparent'; opt.style.color='rgba(255,255,255,0.6)'; };
      opt.onclick = function(e) {
        e.stopPropagation();
        window.switchLang(code);
        dd.style.display = 'none';
        btn.setAttribute('aria-expanded', 'false');
        injectToggle(code); // rebuild with new active
      };
      dd.appendChild(opt);
    });

    btn.onclick = function(e) {
      e.stopPropagation();
      var open = dd.style.display === 'block';
      dd.style.display = open ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!open));
    };
    document.addEventListener('click', function() { dd.style.display = 'none'; btn.setAttribute('aria-expanded','false'); });

    wrap.appendChild(btn);
    wrap.appendChild(dd);

    // Insert into nav — main site navbar or founding page nav-links
    var target = document.querySelector('#navbar .flex.items-center.gap-4')
              || document.querySelector('.nav-links');
    if (target) target.appendChild(wrap);
  }

  function highlightActiveBtn(lang) {
    // Legacy compat — now handled by injectToggle
  }

  /* ── public: switch language ── */
  window.switchLang = function (lang) {
    setCookie('NEXT_LOCALE', lang);
    // Store original EN HTML on first load
    if (!window.__i18nOriginal) {
      window.__i18nOriginal = {};
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        window.__i18nOriginal[el.getAttribute('data-i18n')] = el.innerHTML;
      });
    }
    if (lang === 'en') {
      // Restore originals
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (window.__i18nOriginal[key] !== undefined) {
          el.innerHTML = window.__i18nOriginal[key];
        }
      });
    } else {
      // First restore EN, then apply target
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (window.__i18nOriginal[key] !== undefined) {
          el.innerHTML = window.__i18nOriginal[key];
        }
      });
      applyTranslations(lang);
    }
    highlightActiveBtn(lang);
    document.documentElement.lang = lang;
  };

  /* ── init on DOMContentLoaded ── */
  function init() {
    var lang = getLang();
    setCookie('NEXT_LOCALE', lang); // persist detected language
    // Snapshot EN originals before any translation
    window.__i18nOriginal = {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      window.__i18nOriginal[el.getAttribute('data-i18n')] = el.innerHTML;
    });
    if (lang !== 'en') {
      applyTranslations(lang);
      document.documentElement.lang = lang;
    }
    injectToggle(lang);
  }

  /* ── expose translations for inline scripts (billing toggle etc.) ── */
  window._I18N_T = T;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
