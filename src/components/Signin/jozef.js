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
          Józef Ofiara <span></span>
        </h3>
        <p>
          Mój dziadek urodził się w 1896 w Ludwikowie k. Jedlińska. W 1918
          poślubił Rozalię z d. Mitak c. Michała i Ewy Drużdżel.
        </p>
        <p>
          Z tego małżeństwa mieli trzech synów: Stanisława ur. w 1919, Piotra i
          Jana.
        </p>
        <p>
          Po śmierci Rozalii (33) ożenił się w 1926 z Heleną Sobień c. Karola i
          Ewy Drużdżel.
        </p>
        <p>
          Z tego związku mieli Józefa (✝1927), Andrzeja (✝1928), Genowefę
          (✝1930), Kazimierę (✝1935),
          <b> Mariannę - moją mamę</b> i Romana. Pierwsza czwórka dzieci zmarła
          bardzo wcześnie.
        </p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
