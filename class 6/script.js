function textAnimation() {
  const h1 = document.querySelector("h1").textContent;
  let current = "";

  const h1Length = Math.ceil(h1.length / 2);
  console.log(h1Length);
  h1.split("").forEach((e, i) => {
    if (h1Length > i) {
      current += `<span class="a">${e}</span>`;
    } else {
      current += `<span class="b">${e}</span>`;
    }
  });

  document.querySelector("h1").innerHTML = current;
}

textAnimation();

gsap.from("h1 .a", {
  y: 100,
  delay: 0.5,
  duration: 0.3,
  stagger: 0.2,
});

gsap.from("h1 .b", {
  y: 100,
  delay: 0.5,
  duration: 0.3,
  stagger: -0.2,
});
