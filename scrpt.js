// Progressive enhancement:
// The page remains readable without JavaScript.

const motionPreference = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

const mobile = window.matchMedia("(max-width: 560px)");

const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

const navLinks = [
  ...navigation.querySelectorAll("a")
];

// Mobile navigation
function syncMenu() {
  toggle.hidden = !mobile.matches;
  navigation.hidden = mobile.matches;

  toggle.setAttribute(
    "aria-expanded",
    String(!navigation.hidden)
  );
}

syncMenu();

mobile.addEventListener("change", syncMenu);

toggle.addEventListener("click", () => {
  navigation.hidden = !navigation.hidden;

  toggle.setAttribute(
    "aria-expanded",
    String(!navigation.hidden)
  );
});

// Close the mobile menu after selecting a section.
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (mobile.matches) {
      navigation.hidden = true;
      toggle.setAttribute("aria-expanded", "false");

      document
        .querySelector(link.getAttribute("href"))
        .focus({ preventScroll: true });
    }
  });
});

// Allow section headings/containers to receive keyboard focus.
navLinks.forEach(link => {
  document
    .querySelector(link.getAttribute("href"))
    .setAttribute("tabindex", "-1");
});

// Escape closes the mobile navigation.
document.addEventListener("keydown", event => {
  if (
    event.key === "Escape" &&
    mobile.matches &&
    !navigation.hidden
  ) {
    navigation.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  }
});

// Reveal elements once as they enter the viewport.
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08
    }
  );

  document.querySelectorAll(".reveal").forEach(element => {
    revealObserver.observe(element);
  });

  if (!motionPreference.matches) {
    document.documentElement.classList.add("motion-enabled");
  }
}

// Scroll progress and decorative parallax
const progress = document.querySelector(".scroll-progress");

const layers = [
  ...document.querySelectorAll("[data-parallax]")
];

let framePending = false;

function renderScroll() {
  const maximum =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const completion = maximum > 0
    ? Math.min(1, Math.max(0, window.scrollY / maximum))
    : 0;

  progress.style.transform = `scaleX(${completion})`;

  layers.forEach(layer => {
    // Disable parallax on phones or when reduced motion is requested.
    if (motionPreference.matches || mobile.matches) {
      layer.style.transform = "";
      return;
    }

    const parent = layer
      .closest("section")
      .getBoundingClientRect();

    // Skip sections outside the viewport.
    if (
      parent.bottom < 0 ||
      parent.top > window.innerHeight
    ) {
      return;
    }

    const speed = Number(layer.dataset.parallax);

    const offset = Math.max(
      -90,
      Math.min(90, -parent.top * speed)
    );

    layer.style.transform =
      `translate3d(0, ${offset}px, 0)`;
  });

  // Highlight the latest section to reach the upper viewport.
  let current = "";

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);

    if (
      section.getBoundingClientRect().top <=
      window.innerHeight * 0.4
    ) {
      current = link.hash;
    }
  });

  navLinks.forEach(link => {
    if (link.hash === current) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  framePending = false;
}

// Limit scroll updates to one per animation frame.
function scheduleScroll() {
  if (!framePending) {
    framePending = true;
    requestAnimationFrame(renderScroll);
  }
}

window.addEventListener(
  "scroll",
  scheduleScroll,
  { passive: true }
);

window.addEventListener("resize", scheduleScroll);

// Update behavior if the motion preference changes.
motionPreference.addEventListener("change", () => {
  document.documentElement.classList.toggle(
    "motion-enabled",
    !motionPreference.matches &&
      "IntersectionObserver" in window
  );

  scheduleScroll();
});

// Keep the footer year current.
document.querySelector("#year").textContent =
  new Date().getFullYear();

renderScroll();

// Skills bubbles: hover, keyboard focus, and tap support.
document.querySelectorAll(".skill-bubble").forEach(bubble => {
  let pinned = false;
  let hovered = false;

  function updateBubble() {
    const focused = document.activeElement === bubble;

    bubble.setAttribute(
      "aria-expanded",
      String(pinned || hovered || focused)
    );
  }

  bubble.addEventListener("pointerenter", event => {
    if (event.pointerType === "mouse") {
      hovered = true;
      updateBubble();
    }
  });

  bubble.addEventListener("pointerleave", () => {
    hovered = false;
    updateBubble();
  });

  bubble.addEventListener("focus", updateBubble);
  bubble.addEventListener("blur", updateBubble);

  bubble.addEventListener("click", () => {
    pinned = !pinned;

    // Close on a second tap/click.
    if (!pinned) {
      hovered = false;
      bubble.blur();
    }

    updateBubble();
  });

  bubble.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      pinned = false;
      hovered = false;
      bubble.blur();
      updateBubble();
    }
  });
});