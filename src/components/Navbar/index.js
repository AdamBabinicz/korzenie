import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  GiTreeRootsIcon,
} from "./NavbarElements";
import { GiTreeRoots } from "react-icons/gi";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(245, 243, 243)" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <GiTreeRootsIcon>
              <GiTreeRoots />
            </GiTreeRootsIcon>
            <NavLogo to="/" onClick={toggleHome}>
              rody Gierczaków i&nbsp;Ofiarów
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="jan"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Jan
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="helena"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Helena
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="marianna"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Marianna
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="jozef"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Józef
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Archiwum
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/prag">Gierczak</NavBtnLink>
              <NavBtnLink to="/prao">Ofiara</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
