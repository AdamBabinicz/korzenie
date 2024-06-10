import React, { useContext } from "react";
import { Container, Wrapper, Icon } from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/45.png";

const Jan = () => {
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
        <h3>Jan Gierczak</h3>
        <img src={img} alt="..." />
        <p>
          <b>Jan</b> był ojcem mojego ojca <b>Józefa</b>. Z Agnieszką Baćmagą z
          d. Szewczyk ożenił się w 1917.
        </p>
        <p>
          Małżonkowie mieli Jana (żył 2 dni, ✝1918), Mariannę (żyła 2 tygodnie,
          ✝1918), Janinę (żyła 8 tygodni, ✝1920), Stefana (1921-2017),
          Władysława (1923-02.12.2004), Tadeusza (192x-1974),
          <b> Józefa (1930-1996)</b> i Zofię (19xx-2022).
        </p>
      </Wrapper>
    </Container>
  );
};

export default Jan;
