import React from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const ambrozy = () => {
  return (
    <Container>
      <Wrapper>
        <Icon to="/prao">
          <span>
            <BsArrowLeftSquareFill />
          </span>
          korzenie
        </Icon>
        <h3>
          Helena Ofiara z d. Sobień<span></span>
        </h3>
        <p>
          Moja babcia urodziła się w 1905 r. z rodziców Karola i Ewy Drużdżel.
        </p>
        <p>
          Była drugą żoną Józefa (ur. w 1896 r. w Ludwikowie) - wdowca po
          Rozalii z Mitaków (33) ✝1925 r;
        </p>
        <p>
          mieli sześcioro dzieci: Kazimierę, Genowefę, Andrzeja, Józefa,
          <b> Mariannę</b> - moją mamę i Romana.
        </p>
        <p>Pierwsza czwórka dzieci zmarła bardzo wcześnie.</p>
        <p>
          Razem z pozostałymi wychowywały się dzieci dziadka z pierwszego
          małżeństwa: Piotr, Stanisław i Jan.
        </p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
