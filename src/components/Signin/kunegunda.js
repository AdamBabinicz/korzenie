import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/3.avif";
import useScrollManager from "../../ScrollManager";

const Kunegunda = () => {
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
          Kunegunda Gerczak <span>vel Gierczak z&nbsp;d. Kania</span>
        </h3>
        <img src={img} alt="..." />
        <p>Rodzicami Kunegundy byli Stanisław i&nbsp;Magdalena.</p>
        <p>
          Po śmierci Ambrożego wyszła za mąż w&nbsp;1837 za Mikołaja
          Remisiewskiego syna Łukasza i&nbsp;Moniki Łosiak.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Kunegunda;
