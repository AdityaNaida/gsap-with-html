var path = `M 0 100 Q 495 100 990 100`;
var finalPath = `M 0 100 Q 495 100 990 100`;

let str = document.querySelector("#string");

str.addEventListener("mousemove", function (dets) {
  // console.log(dets.y);
  path = `M 0 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

str.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});

// str.addEventListener("mouseenter", function (dets) {
//   console.log(dets);
//   console.log("mouse entred");
// });

// str.addEventListener("mouseleave", function () {
//   console.log("mouse leaved");
// });
