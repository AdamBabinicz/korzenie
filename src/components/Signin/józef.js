import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/46.png";

const Józef = () => {
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
        <h3>Józef Gierczak</h3>
        <img src={img} alt="..." />
        <p>
          <b>Józef (1930-1996)</b> był moim ojcem. Z Marianną Ofiarą (1931-1987)
          z d. Sobień ożenił się w 1952. Małżonkowie mieli Witolda,
          <b> Adama ur. w 1956</b> i&nbsp;Marię ur. w 1958.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Józef;
