import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  cleanup?: () => void;
}

gsap.registerPlugin(ScrollTrigger);

let hasRefreshListener = false;

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      para.cleanup?.();
    }

    const wordEls = splitWords(para);
    para.cleanup = wordEls.revert;

    para.anim = gsap.fromTo(
      wordEls.nodes,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.cleanup?.();
    }

    const charEls = splitChars(title);
    title.cleanup = charEls.revert;

    title.anim = gsap.fromTo(
      charEls.nodes,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  if (!hasRefreshListener) {
    ScrollTrigger.addEventListener("refresh", setSplitText);
    hasRefreshListener = true;
  }
}

function splitWords(element: HTMLElement) {
  const original = element.textContent ?? "";
  const words = original.trim().split(/\s+/).filter(Boolean);
  const nodes: HTMLElement[] = [];
  element.textContent = "";

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = "fx-word";
    span.style.display = "inline-block";
    span.style.willChange = "transform, opacity";
    span.textContent = word;
    element.appendChild(span);
    nodes.push(span);

    if (index < words.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });

  return {
    nodes,
    revert: () => {
      element.textContent = original;
    },
  };
}

function splitChars(element: HTMLElement) {
  const original = element.textContent ?? "";
  const nodes: HTMLElement[] = [];
  element.textContent = "";

  [...original].forEach((char) => {
    const span = document.createElement("span");
    span.className = "fx-char";
    span.style.display = "inline-block";
    span.style.willChange = "transform, opacity";
    span.textContent = char === " " ? "\u00A0" : char;
    element.appendChild(span);
    nodes.push(span);
  });

  return {
    nodes,
    revert: () => {
      element.textContent = original;
    },
  };
}
