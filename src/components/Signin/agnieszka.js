import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/3.avif";
import useScrollManager from "../../ScrollManager";

const Agnieszka = () => {
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
          Agnieszka Gierczak z&nbsp;d. Baćmaga<span></span>
        </h3>
        <img src={img} alt="..." />
        <p>
          Moja babcia urodziła się 13.04.1894 r. z&nbsp;rodziców Kazimierza
          i&nbsp;Antonimy Szewczyk.
        </p>
        <p>
          Małżonkowie mieli ośmioro dzieci: Jana, Mariannę, Janinę, Zofię,
          Stefana, Władysława, Tadeusza i&nbsp;<b>Józefa</b> - mojego tatę.
        </p>
        <p>Pierwsza trójka zmarła we&nbsp;wczesnym dzieciństwie.</p>
      </Wrapper>
    </Container>
  );
};

export default Agnieszka;
