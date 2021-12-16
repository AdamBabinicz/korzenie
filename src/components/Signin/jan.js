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
        <h3>Jan Gierczak</h3>
        <p>
          Jan był ojcem mojego ojca Józefa. Z Agnieszką Baćmagą z d. Szewczyk
          ożenił się w 1917.
        </p>
        <p></p>
        <p>
          Małżonkowie mieli Jana, Mariannę, Janinę, Stefana (1921-2017),
          Władysława, Tadeusza (192x-1974), Józefa (1930-1996) i Zofię.
        </p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
