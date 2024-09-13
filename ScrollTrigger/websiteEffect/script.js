gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2",
    scoller: "body",
    markers: true,
    start: "top 0%",
    end: "t0p -150%",
    scrub: 2,
    pin: true,
  },
});
