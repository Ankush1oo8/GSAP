var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var img = document.querySelector("#img");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "elastic",
  });
});

img.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 3,
  });
});

img.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  });
});
