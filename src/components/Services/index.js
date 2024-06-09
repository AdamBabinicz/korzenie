import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Icon1 from "../../images/28.jpg";
import Icon2 from "../../images/30.jpg";
import Icon3 from "../../images/32.jpg";
import Icon4 from "../../images/34.jpg";
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

const serviceData = [
  {
    id: 1,
    icon: Icon1,
    title: "Nieznane osoby",
    description: "Prawdopodobnie rodzice mojej babci Heleny.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Jan Gierczak",
    description: "Zmarł gdy miałem 2 lata.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Emilija Sobień",
    description: "Oryginalny podpis z tyłu zdjęcia.",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Moja mama ze swoją chrześnicą Zosią Bilską",
    description: "Gulinek 1960.",
  },
];

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <ServicesContainer id="services">
      <ServicesH1>Archiwum</ServicesH1>
      <ServicesWrapper>
        {serviceData.map((service) => (
          <React.Fragment key={service.id}>
            <ServicesCard onClick={() => toggleTab(service.id)}>
              <ServicesIcon
                src={service.icon}
                alt={service.title}
                onError={(e) => {
                  e.target.src =
                    "https://a-g.netlify.app/static/media/1.d8271f81fc6664b2ff5155603db41d5a.svg"; // Zastąp placeholder_image_url rzeczywistym adresem do alternatywnego obrazu
                }}
              />
              <ServicesH2>{service.title}</ServicesH2>
              <ServicesP>{service.description}</ServicesP>
            </ServicesCard>

            <div
              className={
                toggleState === service.id
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
                  <img src={service.icon} alt="..." />
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
