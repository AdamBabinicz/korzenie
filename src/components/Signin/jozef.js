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
          Z tego małżeństwa mieli trzech synów: Stanisława ur. w 1919, Piotra
          (ur. 1921 zm. 03.06.2004) i Jana.
        </p>
        <p>
          Po śmierci Rozalii (33) ożenił się w 1926 z Heleną Sobień c. Karola i
          Ewy Drużdżel.
        </p>
        <p>
          Z tego związku mieli Józefa (zmarł 09.01.1927 jako 2 tygodniowe
          dziecko), Andrzeja (zmarł 07.01.1928 jako 2 tygodniowe dziecko),
          Genowefę (zmarła 16.08.1930 jako 3 tygodniowe dziecko), Kazimierę
          (zmarła 09.08.1935 jako półtoraroczne dziecko),
          <b> Mariannę - moją mamę</b> i Romana. Pierwsza czwórka dzieci zmarła
          bardzo wcześnie.
        </p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
