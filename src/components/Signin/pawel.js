import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/3.avif";
import useScrollManager from "../../ScrollManager";

const Pawel = () => {
  useScrollManager();
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
          <b>Paweł</b> pojął za żonę w&nbsp;1887 Katarzynę Czerwińską c.
          Mateusza i&nbsp;Marianny Kieragi. Mieli Józefę, Adama ur. w&nbsp;1888
          (✝06.03.1889 - 3 miesiące), Józefa ur. w&nbsp;1890 (✝1890 - 6 tyg.),
          <b> Jana ur. w&nbsp;1890</b>, Stanisława ur. w&nbsp; 1893, Zofię ur.
          w&nbsp;1900, Antoniego ur. w&nbsp;1903, Rozalię (✝1906), Franciszka
          ur. w&nbsp;1910 i&nbsp;Stanisławę ur. w&nbsp;1911 (✝1911 - 3 tyg.).
        </p>
        <p>
          Stanisław ożenił się w&nbsp;1921 z&nbsp;Anielą Burakowską c. Andrzeja
          i&nbsp;Teofili w&nbsp;parafii Błotnica.
        </p>
        <p>
          Władysław pojął za żonę w&nbsp;1924 Stanisławę Jabłonkę c. Marcina
          i&nbsp;Józefy Głogoskiej. Nażeczona pochodziła z&nbsp;Zatopolic p.
          Cerekiew.
        </p>
        <p>
          Antoni wziął za żonę Honoratę Musiałek c. Franciszka i&nbsp;Józefy
          Banasiak. Ślub odbył się w&nbsp;1931 w&nbsp;Zakrzewie (Zakrzowie).
        </p>
        <p>
          Franciszek ożenił się w&nbsp;1932 z&nbsp;Feliksą Szczygłowską c. Jana
          i&nbsp;Karoliny Kozłowskiej. Ślub odbył się w&nbsp;parafii
          Kowala-Stępocina.
        </p>
        <p>Józefa wyszła za mąż w&nbsp;1928 za wdowca Władysława Walczaka.</p>
        <p>Paweł był dziadkiem mojego ojca Józefa ur. w&nbsp;1930.</p>
      </Wrapper>
    </Container>
  );
};

export default Pawel;
