import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const GiTreeRootsIcon = styled.div`
  font-size: 3rem;
  color: rgba(245, 243, 243, 0.7);
  margin: 1rem 0;
`;

export const ArrowIcon = styled.div`
  font-size: 3rem;
  color: rgb(90, 89, 89);
  margin: 1rem 0;
`;

export const NavLogo = styled(LinkR)`
  color: rgb(245, 243, 243);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: normal;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgb(170, 169, 169);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: rgb(245, 243, 243);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: rgba(245, 243, 243, 0.7);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.active {
    border-bottom: 3px solid #ccc;
    width: 100%;
  }

  &:hover {
    color: rgb(245, 243, 243);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #ccc;
  white-space: nowrap;
  padding: 10px 22px;
  color: #333;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    background: rgb(90, 89, 89);
    color: rgb(245, 243, 243);
  }
`;
