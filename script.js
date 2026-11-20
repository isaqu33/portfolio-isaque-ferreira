(() => {
  "use strict";

  const themeToggle = document.querySelector(".theme-toggle");
  const root = document.documentElement;
  const systemTheme = matchMedia("(prefers-color-scheme: dark)");
  let themeSelected = false;
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    themeSelected = savedTheme === "dark" || savedTheme === "light";
  } catch {}

  function applyTheme(theme) {
    const dark = theme === "dark";
    root.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.querySelector(".theme-icon").textContent = dark ? "☀" : "☾";
    document.querySelector('meta[name="theme-color"]').content = dark ? "#101c20" : "#152b32";
  }

  applyTheme(root.dataset.theme);
  themeToggle.hidden = false;
  themeToggle.addEventListener("click", () => {
    const theme = root.dataset.theme === "dark" ? "light" : "dark";
    themeSelected = true;
    applyTheme(theme);
    try { localStorage.setItem("portfolio-theme", theme); } catch {}
  });
  systemTheme.addEventListener("change", event => {
    if (!themeSelected) applyTheme(event.matches ? "dark" : "light");
  });

  // Animação local, sem dependências. Pausa fora da tela e respeita movimento reduzido.
  const art = document.querySelector(".interactive-art");
  if (art) {
    const follow = art.querySelector(".organic-follow");
    const spin = art.querySelector(".organic-spin");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let visible = false, frame = 0, last = 0, phase = 0;
    function resetTarget() { target.x = 0; target.y = 0; }
    art.addEventListener("pointermove", event => {
      if (!finePointer.matches || reduced.matches) return;
      const rect = art.getBoundingClientRect();
      target.x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      target.y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
    });
    art.addEventListener("pointerleave", resetTarget);
    window.addEventListener("blur", resetTarget);
    function draw(time) {
      const dt = Math.min((time - (last || time)) / 1000, .05);
      last = time;
      phase += dt;
      const ease = 1 - Math.exp(-7 * dt);
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      follow.style.transform = `translate(${current.x * 22}px, ${current.y * 22}px) rotateX(${-current.y * 12}deg) rotateY(${current.x * 12}deg)`;
      spin.style.transform = `rotate(${Math.sin(phase * .28) * 1.5 + current.x * 4}deg) scale(${1 + Math.sin(phase * 1.1) * .006})`;
      frame = requestAnimationFrame(draw);
    }
    function syncAnimation() {
      cancelAnimationFrame(frame);
      frame = 0; last = 0;
      if (reduced.matches) {
        follow.style.transform = ""; spin.style.transform = "";
        current.x = current.y = 0; resetTarget();
      } else if (visible && !document.hidden) frame = requestAnimationFrame(draw);
    }
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      syncAnimation();
    }).observe(art);
    reduced.addEventListener("change", syncAnimation);
    document.addEventListener("visibilitychange", syncAnimation);
  }
  const projects = window.PORTFOLIO_PROJETOS || {};
  const dialog = document.querySelector("#project-dialog");
  const content = document.querySelector("#dialog-content");
  let previousTrigger = null;

  function el(tag, text, className) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.className = className;
    return element;
  }

  function safeLink(value) {
    try {
      const url = new URL(value, document.baseURI);
      return ["https:", "http:"].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  }

  function localAsset(value) {
    // Mídias ficam na própria pasta. Não carregar conteúdo externo automaticamente.
    if (typeof value !== "string" || !value.startsWith("assets/") || value.includes("..")) return null;
    return value;
  }

  function section(title, text) {
    content.append(el("h3", title), el("p", text));
  }

  function media(project) {
    content.append(el("h3", "Imagens e demonstração"));
    const gallery = el("div", null, "media-gallery");
    const images = (project.imagens || []).filter(image => localAsset(image.src));
    images.forEach(image => {
      const figure = el("figure");
      const img = el("img");
      img.src = localAsset(image.src);
      img.alt = image.alt || image.legenda || "Captura de tela do projeto";
      img.loading = "lazy";
      figure.append(img);
      if (image.legenda) figure.append(el("figcaption", image.legenda));
      gallery.append(figure);
    });
    const videos = (project.videos || [{
      src: project.video,
      poster: project.videoPoster,
      legenda: project.legendaVideo
    }]).filter(video => localAsset(video.src));
    const videoFigures = document.createDocumentFragment();
    videos.forEach(item => {
      const figure = el("figure");
      const video = el("video");
      video.controls = true;
      video.preload = "none";
      video.playsInline = true;
      video.src = localAsset(item.src);
      video.setAttribute("aria-label", item.titulo || `Demonstração: ${project.titulo}`);
      if (localAsset(item.poster)) video.poster = localAsset(item.poster);
      if (localAsset(item.legenda)) {
        const track = el("track");
        track.kind = "captions";
        track.src = localAsset(item.legenda);
        track.srclang = "pt-BR";
        track.label = "Português";
        track.default = true;
        video.append(track);
      }
      figure.append(video);
      if (item.titulo) figure.append(el("figcaption", item.titulo));
      videoFigures.append(figure);
    });
    gallery.prepend(videoFigures);
    if (project.videos?.length) gallery.classList.add("media-gallery-grid");
    if (!images.length && !videos.length) gallery.append(el("p", "Capturas e vídeo em preparação.", "empty-media"));
    content.append(gallery);
  }

  function openProject(id, trigger, view) {
    const project = projects[id];
    if (!project) return;
    previousTrigger = trigger;
    content.querySelectorAll("video").forEach(video => video.pause());
    content.replaceChildren();
    content.append(el("p", project.categoria, "project-category"));
    const title = el("h2", project.titulo);
    title.id = "dialog-title";
    content.append(title, el("p", project.resumo, "dialog-intro"));
    const tags = el("ul", null, "tags");
    tags.setAttribute("aria-label", "Tecnologias");
    project.tecnologias.forEach(technology => tags.append(el("li", technology)));
    content.append(tags);
    const decisions = project.decisoesTecnicas || [];
    const technical = view === "technical" && decisions.length > 0;
    if (decisions.length) {
      const options = el("div", null, "case-views");
      options.setAttribute("role", "group");
      options.setAttribute("aria-label", "Visualização do projeto");
      for (const [label, nextView] of [["Visão geral e mídias", "overview"], ["Decisões técnicas", "technical"]]) {
        const option = el("button", label, "case-view");
        option.type = "button";
        const selected = (nextView === "technical") === technical;
        option.setAttribute("aria-pressed", String(selected));
        option.addEventListener("click", () => {
          if (selected) return;
          openProject(id, trigger, nextView);
          content.querySelector('.case-view[aria-pressed="true"]')?.focus();
        });
        options.append(option);
      }
      content.append(options);
    }
    if (technical) {
      content.append(el("h3", "Arquitetura e escolhas"));
      const list = el("dl", null, "case-decisions");
      decisions.forEach(decision => {
        const item = el("div");
        item.append(el("dt", decision.titulo), el("dd", decision.motivo));
        list.append(item);
      });
      content.append(list);
    } else {
      if (project.videos?.length) media(project);
      content.append(el("h3", "O que foi implementado"));
      const list = el("ul");
      project.implementacoes.forEach(item => list.append(el("li", item)));
      content.append(list);
      section("Minha participação", project.participacao);
      const status = el("div", project.limites, "case-status");
      content.append(el("h3", "Contexto e limites"), status);
      if (!project.videos?.length) media(project);
    }
    const links = el("div", null, "case-links");
    project.links.forEach(link => {
      const url = safeLink(link.url);
      if (!url) return;
      const anchor = el("a", `${link.titulo} ↗`, "button");
      anchor.href = url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      links.append(anchor);
    });
    content.append(links);
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add("dialog-open");
  }

  document.querySelectorAll("[data-open-project]").forEach(button => {
    button.addEventListener("click", () => openProject(button.dataset.openProject, button, button.dataset.caseView));
  });
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => {
    dialog.querySelectorAll("video").forEach(video => video.pause());
    document.body.classList.remove("dialog-open");
    previousTrigger?.focus();
  });

  document.querySelectorAll("[data-cover]").forEach(container => {
    const project = projects[container.dataset.cover];
    const path = localAsset(project?.capa);
    if (!path) return;
    const image = new Image();
    image.alt = project.capaAlt || `Captura de tela de ${project.titulo}`;
    image.onload = () => {
      container.replaceChildren(image, el("span", project.categoria, "cover-caption"));
      container.classList.add("has-cover");
    };
    // Se a imagem faltar, a composição original continua visível.
    image.src = path;
  });
  document.querySelector("#year").textContent = String(new Date().getFullYear());
})();
