import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/12.avif";
import useScrollManager from "../../ScrollManager";

const Helena = () => {
  useScrollManager();
  const { isOverlayVisible } = useContext(DarkOverlayContext);
  return (
    <Container isOverlayVisible={isOverlayVisible}>
      <Wrapper>
        <Icon to="/prao">
          <span>
            <BsArrowLeftSquareFill />
          </span>
          korzenie
        </Icon>
        <h3>
          Helena Ofiara z&nbsp;d. Sobień<span></span>
        </h3>
        <img src={img} alt="..." />
        <p>
          Moja babcia urodziła się w&nbsp;1905 z&nbsp;rodziców Karola i&nbsp;Ewy
          Drużdżel.
        </p>
        <p>
          Była drugą żoną Józefa (ur. w 1896 w Ludwikowie) - wdowca po Rozalii z
          Mitaków (33) ✝1925;
        </p>
        <p>
          mieli sześcioro dzieci: Kazimierę, Genowefę, Andrzeja, Józefa,
          <b> Mariannę</b> - moją mamę i&nbsp;Romana.
        </p>
        <p>Pierwsza czwórka dzieci zmarła bardzo wcześnie.</p>
        <p>
          Razem z&nbsp;pozostałymi wychowywały się dzieci dziadka
          z&nbsp;pierwszego małżeństwa: Piotr, Stanisław i&nbsp;Jan.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Helena;
