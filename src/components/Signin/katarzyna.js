import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/3.png";
import useScrollManager from "../../ScrollManager";

const Katarzyna = () => {
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
          Katarzyna Czerwińska <span>z d. Kieraga</span>
        </h3>
        <img src={img} alt="..." />
        <p>Rodzicami Katarzyny byli Mateusz i Marianna Kieraga.</p>
      </Wrapper>
    </Container>
  );
};

export default Katarzyna;
