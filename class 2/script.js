// gsap.from("#container1 #box", {
//   opacity: 0,
//   scale: 0.2,
//   rotate: 360,
//   duration: 1,
//   delay: 0.5,
// });

gsap.from("#container2 h1", {
  opacity: 0,
  duration: 1,
  x: -600,
  //   scrollTrigger: "#container2 #box",
  scrollTrigger: {
    trigger: "#container2 h1",
    scroll: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 3,
  },
});

gsap.from("#container2 h2", {
  opacity: 0,
  duration: 1,
  x: 600,
  scrollTrigger: {
    trigger: "#container2 h1",
    scroll: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 3,
  },
});
