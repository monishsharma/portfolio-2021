import fullpage from "fullpage.js";
import { gsap, TimelineMax, TweenMax, Power3, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tl = new TimelineMax();

const headingAnimation = (element, firstTime) => {
  tl.fromTo(
    element,
    0.5,
    {
      y: -100,
      duration: 0.2,
      // delay: 0.3,
      opacity: 0,
      ease: Power3.easeOut,
    },
    {
      y: 10,
      duration: 0.2,
      // delay: 0.3,
      opacity: 1,
      ease: Power3.easeOut,
    }
  );
};

const textToPath = (element) => {
  var tl = new TimelineMax({ yoyo: true });
  tl.fromTo(
    element,
    3,
    { strokeDashoffset: 100, ease: Linear.easeNone },
    { strokeDashoffset: 0, ease: Linear.easeNone }
  );
};

export const initFullpage = () => {
  new fullpage("#fullpage", {
    licenseKey: "YOUR KEY HERE",
    navigation: true,
    disable: false,
    afterSlideLoad : (origin, destination, direction) => {
      console.log(origin, destination, direction)
    },
    onLeave: (origin, destination, direction) => {
      const section = destination.item;
      let title = section.querySelectorAll(".reveal__heading");
      let bg = section.querySelector("#text-copy1");

      // if (destination.index === 2) {
      //   let laptop = section.querySelector("#laptop");
      //   parallaxScrolling(laptop);
      // }
      // console.log(bg);

      title.forEach((tit, index) => headingAnimation(tit, false));
      textToPath(bg);
    },
  });
};

export const initGSAP = (element) => {
  gsap.registerPlugin(ScrollTrigger);
  headingAnimation(element, true);
  textToPath()
};

export const parallaxScrolling = (element) => {
  tl.fromTo(
    element,
    {
      opacity: 0,
      y: 400,
    },
    {
      y: 0,
      opacity: 1,
    },
    "<.15"
  );
};
