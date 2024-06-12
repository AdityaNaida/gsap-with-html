let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.5,
    ease: "back.out(1.7)",
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = `View Image`;
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff54",
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = ``;
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
