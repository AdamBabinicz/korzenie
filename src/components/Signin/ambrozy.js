import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/ambrozy3.png";
import useScrollManager from "../../ScrollManager";

const Ambrozy = () => {
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
          Ambroży Gerczak <span>vel Gierczak</span>
        </h3>
        <img src={img} alt="..." />
        <p>
          Data narodzin mojego 3 x pradziadka nie jest znana. Należy
          domniemywać, że urodził się pod koniec XVIII w. lub na początku XIX w.
          Zmarł w&nbsp;1836.
        </p>
        <p>
          Ożenił się prawdopodobnie w&nbsp;1820 z&nbsp;Kunegundą Kanią vel
          Kanionka (Koniak) c. Magdaleny. Mieszkali we wsi Jaszowice k. Radomia.
        </p>
        <p>
          Mieli 8 dzieci: Józefę, Jadwigę (✝1884), Mariannę ur. w&nbsp;1833,
          Katarzynę ✝1821, Kacpra (1826-1903), <b>Karola (1828-1903)</b>,
          Ludwikę ur. w&nbsp;1831, Franciszkę ur. w&nbsp;1835. Kacper ożenił się
          w&nbsp;Jaszowicach, zaś Karol w&nbsp;Gulinku. Pierwszą żoną Kacpra
          była Marianna Moskwa vel Moskwina. Ślub wzięli w&nbsp;1848. Mieli
          Jędrzeja (ur. w 1859) i&nbsp;Mariannę (ur. w 1857, ✝1860), Kacper
          owdowiał. Drugą żoną Kacpra została w&nbsp;1893 wdowa, Franciszka
          Mortka z&nbsp;d. Indrzejoska.
        </p>
        <p>
          Józefa w&nbsp;1841 wyszła za mąż za Józefa Wierachę. Jadwiga poślubiła
          w&nbsp;1842 Franciszka Kornafela. Marianna wstąpiła w&nbsp;związek
          małżeńki w&nbsp;1852 z&nbsp;Antonim Stępniem.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Ambrozy;
