import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/3.avif";
import useScrollManager from "../../ScrollManager";

const Tomasz = () => {
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
          Tomasz Gerczak <span>vel Gierczak</span>
        </h3>
        <img src={img} alt="..." />
        <p>
          Data narodzin mojego 4 x pradziadka nie jest znana. Ożenił się
          z&nbsp;Zofią Giel vel Gielowską. Mieszkali we wsi Jaszowice k.
          Radomia.
        </p>
        <p>
          Mieli 5 dzieci: Franciszka ur. 24.11.1816, <b>Ambrożego (✝1836)</b>,
          Michała (✝1854), Andrzeja (✝1868) i&nbsp;Mariannę (✝1916).
        </p>
        <p>
          Andrzej ożenił się w&nbsp;1837 z&nbsp;Teresą Pączek (Górniak, Gurniak,
          Gorniak, Pączkowa), której rodzicami byli Jakub i&nbsp;Magdalena. Ślub
          odbył się w&nbsp;parafii Cerekiew.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Tomasz;
