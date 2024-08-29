import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/3.avif";
import useScrollManager from "../../ScrollManager";

const Jozef = () => {
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
          Józef Ofiara <span></span>
        </h3>
        <img src={img} alt="..." />
        <p>
          Mój dziadek urodził się w&nbsp;1896 w&nbsp;Ludwikowie k. Jedlińska.
          W&nbsp;1918 poślubił Rozalię z&nbsp;d. Mitak c. Michała i&nbsp;Ewy
          Drużdżel.
        </p>
        <p>
          Z&nbsp;tego małżeństwa mieli trzech synów: Stanisława ur. w 1919,
          Piotra (ur. 1921 zm. 03.06.2004) i Jana.
        </p>
        <p>
          Po śmierci Rozalii (33) ożenił się w&nbsp;1926 z&nbsp;Heleną Sobień c.
          Karola i&nbsp;Ewy Drużdżel.
        </p>
        <p>
          Z&nbsp;tego związku mieli Józefa (zmarł 09.01.1927 jako 2 tygodniowe
          dziecko), Andrzeja (zmarł 07.01.1928 jako 2 tygodniowe dziecko),
          Genowefę (zmarła 16.08.1930 jako 3 tygodniowe dziecko), Kazimierę
          (zmarła 09.08.1935 jako półtoraroczne dziecko),
          <b> Mariannę - moją mamę</b> i&nbsp;Romana. Pierwsza czwórka dzieci
          zmarła bardzo wcześnie.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Jozef;
