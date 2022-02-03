import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import gmail from "../../Assets/images/gmail.png"

function Navbar({
  toggleNavConnect
}) {
  const history = useHistory();
  const hamburger = useRef();
  const refContainer = useRef();
  const [nav, setNav] = useState(false);
  const menuItem = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Experience",
      path: "/experience"
    },
    {
      title: "Work",
      path: "/work"
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ];
  const social = [
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

  useEffect(() => {
    const navigation =  document.querySelector('#fp-nav');
    if (navigation) {
      if (nav) {
        navigation.classList.add('hide'); 
      } else  {
        navigation.classList.remove('hide');
      }
    window.fullpage_api.setAllowScrolling(!nav);

    }
    
  }, [nav])

  const toogleNav = () => {
    const navigation =  document.querySelector('#fp-nav');
    const toggleNav = !nav;
    setNav(toggleNav);
    toggleNavConnect(toggleNav);
    if (navigation) window.fullpage_api.setAllowScrolling(nav);
    refContainer.current.classList.toggle("open");
    hamburger.current.classList.toggle("opens");
  };

  const moveDown = () => {
    window.fullpage_api.moveSectionDown();
  }

  const goToRoute = (item) => {
    refContainer.current.classList.toggle("open");
    setNav(!nav);
    hamburger.current.classList.toggle("opens");
    history.push(item.path);
  }

  return (
    <React.Fragment>
      <div className="nav__container">
        <div className="overlay__sides overlay__left">
          <div className="logo">Monish</div>
          <div className="navbar__custom" onClick={toogleNav} ref={hamburger}>
            <div className="navbar__top"></div>
            <div className="navbar__middle"></div>
            <div className="navbar__bottom"></div>
          </div>
          <a href="mailto:sharma.monish17@gmail.com" className="logo email">
            sharma.monish17@gmail.com
          </a>
        </div>
        <div className="overlay__sides overlay__right">
          <button className="portfolio__btn">Hire Me</button>
          <img alt ="m" onClick={moveDown} src="https://d33wubrfki0l68.cloudfront.net/7e3b3a9d2728197688f3806d355398381d1711d6/cd9a0/images/arrowdown.6c6ed776250c7dbb606fedcb1512036b.svg" />
        </div>
        <div className="navbar__content__container" ref={refContainer}>
          <div className="container">
            <Row>
              <Col md={{ span: 5, offset: 1 }} className="mainNav__left">
                <React.Fragment>
                  {menuItem.map((item, index) => {
                    return (
                      <a onClick={() => goToRoute(item)} key={index} className="mainNav__link__main" >
                        {item.title}
                      </a>
                    );
                  })}
                </React.Fragment>
              </Col>
              <Col xs={{ span: 2, offset: 2 }} className="mainNav__right">
                {social.map((item, index) => {
                  return (
                    <a
                      rel="noreferrer"
                      href={item.link}
                      target="_blank"
                      className="mainNav__link__social"
                    >
                      {item.name}
                    </a>
                  );
                })}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
