export const menuItem = [
    {
      title: "Home",
      path: "/",
      hash: ""
    },
    {
      title: "About",
      scroll: true,
      scrollIndex: 2,
      hash: "#about"

    },
    {
      title: "Experience",
      scroll: true,
      scrollIndex: 3 ,
      hash: "#experience"
    },
    {
      title: "Work",
      path: "/work"
    },
    {
      title: "Contact",
      scroll: true,
      scrollIndex: 4
      
    }
  ];

  export   const social = [
    {
      name: "Github",
      link: "",
    },
    {
      name: "Linkden",
      link: "",
    },
    {
      name: "Twitter",
      link: "",
    },
    {
      name: "Facebook",
      link: "",
    },
  ];

  export const getActiveSlide = () => window && window.fullpage_api && window.fullpage_api.getActiveSection();
  export const scrollDownImg = "https://d33wubrfki0l68.cloudfront.net/7e3b3a9d2728197688f3806d355398381d1711d6/cd9a0/images/arrowdown.6c6ed776250c7dbb606fedcb1512036b.svg";