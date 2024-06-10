import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/43.png";

const Marianna = () => {
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
        <h3>Marianna Gierczak z d. Ofiara</h3>
        <img src={img} alt="..." />
        <p>
          <b>Marianna (1931-1987)</b> była moią mamą. Za Józefa Gierczaka
          (1930-1996), sąsiada zza miedzy, wyszła w 1952. Małżonkowie mieli
          Witolda,
          <b> Adama ur. w 1956</b> i Marię ur. w 1958.
        </p>
        <p>Witold zmarł jako roczne dziecko.</p>
      </Wrapper>
    </Container>
  );
};

export default Marianna;
