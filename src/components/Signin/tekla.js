import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/3.png";
import useScrollManager from "../../ScrollManager";

const Tekla = () => {
  useScrollManager();
  const { isOverlayVisible } = useContext(DarkOverlayContext);
  return (
    <Container isOverlayVisible={isOverlayVisible}>
      <Wrapper>
        <Icon to="/signin">
          <span>
            <BsArrowLeftSquareFill />
          </span>
          korzenie
        </Icon>
        <h3>
          Tekla Kozyra <span>z d. Kredowska</span>
        </h3>
        <img src={img} alt="..." />
        <p>Rodzicami Tekli byli Adam i Józefa Kredowska.</p>
      </Wrapper>
    </Container>
  );
};

export default Tekla;
