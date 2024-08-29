import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/43.avif";
import useScrollManager from "../../ScrollManager";

const Marianna = () => {
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
        <h3>Marianna Gierczak z&nbsp;d. Ofiara</h3>
        <img src={img} alt="..." />
        <p>
          <b>Marianna (1931-1987)</b> była moją mamą. Za Józefa Gierczaka
          (1930-1996), sąsiada zza miedzy, wyszła w&nbsp;1952. Małżonkowie mieli
          Witolda,
          <b> Adama ur. w&nbsp;1956</b> i&nbsp;Marię ur. w&nbsp;1958.
        </p>
        <p>Witold zmarł jako roczne dziecko.</p>
      </Wrapper>
    </Container>
  );
};

export default Marianna;
