/* Click spark — four short dashes that fan upward from the pointer and
   fade out. Self-contained (injects its own CSS) so it can run on pages
   that don't load style.css, e.g. 404.html. */

const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)");

const style = document.createElement("style");
style.textContent = `
  .spark-dash {
    position: fixed;
    top: 0;
    left: 0;
    width: 3px;
    height: 12px;
    border-radius: 2px;
    background: var(--primary, #007aff);
    transform-origin: center;
    pointer-events: none;
    z-index: 10003;
    animation: spark-out 0.4s ease-out forwards;
  }
  @keyframes spark-out {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-10px) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-40px) scale(0);
    }
  }
`;
document.head.appendChild(style);

const SPARK_COUNT = 4;
const CENTER_ANGLE = 0; // straight up
const SPREAD = 103; // total arc width in degrees

document.addEventListener(
  "click",
  (e) => {
    if (REDUCE.matches) return;
    // Keyboard-activated clicks report detail 0 and (0, 0) coordinates —
    // sparking there would fire from the top-left corner.
    if (!e.detail) return;

    for (let i = 0; i < SPARK_COUNT; i++) {
      const dash = document.createElement("div");
      dash.className = "spark-dash";
      const angle =
        CENTER_ANGLE - SPREAD / 2 + (SPREAD / (SPARK_COUNT - 1)) * i;
      dash.style.setProperty("--angle", angle + "deg");
      dash.style.left = e.clientX + "px";
      dash.style.top = e.clientY + "px";
      document.body.appendChild(dash);

      // animationend doesn't fire in a backgrounded tab; sweep up regardless.
      const remove = () => dash.remove();
      dash.addEventListener("animationend", remove);
      setTimeout(remove, 1000);
    }
  },
  { capture: true, passive: true }
);
