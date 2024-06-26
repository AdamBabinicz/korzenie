import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/3.png";
import useScrollManager from "../../ScrollManager";

const Karol = () => {
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
          Karol Gerczak <span>vel Gierczak</span>
        </h3>
        <img src={img} alt="..." />
        <p>
          <b>Karol</b> był trzecim dzieckiem Ambrożego i Kunegundy. Żoną Karola
          została w dn. 23.11.1857 Tekla Kozyra vel Kozera z d. Adamczyk
          (1831-1909).
        </p>
        <p>
          Karol zamieszkał z Teklą w Gulinku. Oboje małżonkowie doczakali się 3
          dzieci: <b>Pawła (1867-1935)</b>, Antoniny ur. w 1869 i Józefy ur. w
          1872.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Karol;
