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
          Andrzej Ofiara <span></span>
        </h3>
        <p>
          Data narodzin mojego pradziadka nie jest znana. Ożenił się z
          Franciszką Szaruch (Saruch).
        </p>
        <p>
          Mieli 4 dzieci: Ignacego, Antoniego, <b>Józefa (mojego dziadka)</b> i
          Katarzynę (Piwowarczyk ✝1944).
        </p>
        <p>Ignacy w 1908 r. ożenił się z wdową Katarzyną Sikorską (Jurczak).</p>
        <p>
          Antoni ożenił się w 1910 r. z wdową Rozalią Rojek (Drużdżel). Józef
          pojął za żonę Rozalię Mitak w 1918 r.
        </p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
