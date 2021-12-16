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
          <b>Józef</b> był moim ojcem. Z Marianną Ofiarą z d. Sobień ożenił się
          w 19xx. Małżonkowie mieli Witolda, <b>Adama ur. w 1956</b> i Marię ur.
          w 1958.
        </p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
