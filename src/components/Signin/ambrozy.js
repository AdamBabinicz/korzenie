import React from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const ambrozy = () => {
  return (
    <Container>
      <Wrapper>
        <Icon to="/signin">
          <span>
            <BsArrowLeftSquareFill />
          </span>
          korzenie
        </Icon>
        <h3>
          Ambroży Gerczak <span>vel Gierczak</span>
        </h3>
        <p>
          Data narodzin mojego 3 x pradziadka nie jest znana. Ożenił się
          prawdopodobnie w 1820 r. z Kunegundą Kanią vel Kanionka (Koniak) c.
          Magdaleny. Mieszkali we wsi Jaszowice k. Radomia.
        </p>
        <p>
          Mieli 8 dzieci: Józefę, Jadwigę, Mariannę, Katarzynę ur. w 1821,
          Kacpra (1826-1903), <b>Karola (1828-1903)</b>, Ludwikę ur. w 1831,
          Franciszkę ur. w 1835. Kacper ożenił się w Jaszowicach, zaś Karol w
          Gulinku. Pierwszą żoną Kacpra była Marianna Moskwa vel Moskwina. Ślub
          wzięli w 1848. Mieli Jędrzeja (ur. w 1860) i Mariannę (ur. w 1860),
          Kacper owdowiał. Drugą żoną Kacpra została w 1893 wdowa, Franciszka
          Mortka z d. Indrzejoska.
        </p>
        <p>
          Józefa w 1841 wyszła za mąż za Józefa Wierachę. Jadwiga poślubiła w
          1842 Franciszka Kornafela. Marianna wstąpiła w związek małżeńki w 1852
          z Antonim Stępniem.
        </p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
