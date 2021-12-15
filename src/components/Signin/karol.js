import React from "react";
import { Container, Wrapper, Icon } from "./przodekElements";

const ambrozy = () => {
  return (
    <Container>
      <Wrapper>
        <Icon to="/signin">korzenie</Icon>
        <h3>
          Karol Gerczak <span>vel Gierczak</span>
        </h3>
        <p>
          Karol był trzecim dzieckiem Ambrożego i Kunegundy. Żoną Karola została
          w dn. 23.11.1857 r. Tekla Kozyra vel Kozera z d. Adamczyk (1831-1909).
        </p>
        <p>
          Karol zamieszkał z Teklą w Gulinku. Oboje małżonkowie doczakali się 3
          dzieci: Pawła (1867-1935), Antoniny ur. w 1869 i Józefy ur. w 1872.
        </p>
      </Wrapper>
    </Container>
  );
};

export default ambrozy;
