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
          Paweł Gerczak <span>vel Gierczak</span>
        </h3>
        <p>
          <b>Paweł</b> pojął za żonę w 1887 Katarzynę Czerwińską. Mieli Józefę,
          Adama ur. w 1888 (✝06.03.1889 - 3 miesiące), Józefa ur. w 1890 (✝1890
          - 6 tyg.),
          <b> Jana ur. w 1890</b>, Stanisława ur. w 1893, Zofię ur. w 1900,
          Rozalię (✝1906), Franciszka ur. w 1910 i Stanisławę ur. w 1911 (✝1911
          - 3 tyg.).
        </p>
        <p>Józefa wyszła za mąż w 1928 za wdowca Władysława Walczaka.</p>
        <p>Paweł był dziadkiem mojego ojca Józefa ur. w 1930.</p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
