import gsap from "gsap"

const tl = gsap.timeline()
export const openMenu = () => {
  tl.to("#slide-top", {
    duration: 0.7,
    rotate: 45,
  })
    .to("#slide-bottom", {
      duration: 0.7,
      y: -10,
      rotate: -45,
      delay: -1,
    })
    .to("#main-container", {
      duration: 0.8,
      y: 180,
      delay: -0.8,
    })
    .to("#banner-subText", {
      duration: 1.8,
      y: 30,
      ease: "power4.out",
      delay: -0.8
    })
    .to("#menu-container", {
      duration: 0,
      css: { zIndex: 1 },
    })
}

export const closeMenu = () => {
  tl.to("#menu-container", {
    duration: 0,
    css: { zIndex: -1 },
  })
    .to("#slide-top", {
      duration: 1,
      rotate: 0,
    })
    .to("#slide-bottom", {
      duration: 1,
      y: 0,
      rotate: 0,
      delay: -1,
    })
    .to("#main-container", {
      duration: 1,
      y: 0,
      delay: -1,
    })
    .from("#about-title", {
      duration: 1.8,
      y: 100,
      ease: "power4.out",
      delay: -1,
      skewY: 2,
      stagger: {
        amount: 0.5,
      },
    })
    .to("#banner-subText", {
      duration: 1.8,
      y: 0,
      ease: "power4.out",
      delay: -2,
    })
    .to("html", {
      duration: 0,
      delay: -0.5,
      css: {
        overflowY: "scroll",
      },
    })
}
