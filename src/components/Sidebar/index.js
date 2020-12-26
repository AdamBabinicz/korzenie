import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="jan" onClick={toggle}>
            Jan
          </SidebarLink>
          <SidebarLink to="helena" onClick={toggle}>
            Helena
          </SidebarLink>
          <SidebarLink to="marianna" onClick={toggle}>
            Marianna
          </SidebarLink>
          <SidebarLink to="jozef" onClick={toggle}>
            Józef
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Archiwum
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/prag" onClick={toggle}>
            Gierczak
          </SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute to="/prao" onClick={toggle}>
            Ofiara
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
