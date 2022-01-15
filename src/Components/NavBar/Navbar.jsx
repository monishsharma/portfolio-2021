import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Navbar.css";
import fullpage from "fullpage.js";

function Navbar(props) {
  const hamburger = useRef();
  const refContainer = useRef();
  const [nav, setNav] = useState(false);
  const [menuItem, setmenuItem] = useState([
    "Home",
    "About",
    "Experience",
    "Work",
    "Contact",
  ]);
  const [social, setsocial] = useState([
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
  ]);

  const toogleNav = () => {
    localStorage.setItem('nav',!nav)
    setNav(!nav);
    refContainer.current.classList.toggle("open");
    hamburger.current.classList.toggle("opens");
  };

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

          <img src="https://d33wubrfki0l68.cloudfront.net/7e3b3a9d2728197688f3806d355398381d1711d6/cd9a0/images/arrowdown.6c6ed776250c7dbb606fedcb1512036b.svg" />
        </div>
        <div className="navbar__content__container" ref={refContainer}>
          <div className="container">
            <Row>
              <Col md={{ span: 5, offset: 1 }} className="mainNav__left">
                <React.Fragment>
                  {menuItem.map((item, index) => {
                    return (
                      <a className="mainNav__link__main" href="">
                        {item}
                      </a>
                    );
                  })}
                </React.Fragment>
              </Col>
              <Col xs={{ span: 2, offset: 2 }} className="mainNav__right">
                {social.map((item, index) => {
                  return (
                    <a
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
