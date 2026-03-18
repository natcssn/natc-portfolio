import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const introSplit = splitChars([
    ".landing-info h3",
    ".landing-intro h2",
  ]);
  gsap.fromTo(
    introSplit,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.02,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-intro h1",
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      delay: 0.35,
    }
  );

  const landingText2 = splitChars([".landing-h2-info"]);
  gsap.fromTo(
    landingText2,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.02,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const landingText3 = splitChars([".landing-h2-info-1"]);
  const landingText4 = splitChars([".landing-h2-1"]);
  const landingText5 = splitChars([".landing-h2-2"]);

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(text1: HTMLElement[], text2: HTMLElement[]) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    text2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.08,
      delay: delay,
    },
    0
  )
    .fromTo(
      text1,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.08,
        delay: delay2,
      },
      1
    )
    .fromTo(
      text1,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.08,
        delay: delay,
      },
      0
    )
    .to(
      text2,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.08,
        delay: delay2,
      },
      1
    );
}

function splitChars(selectors: string[]): HTMLElement[] {
  const chars: HTMLElement[] = [];

  selectors.forEach((selector) => {
    document.querySelectorAll<HTMLElement>(selector).forEach((node) => {
      node.querySelectorAll(".fx-char").forEach((el) => el.remove());
      const text = node.textContent ?? "";
      node.textContent = "";

      [...text].forEach((char) => {
        const span = document.createElement("span");
        span.className = "fx-char";
        span.style.display = "inline-block";
        span.style.willChange = "transform, opacity, filter";
        span.textContent = char === " " ? "\u00A0" : char;
        node.appendChild(span);
        chars.push(span);
      });
    });
  });

  return chars;
}
