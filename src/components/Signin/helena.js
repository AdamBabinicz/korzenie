import React, { useState, useContext } from "react";
import {
  Container,
  Wrapper,
  Icon,
  Popup,
  PopupContent,
  CloseIcon,
} from "./przodekElements";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import img from "../../images/12.avif";
import img1 from "../../images/11.avif";
import useScrollManager from "../../ScrollManager";

const Helena = () => {
  useScrollManager();
  const { isOverlayVisible } = useContext(DarkOverlayContext);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <Container isOverlayVisible={isOverlayVisible}>
      <Wrapper>
        <Icon to="/prao">
          <span>
            <BsArrowLeftSquareFill />
          </span>
          korzenie
        </Icon>
        <h3>
          Helena Ofiara z&nbsp;d. Sobień<span></span>
        </h3>
        <img src={img} alt="..." />
        <p>
          Moja babcia urodziła się w&nbsp;1905 z&nbsp;rodziców{" "}
          <span
            onClick={handlePopupOpen}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Karola i&nbsp;Ewy Drużdżel
          </span>
          .
        </p>
        <p>
          Miała siostrę Annę (ur. w&nbsp;1898, ✝1927), Zofię (ur. w&nbsp;1903),
          oraz braci: Franciszka, Jana (ur. w&nbsp;1900) i&nbsp;Józefa (ur.
          w&nbsp;1908).
        </p>
        <p>
          Z&nbsp;pierwszego małżeństwa swojej matki Ewy z&nbsp;Michałem Mitakiem
          miała również rodzeństwo przyrodnie: Weronikę (ur. w&nbsp;1886 zm.
          27.12.1998), Mariannę (ur. w&nbsp;1889 zm. 10.04.1980), Rozalię
          (ur.&nbsp;1892) i&nbsp;Jana (ur. w&nbsp; 1894)
        </p>
        <p>
          Anna wyszła za mąż w&nbsp;1920 za Władysława Kozyrę s. Józefa
          i&nbsp;Weronki Korczak.
        </p>
        <p>
          Franciszek ożenił się w&nbsp;1922 ze Stefanią Jurczak c. Mikołaja
          i&nbsp;Katarzyny Soból.
        </p>
        <p>
          Zofia wyszła za mąż w&nbsp;1922 za Michała Odzimka s. Walentego
          i&nbsp;Zofii Kowalik.
        </p>
        <p>
          Jan ożenił się w&nbsp;1926 ze Stanisławą Bocheńską c. Walentego
          i&nbsp;Marianny Zarębskiej.
        </p>
        <p>
          Była drugą żoną Józefa (ur. w 1896 w Ludwikowie) - wdowca po Rozalii z
          Mitaków (33) ✝1925;
        </p>
        <p>
          mieli sześcioro dzieci: Kazimierę, Genowefę, Andrzeja, Józefa,
          <b> Mariannę</b> - moją mamę i&nbsp;Romana.
        </p>
        <p>Pierwsza czwórka dzieci zmarła bardzo wcześnie.</p>
        <p>
          Razem z&nbsp;pozostałymi wychowywały się dzieci dziadka
          z&nbsp;pierwszego małżeństwa: Piotr, Stanisław i&nbsp;Jan.
        </p>
      </Wrapper>

      {isPopupVisible && (
        <Popup>
          <PopupContent>
            <CloseIcon onClick={handlePopupClose}>
              <IoMdClose />
            </CloseIcon>
            <img src={img1} alt="Karol i Ewa Drużdżel" />
            <p>Cmentarz parafialny w Zakrzewie</p>
            <p>Sektor: C Rząd: Id grobu: 1145</p>
          </PopupContent>
        </Popup>
      )}
    </Container>
  );
};

export default Helena;
