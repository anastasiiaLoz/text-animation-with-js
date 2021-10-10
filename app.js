let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "80%",
    scrub: 1
  }
});

let timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "60%",
    scrub: 1
  }
});

let timeline4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "80%",
    scrub: 1
  }
});

timeline.fromTo(".sliding-text", { y: 0 }, { y: -400 });
timeline2.fromTo(".logo", { scale: 6 }, { scale: 1, top: "2rem", left: "3rem", x: "50%", y: "50%" });
timeline4.fromTo(".square", { left: "70%" }, { left: "100%", opacity: 0, rotation: 90 });

let timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "200%",
    scrub: 1,
    pin: true,
    pinSpacing: false
  }
});
