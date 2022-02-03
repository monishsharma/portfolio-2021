import Covid from "../../../Assets/images/projects/covid.png";
import Github from "../../../Assets/images/projects/github.png";
import PortfolioV2 from "../../../Assets/images/projects/a.png";
import  Laptop from "../../../Assets/images/Xamidea/laptop.png";
import  E1 from "../../../Assets/images/f.png";
import covid19 from '../../../Assets/images/projects/covid.png'
import ProjectSectionDetail from "../../project-detail/detail";
import Desktop from "../../../Assets/images/projects/v1/desktop.png"
import msite from "../../../Assets/images/projects/v1/msite.png"
import Map from "../../../Assets/images/projects/covid/map.png";
import allCases from "../../../Assets/images/projects/covid/allcases.png";

export const PROJECTS = [
    
    {
        title: "Covid-19 Tracker",
        path: "covid-19-tracker",
        key: "covid-19-tracker",
        code: "",
        img: Covid,
        text: "Covid-19",
        bgColor: "#3BE47F",
        shiftYaxis: true,
        position: "bottom",
        size: "100%",
        letterSpacing: "15px",
        component: ProjectSectionDetail,
        projectImages: [
            {   
                id: 0,
                image: covid19,
                delay: 2,
                style: {
                    maxWidth:"100%",
                    zIndex: 1,
                    // left: "30%",
                    top: "-40%"
                },
                animation: {
                    y: -500
                }
            }
        ],
        details: {
            challenges: {
                heading: "Revaluating How People get udapted with rising covid cases",
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
        text: "Portfolio V2",
        bgColor: "#1ea896",
        shiftYaxis: false,
        position: "30px 50px",
        size: "150%",
        letterSpacing: "0px",
        component: ProjectSectionDetail,
        projectImages: [
            {   
                id: 0,
                image: E1,
                delay: 2
            },
            {
                id: 1,
                image: Laptop,
                delay: 3
            }
            
        ],
        details: {
            challenges: {
                heading: "Showcasing professional information about my work.",
                label: "The Challenge",
                para: 'Focuses on building reusable components and responsive design',
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
        title: "Github Battle",
        path: "github",
        key: "github",
        code: "",
        img: Github,
        text: "Github",
        bgColor: "#000000",
        shiftYaxis: true,
        position: "center",
        size: "contain",
        letterSpacing: "20px",
        component: ProjectSectionDetail,
        projectImages: [
            {   
                id: 0,
                image: E1,
                delay: 2
            },
            {
                id: 1,
                image: Laptop,
                delay: 3
            }
            
        ],
        details: {
            challenges: {
                heading: "Revaluating How People get udapted with rising covid cases",
                label: "The Challenge",
                para: '"Be fast, have no regrets.” - the greatest error is not to move" and speed trumps perfection when it comes to dealing with an outbreak such as #coronavirus',
                projectSource: [
                    {
                        subTitle: "Demo",
                        anchorText: "Covid-19 Tracker",
                        demoLink: "https://covid-19-tracker-ab2b1.web.app"
                    },
                    {
                        subTitle: "Services",
                        text: "React.js, React leaflet, Chart.js, Firebase"
                    }
                ]
            }
        }
    },

]