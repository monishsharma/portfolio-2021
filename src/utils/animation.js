import { gsap, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tl = new TimelineMax();
gsap.registerPlugin(ScrollTrigger);


export const drawSvgText = () => {
    gsap.to('#theText', {duration: 1, drawSVG:0,strokeDashoffset: 0, yoyo:true});
}

export const parallaxScrolling = ({element, duration, from, to}) => {
  
  tl.fromTo(
    element,
    duration,
    {
      ...from
    },
    {
      ...to
    }
  );
};

export const onScrollParallax = ({element, animation, trigger = null}) => {
  console.log(animation)

  gsap.timeline({
    ...(trigger) ? {...trigger} : {scrollTrigger: { 
        start:'top top', 
        end:'bottom bottom', 
        scrub:1
      }}
  })
    .fromTo(element, ...animation, 0)

  // gsap.timeline(element, {
  //     ...animation,
  //     markers: true,
  //     ease: Power0.ease,
  //     ...(trigger) ? {...trigger} : {
  //       scrollTrigger: {
  //       scrub: true,
  //       markers: true
  //   }}
  // });
}

export const initProjectDetailAnimation = ({ element, delay = 0, duration = 0.5, animation = null }) => {
  const tl = new TimelineMax();
  if (animation) {
      tl.fromTo(element, duration, ...animation).delay(delay);
  } else {
      tl.fromTo(element, duration, {
          scale: 5,
          opacity: 0
      }, {
          scale: 1,
          opacity: 1
      }).delay(delay);
  }
}


