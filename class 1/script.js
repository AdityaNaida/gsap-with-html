//GSAP class one
//topic covers
/*.from , .to , x= horizontal axis , y = vertical axis , stagger, repeat , yoyo , timeline  */

// gsap.from(".box1", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   repeat: -1,
//   yoyo: true,
// });

// gsap.from("h1", {
//   opacity: 0,
//   y: 30,
//   duration: 1,
//   delay: 1,
//   stagger: 0.3,
// });

//using time line

let tl = gsap.timeline();

tl.from("h1", {
  opacity: 0,
  y: -30,
  duration: 0.3,
  delay: 0.5,
});

tl.from("p", {
  opacity: 0,
  y: -30,
  duration: 0.3,
  stagger: 0.3,
});

tl.from("h2", {
  //   opacity: 0,
  y: 600,
  scale: 0.2,
  duration: 0.5,
});
