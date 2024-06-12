let tl = gsap.timeline();

tl.to("#menu", {
  right: 0,
  duration: 0.4,
});

tl.from("#menu h4", {
  x: 100,
  opacity: 0,
  duration: 0.35,
  stagger: 0.25,
});

tl.from("#menu i", {
  opacity: 0,
});

tl.pause();

document.querySelector("#nav i").addEventListener("click", () => {
  tl.play();
});

document.querySelector("#menu i").addEventListener("click", () => {
  tl.reverse();
});
