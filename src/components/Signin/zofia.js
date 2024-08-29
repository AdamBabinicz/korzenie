import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/3.avif";
import useScrollManager from "../../ScrollManager";

const Zofia = () => {
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
          Zofia Gerczak <span>vel Gierczak z&nbsp;d. Gielowska</span>
        </h3>
        <img src={img} alt="..." />
        <p>Brak dostępu do danych.</p>
      </Wrapper>
    </Container>
  );
};

export default Zofia;
