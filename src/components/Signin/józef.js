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
        <h3>Józef Gierczak</h3>
        <p>
          <b>Józef (1930-1996)</b> był moim ojcem. Z Marianną Ofiarą (1931-1987)
          z d. Sobień ożenił się w 19xx. Małżonkowie mieli Witolda,
          <b> Adama ur. w 1956</b> i Marię ur. w 1958.
        </p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
