import React from "react";
import { Container, Wrapper, Icon } from "./przodekElements";

const ambrozy = () => {
  return (
    <Container>
      <Wrapper>
        <Icon to="/signin">korzenie</Icon>
        <h3>
          Paweł Gerczak <span>vel Gierczak</span>
        </h3>
        <p>
          Paweł pojął za żonę w 1887 Katarzynę Czerwińską. Mieli Adama ur. w
          1888, Józefa ur. w 1890, Jana ur. w 1890, Zofię ur. w 1900, Stanisława
          ur. w 1893, Franciszka ur. w 1910 i Stanisławę ur. w 1911.
        </p>
        <p>Paweł był dziadkiem mojego ojca Józefa ur. w 1930.</p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
