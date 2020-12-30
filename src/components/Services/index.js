import React from "react";
import Icon1 from "../../images/2.jpg";
import Icon2 from "../../images/4.jpg";
import Icon3 from "../../images/6.jpg";
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
          <ServicesP>Prawdopodobnie rodzice mojej babci.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt={Icon2} />
          <ServicesH2>Jan Gierczak</ServicesH2>
          <ServicesP>Zmarł przed moimi urodzinami.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt={Icon3} />
          <ServicesH2>Emilija Sobień</ServicesH2>
          <ServicesP>Oryginalny podpis z tyłu zdjęcia.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
