import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/3.png";

const Andrzej = () => {
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
          Andrzej Ofiara <span></span>
        </h3>
        <img src={img} alt="..." />
        <p>
          Data narodzin mojego pradziadka nie jest znana. Ożenił się z
          Franciszką Szaruch (Saruch).
        </p>
        <p>
          Mieli 4 dzieci: Ignacego, Antoniego, <b>Józefa (mojego dziadka)</b> i
          Katarzynę (Piwowarczyk ✝09.11.1944).
        </p>
        <p>
          Ignacy w 1908 ożenił się z wdową po Józefie, Katarzyną Sikorską
          (Jurczak) c. Andrzeja i Marianny Hudzik. Ślub odbył się w Błotnicy.
        </p>
        <p>
          Antoni ożenił się w 1910 z wdową po Szczepanie, Rozalią Rojek
          (Drużdżel) c. Kazimierza i Małgorzaty Podkowiak.
        </p>
        <p>
          Józef pojął za żonę Rozalię Mitak c. Michała i Ewy Drużdżel w 1918.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Andrzej;
