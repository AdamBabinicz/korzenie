import React, { useState } from "react";
import Video from "../../videos/video6.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH2,
  HeroP,
  HeroSpan,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroSpan>
          W Polsce mieszka ok. 3600 osób z&nbsp;nazwiskiem Gierczak (pierwszą
          wzmiankowaną osobą jest Zofia Gierczak c. Jana i&nbsp;Reginy ur.
          24.02.1646&nbsp; we&nbsp;Wzdole Rządowym) i&nbsp;ok. 820 osób
          z&nbsp;nazwiskiem Ofiara (w&nbsp;archiwum po raz pierwszy pojawia się
          Stanisław Ofiara s. Alberta i&nbsp;Zofi ur. w&nbsp;1574
          w&nbsp;Łęczycy).
        </HeroSpan>
        <HeroH2>Nasi protoplaści</HeroH2>
        <HeroP>Im zawdzięczamy życie.</HeroP>
        <HeroBtnWrapper>
          <Button
            to="jozef"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            // exact={true}
            offset={-80}
          >
            Poznaj moich przodków {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
