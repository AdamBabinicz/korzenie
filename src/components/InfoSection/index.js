import { useState } from "react";
import Popup from "../../components/Popup";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  ImgEnd,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  buttonLabel1,
  buttonLabel2,
  img,
  alt,
  primary,
  dark,
  dark2,
  cemetery,
  grave,
  image,
  desc,
  par,
  par1,
  par2,
}) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="#"
                    onClick={() => setButtonPopup1(true)}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                  <Button
                    to="#"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={() => setButtonPopup(true)}
                  >
                    {buttonLabel1}
                  </Button>
                </BtnWrap>
              </TextWrapper>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>{cemetery}</h3>
                <p>{desc}</p>
                <p>{grave}</p>
                <ImgEnd src={image} alt={alt} />
              </Popup>
              <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                <p>{par}</p>
                <p>{par1}</p>
                <p>{par2}</p>
              </Popup>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
