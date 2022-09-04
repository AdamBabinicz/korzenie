import React from "react";
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

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Archiwum</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt={Icon1} />
          <ServicesH2>Nieznane osoby</ServicesH2>
          <ServicesP>Prawdopodobnie rodzice mojej babci Heleny.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt={Icon2} />
          <ServicesH2>Jan Gierczak</ServicesH2>
          <ServicesP>Zmarł przed moimi narodzinami.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt={Icon3} />
          <ServicesH2>Emilija Sobień</ServicesH2>
          <ServicesP>Oryginalny podpis z tyłu zdjęcia.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} alt={Icon3} />
          <ServicesH2>Moja mama za swoją chrześnicą Zosią Bilską</ServicesH2>
          <ServicesP>Gulinek.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
