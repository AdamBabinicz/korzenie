import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/3.png";

const Pawel = () => {
  const { isOverlayVisible } = useContext(DarkOverlayContext);
  return (
    <Container isOverlayVisible={isOverlayVisible}>
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
        <img src={img} alt="..." />
        <p>
          <b>Paweł</b> pojął za żonę w 1887 Katarzynę Czerwińską c. Marianny
          Kieragi. Mieli Józefę, Adama ur. w 1888 (✝06.03.1889 - 3 miesiące),
          Józefa ur. w 1890 (✝1890 - 6 tyg.),
          <b> Jana ur. w 1890</b>, Stanisława ur. w 1893, Zofię ur. w 1900,
          Antoniego ur. w 1903, Rozalię (✝1906), Franciszka ur. w 1910 i
          Stanisławę ur. w 1911 (✝1911 - 3 tyg.).
        </p>
        <p>
          Syanisław ożenił się w 1921 z Anielą Burakowską c. Andrzeja i Teofili
          w parafii Błotnica.
        </p>
        <p>
          Władysław pojął za żonę w 1924 Stanisławę Jabłonkę c. Marcina i Józefy
          Głogoskiej. Nażeczona pochodziła z Zatopolic p. Cerekiew.
        </p>
        <p>
          Antoni wziął za żonę Honoratę Musiałek c. Franciszka i Józefy
          Banasiak. Ślub odbył się w 1931 w Zakrzewie (Zakrzowie).
        </p>
        <p>
          Franciszek ożenił się w 1932 z Feliksą Szczygłowską c. Jana i Karoliny
          Kozłowskiej. Ślub odbył się w parafii Kowala-Stępocina.
        </p>
        <p>Józefa wyszła za mąż w 1928 za wdowca Władysława Walczaka.</p>
        <p>Paweł był dziadkiem mojego ojca Józefa ur. w 1930.</p>
      </Wrapper>
    </Container>
  );
};

export default Pawel;
