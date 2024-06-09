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
          Katarzyna Czerwińska <span>z d. Kieraga</span>
        </h3>
        <p>Rodzicami Katarzyny byli Mateusz i Marianna Kieraga.</p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
