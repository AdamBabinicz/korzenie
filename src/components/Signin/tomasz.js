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
          Tomasz Gerczak <span>vel Gierczak</span>
        </h3>
        <p>
          Data narodzin mojego 4 x pradziadka nie jest znana. Ożenił się z Zofią
          Giel vel Gielowską. Mieszkali we wsi Jaszowice k. Radomia.
        </p>
        <p>
          Mieli 4 dzieci: <b>Ambrożego (✝1836)</b>, Michała (✝1854), Andrzeja
          (✝1868) i Mariannę (✝1916).
        </p>
        <p>
          Andrzej ożenił się w 1837 z Teresą Pączek (Górniak, Gurniak, Gorniak,
          Pączkowa), której rodzicami byli Jakub i Magdalena. Ślub odbył się w
          parafii Cerekiew.
        </p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
