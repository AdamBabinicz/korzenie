import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/51.avif";
import useScrollManager from "../../ScrollManager";

const Józef = () => {
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
        <h3>Józef Gierczak</h3>
        <img src={img} alt="..." />
        <p>
          <b>Józef (1930-1996)</b> był moim ojcem. Z&nbsp;Marianną Ofiarą
          (1931-1987) z&nbsp;d. Sobień ożenił się w&nbsp;1952. Małżonkowie mieli
          Witolda,
          <b> Adama ur. w&nbsp;1956</b> i&nbsp;Marię ur. w&nbsp;1958.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Józef;
