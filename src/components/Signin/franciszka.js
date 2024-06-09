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
          Franciszka Szaruch <span></span>
        </h3>
        <p>Brak danych.</p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
