import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/andrzej1.avif";
import useScrollManager from "../../ScrollManager";

const Andrzej = () => {
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
          Andrzej Ofiara <span></span>
        </h3>
        <img src={img} alt="..." />
        <p>
          Data narodzin mojego pradziadka nie jest znana. Ożenił się
          z&nbsp;Franciszką Szaruch (Saruch).
        </p>
        <p>
          Mieli 4 dzieci: Ignacego, Antoniego, <b>Józefa (mojego dziadka)</b>{" "}
          i&nbsp;Katarzynę (Piwowarczyk ✝09.11.1944).
        </p>
        <p>
          Ignacy w&nbsp;1908 ożenił się z&nbsp;wdową po Józefie, Katarzyną
          Sikorską (Jurczak) c. Andrzeja i&nbsp;Marianny Hudzik. Ślub odbył się
          w&nbsp;Błotnicy.
        </p>
        <p>
          Antoni ożenił się w&nbsp;1910 z&nbsp;wdową po Szczepanie, Rozalią
          Rojek (Drużdżel) c. Kazimierza i&nbsp;Małgorzaty Podkowiak.
        </p>
        <p>
          Józef pojął za żonę Rozalię Mitak c. Michała i&nbsp;Ewy Drużdżel
          w&nbsp;1918.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Andrzej;
