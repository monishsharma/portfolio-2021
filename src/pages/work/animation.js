import { gsap, Power3 } from "gsap/gsap-core";

export const bottomToTopAnimation = (element) => {
    if (element) {
        gsap.fromTo(
            element,
            2,
            {
                opacity: 0,
                y: 300,
                ease: Power3.easeOut,
            },
            {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut,
            }
        );
    }
}