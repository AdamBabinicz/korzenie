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
          Tekla Kozyra <span>z d. Kredowska</span>
        </h3>
        <p>Rodzicami Tekli byli Adam i Józefa Kredowska.</p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
