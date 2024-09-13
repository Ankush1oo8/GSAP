// gsap.to("#box", {
//   x: 1000,
//   y: 1000,
//   duration: 3,
//   delay: 1,
// });

// gsap.to("#box", {
//   x: 1000,

//   duration: 3,
//   delay: 1,
// });

// gsap.to("#box1", {
//   x: 1000,
//   duration: 3,
//   delay: 1,
// });

// gsap.to("#box2", {
//   x: 1000,

//   duration: 3,
//   delay: 1,
// });

// timelime
// let tl = gsap.timeline();
// tl.to("#box", {
//   x: 1000,

//   duration: 3,
//   delay: 1,
// });

// tl.to("#box1", {
//   x: 1000,
//   duration: 3,
//   delay: 1,
// });

// tl.to("#box2", {
//   x: 1000,

//   duration: 3,
//   delay: 1,
// });

let tl = gsap.timeline();
tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("#part2 h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
