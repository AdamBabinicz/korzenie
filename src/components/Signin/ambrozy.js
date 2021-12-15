import React from "react";
import { Container, Wrapper, Icon } from "./przodekElements";

const ambrozy = () => {
  return (
    <Container>
      <Wrapper>
        <Icon to="/signin">korzenie</Icon>
        <h3>
          Ambroży Gerczak <span>vel Gierczak</span>
        </h3>
        <p>
          Data narodzin mojego 3 x pradziadka nie jest znana. Ożenił się
          prawdopodobnie w 1820 r. z Kunegundą Kanią vel Kanionka (Koniak) c.
          Magdaleny. Mieszkali we wsi Jaszowice k. Radomia.
        </p>
        <p>
          Mieli 5 dzieci: Katarzynę ur. w 1821, Kacpra (1826-1903), Karola
          (1828-1903), Ludwikę ur. w 1831, Franciszkę ur. w 1835. Kacper ożenił
          się w Jaszowicach, zaś Karol w Gulinku.
        </p>
        <p>
          Pierwszą żoną Kacpra była Marianna Moskwa vel Moskwina. Ślub wzięli w
          1848. Mieli Jędrzeja (ur. w 1860) i Mariannę (ur. w 1860), Kacper
          owdowiał. Drugą żoną Kacpra została w 1893 wdowa, Franciszka Mortka z
          d. Indrzejoska.
        </p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
