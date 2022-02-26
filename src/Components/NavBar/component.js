/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { getActiveSlide, menuItem, social, scrollDownImg } from "./selector";

function Navbar({
  toggleNavConnect
}) {
  const history = useHistory();
  const hamburger = useRef();
  const refContainer = useRef();
  const [nav, setNav] = useState(false);
  const isScrollIndexPresent = Object.keys(history.location).includes("scrollIndex");

  useEffect(() => {
    const navigation = document.querySelector('#fp-nav');
    if (navigation) {
      if (nav) {
        navigation.classList.add('hide');
      } else {
        navigation.classList.remove('hide');
      }
      window.fullpage_api.setAllowScrolling(!nav);

    }

  }, [nav])

  const toggleHamburger = () => hamburger.current.classList.toggle("opens");
  const toggleNavbar = () => refContainer.current.classList.toggle("open");

  const toogleNav = () => {
    const navigation = document.querySelector('#fp-nav');
    const toggleNav = !nav;
    setNav(toggleNav);
    toggleNavConnect(toggleNav);
    if (navigation) window.fullpage_api.setAllowScrolling(nav);
    toggleNavbar();
    toggleHamburger();
  };

  const moveDown = () => {
    window.fullpage_api.moveSectionDown();
  }

  const toggleScrollAndPush = (item) => {
    if (history.location.pathname.includes("/work")) {
      if (item.scroll) {
        history.push({
          pathname: "/",
          scrollIndex: item.scrollIndex
        })
      } else {
        history.push("/");
      }
    } else {
      if (item.scroll) {
        window.fullpage_api.moveTo(item.scrollIndex);
      } else {
        if (history.location.hash) {
          if (item.title === "Work") {
            history.push(item.path);
          } else {
            window.fullpage_api.moveTo(1);
          }
        } else {
          history.push(item.path);
        }
      }
    }
  }
  const goToRoute = (item) => {
    toggleNavbar();
    setNav(!nav);
    toggleHamburger();
    toggleScrollAndPush(item)
  }

  const getActiveClass = (item) => {
    let className = "mainNav__link__main";
    if (item.scroll && history.location.pathname === "/" && !isScrollIndexPresent) {
      if (item.hash === history.location.hash) {
        className = "mainNav__link__main active";
      }
    } else {
      if (item && item.title === "Work") {
        if (history.location.pathname.includes(item.path)) {
          className = "mainNav__link__main active";
        }
      }
      console.log(history)
      if (history.location.pathname === "/" && item.hash === history.location.hash) {
        className = "mainNav__link__main active";
      }
    }
    return className;
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
          <img alt="m" onClick={moveDown} src={scrollDownImg} />
        </div>
        <div className="navbar__content__container" ref={refContainer}>
          <div className="container">
            <Row>
              <Col md={{ span: 5, offset: 1 }} className="mainNav__left">
                <React.Fragment>
                  {menuItem.map((item, index) => {
                    return (
                      <a onClick={() => goToRoute(item)} key={index} className={getActiveClass(item)} >
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
                      key={index}
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
