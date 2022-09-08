import React, { useState } from "react";
import Icon1 from "../../images/2.jpg";
import Icon2 from "../../images/4.jpg";
import Icon3 from "../../images/6.jpg";
import Icon4 from "../../images/11.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import "./services.css";
import { FaTimes } from "react-icons/fa";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <ServicesContainer id="services">
      <ServicesH1>Archiwum</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={() => toggleTab(1)}>
          <ServicesIcon src={Icon1} alt={Icon1} />
          <ServicesH2>Nieznane osoby</ServicesH2>
          <ServicesP>Prawdopodobnie rodzice mojej babci Heleny.</ServicesP>
        </ServicesCard>

        <div
          className={
            toggleState === 1
              ? "services__modal active-modal"
              : "services__modal"
          }
        >
          <div className="services__modal-content">
            <FaTimes
              onClick={() => toggleTab(0)}
              className="services__modal-close"
            ></FaTimes>
            <div className="services__modal-services grid">
              <img src={Icon1} alt="..." />
            </div>
          </div>
        </div>

        <ServicesCard onClick={() => toggleTab(2)}>
          <ServicesIcon src={Icon2} alt={Icon2} />
          <ServicesH2>Jan Gierczak</ServicesH2>
          <ServicesP>Zmarł przed moimi narodzinami.</ServicesP>
        </ServicesCard>

        <div
          className={
            toggleState === 2
              ? "services__modal active-modal"
              : "services__modal"
          }
        >
          <div className="services__modal-content">
            <FaTimes
              onClick={() => toggleTab(0)}
              className="services__modal-close"
            ></FaTimes>
            <div className="services__modal-services grid">
              <img src={Icon2} alt="..." />
            </div>
          </div>
        </div>

        <ServicesCard onClick={() => toggleTab(3)}>
          <ServicesIcon src={Icon3} alt={Icon3} />
          <ServicesH2>Emilija Sobień</ServicesH2>
          <ServicesP>Oryginalny podpis z tyłu zdjęcia.</ServicesP>
        </ServicesCard>

        <div
          className={
            toggleState === 3
              ? "services__modal active-modal"
              : "services__modal"
          }
        >
          <div className="services__modal-content">
            <FaTimes
              onClick={() => toggleTab(0)}
              className="services__modal-close"
            ></FaTimes>
            <div className="services__modal-services grid">
              <img src={Icon3} alt="..." />
            </div>
          </div>
        </div>

        <ServicesCard onClick={() => toggleTab(4)}>
          <ServicesIcon src={Icon4} alt={Icon3} />
          <ServicesH2>Moja mama za swoją chrześnicą Zosią Bilską</ServicesH2>
          <ServicesP>Gulinek.</ServicesP>
        </ServicesCard>

        <div
          className={
            toggleState === 4
              ? "services__modal active-modal"
              : "services__modal"
          }
        >
          <div className="services__modal-content">
            <FaTimes
              onClick={() => toggleTab(0)}
              className="services__modal-close"
            ></FaTimes>
            <div className="services__modal-services grid">
              <img src={Icon4} alt="..." />
            </div>
          </div>
        </div>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
