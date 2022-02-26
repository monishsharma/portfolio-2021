/**
 * Images
 */
import Covid from "../../Assets/images/projects/covid.png";
import keep from "../../Assets/images/projects/keep.png";
import PortfolioV2 from "../../Assets/images/projects/a.png";
import covid19 from '../../Assets/images/projects/covid.png'
import Desktop from "../../Assets/images/projects/v1/desktop.png"
import msite from "../../Assets/images/projects/v1/msite.png"
import Map from "../../Assets/images/projects/covid/map.png";
import allCases from "../../Assets/images/projects/covid/allcases.png";
import CovidTracker from "../../Containers/project-in-depth/covid-tracker";
import keepLaptop from "../../Assets/images/projects/keep-clone/keep-laptop.png"
import keppMobile from "../../Assets/images/projects/keep-clone/mobilelogin.png"
import mobilenote from "../../Assets/images/projects/keep-clone/mobilenote.png"
import landingd from "../../Assets/images/projects/v1/lanndingd.png";
import landingm1 from "../../Assets/images/projects/v1/landinngm1.png";
import landingm2 from "../../Assets/images/projects/v1/landingm2.png";
import loggedin from "../../Assets/images/projects/keep-clone/loggedin.png";
import loggedinm from "../../Assets/images/projects/keep-clone/loggedinm.png";
/**
 * components
 */
import PortfolioV2Component from "../Containers/project-in-depth/portfolio-v2";


export const PROJECTS = [
    
    {
        title: "Covid-19 Tracker",
        path: "covid-19-tracker",
        key: "covid-19-tracker",
        code: "",
        img: Covid,
        text: "Covid-19",
        bgColor: "#3BE47F",
        shiftYaxis: false,
        position: "bottom",
        size: "100%",
        letterSpacing: "15px",
        component: CovidTracker,
        projectImages: [
            {   
                id: 0,
                image: covid19,
                delay: 1,
                style: {
                    maxWidth:"100%",
                    zIndex: 1,
                    // left: "30%",
                    top: "-40%"
                },
                animation: [
                    {
                        y: 0
                    },
                    {
                        y: -500
                    }
                ]
            }
        ],
        details: {
            challenges: {
                heading: "Revaluating How People get updated with rising covid cases",
                label: "The Challenge",
                para: 'Representing the actual "Covid Cases" in simlpe and discrete way. It covers total cases, total recovered, total death all around the globe and country specific and maps it. ',
                projectSource: [
                    {
                        subTitle: "Demo",
                        anchorText: "Covid-19 Tracker",
                        demoLink: "https://covid-19-tracker-ab2b1.web.app"
                    },
                    {
                        subTitle: "Data Source",
                        anchorText: "Disease.sh",
                        demoLink: "https://disease.sh"
                    },
                    {
                        subTitle: "Services",
                        text: "React.js, React leaflet, Chart.js, Firebase"
                    }
                ],
                sectionImages: [
                    {
                        img: Map,
                        id: "img1"
                    },
                    {
                        img: allCases,
                        id: "img2"
                    }
                ]
            }
        }
    },
    {
        title: "Portfolio V1",
        path: "portfolio-v1",
        key: "portfolio-v1",
        code: "",
        img: PortfolioV2,
        text: "Portfolio V1",
        bgColor: "#1ea896",
        shiftYaxis: true,
        position: "30px 50px",
        size: "150%",
        letterSpacing: "0px",
        component: PortfolioV2Component,
        projectImages: [
            {   
                id: 0,
                image:  landingm1,
                delay: 1,
                style: {
                    width:"15%",
                    zIndex: 9,
                    // left: "30%",
                    top: "-15%",
                    left: "23%"
                    
                },
                animation: [
                    {
                        y: 0
                    },
                    {
                        y: -400
                    }
                ]
            },
            {   
                id: 1,
                image: landingd,
                delay: 2,
                style: {
                    width:"40%",
                    zIndex: 10,
                    top: "-15%",
                    
                },
                animation: [
                    {
                        y: 0
                    },
                    {
                        y: -100
                    }
                ]
            },
            {   
                id: 2,
                image: landingm2,
                delay: 1,
                style: {
                    width:"15%",
                    zIndex: 9,
                    right: "23%",
                    top: "-15%",
                    
                },
                animation: [
                    {
                        y: 0
                    },
                    {
                        y: -400
                    }
                ]
            },
            
        ],
        details: {
            challenges: {
                heading: "Showcasing professional information about my work.",
                label: "The Challenge",
                para: 'Portfolio of what I have been doing and learning since I started web development. Made with reusable component and responsive design  ',
                projectSource: [
                    {
                        subTitle: "Demo",
                        anchorText: "Portfolio V2",
                        demoLink: "https://monish-sharma.web.app/"
                    },
                    {
                        subTitle: "Services",
                        text: "React.js, Redux, Firebase"
                    }
                ],
                sectionImages: [
                    {
                        img: Desktop,
                        id: "img1"
                    },
                    {
                        img: msite,
                        id: "img2"
                    }
                ]
            }
        }
    },
    {
        title: "Google Keep Clone",
        path: "google-keep-clone",
        key: "google-keep-clone",
        code: "",
        img: keep,
        text: "Keep Clone",
        bgColor: "#F3B400",
        shiftYaxis: false,
        position: "bottom",
        size: "contain",
        letterSpacing: "2px",
        component: PortfolioV2Component,
        projectImages: [
            {   
                id: 0,
                image:  keppMobile,
                delay: 1,
                style: {
                    width:"15%",
                    zIndex: 9,
                    // left: "30%",
                    top: "-15%",
                    left: "23%"
                    
                },
                animation: [
                    {
                        y: 0
                    },
                    {
                        y: -400
                    }
                ]
            },
            {   
                id: 1,
                image: keepLaptop,
                delay: 2,
                style: {
                    width:"40%",
                    zIndex: 10,
                    // left: "30%",
                    top: "-15%",
                    
                },
                animation: [
                    {
                        y: 0
                    },
                    {
                        y: -100
                    }
                ]
            },
            {   
                id: 2,
                image: mobilenote,
                delay: 1,
                style: {
                    width:"15%",
                    zIndex: 9,
                    right: "23%",
                    top: "-15%",
                    
                },
                animation: [
                    {
                        y: 0
                    },
                    {
                        y: -400
                    }
                ]
            },
        ],
        details: {
            challenges: {
                heading: "Quickly write down what's on your mind.",
                label: "The Challenge",
                para: 'It has 2 types of notes. Firstly  which is public where any user can save and pin there notes. Secondly which is user based authentication with google.',
                projectSource: [
                    {
                        subTitle: "Demo",
                        anchorText: "Google Keep",
                        demoLink: "https://keep-b7764.web.app/"
                    },
                    {
                        subTitle: "Github",
                        anchorText: "Google Keep Codebase",
                        demoLink: "https://github.com/monishsharma/google-keep-clone"
                    },
                    {
                        subTitle: "Services",
                        text: "React.js, Redux, Firebase"
                    }
                ],
                sectionImages: [
                    {
                        img: loggedin,
                        id: "img1"
                    },
                    {
                        img: loggedinm,
                        id: "img2",
                        style: {
                            position: "relative",
                            top: "5%",
                            height: "80%"
                        }
                    }
                ]
            }
        }
    },

]