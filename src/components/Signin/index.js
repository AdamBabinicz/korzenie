import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GiTreeRoots } from "react-icons/gi";
import { CgArrowBottomLeft } from "react-icons/cg";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  GiTreeRootsIcon,
  ContainerH1,
  FamilyH2,
  ContainerWrap,
  ArrowIcon,
  ContainerP,
} from "./SigninElements";
import img1 from "../../images/1.png";
import img from "../../images/4.png";
import img2 from "../../images/6.png";
import { DarkOverlayContext } from "../../context/DarkOverlayContext";
import { PopupContainer } from "../../components/PopupElements";

const SignIn = () => {
  const history = useHistory();
  const { showOverlay } = useContext(DarkOverlayContext);

  const handleFamilyClick = (path) => {
    localStorage.setItem("scrollPosition", window.scrollY.toString());
    history.push(path);
    showOverlay();
  };

  useEffect(() => {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      localStorage.removeItem("scrollPosition");
    }
  }, []);

  return (
    <>
      <Container>
        <FormWrap>
          <GiTreeRootsIcon>
            <GiTreeRoots />
          </GiTreeRootsIcon>
          <Icon to="/">korzenie</Icon>
        </FormWrap>
        <ContainerH1>Praprzodkowie</ContainerH1>
        <p>
          Jaszowice - prywatna wieś szlachecka w drugiej połowie XVI wieku w
          powiecie radomskim województwa sandomierskiego.
        </p>
        <br />
        <img src={img} alt="..." className="wies" />
        <ContainerWrap>
          <FamilyH2 to="/tomasz" onClick={() => handleFamilyClick("/tomasz")}>
            Tomasz&nbsp;Gierczak (Gerczak)
          </FamilyH2>
          <FamilyH2 to="/zofia" onClick={() => handleFamilyClick("/zofia")}>
            Zofia&nbsp;Giel (Gielowska)
          </FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: ?</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2 to="/ambrozy" onClick={() => handleFamilyClick("/ambrozy")}>
            Ambroży&nbsp;Gierczak (Gerczak) ✝1836
          </FamilyH2>
          <FamilyH2
            to="/kunegunda"
            onClick={() => handleFamilyClick("/kunegunda")}
          >
            Kunegunda&nbsp;Kania (Koniak, Karcz)
          </FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 1820 ?</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2 to="/karol" onClick={() => handleFamilyClick("/karol")}>
            u. 1828 Karol&nbsp;Gierczak (Gerczak) ✝1903
          </FamilyH2>
          <FamilyH2 to="/tekla" onClick={() => handleFamilyClick("/tekla")}>
            u. 19.10.1831 Tekla&nbsp;Kozyra (Kozera) ✝1909
          </FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 23.11.1857</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <p>
          Gulinek k. Zakrzewa - prywatna wieś szlachecka Zakrzów, położona była
          w drugiej połowie XVI wieku w powiecie radomskim województwa
          sandomierskiego.
        </p>
        <br />
        <img src={img2} alt="..." className="wies" />
        <ContainerWrap>
          <FamilyH2 to="/pawel" onClick={() => handleFamilyClick("/pawel")}>
            u. 11.01.1867 Paweł&nbsp;Gierczak (Gerczak) ✝29.07.1935
          </FamilyH2>
          <FamilyH2
            to="/katarzyna"
            onClick={() => handleFamilyClick("/katarzyna")}
          >
            Katarzyna&nbsp;Czerwińska
          </FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 1887</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2 to="/jan" onClick={() => handleFamilyClick("/jan")}>
            u. 18.06.1891 Jan&nbsp;Gierczak ✝07.11.1958
          </FamilyH2>
          <FamilyH2
            to="/agnieszka"
            onClick={() => handleFamilyClick("/agnieszka")}
          >
            u. 13.04.1894 Agnieszka Gierczak&nbsp;Baćmaga ✝08.11.1969
          </FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 14.11.1917</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
        <ContainerWrap>
          <FamilyH2 to="/józef" onClick={() => handleFamilyClick("/józef")}>
            u. 23.02.1930 Józef&nbsp;Gierczak ✝08.08.1996
          </FamilyH2>
          <FamilyH2
            to="/marianna"
            onClick={() => handleFamilyClick("/marianna")}
          >
            u. 08.12.1931 Marianna&nbsp;Ofiara ✝26.01.1987
          </FamilyH2>
        </ContainerWrap>
        <ContainerP>ślub: 26.11.1952</ContainerP>
        <ArrowIcon>
          <CgArrowBottomLeft />
        </ArrowIcon>
      </Container>
      <PopupContainer />
    </>
  );
};

export default SignIn;
